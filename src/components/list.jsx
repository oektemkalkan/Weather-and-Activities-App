import Button from './button';

export default function List({activity}){

    return(
        <div>
        {activity.map((newActivity)=>{return <li key={newActivity.id}>{newActivity.name}</li>;})}
        </div>
    )
}