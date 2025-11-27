import { useState } from "react";

const UseState = () => {
    const [value, setValue] = useState(0);
    const [name, setName] = useState("");
    const [nickname, setNeckname] = useState("");

    let x = 2

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
                    <code>{() => setValue("현재값"("+,-,/,*") + "연산값")} </code>
                    이벤트가 실행되면 실행해라
                    <code> {(x) => setValue("현재값"("+,-,/,*") + "연산값")} </code>
                    x 값을 받아서 실행해라
                </p>
                <p>

                </p>

            </div>

            <div>
                <p>
                    현재 카운터 값은 <b>{value}</b>
                </p>
                <button onClick={(e) => {
                    console.log("()값:",e )
                    setValue(value + 1)
                }}>1 증가</button>
                <button onClick={() => setValue(value - 1)}>1 감소</button>
                <button onClick={(x) => {
                    console.log("x객체값임", x)
                    setValue(value + x)
                }
                }>{x}씩 증가함</button>
                <button onClick={(x)=> x+1}>x값 증가 버튼</button>

                <button onClick={() => setValue(0)}>초기화</button>
            </div>

            <div>
                <p>회고록</p>
                <p>
                    아래와 같은 형태를 사용하려 했는데  0[object Object] 이런 값을 반환했다 왜 객체가 들어올까??
                </p>
                <p>
                    x는 숫자가 아니라 이벤트객체가 들어온다 콘솔로 찍어보니 같은 이벤트 객체가 들어온다
                    흠
                </p>
                <p>

                </p>



            </div>
        </div>
    )
}

export default UseState
