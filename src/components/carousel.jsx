import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselWithControls(){
  return (
    <>
      <TECarousel showControls ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://rnd.iiti.ac.in/files_upload/slider/136dd9eff14a37a1b8e69623bc059902.jpg"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://rnd.iiti.ac.in/files_upload/slider/2b3f6da03863f0d1cd93ed887b91633a.jpg"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <img
              src="https://rnd.iiti.ac.in/files_upload/slider/e8296167d96bd65f120480f6e18fad18.jpg"
              className="block w-full"
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}