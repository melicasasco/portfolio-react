import './PortfolioList.scss';
import { motion } from "framer-motion"

export default function PortfolioList({title, active, setSelected, id}) {
  

    return (
        <motion.li 
        whileHover={{scale: 1.2}}
        whileTap={{scale: 0.9}}
        
        className={active ? "portfolioList active" : "porfolioList"} onClick={()=> setSelected(id)}>
             
             {title}
        </motion.li>
    )
}
 