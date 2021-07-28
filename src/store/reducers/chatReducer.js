const INITIAL_STATE = {
  chats: [],
  currChat: null,
  filterBy: null,
}

export function chatReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CHATS':
      return {
        ...state,
        chats: action.chats
      }
    case 'SET_CHAT':
      return {
        ...state,
        currChat: action.chat
      }
    case 'ADD_CHAT':
      return {
        ...state,
        chats: [...state.chats, action.chat]
      }
    case 'REMOVE_CHAT':
      return {
        ...state,
        chats: state.chats.filter(chat => chat._id !== action.chatId)
      }
    case 'UPDATE_CHAT':
      const { updatedChat } = action
      return {
        ...state,
        chats: state.chats.map(chat => chat._id === updatedChat._id ? updatedChat : chat)
      }
    case 'UPDATE_FILTERBY':
      return {
        ...state,
        filterBy: action.filterBy
      }
    default:
      return state
  }
}