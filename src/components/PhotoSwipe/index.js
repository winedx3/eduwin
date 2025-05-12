import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

// Import only the main PhotoSwipe styles
import "photoswipe/dist/photoswipe.css";

export { Gallery, Item };

// Optional: Create a styled wrapper component if needed
export const PhotoSwipeGallery = ({ items, ...props }) => (
  <Gallery {...props}>
    {items.map((item, index) => (
      <Item
        key={index}
        original={item.src}
        thumbnail={item.thumbnail || item.src}
        width={item.width || 1200}
        height={item.height || 900}
        title={item.title || `Image ${index + 1}`}
      >
        {({ ref, open }) => (
          <img
            ref={ref}
            onClick={open}
            src={item.thumbnail || item.src}
            alt={item.title || `Image ${index + 1}`}
            className="img-thumbnail"
          />
        )}
      </Item>
    ))}
  </Gallery>
);
