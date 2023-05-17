import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  console.log()
  return (
    <li className="notification-list">
      <div className="container">{props.children}</div>
      <GrFormClose className="cross-icon" />
    </li>
  )
}

export default Notification
