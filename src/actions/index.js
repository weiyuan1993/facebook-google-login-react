export function action_fbLogIn (isLogIn){
  if(isLogIn){
    return{
      type:'FB_LOG_IN',
      payload:'true'
    };
  }else{
    return{
      type:'FB_LOG_IN',
      payload:'false'
    };
  }
}
export function action_getFbName (name){
  return{
    type:'FB_NAME',
    payload:name
  };
}
export function action_fbLogOut(){
  return{
    type:'FB_LOG_OUT',
    payload:null
  }
}
export function action_getFbEmail(email){
  return{
    type:'FB_EMAIL',
    payload:email
  }
}
export function action_getFbPicture(picture){
  return{
    type:'FB_PICTURE',
    payload:picture
  }
}
export function action_getFbCover(cover){
  return{
    type:'FB_COVER',
    payload:cover
  }
}
