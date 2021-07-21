function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return state + action.amount;
  } else if (action.type === "DECREMENT") {
    return state - action.amount;
  } else {
    return state;
  }
}

function createStore(reducer) {
  let state = 0;

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
  };

  return {
    getState,
    dispatch,
  };
}

const store = createStore(reducer);

const incrementAction = {
  type: "INCREMENT",
  amount: 3,
};

store.dispatch(incrementAction);
console.log(store.getState());
store.dispatch(incrementAction);
console.log(store.getState());

const decrementAction = {
  type: "DECREMENT",
  amount: 4,
};

store.dispatch(decrementAction);
console.log(store.getState());

// Factory Function
// function createAdder() {
//   let value = 0;
//
//   const getValue = () => value;
//   const add = (amount) => (value = value + amount);
//
//   return {
//     getValue,
//     add,
//   };
// }
//
// const testy = createAdder();
// console.log(testy.getValue());
// testy.add(3);
// console.log(testy.getValue());

// const incrementAction = { type: "INCREMENT", amount: 7 };
// const unknownAction = { type: "IDONTKNOW", amount: 7 };
// const decrementAction = { type: "DECREMENT", amount: 7 };
