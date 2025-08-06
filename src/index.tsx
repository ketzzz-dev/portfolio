import { render } from 'solid-js/web'
import App from './App'
import './styles/main.scss'
import { inject } from '@vercel/analytics'

render(() => <App />, document.body)
inject()