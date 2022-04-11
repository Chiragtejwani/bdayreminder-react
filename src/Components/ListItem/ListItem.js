import './ListItem.css'
const ListItem = (props) => {
    return (
        <div className="listcard">
            <div className='left'>
                <h5 className='name'>{props.name}</h5>
                <h5 className='date'>{props.date}</h5>
            </div>

            <div className='right'>
                <h5 className='cont'>{props.contact_no}</h5>
                <button ><a target="_blank" href="https://www.instagram.com/">Wish Now</a>
</button>
            </div>

           
        </div>
    );
}

export default ListItem;