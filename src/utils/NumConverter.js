import React from 'react'

const NumConverter = ({number}) => {
    if(number<10){
      let num = "00"+number
      return num
    }
    else if(number<100){
        let num = "0"+number
        return num
    }
    else {
        return number
    }
    
  }
  
  export default NumConverter