import React, { useEffect, useState } from 'react';
import IndexLayout from '../components/IndexLayout/IndexLayout';
import IndexMain from '../components/IndexMain/IndexMain';

function Index(props) {
    const [ todoList, setTodoList ] = useState([]);
    const [ filter, setFilter ] = useState("incomplete");

    useEffect(() => {
        console.log(todoList);
    }, [todoList]);

    const filterTodoList = todoList.filter(todo => {
        if (filter === "all") {
            return true;
        } else if (filter === "complete") {
            return todo.isComplete;
        } else if (filter === "incomplete") {
            return !todo.isComplete;
        }
    });

    return (
        <IndexLayout filter={filter} setFilter={setFilter}>
            <IndexMain todoList={filterTodoList} setTodoList={setTodoList} />
        </IndexLayout>
    );
}

export default Index;