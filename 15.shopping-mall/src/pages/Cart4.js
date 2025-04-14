import {Table, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { changeName, ageUpdate  } from '../store/userSlice';
import { countIncrease } from '../store/store'
/*
    * Redux 변경하기
      1. store.js에서 변경해주는 함수 만들고
      2. export
      3. dispatch()로 감싸서 사용
*/
function Cart() {
    // 원하는 것만 가져오기
    let user = useSelector((state) => state.user)
    console.log(user);

    let stock = useSelector((state) => state.stock)

    let cart = useSelector((state) => state.cart)

    // store.js에 요청을 보내주는 함수
    let dispatch = useDispatch()

    return(
        <div>
            {user.name}의 장바구니<br/>
            {user.age}
            <Button variant="outline-info" onClick={() => {
                                    dispatch(ageUpdate(5))
                                }}>나이변경</Button>
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