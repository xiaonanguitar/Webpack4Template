import React, { useState, useEffect } from 'react';

function Todo (props) {
    const removeUser = () => {
        fetch('/api/members/' + props._id, {
        method: 'delete'
        }).then(response => {
            props.fetchData();
        })
    }
    return (
        <li style={{ listStyle: 'none' }}>
            <span style={{ display: 'inline-block', width: '10rem' }}>{props.name}</span>
            <a style={{ margin: '0 1rem', color: 'red', display: 'inline-block' }} onClick={removeUser}>del</a>
        </li>
    )
}

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [name, setName] = useState();
  const [todos, setTodos] = useState([]);

  const fetchData = () => {
    fetch('/api/members', {
        method: 'get',
        headers: {
            'Cache-Control': 'no-cache' 
        }
    }).then(blob => blob.json()).then(response => {
        setTodos(response);
    })
  }

  useEffect(() => {
    fetchData();
  }, [])

  const addUser = () => {
    fetch('/api/members', {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name
        })
    }).then(response => {
        setName('');
        fetchData();
    })
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} onKeyDown={e => {
          if (e.keyCode === 13) {
            addUser();
          }
      }} />
      <button onClick={() => addUser()}>
        Add
      </button>
      <div>
          {
              todos.map(item => {
                return <Todo key={item._id} { ...item } fetchData={fetchData} />
            })
          }
      </div>
    </div>
  );
}

export default Example;