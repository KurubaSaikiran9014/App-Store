// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, changeTab, isActive} = props
  const {displayText, tabId} = tabDetails
  const selectedTab = isActive ? 'selected' : ''
  const changed = () => {
    changeTab(tabId)
  }
  return (
    <li className={`tab-item ${selectedTab}`}>
      <button className="tab-cont" type="button" onClick={changed}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
