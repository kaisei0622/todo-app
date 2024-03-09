const completeArea = {
  border: "2px solid #aacfd0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "c9dede",
};

const title = {
  textAlign: "center",
  marginTop: 0,
  fontWeight: "bold",
};

const listRow = {
  display: "flex",
  alignItems: "center",
};

const todoItem = {
  margin: "6px",
};

export const CompleteTodo = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div style={completeArea}>
      <p style={title}>完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <div style={listRow}>
              <p style={todoItem}>{todo}</p>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
