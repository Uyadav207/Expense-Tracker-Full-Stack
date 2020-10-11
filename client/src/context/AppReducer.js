// we have to change the state
// But how..
// We will use some of the user-defined actions
// Dispatch the action to change the state from initial to required whenever the user wants.
// True meaning of redux || context api

export default (state, action) => {
    switch(action.type) {
      case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        transactions: action.payload
      }
        case 'DELETE_TRANSACTION' :
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD_TRANSACTION' :
            return {
                ...state,
                transactions: [...state.transactions,action.payload]
            }
        case 'TRANSACTION_ERROR':
          return {
            ...state,
            error: action.payload
          }
        default:
            return state;
    }
}
