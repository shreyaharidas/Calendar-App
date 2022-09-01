import './CalendarOption.css'
import CalendarOutline from './CalendarOutline'
import Card from '../UI/Card';
import { useState } from 'react';


function CalendarOption(props) {

    const [calendarOutline, setCalendarOutline]= useState('')
    var dateNow = new Date().toISOString().slice(0, 7);

    const [date, setDate] = useState(dateNow);



    function onEventsHandler(eventList){
     
        props.onEventsRender(eventList)


    }

    function showEventsHandler(eventList){

        props.onShowEvents(eventList)

    }

    function renderCalendar(event){

        setDate(event.target.value)
        setCalendarOutline(<CalendarOutline MonthYear={event.target.value} onEvents={onEventsHandler} onShowEvents={showEventsHandler}></CalendarOutline>)
        

    }


   

    return (
        <Card className="outline" >
            <form >
                <label className='label'> Month and Year: </label>
                <input id="monthAndYear" type="month" 
                onChange={renderCalendar} />
            </form >
            {calendarOutline}
        </Card>
    )

}

export default CalendarOption;