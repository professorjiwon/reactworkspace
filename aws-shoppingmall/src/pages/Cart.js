import {Table, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { countIncrease } from '../store/store'

function Cart() {
    let user = useSelector((state) => state.user)
    let cart = useSelector((state) => state.cart)
    let dispatch = useDispatch()

    return(
        <div>
            {user.name}의 장바구니<br/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(v => 
                            <tr>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.count}</td>
                                <td><Button variant="outline-info" onClick={() => {
                                    dispatch(countIncrease(v.id))
                                }}>+</Button></td>
                            </tr>
                        ) 
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;