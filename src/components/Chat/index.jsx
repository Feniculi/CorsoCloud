import React, { useState } from 'react'
import './styles.scss'
import wiki from 'wikipedia'

( async () => {
  try {
    const summary = await wiki.summary( 'Batman' );
    console.log( summary );
    //Response of type @wikiSummary - contains the intro and the main image
  } catch ( error ) {
    console.log( error );
    //=> Typeof wikiError
  }
} )();

export const Chat = () => {
  const [messages, setMessages] = useState( [] )

  return (
    <div className="chat-container">
      <div className="messages">
        {
          messages.length === 0 ? <h2>Non ci sono messaggi qui...</h2> :
            <div />
        }
      </div>
      <div className="search">
        <div class="form-group field">
          {
            //autoComplete="off"
          }
          <input type="input" autoComplete="off" class="form-field" placeholder="Name" name="name" id='name' required />
          <label for="name" class="form-label">Search</label>
          <button className="primary">{'>'}</button>
        </div>
      </div>
    </div>
  )
}
