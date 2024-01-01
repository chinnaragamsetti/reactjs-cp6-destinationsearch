// Write your code here

import './index.css'
import {Component} from 'react'
import Eachdestination from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangesearchinput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachlist =>
      eachlist.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="maincontainer">
        <h1 className="heading">Destination Search</h1>
        <div className="inputcontainer">
          <input
            type="search"
            className="inputbar"
            onChange={this.onChangesearchinput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="searchicon"
          />
        </div>
        <ul className="itemslist">
          {searchResults.map(eachList => (
            <Eachdestination eachList={eachList} key={eachList.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
