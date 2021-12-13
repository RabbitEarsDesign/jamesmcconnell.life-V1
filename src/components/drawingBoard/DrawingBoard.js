import { useEffect, useRef, useReducer } from "react";
// CSS
import classes from "./DrawingBoard.module.css";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETCANVAS":
      return { ...state, ctx: action.payload };
    case "COLOR":
      return { ...state, color: action.payload.color };
    case "INCREASE":
      if (state.size >= 50) {
        return { ...state };
      }
      return { ...state, size: state.size + 5 };
    case "DECREASE":
      if (state.size <= 5) {
        return { ...state };
      }
      return { ...state, size: state.size - 5 };
    case "MOUSEDOWN":
      return {
        ...state,
        isPressed: true,
        x: action.payload.x,
        y: action.payload.y,
      };
    case "MOUSEUP":
      return {
        ...state,
        isPressed: false,
        x: undefined,
        y: undefined,
        x2: undefined,
        y2: undefined,
      };
    case "MOUSEMOVE":
      if (state.isPressed) {
        drawCircle(state.ctx, state.size, state.color, state.x, state.y);
        drawLine(
          state.ctx,
          state.color,
          state.size,
          state.x,
          state.y,
          state.x2,
          state.y2
        );
        return {
          ...state,
          x2: action.payload.x,
          y2: action.payload.y,
          x: state.x2,
          y: state.y2,
        };
      }
      return { ...state };
    default:
      return { ...state };
  }
};

const initialState = {
  size: 25,
  isPressed: false,
  color: "black",
  x: undefined,
  y: undefined,
  x2: undefined,
  y2: undefined,
  ctx: undefined,
};

function drawLine(ctx, color, size, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function drawCircle(ctx, size, color, x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

const DrawingBoard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    dispatch({ type: "SETCANVAS", payload: canvas.getContext("2d") });
  }, []);

  // Canvas Funcs
  function mousedownHandler(e) {
    dispatch({
      type: "MOUSEDOWN",
      payload: { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY },
    });
  }

  function mouseupHandler() {
    dispatch({ type: "MOUSEUP" });
  }

  function mousemoveHandler(e) {
    dispatch({
      type: "MOUSEMOVE",
      payload: { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY },
    });
  }

  // Toolbox Funcs
  function decreaseHandler() {
    dispatch({ type: "DECREASE" });
  }

  function increaseHandler() {
    dispatch({ type: "INCREASE" });
  }

  function clearHandler() {
    state.ctx.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  }

  const canvasWidth = () => {
    let width = window.innerWidth - 550;
    return width;
  };
  const canvasHeight = () => {
    let height = window.innerHeight - 200;
    return height;
  };

  return (
    <div className={classes.container}>
      <h2>Draw something</h2>
      <canvas
        onMouseDown={mousedownHandler}
        onMouseUp={mouseupHandler}
        onMouseMove={mousemoveHandler}
        // Touch screens
        // onTouchStart={mousedownHandler}
        // onTouchEnd={mouseupHandler}
        // onTouchMove={mousemoveHandler}
        ref={canvasRef}
        id="canvas"
        width={canvasWidth() ? canvasWidth() : "800px"}
        height={canvasHeight() ? canvasHeight() : "800px"}
      ></canvas>
      <div className={classes.toolbox}>
        <button onClick={decreaseHandler} id="decrease">
          -
        </button>
        <span id="size">{state.size}</span>
        <button onClick={increaseHandler} id="increase">
          +
        </button>
        <input
          onChange={(e) => {
            dispatch({ type: "COLOR", payload: { color: e.target.value } });
          }}
          type="color"
          id="color"
        />
        <button onClick={clearHandler} id="clear">
          x
        </button>
      </div>
    </div>
  );
};

export default DrawingBoard;
