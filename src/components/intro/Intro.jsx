import "./intro.scss"

export default function Intro() {
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>
            Hi there!, I'm
          </h2>
          <h1>
            Jack
          </h1>
          <h3>freelance</h3>
          <a href="#portfolio">
            <img src="assets/down.png" alt=""/>
          </a>
        </div>
      </div>
    </div>
  )
}
