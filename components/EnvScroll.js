import { motion, Varients, useScroll, scroll } from "framer-motion"

const EnvScroll = () => {

    return(
        <motion.img className="w-9/12 h-9/12" src="http://localhost:3000/env%201.png"
            
            initial={{scale: 1, y:100}}
            whileInView={{
                y: 0,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8
                },
                viewport: {margin: "400px"}
            }
            }
            

        >

        </motion.img>
    );
}
export default EnvScroll;