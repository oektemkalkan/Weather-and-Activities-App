import List from './list.jsx';
import Button from './button.jsx';

export default function Form({ onAddActivity, activity }) {
    function handleSubmit (event) {
        event.preventDefault();
        const form = event.target;
        const data = {name:form.activity.value, isForGoodWeather:form.checkbox.checked};
        onAddActivity(data);       
        event.target.reset();
        event.target.elements.activity.focus();
    }

return(
    <form onSubmit={handleSubmit}>
        <h1>Add New Activity:</h1>
        <label htmlFor="activity">Activity: </label>
        <input name="activity" type="text" id="activity" onSubmit={List}/>
        <br/>
        <label htmlFor="checkbox">Good-weather activity: </label>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <br/>
         <Button type="submit">Submit</Button>
    </form>
)
};