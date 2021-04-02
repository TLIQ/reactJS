import React, { Component } from "react"

import { Message } from "../message"

export class MessageList extends Component {
  state = {
    messages: [{ author: "Bot", value: "Чем могу помочь?" }],
    input: ''
  }

  sendMessage = () => {
    const { messages } = this.state

    this.setState({
      messages: [...messages, { author: "User", value: "Нормально" }],
    })
  }

  componentDidUpdate() {
    console.log(this.state);
    if (this.state.messages[this.state.messages.length - 1].author === 'User') {
      setTimeout(() =>
              this.setState({
                  messages: [ ...this.state.messages, { author: 'Bot', value: 'Ответ Бота!'} ] }),
          1000);
      }
  }

  handleKeyUp = (event, message) => {
    if (event.keyCode === 13) { 
        this.sendMessage(message)
    }
  };
  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };
  handleClick = (message) => {
    this.sendMessage(message)
  };  

  render() {
    const { messages } = this.state

    return (
      <div>
        <input
                onChange={ this.handleChange }
                value={ this.state.value }
                onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
            />
        <button onClick={ () => this.handleClick(this.state.input) }>Отправить сообщение</button>

        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
    )
  }
}
