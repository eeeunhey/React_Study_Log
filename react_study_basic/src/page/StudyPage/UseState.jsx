import { useState } from "react";

const UseState = () => {
    const [value, setValue] = useState(0);
    const [name, setName] = useState("");
    const [nickname, setNeckname] = useState("");

    return (
        <div>
            <div>
                <p>
                    useState란 무엇인가
                    상태를 변화를 반영해주는 리액트에서 제공하는 훅이다
                </p>
                <p>
                    이때, 첫 번째 요소는 상태 값, 두 번째 요소는 상태를 설정하는 함수를 의미합니다.
                    useState 함수의 파라미터에는 상태의 기본 값을 넣어줍니다.
                </p>
                <p>
                    <code>
                        const [name, setName] = useState()
                    </code>
                </p>
                <p>
                    <code>{() => setValue("현재값" ("+,-,/,*") + "연산값")} </code> 
                    이벤트가 실행되면 실행해라
                    <code> {(x) => setValue("현재값" ("+,-,/,*") + "연산값")} </code>
                    x 값을 받아서 실행해라 
                </p>
                <p>
                    
                </p>

            </div>

            <div>
                <p>
                    현재 카운터 값은 <b>{value}</b>
                </p>
                <button onClick={()=>setValue(value+1)}>1 증가</button>
                <button onClick={()=> setValue(value-1)}>1 감소</button>
            </div>
        </div>
    )
}

export default UseState
