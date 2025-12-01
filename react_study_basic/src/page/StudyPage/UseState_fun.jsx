import { useState } from "react"

const UseState_fun = () => {
    const [value, setValue] = useState();
    const [name, setName] = useState();
    const [nickname, setNickname] = useState();  
  
    const increment = () => {
        setValue(value +1 )
    }

    const decrement = () => {
        setValue(value - 1)
    }
    
    const twoincrement = () => {
        setValue(value + 2)
    }

    return (
    <div>
        <input
        placeholder="숫자를 입력"
        >
        </input>

        <p>
            현재 카운트 값은 <p>{value}</p>
        </p>
        <button onClick={increment}>
            증가버튼임
        </button>

        <button onClick={decrement}>
            감소 버튼임
        </button>

        <button onClick={twoincrement}>
            2배씩 증가 
        </button>

    </div>
  )
}

export default UseState_fun