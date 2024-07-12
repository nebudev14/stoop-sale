import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";

const EnvScroll = () => {
  const [currentImage, setCurrentImage] = useState("env 3.png");
  const { scrollY } = useScroll();

  const imageIndex = useTransform(scrollY, [0, 175, 350], [0, 1, 2]);

  useEffect(() => {
    const currState = imageIndex.onChange(latest => {
      if (latest < 0.5) {
        setCurrentImage("env 3.png");
      } else if (latest < 1.5) {
        setCurrentImage("env 2.png");
      } else {
        setCurrentImage("env 1.png");
      }
    });

    return () => currState();
  }, [imageIndex]);

  return (
    <>
      <motion.img
        className="w-9/12 h-9/12 md:w-full md:h-full md:mt-72"
        src={`${process.env.NEXT_PUBLIC_URL}/${currentImage}`}
        animate={{ y: -10, rotate: 0 }}
        initial={{ scale: 1, y: 20, rotate: 45 }}
        whileInView={{
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
            delay: 0.5
          },
        }}
        viewport={{ margin: "400px" }}
      />
    </>
  );
}

export default EnvScroll;