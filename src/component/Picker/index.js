import React from "react";
import { HexColorPicker } from "react-colorful"
import { useSnapshot } from 'valtio';

function Picker(props) {
    const snap = useSnapshot(props.state);
    return (
        <div style={{ display: snap.current ? "block" : "none" }}>
          <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (props.state.items[snap.current] = color)} />
          <h1>{snap.current}</h1>
        </div>
      )

}

export default Picker;