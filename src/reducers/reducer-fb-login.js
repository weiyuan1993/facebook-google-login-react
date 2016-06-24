const INITIAL_STATE = { isLogIn : 'false' , fbName : '123' , fbEmail : '123' , fbPhoto : ''};

export default function (state = INITIAL_STATE , action){
  switch(action.type){
    case 'FB_LOG_IN':
      return {...state , isLogIn:action.payload};
    case 'FB_NAME':
      return {...state , fbName:action.payload};
    default:
      return state;
  }
}
