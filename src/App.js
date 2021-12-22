import React, { createContext, useReducer } from "react";
import DefaultLayout from "./components/DefaultLayout";

import { initialUIState, UIReducer } from "./context/UIContext";

export const UIContext = createContext();

function App() {

  const [uiState, uiDispatch] = useReducer(UIReducer, initialUIState);

  return (
    <UIContext.Provider value={{ uiState, uiDispatch }}>
      <div className="App">
        <DefaultLayout></DefaultLayout>
      </div>
    </UIContext.Provider>
  );
}

export default App;
