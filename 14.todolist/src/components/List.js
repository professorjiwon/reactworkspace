import Todoitem from "./Todoitem";
import { useState } from "react";

const List = ({todos}) => {
    const [search, setSearch] = useState('');

    const getSearchData = () => {
        if(search == "") {
            return todos;
        }
        return todos.filter((todo) => 
            todo.content.toLowerCase().includes(search.toLowerCase())
        )
    }

    return (
        <div className='List'>
            <h4>Todo List</h4>
            <input type="text" placeholder="검색어를 입력하세요" 
                onChange={(e) => {
                    setSearch(e.target.value);
                }}/>
            <div className='todos_wrapper'>
                {
                    getSearchData().map((todo) =>
                        // <Todoitem todo = {todo} />
                        <Todoitem {...todo} />
                    )
                }
            </div>
        </div>
    )
}
export default List;