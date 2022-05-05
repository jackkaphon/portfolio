import "./portfolioList.scss"

export default function PorfolioList({title, active, setSelected, id}) {
  console.log(title)
  return (
    <li className={active ? "porfolioList active" : "porfolioList"} onClick={()=> setSelected(id)}>
        {title}
    </li>
  )
}
