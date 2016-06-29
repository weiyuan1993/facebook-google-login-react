const INITIAL_STATE =
{
  isLogIn : 'false',
  fbName : '',
  fbEmail : '',
  fbPhoto : ''
};

export default function (state = INITIAL_STATE , action){
  switch(action.type){
    case 'FB_LOG_IN':
      return {...state , isLogIn:action.payload};
    case 'FB_LOG_OUT':
      return {...state , fbName:action.payload};
    case 'FB_NAME':
      return {...state , fbName:action.payload};
    case 'FB_EMAIL':
      return {...state , fbEmail:action.payload};
    case 'FB_COVER':
      return {...state , fbCover:action.payload};
    default:
      return state;
  }
}
