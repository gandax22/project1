const Comment = (props) => {
    return (
    <div className="styles.wrapper">
    <label>Напиши коментарий</label>
    <input
    value={props.inputValue}
    onChange={(e) => props.setInputValue(e.target.value)}
    />
    <button onClick={props.changeChat}>Отправить</button>
    <button onClick={() => props.setChatData([])}>Удалить</button>
    
    </div>
    );
    };
    
    export default Comment;
    