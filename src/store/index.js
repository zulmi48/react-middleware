const { atom } = require("recoil");

const authenticated = atom({
    key: 'authenticated',
    default: {
        check: false,
        user: {
            name: "Zulmi Fu`ada"
        }
    }
})

export {authenticated}