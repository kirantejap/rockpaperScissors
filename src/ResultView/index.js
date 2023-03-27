import './index.css'

const ResultView = props => {
  const {choicesList, show, newArray, checkResult, text, restartGame} = props

  const showGame = () => (
    <>
      {show && (
        <div className="choices-container">
          <button
            data-testid="rockButton"
            type="button"
            className="choice-btn"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <img
              className="choice-image"
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
            />
          </button>

          <button
            data-testid="paperButton"
            type="button"
            className="choice-btn"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <img
              className="choice-image"
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
            />
          </button>

          <button
            data-testid="scissorsButton"
            type="button"
            className="choice-btn"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <img
              className="choice-image"
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
            />
          </button>
        </div>
      )}

      {!show && (
        <>
          <div className="result-container">
            <div className="contestant-container">
              <h1>YOU</h1>
              <img
                className="choice-image"
                src={newArray[0].imageUrl}
                alt="your choice"
              />
            </div>

            <div className="contestant-container">
              <h1>OPPONENT</h1>
              <img
                className="choice-image"
                src={newArray[1].imageUrl}
                alt="opponent choice"
              />
            </div>
          </div>

          <div className="playAgain">
            <p>{text}</p>
            <button type="button" className="play-again" onClick={restartGame}>
              PLAY AGAIN
            </button>
          </div>
        </>
      )}
    </>
  )
  return showGame()
}

export default ResultView
