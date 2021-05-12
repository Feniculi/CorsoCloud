import React, { useState } from 'react'
import './styles.scss'
import wikipedia from 'helpers/wikipedia'


export const Chat = () => {
  const [messages, setMessages] = useState( [] )

  const searchCurrent = async () => {
    console.log( await wikipedia.summary( "pino" ) )
  }

  return (
    <div className="chat-container">
      <div className="messages">
        {
          messages.length === 0 ? <h2>Non ci sono messaggi qui...</h2> :
            <div />
        }
      </div>
      <div className="search">
        <div className="form-group field">
          {
            //autoComplete="off"
          }
          <input type="input" autoComplete="off" className="form-field" placeholder="Name" name="name" id='name' required />
          <label htmlFor="name" className="form-label">Search</label>
          <button className="primary" onClick={searchCurrent}>{'>'}</button>
        </div>
      </div>
    </div>
  )
}
