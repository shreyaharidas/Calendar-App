import logo from './logo.svg';
import './App.css';
import CalendarOption from './Components/Calendar/CalendarOption';
import Card from './Components/UI/Card';
import { useState } from 'react';

function App() {
  
  const [listOfEvents, setListOfEvents]=useState('')

function renderEventsCard(eventsList){

  setListOfEvents(eventsList);


}

function showEvents(eventsList){

  console.log('clicked')
  setListOfEvents(eventsList);
  console.log(listOfEvents)

}

  return (
    <div>
     <CalendarOption onEventsRender={renderEventsCard} onShowEvents={showEvents}/>
     { (listOfEvents==='') &&
      <div></div>} 

     {listOfEvents!=='' &&
      <Card className="eventsCard"> Events list <div className='eventsList'>{listOfEvents} </div>
     </Card>}


    </div>
  );
}

export default App;
