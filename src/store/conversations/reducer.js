import { createReducer } from "../../utils/create-reducer"
import { ADD_CONVERSATION, CHANGE_VALUE } from "./types"

const initialState = [
  { title: "room1", value: "" },
  { title: "test-room2", value: "" },
  { title: "room3", value: "" },
]
export const conversationsReducer = createReducer(initialState, {
  [ADD_CONVERSATION]: (state, { payload }) => [
    ...state,
    { title: payload, value: "" },
  ],
  [CHANGE_VALUE]: (state, { payload }) =>
    state.map((room) =>
      room.title === payload.id ? { ...room, value: payload.value } : room,
    ),
})
// @TODO реагировать удаления комнаты
