import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import { render } from 'solid-js/web'
import App from './App'
import './styles/main.scss'

render(() => <App />, document.body)

inject()
injectSpeedInsights()