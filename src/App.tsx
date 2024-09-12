import { Header } from './components/Header';
import { About } from './components/blocks/About';
import { More } from './components/blocks/More';



function App() {

  return (
      <div id="main-container">
        <Header />
        <main>
          <About />
          <More />
        </main>
      </div>
  )
}

export default App
