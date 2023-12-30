// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    //  console.log(faqsList)
    return (
      <div className="bg-card">
        <div className="faqs-card">
          <h1 className="faqs-heading">FAQs</h1>
          <ul className="faqs-item-card">
            {faqsList.map(eachList => (
              <FaqItem eachList={eachList} key={eachList.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
