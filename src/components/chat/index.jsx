 import React, {useState} from "react"
 import {useLocalStorage} from "./../../hook/hook"
 import ChatBlock from "./chat-block"
 import Comment from "./comment"
 const Chat = () => {
    const [chatData, setChatData] = useLocalStorage("CHAT", []);
    const [inputValue, setInputValue] = useState("");
    const [user] = localStorage.getItem('username')
    
    const changeChat = () => {
    if (user) {
    setChatData([...chatData, `${user ? user : "Аноним"}: ${inputValue}`]);
    setInputValue("");
    } else {
    setInputValue("");
    }
    };
    
    return (
    <div>
    <ChatBlock chatData={chatData} />
    <Comment
    inputValue={inputValue}
    setInputValue={setInputValue}
    changeChat={changeChat}
    setChatData={setChatData}
    />
    </div>
    );
    };
    
    export default Chat;
    