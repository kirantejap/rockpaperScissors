import {Component} from 'react'

import Header from './Header'
import Rules from './Rules'
import ResultView from './ResultView'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    show: true,
    newArray: [choicesList[0], choicesList[1]],
    text: 'YOU WON',
  }

  getResult = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }

    if (item1.id === 'PAPER') {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  restartGame = () => this.setState({show: true})

  checkResult = id => {
    const {score} = this.state
    const OppChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const playerChoice = choicesList.filter(each => each.id === id)

    const result = this.getResult(playerChoice[0], OppChoice)

    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      show: false,
      score: newScore,
      newArray: [playerChoice[0], OppChoice],
      text: result,
    })
  }

  render() {
    const {score, show, newArray, text} = this.state
    console.log(show)

    return (
      <div className="bg-container">
        <Header score={score} />
        <ResultView
          choicesList={choicesList}
          show={show}
          newArray={newArray}
          checkResult={this.checkResult}
          text={text}
          restartGame={this.restartGame}
        />
        <Rules />
      </div>
    )
  }
}

export default App
