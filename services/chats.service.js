const msg = {
    // _id: '',
    sendBy: '', // _id
    createdAt: Date.now(),
    type: '', // img, video, txt, audio, file, contact. location.
    att: [],
    seenBy: [], // array of users _id's
}

function getNewChat() {
    return {
        // _id: '',
        users: [], // array of _id's
        msgs: [], // object of msg {}
        background: {}, // object of {color, img}
        isGroup: false,
        isPined: false,
        isMuted: false,
        info: { img: '', desc: '' },
        created: { user: '', time: Date.now() }, // createdBy - user._id
    }
}

function getNewGroupChat() {
    return {
        // _id: '',
        users: [], // array of _id's
        msgs: [], // object of msg {}
        background: {}, // object of {color, img}
        isGroup: false,
        isPined: false,
        isMuted: false,
        info: { groupImg: '', desc: '' },
        created: { user: '', time: Date.now() }, // createdBy - user._id
    }
}