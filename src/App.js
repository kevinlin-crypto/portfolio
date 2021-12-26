import React, { createContext, useEffect, useReducer } from "react";
import DefaultLayout from "./components/DefaultLayout";
import Home from "./views/Home";

import { initialUIState, UIReducer } from "./context/UIContext";

export const UIContext = createContext();

function App() {

  const [uiState, uiDispatch] = useReducer(UIReducer, initialUIState);

  useEffect(() => {
    if (uiState.dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [uiState.dark]);

  return (
    <UIContext.Provider value={{ uiState, uiDispatch }}>
      <div className="App">
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      </div>
    </UIContext.Provider>
  );
}

export default App;
