
let initialState = {
    propertyName: '',
    description: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    loanAmt: '',
    mortgage: '',
    rent: '',
    photo: ''
}
const NEW_PROPERTY_NAME = 'NEW_PROPERTY_NAME',
    NEW_DESCRIPTION = 'NEW_DESCRIPTION',
    NEW_ADDRESS = 'NEW_ADDRESS',
    NEW_CITY = 'NEW_CITY',
    NEW_STATE = 'NEW_STATE',
    NEW_ZIP = 'NEW_ZIP',
    NEW_LOAN_AMT = 'NEW_LOAN_AMT',
    NEW_MORTGAGE = 'NEW_MORTGAGE',
    NEW_RENT = 'NEW_RENT',
    NEW_PHOTO = 'NEW_PHOTO',
    CLEAR_STATE = 'CLEAR_STATE'



export default function reducer(state = initialState, action) {
console.log(action)
    switch (action.type) {
        case NEW_PROPERTY_NAME:
            let newName = Object.assign({}, state, { propertyName: action.payload })
            return newName

        case NEW_DESCRIPTION:
            let newDesc = Object.assign({}, state, { description: action.payload })
            return newDesc

        case NEW_ADDRESS:
            let newAddress = Object.assign({}, state, { address: action.payload })
            return newAddress

        case NEW_CITY:
            let newCity = Object.assign({}, state, { city: action.payload })
            return newCity

        case NEW_STATE:
            let newState = Object.assign({}, state, { state: action.payload })
            return newState

        case NEW_ZIP:
            let newZip = Object.assign({}, state, { zip: action.payload })
            return newZip

        case NEW_LOAN_AMT:
            let newLoan = Object.assign({}, state, { loanAmt: action.payload })
            return newLoan

        case NEW_MORTGAGE:
            let newMortgage = Object.assign({}, state, { mortgage: action.payload })
            return newMortgage

        case NEW_RENT:
            let newRent = Object.assign({}, state, { rent: action.payload })
            return newRent

        case NEW_PHOTO:
            let newPhoto = Object.assign({}, state, { photo: action.payload })
            return newPhoto

        case CLEAR_STATE:
             let newCurrentState = Object.assign({},state,{
                propertyName: action.payload,
                description: action.payload,
                address: action.payload,
                city: action.payload,
                state: action.payload,
                zip: action.payload,
                loanAmt: action.payload,
                mortgage: action.payload,
                rent: action.payload,
                photo: action.payload
             })  
             return newCurrentState 

        default:
            return state

    }
}

export function updateName(value) {
    return {

        type: NEW_PROPERTY_NAME,
        payload: value
    }
}
export function updateDescription(value) {
    return {
        type: NEW_DESCRIPTION,
        payload: value
    }
}
export function updateAddress(value){
    console.log(value, 'Value')
    return{
        type: NEW_ADDRESS,
        payload: value
    }
}
export function updateCity(value){
    return{
        type: NEW_CITY,
        payload: value
    }
}
export function updateState(value){
    return{
        type:NEW_STATE,
        payload: value
    }
}
export function updateZip(value){
    return{
        type:NEW_ZIP,
        payload:value
    }
}
export function updatePhoto(value){
    return{
        type:NEW_PHOTO,
        payload:value
    }
}
export function updateLoan(value){
    return{
        type:NEW_LOAN_AMT,
        payload:value
    }
}
export function updateMortgage(value){
    return{
        type:NEW_MORTGAGE,
        payload:value
    }
}
export function updateRent(value){
    return{
        type:NEW_RENT,
        payload:value
    }
}
export function clearCurrentState(){
    return{
        type:CLEAR_STATE,
        payload: ''
    }
}