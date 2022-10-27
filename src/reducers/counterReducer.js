const counterReducer = (state,action) =>{

        if(action.type === 'increase') {
            return {count: state.count + 1}
        }
        if(action.type === 'decrease') {
          return {count : state.count - 1}
        }
      

}

export {counterReducer}