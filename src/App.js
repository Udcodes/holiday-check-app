import './App.css';
import FirstSection from './components/FirstSection/firstSection';
import Header from './components/Header/header';
import SecondSection from './components/SecondSection/secondSection';

// output = { protocol: 'http', 'domain': 'holidaycheck.com' }
//input = 'https://holidaycheck.com/passions'

// output = { protocol: 'https', 'domain': 'holidaycheck.com', path: 'passions'}
const App = () => {
  const printOutput = (str) => {
    const splittedStr = str.split('://');
    const protocol = splittedStr[0];

    const splittedDomain = splittedStr[1].split('/');
    const domain = splittedDomain[0];
    const path = splittedDomain[1];
    console.log(splittedStr);

    if (path === '') {
      return { protocol, domain };
    }

    return { protocol, domain, path };
  };
  const input = 'https://holidaycheck.com/passions';

  console.log(printOutput(input));

  return (
    <div className="App">
      <Header />
      <FirstSection />
      <SecondSection />{' '}
    </div>
  );
};

export default App;
