import { httpService } from './http.service.js'

export const chatService = {
    chats
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
    { _id: 'c100', sendBy: '', type: 'txt', att: 'Hello World!', seenBy: [], createdAt },
    { _id: 'c101', sendBy: '', type: 'txt', att: 'Hello Aviv!', seenBy: [], createdAt },
    { _id: 'c102', sendBy: '', type: 'txt', att: 'Hello Hadar!', seenBy: [], createdAt },
]

async function query() {
    return await httpService
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