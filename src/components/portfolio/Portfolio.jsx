import { useState, useEffect } from "react"
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data"

export default function Portfolio() {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])

  const list = [
    {id: "featured", title: "Featured"},
    {id: "web", title: "Web App"},
    {id: "mobile", title: "Mobile App"},
    {id: "designing", title: "Designing"},
    {id: "content", title: "Content"},
  ]

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio)
        break;
      case "web":
        setData(webPortfolio)
        break;
      case "mobile":
        setData(mobilePortfolio)
        break;
      case "designing":
        setData(designPortfolio)
        break;
      case "content":
        setData(contentPortfolio)
        break;
      default:
        setData(featuredPortfolio)
        break;
    }
  }, [selected])
  

  return (
    <div className='portfolio' id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item=>(
          <div key={item.id}>
            <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
          </div>
        ))}
      </ul>
      <div className="container">
        {data.map(d=>(
        <div className="item">
          <img src={d.img} alt=""/>
          <h3>{d.item}</h3>
        </div>
        ))}
      </div>
    </div>
  )
}
