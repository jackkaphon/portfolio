import "./topbar.scss"
import {Mail, Person} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+8562054800704</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>jackwchh@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
