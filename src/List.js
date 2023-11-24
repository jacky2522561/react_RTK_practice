import {useDispatch,useSelector} from 'react-redux';
import {removeItem} from './store';
const List = () => {
    const dispatch = useDispatch();

    const listdata = useSelector((state)=>{
        return state.list;
    });

    const handleDelete = (item) =>{
        dispatch(removeItem(item));
    }

    const renderList = listdata.map((item, index) => {
        return (
            <div onClick={()=>handleDelete(item)} key={index}>
                {item}
            </div>
        )
    })
    return(
        <div>
            {renderList}
        </div>
    )
}

export default List;