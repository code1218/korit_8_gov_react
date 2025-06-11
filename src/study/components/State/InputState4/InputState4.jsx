/**
 * input 3개를 만든다.(productName, price, stock)
 * 
 * 확인 버튼을 누르면 table에 추가한다.
 *  
 */

import { useState } from "react"

function InputState4() {
    const [ products, setProducts ] = useState([]);
    const inputValueEmpty = {
        productName: "",
        price: "",
        stock: "",
    }
    const [ inputValue, setInputValue ] = useState(inputValueEmpty);

    const handleOnChange = e => {

    }

    const handleOnClick = e => {

    }

    return <div>
        <div>
            <label htmlFor="">상품명</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">가격</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">수량</label>
            <input type="text" />
        </div>
        <div>
            <button>확인</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>상품명</th>
                    <th>가격</th>
                    <th>수량</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(product => (<tr>
                        
                    </tr>))
                }
            </tbody>
        </table>
    </div>
}

export default InputState4;