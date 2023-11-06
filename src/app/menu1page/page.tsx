/*
{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
*/
'use client'
import { useState } from 'react';
const Menu1Page = () => {
    const [userList, setUserList] = useState(null);
    const fetchData = async () => {
        const response = await window.fetch(`/api/user/list`,{
            method: 'GET'
        });
        const data = await response.json();
        console.log(data);
        setUserList(data);
    };
    fetchData();
    return (
        <div>
            <span>111</span>
            <div>call server api user list ... ==</div>
            { ! userList || (userList as Array<any>).length == 0 ? <></> :  
                (userList as Array<any>).map(item=>{
                    return (
                        <div>
                            <div> id :: {item.id}</div>
                            <div> title :: {item.title}</div>
                            <div> body :: {item.body}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Menu1Page