// reducer는 action이 일어날 때 호출 됨
// state argument is not application state, only the state
//  this reducer is responsible for this state argument --> combineReducers 에 의해 생성된 state이고 같은 그 스테이트가 reducer로 계속 흘러가는 것임
// --> state가 무한정 증가하는 것이 아님
// redux는 reducer가 undefined를 반환하는 것을 허용하지 않음, --> state의 default value 를 null로 셋팅
export default (state = null, action) => {
    switch (action.type) {
        case 'BOOK_SELECTED':
            // 언제나 원본 object를 반환해야 함
            // console.log('action.payload --> ', action.payload);
            return action.payload
    }
    return state
}