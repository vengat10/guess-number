import React from 'react'

function Result ({term, systemNo})  {
    let result;
    if(term){
        if(term > systemNo){
            result="Higher";
        }
        else if(term < systemNo){
            result="Lower";
        }
        else if(term == systemNo){
            result="Yippee Wow It's Correct'";
        }
        else{
            result="invalid input";
        }
    }
  return <h3>Guess Number : {result}</h3>
  
}

export default Result;