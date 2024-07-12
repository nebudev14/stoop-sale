import { motion } from "framer-motion";
import React from "react";

const EnvScroll = () => {

    return(
       <>
        <motion.img className="w-9/12 h-9/12" src={`http://localhost:3000/env%203.png`}
            animate={{y: -10, rotate: 0}}
            initial={{scale: 1, y:20, rotate:45}}
            whileScroll={{y:20}}
            whileInView={{
                y: 0,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8,
                    delay: 0.5
                },
                viewport: {margin: "400px"}
            }
            }
        >
        </motion.img>
        </>
        

        
    );
}
export default EnvScroll;