import './PortfolioList.scss';

export default function PortfolioList({title, active, setSelected, id}) {
  

    return (
        <li className={active ? "portfolioList active" : "porfolioList"} onClick={()=> setSelected(id)}>
             
             {title}
        </li>
    )
}
 