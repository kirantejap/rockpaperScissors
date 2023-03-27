import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import './index.css'

const Rules = () => (
  <Popup
    modal
    trigger={
      <button type="button" className="rules-btn">
        RULES
      </button>
    }
  >
    <div>
      <img
        className="modal"
        src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
        alt="rules"
      />
    </div>
  </Popup>
)

export default Rules
