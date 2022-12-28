import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { PostContext } from './contexts/PostContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PostContext>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostContext>
    </ThemeProvider>
  )
}
