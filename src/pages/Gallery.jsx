import { useMemo, useState } from "react";

import "./Gallery.css";

import GalleryHero from "../../src/components/Gallery/GalleryHero/GalleryHero";
import GalleryFilter from "../../src/components/Gallery/GalleryFilter/GalleryFilter";
import GallerySearch from "../../src/components/Gallery/GallerySearch/GallerySearch";
import GalleryGrid from "../../src/components/Gallery/GalleryGrid/GalleryGrid";
import Pagination from "../../src/components/Gallery/Pagination/Pagination";
import LightBox from "../../src/components/Gallery/Lightbox/Lightbox";

import certificatesData from "../../src/components/Gallery/certificatesData";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const categories = [
    "All",
    ...new Set(certificatesData.map((item) => item.category)),
  ];

  const filteredCertificates = useMemo(() => {
    return certificatesData.filter((item) => {
      const categoryMatch =
        selectedCategory === "All" || item.category === selectedCategory;

      const searchMatch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, search]);

  const totalPages = Math.ceil(filteredCertificates.length / itemsPerPage);

  const currentCertificates = filteredCertificates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  // const openImage = (certificateId) => {
  //   const index = filteredCertificates.findIndex(
  //     (item) => item.id === certificateId,
  //   );

  //   setCurrentIndex(index);
  // };

  const openImage = (certificateId) => {
    const index = filteredCertificates.findIndex(
      (item) => item.id === certificateId,
    );

    console.log({
      certificateId,
      index,
      item: filteredCertificates[index],
    });

    setCurrentIndex(index);
  };
  const closeImage = () => {
    setCurrentIndex(null);
  };

  return (
    <>
      <GalleryHero />

      <section className="gallery-page">
        <div className="container">
          <div className="gallery-heading">
            <span>OUR CERTIFICATES</span>

            <h2>
              International Certifications
              <br />& Accreditation
            </h2>

            <p>
              Marine Petroleum Lifting is accredited by leading international
              organizations to provide inspection, lifting equipment
              certification, training and non-destructive testing services.
            </p>
          </div>

          <GalleryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={(category) => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
          />

          <GallerySearch
            search={search}
            setSearch={(value) => {
              setSearch(value);
              setCurrentPage(1);
            }}
          />

          {currentCertificates.length > 0 ? (
            <>
              <GalleryGrid
                certificates={currentCertificates}
                openImage={openImage}
              />

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </>
          ) : (
            <div className="empty-gallery">
              <h3>No Certificates Found</h3>

              <p>There are no certificates matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <LightBox
        certificates={filteredCertificates}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        closeImage={closeImage}
      />
    </>
  );
};

export default Gallery;
