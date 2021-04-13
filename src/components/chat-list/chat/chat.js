import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
} from "@material-ui/core"
import { AccountCircle } from "@material-ui/icons"
import React, { Component } from "react"

import styles from "./chat.module.css"

const StyledListItem = withStyles(() => ({
  root: {
    "&.Mui-selected": {
      backgroundColor: "#2b5278",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#2b5278",
    },
  },
}))(ListItem)

export class Chat extends Component {
  render() {
    const { selected, chat, lastMessage } = this.props
    const { title } = chat

    return (
      <StyledListItem button={true} selected={selected}>
        <ListItemIcon>
          <AccountCircle fontSize="large" className={styles.icon} />
        </ListItemIcon>
        <div className={styles.description}>
          <ListItemText className={styles.text} primary={title} />
          {lastMessage ? (
            <>
              <ListItemText
                className={styles.text}
                primary={`${lastMessage.author}: ${lastMessage.message}`}
              />
              <ListItemText className={styles.text} primary="12:30" />
            </>
          ) : (
            <ListItemText className={styles.text} primary="Нет сообщений" />
          )}
        </div>
      </StyledListItem>
    )
  }
}
