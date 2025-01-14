import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { SideNavbar } from './components/views/SideNavbar'
import { colors } from './styles/palette'

function App() {
  return (
    <Container>
      <Header>
        <h1>
          <Link to={`/`}>FONTory</Link>
        </h1>
      </Header>

      <Main>
        <SideNavbar />
        <div style={{ height: '200vh' }}></div>
        <div>3</div>
      </Main>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${colors.grey[200]};
`

const Header = styled.header`
  background: white;
  padding: 3.2rem;

  & > h1 {
    font-family: 'Jalnan';
    font-size: 3.6rem;
    color: ${colors.blue[500]};
  }
`

const Main = styled.main`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  gap: 1.6rem;
  overflow: hidden;
  padding: 0.8rem;
`

export default App
