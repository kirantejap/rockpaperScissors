import './index.css'

const Header = props => {
  const {score} = props

  return (
    <div className="top-container">
      <div className="name-container">
        <h1 className="head">
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </h1>
      </div>

      <div className="score-container">
        <p className="score-head">Score</p>
        <p className="score">{score}</p>
      </div>
    </div>
  )
}
export default Header
