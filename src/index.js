const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO' : 
      return [
        ...state,
        {
          id : action.id,
          text : action.text,
          complete : false
        }
      ];

    default:
      return state;
  }
};

const testAddToDo = () => {
  const stateBefore = [];
  const action = {
    type : 'ADD_TODO',
    id : 0,
    text : 'Lean Redux'
  };

  const stateAfter = [
    {
      id : 0,
      text : 'Lean Redux',
      complete : false
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

testAddToDo();
console.log('All tests passed');