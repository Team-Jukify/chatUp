import { httpService } from './http.service.js'

export const chatService = {
    chats, 
    msg,
    query
}

const msg = {
    // _id: '',
    sendBy: '', // _id
    type: '', // img, video, txt, audio, file, contact. location.
    att: [],
    seenBy: [], // array of users _id's
    createdAt: Date.now(),
}

const chats = [
    { _id: 'c100', sendBy: '', type: 'txt', att: 'Hello World!', seenBy: [], createdAt: Date.now() },
    { _id: 'c101', sendBy: '', type: 'txt', att: 'Hello Aviv!', seenBy: [], createdAt: Date.now() },
    { _id: 'c102', sendBy: '', type: 'txt', att: 'Hello Hadar!', seenBy: [], createdAt: Date.now() },
]

async function query() {
    try {
        return chats;
        return await httpService.get(KEY)
    } catch (err) {
        console.log('err:', err)
    }
}

async function getChatById(id) {
    try {
        return await httpService.get(KEY + id)
    } catch (err) {
        console.log('err:', err)
    }
}

async function deleteChat(id) {
    try {
        return await httpService.delete(KEY + id)
    } catch (err) {
        console.log('Error from chatService - ', err);
    }
}

async function saveChat(chat) {
    try {
        if (chat._id) return await httpService.put(KEY + chat._id, chat)
        return await httpService.post(KEY, chat)
    } catch (err) {
        console.log('err:', err)
    }
}

function getNewChat() {
    return {
        // _id: '',
        users: [], // array of _id's
        msgs: [], // object of msg {}
        background: {}, // object of {color, img}
        name: '',
        isGroup: false,
        isPined: false,
        isMuted: false,
        info: { groupImg: '', desc: '' },
        created: { user: '', time: Date.now() }, // createdBy - user._id
    }
}
