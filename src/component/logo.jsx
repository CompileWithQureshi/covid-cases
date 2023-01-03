import { motion } from "framer-motion";
import { useState } from "react";
import "../App.css";

export const Logo = () => {
  const [rotate, setRotate] = useState(false);
  return (
    <div>
      <motion.div
        className="logo-animate"
        animate={{ rotate: rotate ? 0 : 360 }}
        transition={{ type: "tween", duration: 3 }}
        whileDrag={{ x: 50, y: 50 }}
        onClick={() => setRotate(!rotate)}
      >
        {/* <h5 className="logo-name">Covid 19</h5> */}
        <span>Covid 19</span>
      </motion.div>
    </div>
  );
};
