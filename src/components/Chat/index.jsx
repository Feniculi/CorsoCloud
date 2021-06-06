import React, { useEffect, useState } from 'react'
import './styles.scss'
import wikipedia from 'helpers/wikipedia'
import { Card } from 'components/Card'
import { firestore, functions } from 'helpers/firebaseProvider'

export const Chat = (props) => {
  const [messages, setMessages] = useState([])
  const [search, setSearch] = useState("")

  const searchCurrent = async () => {
    const toSearch = search
    setMessages(prev => [...prev, { text: search, personal: true }])
    setSearch("")
    try {

      let echo = functions.httpsCallable('echo');

      let risultato = await echo({ text: toSearch })
      console.log('risultato cloud', risultato.data.text)
      /*const res = await wikipedia.summary( toSearch )
      console.log( 'API_RESULT', res )
      const risultatoApi = {
        title: res.displaytitle || res.title,
        text: res.extract,
        imgUrl: res?.thumbnail?.source || res?.originalImage?.source,
        actionUrl: res?.content_urls?.desktop?.page,
        response: res
      }
      setMessages( prev => [...prev, risultatoApi] )
      const docRef = await firestore.collection( "messages" ).add( {
        query: toSearch,
        risultatoApi
      } )
      console.log( "Document written with ID: ", docRef.id );*/
    } catch (e) {
      console.log(e.message, toSearch)
    }
  }

  const getMessages = async () => {
    /*let docs = [...( await firestore.collection( "messages" ).get() )]
    docs = docs.map( doc => ( { id: doc.id, ...doc.data() } ) )
    console.log( docs )*/
    const newMessages = []
    firestore.collection("messages").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        newMessages.push({ text: doc.data().query, personal: true })
        newMessages.push(doc.data().risultatoApi)
      })
      setMessages(newMessages)
    })
    //firestore.collection( "messages" ).doc("Q3rIkAD4wrwIUnqbECF5")
    /*firestore.doc( `messages/pino` ).set( {
      query: "documento con id predefinito"
    } )*/
  }

  useEffect(() => {
    const chatHistory = document.getElementById("chat-history");
    if (chatHistory)
      chatHistory.scrollTop = chatHistory.scrollHeight;
  }, [messages])

  useEffect(() => {
    getMessages()
    /*const unsubscribe = firestore.collection( "messages" ).where( "query", "==", "garibaldi" )
      .onSnapshot( ( querySnapshot ) => {
        querySnapshot.forEach( ( doc ) => {
          console.log( `Documento ${doc.id} ha cercato garibaldi` )
        } );
      } );

    return () => {
      unsubscribe()
    }*/
  }, [])

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
                messages.map((message, idx) =>
                  <div key={`messagio_${idx}`} className={`message ${message.personal ? 'message-personal' : ''}`}>
                    <Card
                      title={message.title}
                      text={message.text}
                      imgUrl={message.imgUrl}
                      actionUrl={message.actionUrl}
                    />
                  </div>)
            }
          </div>
        </div>
        <div className="message-box">
          <input type="text" className="message-input"
            placeholder="Inserisci ricerca..."
            maxLength={50}
            value={search}
            onChange={e => setSearch(e.target.value)}
            autoComplete="off"
            onKeyDown={evt => {
              if (evt.key === "Enter") {
                searchCurrent()
              }
            }}
          />
          <button type="submit" className="message-submit"
            onClick={searchCurrent}
          >Cerca</button>
        </div>

      </div>
      <div className="bg"></div>
    </>
  )
}
