import { Input } from './SearchBox-styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/filtersSlice';


export default function SearchBox () {
    const dispatch = useDispatch();

    const SearchBox = evt => dispatch(changeFilter(evt.target.value))
    return (
        <div>
        <p>Find contacts by name</p>
        <Input 
        type="text"
        name="filter"    
        onChange={SearchBox}
        />
        </div>
    )
}