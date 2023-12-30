// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isDisplaying: false}

  toggleAnswer = () => {
    this.setState(prevState => ({
      isDisplaying: !prevState.isDisplaying,
    }))
  }

  render() {
    const {isDisplaying} = this.state
    const {eachList} = this.props
    const {questionText, answerText} = eachList
    const plusImg =
      'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const minusImg =
      'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

    const plusMinusImg = isDisplaying ? minusImg : plusImg
    const altImg = isDisplaying ? 'minus' : 'plus'
    return (
      <li className="item-card">
        <div className="faqs-question-card">
          <h1 className="faqs-question">{questionText}</h1>
          <button
            className="showHidebtn"
            onClick={this.toggleAnswer}
            type="button"
          >
            <img className="showhidebtn-img" src={plusMinusImg} alt={altImg} />
          </button>
        </div>
        {isDisplaying && (
          <div className="faqs-answer-card">
            <p className="faqs-answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
