// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀 있어야 한다.
// 4. 최상위 태그는 반드시 하나여야 한다. (최상위 태그가 필요없으면 빈 태그)

import './Main.css'

function Main() {
  const user = {
    name : '김도현',
    isLogin : false
  }

  // 조건문으로 하는 방법
  if (user.isLogin) {
    return <div>로그인</div>
  } else {
    return <div className='logout'>로그아웃</div>
  }

  // return에서 삼항연산자로 하는 방법
  // return (
  //   <>
  //     {user.isLogin ? '로그인' : '로그아웃'}
  //   </>
  // );
}

export default Main;
