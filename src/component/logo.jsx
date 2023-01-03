import { motion } from "framer-motion";
import "../App.css";

export const Logo = () => {
  return (
    <div className="logo-animate">
      <h5 className="logo-name">Covid 19</h5>
      <motion.div animate={{ y: -100 }}></motion.div>
    </div>
  );
};
