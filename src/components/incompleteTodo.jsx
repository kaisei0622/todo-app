const incompleteArea = {
        border: "2px solid #aacfd0",
        width: "400px",
        minHeight: "200px",
        padding: "8px",
        margin: "8px",
        borderRadius: "8px"
}

const title = {
        textAlign: "center",
        marginTop: 0,
        fontWeight: "bold"
}

const listRow = {
        display: "flex",
        alignItems: "center"
}

const todoItem= {
        margin: "6px"      
}


export const IncompleteTodo = (props) => {
    const { todos, onClickComplete, onClickDelete} = props;
    return (
        <div style={incompleteArea}>
        <p style={title}>未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => (
            <li key={todo}>
              <div style={listRow}>
                <p style={todoItem}>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
}