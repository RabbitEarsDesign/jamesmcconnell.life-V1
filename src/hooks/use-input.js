import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.payload,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "RESET") {
    return initialInputState;
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }

  return state;
};

const useInput = (validateFunc) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialInputState);

  const isValid = validateFunc(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", payload: e.target.value });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    inputBlurHandler,
    reset,
    valueChangeHandler,
  };
};

export default useInput;
