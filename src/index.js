import React from "react";
import ReactDOM from 'react-dom';
//import { createRoot } from 'react-dom/client';
import App from "./App";
import "./App.css";

import { Store } from './components/Redux/Reducers/Store/Store';
import { Provider } from "react-redux";

ReactDOM.render(
    <>
        <Provider store={Store}>
            <App />
        </Provider>
    </>,document.getElementById("root")
);


//createRoot(document.getElementById('root')).render(<App />);
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import App from './App';
// import './App.css';
// import { Store } from './components/Redux/Reducers/Store/Store';

// const rootElement = document.getElementById('root');

// const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <Provider store={Store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
