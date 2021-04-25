import {React, useState} from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

function App() {
  const [currentTab, setCurrentTab] = useState('about');

  // check selected tab and render accordingly
  const renderTab = () => {
    switch (currentTab) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />
      // case 'resume':
      //   return <Resume />
      // case 'contact':
      //   return <Contact />
      default:
        return <About />
    }
  }

  return (
		<div>
			<div className="mobile-header">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				{/* <Footer></Footer> */}
			</div>
		</div>
	);
}

export default App;
