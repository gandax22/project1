const ChatBlock = (props) => {

    return (
        <div>
            <div>Чат</div>
            {props.chatData.map((el, i) => {
                return(
                    <div key={i}>
                        {i + 1 }.{el}
                        </div>
                )
            }
            )}
        </div>
    )

        }
    export default ChatBlock;
    