const initialState = {
    items: [],
    isLoaded:false

}
const pizzas = (state = initialState, action) => {
    if (action.type === 'SET_PIZZAS') {
        console.log(action)
        return {
            ...state,
            items: action.payload,
        }
    }
    return state
}
export default pizzas