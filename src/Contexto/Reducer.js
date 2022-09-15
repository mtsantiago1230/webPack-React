export default (state,action) => {
  
    const {type,payload} = action;

    console.log(type,payload);

    switch (type) {
        case 'SET_DATA':
            return {...state, ...payload};
    
        default:
            return state;
    }
    
}
