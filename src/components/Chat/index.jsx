import React, { useEffect, useState } from 'react'
import './styles.scss'
import wikipedia from 'helpers/wikipedia'
import { Card } from 'components/Card'

export const Chat = () => {
  const [messages, setMessages] = useState( [] )
  const [search, setSearch] = useState( "" )

  const searchCurrent = async () => {
    const toSearch = search
    setMessages( prev => [...prev, { text: search, personal: true }] )
    setSearch( "" )
    try {
      const res = await wikipedia.summary( toSearch )
      setMessages( prev => [...prev, {
        title: res.displaytitle || res.title,
        text: res.extract,
        imgUrl: res?.thumbnail?.source || res?.originalImage?.source,
        actionUrl: res?.content_urls?.desktop?.page,
        response: res
      }] )
    } catch ( e ) {
      console.log( e.message, toSearch )
    }
  }

  useEffect( () => {
    const chatHistory = document.getElementById( "chat-history" );
    if ( chatHistory )
      chatHistory.scrollTop = chatHistory.scrollHeight;
  }, [messages] )

  return (
    <>
      <div className="chat">
        <div className="title">
          <h1>Wikipedia</h1>
          <h2>BOT</h2>
          <figure className="avatar">
            <img src="https://it.wikipedia.org/static/images/project-logos/itwiki.png" alt="wikipedialogo" /></figure>
        </div>
        <div className="messages">
          <div className="messages-content" id="chat-history">
            {
              messages.length === 0 ? <h3>Non ci sono messaggi qui...</h3> :
                messages.map( ( message, idx ) =>
                  <div key={idx} className={`message ${message.personal ? 'message-personal' : ''}`}>
                    <Card key={idx}
                      title={message.title}
                      text={message.text}
                      imgUrl={message.imgUrl}
                      actionUrl={message.actionUrl}
                    />
                  </div> )
            }
          </div>
        </div>
        <div className="message-box">
          <input type="text" className="message-input" placeholder="Inserisci ricerca..."
            maxLength={50}
            value={search}
            onChange={e => setSearch( e.target.value )}
            autoComplete="off"
            onKeyDown={evt => {
              if ( evt.key === "Enter" ) {
                searchCurrent()
              }
            }}
          />
          <button type="submit" className="message-submit" onClick={searchCurrent}>Cerca</button>
        </div>

      </div>
      <div className="bg"></div>
    </>
  )
}
