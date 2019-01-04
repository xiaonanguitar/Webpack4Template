import React, { Component, useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import MultiContext from './MultiContext';
// import Menu from './Menu';
// import SearchBox from './SearchBox';
// import FoldedBox from './FoldedBox';
// import RespMenuNav from './RespMenuNav';
import RespPricingTable from './RespPricingTable';
// import 'antd/dist/antd.css';

const App = () => {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);

    const increment = () => setCount(count + 1);

    useEffect(() => {
        document.title = `Count: ${count}`;
    });

    return (
        <div>
            {/*
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <MultiContext/>
            <Button onClick={() => setVisible(true)}>Show</Button>
            <Modal visible={visible} onOk={ () => setVisible(false)}>
                <div>123</div>
            </Modal>
            */}
            <RespPricingTable/>
        </div>
    );
};

export default App