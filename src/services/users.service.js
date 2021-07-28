import AsyncStorage from '@react-native-async-storage/async-storage';


const user = {
    _id: '',
    fullname: '',
    password: '',
    img: '',
    groups: [], // array of groupChats _id's
    contacts: [], // array of {userId, chatId}
    about: 'Hey there, I\'m using ChatUp!'
}

const users = [
    { _id: 'u101', fullname: 'Aviv Zohar', password: '1234', img: '', groups: [], contacts: [{ userId: 'u102', chatId: 'c100' }], about: 'Hey there, I\'m using ChatUp!' },
    { _id: 'u102', fullname: 'Hadar Marom', password: '1234', img: '', groups: [], contacts: [{ userId: 'u101', chatId: 'c100' }], about: 'Hey there, I\'m using ChatUp!' },
]
const KEY = 'user/'
const AUTH = 'auth/'

async function query() {
    try {
        return users;
        return await httpService.get(KEY)
    } catch (err) {
        console.log('err:', err)
    }
}

async function getUserById(id) {
    try {
        return await httpService.get(KEY + id)
    } catch (err) {
        console.log('err:', err)
    }
}

async function deleteUser(id) {
    try {
        return await httpService.delete(KEY + id)
    } catch (err) {
        console.log('Error from userService - ', err);
    }
}

async function saveUser(user) {
    try {
        if (user._id) return await httpService.put(KEY + user._id, user)
        return await httpService.post(KEY, user)
    } catch (err) {
        console.log('err:', err)
    }
}

async function login(userToLogin) {
    try {
        return users.find(u => u.fullname === userToLogin.name && u.password === userToLogin.password)
        // return await httpService.post(AUTH + 'login', user)
    } catch (err) {
        console.log('err:', err)
    }
}

async function logout() {
    try {
        return await httpService.post(AUTH + 'logout')
    } catch (err) {
        console.log('err:', err)
    }
}

const storage = {
    async saveUserToStorage(user) {
        const storeUser = JSON.stringify(user)
        await AsyncStorage.setItem('user', storeUser)
    },
    async loadUserFromStorage() {
        const jsonValue = await AsyncStorage.getItem('user')
        const loggedinUser = jsonValue != null ? JSON.parse(jsonValue) : null;
        return loggedinUser;
    }
}

export const userService = {
    query,
    login,
    storage
}