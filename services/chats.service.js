const chats = {
    users: [], // array of _id's
    msgs: [], // object of msg {}
    background: {}, // object of {color, img}
    isGroup: false,
    info: { groupImg: '', desc: '' },
    created: { user: '', time: Date.now() }, // createdBy - user._id
    isPined: false,
    isMuted: false
}

const msg = {
    sendBy: '', // _id
    createdAt: Date.now(),
    type: '', // img, video, txt, audio, file, contact. location.
    att: [],
    seenBy: [], // array of users _id's
}