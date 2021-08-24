import React, { useState } from "react";
import ReactDOM from "react-dom";
import SearchOverlay from "./SearchOverlay";

import "./style.css";

function Test() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setModalVisible(true)}>Open Overlay</button>
      <SearchOverlay
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </div>
  );
}

export default Test

