// import { Test } from "@components/app"
import React from "react"
import ReactDOM from "react-dom"
// import styles from "./index.module.css"

import "./index.css"

const messages = ["Hello"]

let value = 'new massage'
const sendMassege = () => {
  messages.push(value)
  render()
}

const Messages = () => {
  return (
    <div>
      <h1>messages</h1>
      {messages.map((message) => (
        <p key={messages}>{message}</p>
      ))}
      <button onClick={sendMassege}>Отправить</button>
    </div>
  )
}

const render = () => {
  ReactDOM.render(
    <>
      <Messages title="title" />
    </>,
    document.querySelector("#root"),
  )
}

render()