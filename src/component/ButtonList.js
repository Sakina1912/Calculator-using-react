import React from 'react'

function ButtonList({input, setInput,setResult, result}) {
    const buttonList = [1,2,3,'+',4,5,6,'-',7,8,9,'*',0,'00','/','=','AC','.','sin','(',')']
    
    // {result.includes('sin') ? result.replace('sin',Math.sin) : ''}

    const buttonHandler = (e)=>{
        if(e.target.value === '='){
            // result.includes('sin') ? result.replace('sin',Math.sin) : ''
            if(result.includes('sin')){
                result.replace('sin',Math.sin)
            }
            const cal = eval(result)
            setResult(cal)
        }else if(e.target.value === 'AC'){
            setResult('')
        }
        else{
            // result.includes('sin') ? result.replace('sin',Math.sin) : ''
            setResult(result + (e.target.value))
        }
    }

    const handleBackSpace = ()=>{
        let newResult = String(result).slice(0,result.length-1)
        setResult(newResult)
    }
    
    return (
        <div className='buttonContainer'>
            {
                buttonList.map(button => 
                <button key={button} 
                value={button} 
                onClick={buttonHandler}>
                    {button}
                </button>)
            }
            <button onClick={handleBackSpace}><i class="fas fa-backspace"></i></button>
            {/* <button>Sin</button> */}
        </div>
    )
}

export default ButtonList




