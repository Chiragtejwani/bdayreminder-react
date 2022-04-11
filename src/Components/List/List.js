import ListItem from '../ListItem/ListItem';
import './List.css';
const List = ({Items}) => {
    return ( 
        <div className="card">
            <div className="container">
            {Items.map ( (item) => (
                <ListItem key = {item.id} name = {item.name} date={item.date} contact_no = {item.contact_no}/>
            ))}
            </div>
        </div>
    );
}
 
export default List;