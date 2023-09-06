import { Header } from './components/Header';
import { About } from './components/blocks/About';
import { More } from './components/blocks/More';
import { Switch } from './components/blocks/Switch';

function App() {

  return (
      <div id="main-container">
        <Header />
        <main>
          <About />
          <Switch />
          <More />
        </main>
      </div>
  )
}

export default App
