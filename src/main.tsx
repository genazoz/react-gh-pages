import ReactDOM from 'react-dom/client'
import Index from './app'
import {Provider} from "react-redux";
import {setupStore} from "./app/store.ts";

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Index />
  </Provider>,
)
