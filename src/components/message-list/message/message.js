import classNames from "classnames"
import { format } from "date-fns"
import React, { Component } from "react"
import styles from "./message.module.css"

export class Message extends Component {
  render() {
    const {
      message: { message, author, crearedTs },
    } = this.props

    return (
      <div
        className={classNames(styles.message, {
          [styles.currentMessage]: author === "User",
        })}
      >
        <p>{author}</p>
        <h3>{message}</h3>
        <p>{format(crearedTs, "HH:mm")}</p>
      </div>
    )
  }
}
