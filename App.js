import logo from './logo.svg';
import './App.css';
import Dash from './dashboard';
import Box from './box';
import Visitors from './visitors'

function App() {
  return (
    <div className="mainC">
    <Dash/>
    <Box header="Reviews" number="1,281"/>
    <Box header="Average" number="4.6"/>
    <Box header="Sentiment Analysis" number="960" number2="122" number3="321"/>
    <Visitors/>
    </div>
  );
}

export default App;
