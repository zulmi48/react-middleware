const { atom } = require("recoil");

const authenticated = atom({
    key: 'authenticated',
    default: {
        check: true,
        user: {
            name: "Zulmi Fu`ada"
        }
    }
})

export {authenticated}