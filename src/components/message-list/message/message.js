import classNames from "classnames"
import { format } from "date-fns"
import React, { Component } from "react"
import styles from "./message.module.css"

export class Message extends Component {
  render() {
    const {
      id,
      index,
      deleteMessage,
      message: { message, author, createdTs },
    } = this.props

    return (
      <div
        className={classNames(styles.message, {
          [styles.currentMessage]: author === "User",
        })}
      >
        <p>{author}</p>
        <h3>{message}</h3>
        <p>{format(new Date(createdTs), "HH:mm:ss")}</p>
        <button
          id={index}
          data={{ action: "delete" }}
          onClick={() => {
            console.log(id, message, createdTs)
            deleteMessage({ id, message, createdTs })
          }}
        >
          DELETE
        </button>
      </div>
    )
  }
}
