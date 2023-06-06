import {AiOutlineSearch} from 'react-icons/ai'



const HeaderSearch = () => {
    return ( 
        <label className="header__search">
            <span className="header__search-icon">
                <AiOutlineSearch/>
            </span>
            <input className=" header__search-field" type="text" placeholder='Search' />
        </label>
     );
}
 
export default HeaderSearch;