import {
  MESSAGE_SEND,
  GET_MESSAGE_ERROR,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_PENDING,
  MESSAGE_DELETE,
  MESSAGE_DELETE_BY_KEYS,
} from "./types"

const initialState = {
  messages: {},
  messagesPending: false,
  error: null,
}
// @TODO переделать с createReducer
export const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MESSAGE_SEND:
      return {
        ...state,
        messages: {
          ...state.messages,
          [payload.roomId]: [
            ...(state.messages[payload.roomId] || []),
            {
              author: payload.author,
              message: payload.message,
              createdTs: new Date(),
            },
          ],
        },
      }

    case MESSAGE_DELETE:
      return {
        ...state,
        messages: Object.keys(state.messages).reduce((obj, key) => {
          if (key !== payload.id) {
            obj[key] = state.messages[key]
          }
          return obj
        }, {}),
      }

    case MESSAGE_DELETE_BY_KEYS:
      return {
        ...state,
        messages: {
          ...state.messages,
          [payload.id]: state.messages[payload.id].filter(
            (msg) =>
              !(
                msg.message === payload.message &&
                msg.createdTs === payload.createdTs
              ),
          ),
        },
      }

    case GET_MESSAGE_PENDING:
      return {
        ...state,
        messagesPending: true,
      }
    case GET_MESSAGE_SUCCESS:
      return {
        ...state,
        messagesPending: false,
        messages: {
          ...state.messages,
          [payload.roomId]: payload.messages,
        },
      }
    case GET_MESSAGE_ERROR:
      return {
        ...state,
        messagesPending: false,
        error: payload,
      }
    default:
      return state
  }
}

// @TODO реагировать удаления комнаты

// @TODO * сделть функцию createReducer
// const reducer = createReducer(initialState, {
//   [MESSAGE_SEND]: (state, action) => ({})
// })
