import { userService } from "../../services/users.service"

export function loadUsers() {
  return async dispatch => {
    const users = await userService.query()
    const action = { type: 'SET_USERS', users }
    dispatch(action)
  }
}
export function login(userToLogin) {
  return async dispatch => {
    const user = await userService.login(userToLogin)
    if (!user) return 'Incorrect username or password';
    const action = { type: 'LOAD_USER', user }
    dispatch(action)
  }
}
export function checkLoggedinUser() {
  return async dispatch => {
    const user = await userService.storage.loadUserFromStorage()
    if (!user) return;
    const action = { type: 'LOAD_USER', user }
    dispatch(action)
  }
}
export function logout() {
  return async dispatch => {
    await userService.logout()
    userService.storage.saveUserToStorage(null)
    const action = { type: 'LOAD_USER', user: null }
    dispatch(action)
  }
}
export function signup(user) {
  return async dispatch => {
    const confirm = await userService.saveUser(user)
    if (!confirm) return `Username - '${user.username}' is already taken.`
    userService.storage.saveUserToStorage(user)
    const action = { type: 'LOAD_USER', user }
    dispatch(action)
  }
}
export function updateUser(user) {
  return async dispatch => {
    const updatedUser = await userService.saveUser(user)
    userService.storage.saveUserToStorage(updatedUser)
    const action = { type: 'UPDATE_USER', updatedUser }
    dispatch(action)
    return updatedUser;
  }
}