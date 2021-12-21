import React, { createContext, useReducer } from "react";

import { initialUIState, UIReducer } from "./context/UIContext";

export const UIContext = createContext();

function App() {

  const [uiState, uiDispatch] = useReducer(UIReducer, initialUIState);

  return (
    <UIContext.Provider value={{ uiState, uiDispatch }}>
      <div className="App">
        <h1 className="text-3xl">App</h1>
      </div>
    </UIContext.Provider>
  );
}

export default App;
