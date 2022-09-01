import { useState } from 'react';
import Card from '../../UI/Card';



function EventCall(props){


    const [color, setColor] = useState('rgb(252, 90, 141)')
    const [yourEvent, setYourEvent] = useState('');




    function showEventListHandler(event, index) {


         props.onShowEvents(yourEvent)

        console.log(yourEvent, index)

    }




    function enterYourEvent(event, index) {

        window.Text = prompt("Enter Your Event");

        var theEvent = window.Text


        if (theEvent!==''){
        setYourEvent(theEvent)
        props.onEventList(theEvent);

       setColor('rgb(252, 90, 141)')
       event.target.style.backgroundColor = 'rgb(252, 90, 141)'
        }

        else{
            alert("Event Not Set")
        }
    }

    function deleteYourEvent(event) {

        window.Text = prompt("Delete Your Events?")
        if (window.Text.toLowerCase() === "yes") {
            console.log("deleted");
           event.target.style.backgroundColor = '';
           setColor('');
            setYourEvent('')
            props.onShowEvents('')


        }

        else {
            console.log("not deleted");
            alert("Event Not Deleted");

        }
    }


    const splDayHandler = (event, index) => {


        if (event.target.style.backgroundColor === '') {
            console.log('enter event')
            enterYourEvent(event, index);

        }

        else if (event.target.style.backgroundColor === 'rgb(252, 90, 141)') {
            console.log('delete event')
            deleteYourEvent(event);

        }



    }



    return(<div className="EventCall" onDoubleClick={splDayHandler} onClick={showEventListHandler}>

<Card>{props.day}</Card>
 

    </div>)

}

export default EventCall;
