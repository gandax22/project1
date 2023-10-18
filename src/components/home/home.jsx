import React, { useState, useEffect } from "react"

const Home = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggenUsers, setIsLoggenUsers] = useState(false)
    const [flag, setFlag] = useState(false)
  
    useEffect(() => {
        const storedUsername = localStorage.getItem('username')
        const storedPassword = localStorage.getItem('password')
        const storedisLoggenUsers = localStorage.getItem('isLoggenUsers')
        if (storedUsername && storedPassword && storedisLoggenUsers) {
            setUsername(storedUsername)
            setPassword(storedPassword)
            setIsLoggenUsers(storedisLoggenUsers === true)
            setIsLoggenUsers(true)
        }
    }, []) 
    const registerUsers = async () => {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });


        if (response.ok) {
            setIsLoggenUsers(true)
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            localStorage.setItem('isLoggenUsers', 'true')
            alert('Пользователь успешно зарегистрирован');
        } else {
            alert('Ошибка при регистрации пользователя');
        }
    }
    const loginUsers = async () => {
       
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        if (response.ok) {
            setIsLoggenUsers(true)
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            localStorage.setItem('isLoggenUsers', 'true')
            alert(`Вы вошли в аккаунт под логином ${username}`)
        } else {
            alert('Неверные имя пользователя или пароль')
        }
    }
    const Logout = () => {
        setIsLoggenUsers(false)
    }

    return (
        <div>
            {!isLoggenUsers ? (
                <div>
                    {!flag ? (
                        <div>
                            <h1>Регистрация</h1>
                            <input
                                type="text"
                                placeholder="Логин пользователя"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Пароль пользователя"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button onClick={registerUsers}>Регистрация</button>
                            <p>Есть аккаунт?</p>
                            <button onClick={() => setFlag(true)}>Войти в аккаунт</button>
                        </div>
                    ) : (<div>
                        <h1>Авторизация</h1>
                        <input
                            type="text"
                            placeholder="Логин пользователя"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Пароль пользователя"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={loginUsers}>Авторизироваться</button>
                        <p>Нет аккаунт?</p>
                            <button onClick={() => setFlag(false)}>Зарегистрировать аккаунт</button>
                    </div>
                    )}

                </div>

            ) : (
                <>
                    <h1>Вы авторизовались под логином {username}</h1>
                    <button onClick={Logout}>Выйти из аккаунта</button>
                </>

            )}

        </div>
    )
}
export default Home