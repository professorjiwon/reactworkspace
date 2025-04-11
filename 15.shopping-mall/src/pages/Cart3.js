import {Table} from 'react-bootstrap';
import {useSelector} from 'react-redux';

function Cart() {
    // redux 사용방법
    /*
    let state = useSelector((state) => state )
    console.log(state);
    console.log(state.user);
    console.log(state.stock);
    */

    // 원하는 것만 가져오기
    let user = useSelector((state) => state.user)
    console.log(user);

    let stock = useSelector((state) => state.stock)

    let cart = useSelector((state) => state.cart)

    return(
        <div>
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
                    {/*                     
                    <tr>
                        <td>{cart[0].id}</td>
                        <td>{cart[0].name}</td>
                        <td>{cart[0].count}</td>
                        <td>변경</td>
                    </tr>
                    <tr>
                        <td>{cart[1].id}</td>
                        <td>{cart[1].name}</td>
                        <td>{cart[1].count}</td>
                        <td>변경</td>
                    </tr>
                     */}
                    {
                        cart.map(v => 
                            <tr>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.count}</td>
                                <td>변경</td>
                            </tr>
                        ) 
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;