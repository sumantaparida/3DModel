/* eslint-disable no-sequences */
import React, { Suspense, Fragment, lazy } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { proxy } from "valtio"
const ShoeModel = lazy(() => import('./component/ShoeModel/Loadable'));

const state = proxy({
  current: null,
  items: {
    laces: "#ffffff",
    mesh: "#ffffff",
    caps: "#ffffff",
    inner: "#ffffff",
    sole: "#ffffff",
    stripes: "#ffffff",
    band: "#ffffff",
    patch: "#ffffff",
  },
});

function App() {
  return (
    <Fragment>
      <h4>Shoe :</h4>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Suspense fallback={<span>Loading ...</span>}><ShoeModel state={state} /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
