import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import { useState } from "react";
import AppContext from "./utils/AppContext";

function App() {
  
  const [isHoverdToProfileDropdown, setIsHoverdToProfileDropdown] = useState(false);
  const [isHoverdToBrowseDropdown, setIsHoverdToBrowseDropdown] = useState(false);
  const userSettings = {
    isHoveredToProfile: isHoverdToProfileDropdown,
    isHoveredToBrowse: isHoverdToBrowseDropdown,
    setIsHoverdToProfileDropdown,
    setIsHoverdToBrowseDropdown,
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
