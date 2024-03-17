import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { useState } from "react";
import AppContext from "./utils/AppContext";

function App() {
  const [isHoverdToProfile, setIsHoverdToProfile] = useState(false);

  const userSettings = {
    isHovered: isHoverdToProfile,
    setIsHoverdToProfile,
  };

  return (
    <div>
      <AppContext.Provider value={userSettings}>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
