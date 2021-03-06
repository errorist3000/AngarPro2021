import initialState from './initial-state';
import {
  CALCULATOR_CHANGE_CHILDREN,
  CALCULATOR_CHANGE_PAGE,
  CALCULATOR_TOGGLE_BACK_VISIBLE,
  CALCULATOR_TOGGLE_FORWARD_VISIBLE,
  CALCULATOR_TOGGLE_VISIBLE,
  CalculatorActionsCreators,
  ICalculatorState,
} from './types';

const calculatorRedusers = (
  state = initialState.calculator,
  action: CalculatorActionsCreators,
): ICalculatorState['calculator'] => {
  switch (action.type) {
    case CALCULATOR_TOGGLE_VISIBLE:
      return { ...state, visible: action.payload };
    case CALCULATOR_CHANGE_PAGE:
      return { ...state, currentPage: action.payload };
    case CALCULATOR_TOGGLE_BACK_VISIBLE:
      return { ...state, buttonBackVisible: action.payload };
    case CALCULATOR_TOGGLE_FORWARD_VISIBLE:
      return { ...state, buttonForwardVisible: action.payload };
    case CALCULATOR_CHANGE_CHILDREN:
      return { ...state, children: action.payload };
    default:
      return state;
  }
};

export default calculatorRedusers;
