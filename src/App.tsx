import { Header } from './components/Header';
import { About } from './components/blocks/About';
import { More } from './components/blocks/More';
import { Switch } from './components/blocks/Switch';
import { PlusSwitch } from './components/blocks/PlusSwitch';

function App() {

  return (
      <div id="main-container">
        <Header />
        <main>
          <About />
          <PlusSwitch />
          <More />
        </main>
      </div>
  )
}

export default App
