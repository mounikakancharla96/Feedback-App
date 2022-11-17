import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isEmojiClicked: false,
  }

  onClickEmoji = () => this.setState({isEmojiClicked: true})

  renderReviewQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-container">
        <h1 className="feedback-question">
          How Satisfied are you with our customer support performance?
        </h1>
        <ul className="list-items">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="emoji-btn"
                onClick={this.onClickEmoji}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />
                <snap className="emoji-name">{emoji.name}</snap>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouContainer = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="feedback">Thank you!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div className="app-container">
        <div className="emojis-container">
          {isEmojiClicked
            ? this.renderThankYouContainer()
            : this.renderReviewQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
