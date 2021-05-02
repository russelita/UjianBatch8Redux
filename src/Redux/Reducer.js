import { combineReducers } from "redux";

const initialStateLogin = {
    username: "",
    password: "",
    nama: "",
    alamat: "",
}

const initialStateUjian = {
    ganjil: [],
    genap: [],
    fibbonaci: []
}

const LoginReducer = (state = initialStateLogin, action) => {
    if (action.type === "LOGIN_VALUE") {
        return {
            ...state,
            [action.inputType]: action.inputValue,
        }
    }
    return state;
}

const RegisterReducer = (state = initialStateLogin, action) => {
    if (action.type === "REGISTER_VALUE") {
        return {
            ...state,
            [action.inputType]: action.inputValue,
        }
    }
    return state;
}

const GambarReducer = (state = initialStateUjian, action) => {
    switch (action.type) {
        case "CHANGE_VALUE_GANJIL":
            return {
                ...state,
                ganjil: action.data
            }
        case "CHANGE_VALUE_GENAP":
            return {
                ...state,
                genap: action.data
            }
        case "CHANGE_VALUE_FIBBONACI":
            return {
                ...state,
                fibbonaci: action.data
            }

        default:
            return state;
    }

}

const reducer = combineReducers({
    LoginReducer,
    RegisterReducer
})

export default reducer

// combineReducer bisa di isi lebih dari 1 reducer dan 1 reducer bisa berisi banyak action. ini versi benar
// dispatch itu kalo di state seperti setState gak sih ?