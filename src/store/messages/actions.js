import {
  MESSAGE_SEND,
  GET_MESSAGE_ERROR,
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_PENDING,
  MESSAGE_DELETE,
  MESSAGE_DELETE_BY_KEYS,
} from "./types"

// params {author, message, roomId}
export const sendMessage = (params) => {
  return {
    type: MESSAGE_SEND,
    payload: params,
  }
}

export const getMessagesById = (roomId) => async (
  dispatch,
  getState,
  request,
) => {
  dispatch({ type: GET_MESSAGE_PENDING })
  try {
    const { data } = await request.get(`/messages/${roomId}`)
    dispatch({ type: GET_MESSAGE_SUCCESS, payload: data })
  } catch {
    dispatch({ type: GET_MESSAGE_ERROR })
  }
}

export const deleteMessage = (params) => {
  return {
    type: MESSAGE_DELETE_BY_KEYS,
    payload: params,
  }
}
