import { httpService } from './http.service.js'

export const chatService = {
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
    {
        _id: 'c101',
        msgs: [], // object of msg {}
        background: { color: 'white', img: '' }, // object of {color, img}
        isPined: false,
        isMuted: false,
        isGroup: true,
        groupAtt: {
            users: [], // array of _id's
            created: { user: 'u101', time: Date.now() }, // createdBy - user._id
            info: { img: '', desc: 'what doesnt kill you makes you stronger', name: 'the group' }, //if user- the desc is att(like status)
        }
    },
    {
        _id: 'c102',
        msgs: [], // object of msg {}
        background: { color: 'red', img: '' }, // object of {color, img}
        isPined: false,
        isMuted: false,
        isGroup: true,
        groupAtt: {
            users: [], // array of _id's
            created: { user: 'u102', time: Date.now() }, // createdBy - user._id
            info: { img: '', desc: 'keep on moving', name: 'another group' }, //if user- the desc is att(like status)
        }
    },
    {
        _id: 'c103',
        msgs: [], // object of msg {}
        background: { color: 'white', img: '' }, // object of {color, img}
        isPined: false,
        isMuted: false,
        isGroup: false,
        groupAtt: {
            users: [], // array of _id's
            created: { user: '', time: Date.now() }, // createdBy - user._id
            info: { img: '', desc: '', name: '' }, //if user- the desc is att(like status)
        }
    }
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
        msgs: [], // object of msg {}
        background: {}, // object of {color, img}
        isPined: false,
        isMuted: false,
        isGroup: false,
        groupAtt: {
            users: [], // array of _id's
            created: { user: '', time: Date.now() }, // createdBy - user._id
            info: { img: '', desc: '', name: '' }, //if user- the desc is att(like status)
        },
    }
}
