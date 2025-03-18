import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { RouterComponent } from './app/router/RouterComponent'
import { colors } from './app/styles/palette'
import { ErrorFallback } from './shared/ui/ErrorFallback'
import { Loading } from './shared/ui/Loading'
import { SideNavigationBar } from './shared/ui/SideNavigationBar'

function App() {
  return (
    <Container>
      <Header>
        <h1 className="logo">
          <Link to={`/`}>FonTory</Link>
        </h1>
      </Header>

      <Main>
        <SideNavigationBar />

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loading />}>
            <RouterComponent />
          </Suspense>
        </ErrorBoundary>

        <div>3</div>
      </Main>
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.flexBox('column')};
  min-height: 100vh;
  background: ${colors.grey[200]};
`

const Header = styled.header`
  ${({ theme }) => theme.padding('4xl')};
  background: white;

  .logo {
    font-family: 'Jalnan';
    ${({ theme }) => theme.font(200, theme.colors.blue[500])};
  }
`

const Main = styled.main`
  ${({ theme }) => theme.gridBox('1fr 4fr 1fr', undefined, undefined, undefined, 'md')};
  ${({ theme }) => theme.padding('sm')};
  flex-grow: 1;
  overflow: hidden;
`

export default App
