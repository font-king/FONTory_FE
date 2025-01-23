import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { FontCardWithActions } from './components/domains/fontCard/FontCardWithActions'
import { SideNavbar } from './components/views/SideNavbar'
import { colors } from './styles/palette'

const dummy = {
  name: '가나다체',
  designer: '고로케',
  previewText: '동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
  isBookmarked: true,
}

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
        <div style={{ height: '200vh' }}>
          <Test>
            <FontCardWithActions
              font={dummy}
              onDownload={() => console.log('down')}
              onSave={() => console.log('save')}
            />
            {/* <FontCardWithActions />
            <FontCardWithActions /> */}
          </Test>
        </div>
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

const Test = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  padding: 30px;
`

export default App
