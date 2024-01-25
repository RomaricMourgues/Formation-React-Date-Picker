import ReactDOM from 'react-dom/client'
import './tailwind.css'
import { App } from './views/app'
import { RecoilRoot } from 'recoil'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
)
