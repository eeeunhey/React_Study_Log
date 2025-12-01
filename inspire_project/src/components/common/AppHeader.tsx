function AppHeader() {
  return (
    <header className="fixed top-0 z-10 w-full flex items-center justify-center bg-[#121212]">
      <div className="w-full max-w-[1328px] flex items-center justify-between px-6 py-3">
        {/* 로고 & 네비 UI */}
        <div className="flex items-center gap-5">
          <div>
            <div className="font-semibold text-muted-foreground hover:text-white transition-all duration-300">
              로그인
            </div>
            <div className="font-semibold text-muted-foreground hover:text-white transition-all duration-300">
              로그인
            </div>
          </div>
        </div>

        {/* 로그인 UI */}
        <div className="font-semibold text-muted-foreground hover:text-white transition-all duration-300">
          로그인
        </div>
      </div>
    </header>
  );
}

export { AppHeader };

{
  // 251201 1 헤더 값 초기 셋팅
  // fixed top-0 z-10 w-full flex items-center justify-center bg-[#121212]
  //    <div className="w-full max-w[1328px] flex items-center justify-between">
}

{
  // 251201 2 헤더 값 로그인 ui 생성
  {
    /* 로그인 UI */
  }
  // <div className="font-semibold text-muted-foreground hover:text-white transition-all duration-300">  로그인 </div>
  /**
   * 글자 semibold 설정 약간 회색 컬러 호버시 글자가 화이트로 변함 마우스를 올렸을 떄 0.3초정로 걸리는 효과
   */
}

{
  // {/* 로고 & 네비 UI */}
  // <div className="flex items-center gap-5">
  /**
   * gap 사용시 앞쪽에 flex 나 grid가 있어야 적용이 가능하다
   */
  // </div>
}
