// Write your code here

import './index.css'

const Eachdestination = props => {
  const {eachList} = props
  const {name, imgUrl} = eachList

  return (
    <li className="eachlist">
      <img src={imgUrl} className="eachlistimage" alt={name} />
      <p className="eachlistheading">{name}</p>
    </li>
  )
}

export default Eachdestination
