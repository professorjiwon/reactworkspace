import {Table} from 'react-bootstrap';
import {useSelector} from 'react-redux';

function Cart() {
    // redux 사용밥법
    let state = useSelector((state) => { return state})
    console.log(state);

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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Cart;