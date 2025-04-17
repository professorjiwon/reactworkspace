import { Table } from 'react-bootstrap';
import {useState, useEffect } from 'react';
import axios from 'axios';

function Cart() {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('/react/getCart')
             .then(result => {
                setList(result.data);
             })
             .catch(() => {
                console.log("실패");
             }) 
    },[])

    return(
        <div>
            <h2>CART LIST</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>수량</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(v => 
                            <tr>
                                <td>{v.id}</td>
                                <td>{v.title}</td>
                                <td>{v.count}</td>
                            </tr>
                        ) 
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;