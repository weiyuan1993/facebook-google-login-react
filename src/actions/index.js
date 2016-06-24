export function fbLogIn (isLogIn){
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
export function getFBName (name){
  return{
    type:'FB_NAME',
    payload:name
  };
}
