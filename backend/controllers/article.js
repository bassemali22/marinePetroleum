const {
  Article,
  validateCreateArticle,
  validateUpdateArticle,
} = require("../models/article");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

/*=========================================
  Create Article
=========================================*/

const createArticle = asyncHandler(async (req, res) => {
  const { error } = validateCreateArticle(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  const {
    title,
    description,
    content,
    image,
    category,
    tags,
    seoTitle,
    seoDescription,
    featured,
    isPublished,
  } = req.body;

  const exists = await Article.findOne({
    title: title.trim(),
  });

  if (exists) {
    return res.status(409).json({
      success: false,
      message: "Article already exists",
    });
  }

  const article = await Article.create({
    title: title.trim(),
    description: description.trim(),
    content: content.trim(),
    image,
    category,
    tags,
    seoTitle,
    seoDescription,
    featured,
    isPublished,
    author: req.user.id,
  });

  await article.populate("author", "username email avatar");

  res.status(201).json({
    success: true,
    message: "Article created successfully",
    data: article,
  });
});

/*=========================================
  Update Article
=========================================*/

const updateArticle = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid article id",
    });
  }

  const { error } = validateUpdateArticle(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message,
    });
  }

  const article = await Article.findById(req.params.id);

  if (!article) {
    return res.status(404).json({
      success: false,
      message: "Article not found",
    });
  }

  const updates = {};

  if (req.body.title !== undefined) updates.title = req.body.title.trim();

  if (req.body.description !== undefined)
    updates.description = req.body.description.trim();

  if (req.body.content !== undefined) updates.content = req.body.content.trim();

  if (req.body.image !== undefined) updates.image = req.body.image;

  if (req.body.category !== undefined) updates.category = req.body.category;

  if (req.body.tags !== undefined) updates.tags = req.body.tags;

  if (req.body.featured !== undefined) updates.featured = req.body.featured;

  if (req.body.isPublished !== undefined)
    updates.isPublished = req.body.isPublished;

  if (req.body.seoTitle !== undefined) updates.seoTitle = req.body.seoTitle;

  if (req.body.seoDescription !== undefined)
    updates.seoDescription = req.body.seoDescription;

  if (updates.title) {
    const exists = await Article.findOne({
      title: updates.title,
      _id: { $ne: req.params.id },
    });

    if (exists) {
      return res.status(409).json({
        success: false,
        message: "Another article already uses this title",
      });
    }
  }

  const updatedArticle = await Article.findByIdAndUpdate(
    req.params.id,
    updates,
    {
      new: true,
      runValidators: true,
    },
  ).populate("author", "username email avatar");

  res.status(200).json({
    success: true,
    message: "Article updated successfully",
    data: updatedArticle,
  });
});

/*=========================================
  Get All Articles
=========================================*/

const getArticles = asyncHandler(async (req, res) => {
  const page = Math.max(parseInt(req.query.page) || 1, 1);
  const limit = Math.min(parseInt(req.query.limit) || 10, 100);

  const skip = (page - 1) * limit;
  const article = await Article.find();
  if (article.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No articles found",
    });
  }
  const query = {};

  /*====================
      Search
  ====================*/

  if (req.query.search) {
    query.$or = [
      {
        title: {
          $regex: req.query.search,
          $options: "i",
        },
      },
      {
        description: {
          $regex: req.query.search,
          $options: "i",
        },
      },
      {
        content: {
          $regex: req.query.search,
          $options: "i",
        },
      },
    ];
  }

  /*====================
      Category
  ====================*/

  if (req.query.category) {
    query.category = req.query.category;
  }

  /*====================
      Featured
  ====================*/

  if (req.query.featured !== undefined) {
    query.featured = req.query.featured === "true";
  }

  /*====================
      Published
  ====================*/

  if (req.query.isPublished !== undefined) {
    query.isPublished = req.query.isPublished === "true";
  }

  /*====================
      Sorting
  ====================*/

  let sort = {
    createdAt: -1,
  };

  switch (req.query.sort) {
    case "oldest":
      sort = { createdAt: 1 };
      break;

    case "views":
      sort = { views: -1 };
      break;

    case "title":
      sort = { title: 1 };
      break;

    case "updated":
      sort = { updatedAt: -1 };
      break;
  }

  const articles = await Article.find(query)
    .populate("author", "username avatar")
    .sort(sort)
    .skip(skip)
    .limit(limit)
    .lean();

  const total = await Article.countDocuments(query);

  res.status(200).json({
    success: true,

    pagination: {
      total,
      page,
      pages: Math.ceil(total / limit),
      limit,
      hasNextPage: page * limit < total,
      hasPrevPage: page > 1,
    },

    data: articles,
  });
});

/*=========================================
  Get Article By Id
=========================================*/

const getArticle = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid article id",
    });
  }

  const article = await Article.findById(req.params.id).populate(
    "author",
    "username email avatar",
  );

  if (!article) {
    return res.status(404).json({
      success: false,
      message: "Article not found",
    });
  }

  res.status(200).json({
    success: true,
    data: article,
  });
});

/*=========================================
  Increase Views
=========================================*/

const increaseViews = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid article id",
    });
  }

  const article = await Article.findByIdAndUpdate(
    req.params.id,
    {
      $inc: {
        views: 1,
      },
    },
    {
      new: true,
    },
  );

  if (!article) {
    return res.status(404).json({
      success: false,
      message: "Article not found",
    });
  }

  res.status(200).json({
    success: true,
    views: article.views,
  });
});

/*=========================================
  Delete Article
=========================================*/

const deleteArticle = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid article id",
    });
  }

  const article = await Article.findById(req.params.id);

  if (!article) {
    return res.status(404).json({
      success: false,
      message: "Article not found",
    });
  }

  await article.deleteOne();

  res.status(200).json({
    success: true,
    message: "Article deleted successfully",
  });
});

/*=========================================
  Toggle Publish
=========================================*/

const togglePublish = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid article id",
    });
  }

  const article = await Article.findById(req.params.id);

  if (!article) {
    return res.status(404).json({
      success: false,
      message: "Article not found",
    });
  }

  article.isPublished = !article.isPublished;

  await article.save();

  res.status(200).json({
    success: true,
    message: article.isPublished
      ? "Article published successfully"
      : "Article unpublished successfully",
    data: article,
  });
});

/*=========================================
  Toggle Featured
=========================================*/

const toggleFeatured = asyncHandler(async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid article id",
    });
  }

  const article = await Article.findById(req.params.id);

  if (!article) {
    return res.status(404).json({
      success: false,
      message: "Article not found",
    });
  }

  article.featured = !article.featured;

  await article.save();

  res.status(200).json({
    success: true,
    message: article.featured
      ? "Article marked as featured"
      : "Article removed from featured",
    data: article,
  });
});



const toggleLike = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid article id",
    });
  }

  const article = await Article.findById(id);

  if (!article) {
    return res.status(404).json({
      success: false,
      message: "Article not found",
    });
  }

  const alreadyLiked = article.likedBy.some(
    (user) => user.toString() === userId,
  );

  if (alreadyLiked) {
    article.likes -= 1;

    article.likedBy = article.likedBy.filter(
      (user) => user.toString() !== userId,
    );

    await article.save();

    return res.status(200).json({
      success: true,
      liked: false,
      likes: article.likes,
      message: "Like removed",
    });
  }

  article.likes += 1;
  article.likedBy.push(userId);

  await article.save();

  res.status(200).json({
    success: true,
    liked: true,
    likes: article.likes,
    message: "Article liked",
  });
});



module.exports = {
  createArticle,
  getArticles,
  getArticle,
  updateArticle,
  deleteArticle,
  increaseViews,
  togglePublish,
  toggleFeatured,
};
