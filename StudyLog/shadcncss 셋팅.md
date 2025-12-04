shadcn css 셋팅
npx shadcn@latest add skeleton
깔면 스켈레톤을 그냥 사용가능함
이럴수가..
 components 안에 ui를 한곳에서 관리하는 index.ts를 만든다

common 폴더 생성 -> index.ts를 생성 -> AppHeadertsx 생성 -> rfce -> default 없애고 {수출할부분 넣기} 
index.ts에 export {수출} form "경로" 가져온다 이렇게 해놓으면 common/AppHeader를 접근하지 않고 common/index 로 접근해서 사용하게 함
import { AppFooter, AppHeader } from "./components/common" 이런식으로 가져올수 있다 이거 적용한면서 
import AppFooter from "./components/AppFooter"
import AppHeader from "./components/AppHeader"


index.css 설정하기

.page {
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto;

  .container {
    width: 100%;
    max-width: 1328px;

    padding-top: 48px;
    flex:1;
  }
}

@layer base {
  * {
    @apply border-border outline-ring/50;
    margin:0;
    padding: 0;
    box-sizing: border-box;

    scrollbar-width: none; // 스크롤바가 안나오게 설정할 수 있다
    ::-webkit-scrollbar {
      display: none;
    }
  }
  body {
    @apply bg-background text-foreground text-sm;
  }
}