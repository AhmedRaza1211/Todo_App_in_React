import Items from "../Items/items";
const List = ({showTodoSending, setTodosSending}) => {
    return (
        <div> 
            <ul>
                <Items showTodoSending={showTodoSending} setTodosSending={setTodosSending} />
            </ul>
        </div>
    )
}

export default List;

// const List = ({showTodoSending}) => {
//     return (
//         <div> 
//             <ul>
//                 {showTodoSending.map((v,i) => {
//                     return <li key={i}> {v} </li>
//                 })}
//             </ul>
//         </div>
//     )
// }

// export default List;