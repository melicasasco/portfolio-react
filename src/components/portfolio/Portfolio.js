import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import {

  webPortfolio,
  uxPortfolio,
  reactPortfolio,
  reactNativePortfolio,
  jsPortfolio,
  
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "HTML/CSS",
    },
    {
      id: "ux",
      title: "UX/UI",
    },
    {
      id: "js",
      title: "JAVASCRIPT",
    },

    {
      id: "react",
      title: "REACT JS",
    },

    {
      id: "reactnative",
      title: "REACT NATIVE",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      case "ux":
        setData(uxPortfolio);
        break;
        case "js":
          setData(jsPortfolio);
          break;
          case "react":
            setData(reactPortfolio);
            break;
            case "reactnative":
              setData(reactNativePortfolio);
              break;

      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} target='_blank'>
          <div className="item">
           
              <img
                src={d.img}
                alt=""
              />
        
            <h3>{d.title}</h3>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}