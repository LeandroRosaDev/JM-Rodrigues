"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        className=" text-black  bottom-8 left-4  fixed"
        onClick={scrollToTop}
      >
        <Image
          src="/assets/icones/9.svg"
          width={50}
          height={50}
          alt="Logotipo"
        />
      </button>
    )
  );
};

export default ScrollToTopButton;
