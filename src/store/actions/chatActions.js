import chatService from '../../services/chats.service.js'
export function loadChats(filterBy) {
  return async dispatch => {
    const chats = await chatService.query(filterBy)
    const action = { type: 'SET_CHATS', chats }
    dispatch(action)
  }
}
export function getChatById(chatId) {
  return async dispatch => {
    const chat = await chatService.getChatById(chatId)
    await dispatch({ type: 'SET_CHATS', chat })
    return chat
  }
}
export function saveChat(chat) {
  return async dispatch => {
    const updatedChat = await chatService.saveChat(chat)
    if (!chat._id) dispatch({ type: 'ADD_CHATS', chat: updatedChat })
    else dispatch({ type: 'UPDATE_CHATS', updatedChat })
    return updatedChat;
  }
}
export function setCurrChat(chatId) {
  return async dispatch => {
    var chat = null
    if (chatId) chat = await chatService.getChatById(chatId)
    dispatch({ type: 'SET_CHATS', chat })
  }
}
export function removeChat(chatId) {
  return async dispatch => {
    const res = await chatService.deleteChat(chatId)
    if (!res) return
    dispatch({ type: 'REMOVE_CHATS', chatId })
    return res.msg;
  }
}
export function updateFilterBy(filterBy) {
  return async dispatch => {
    await dispatch({ type: 'UPDATE_FILTERBY', filterBy })
  }
}