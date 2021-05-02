export function LoginAction(value, inputType) {
    return { type: "LOGIN_VALUE", inputType: inputType, inputValue: value }
}

export function RegisterAction(value, inputType) {
    return { type: "REGISTER_VALUE", inputType: inputType, inputValue: value }
}

export function GambarGanjilAction(value) {
    return ({ type: "CHANGE_VALUE_GANJIL", data: value })
}

export function GambarGenapAction(value) {
    return ({ type: "CHANGE_VALUE_GENAP", data: value })
}

export function GambarFibbonaciAction(value) {
    return ({ type: "CHANGE_VALUE_FIBBONACI", data: value })
}