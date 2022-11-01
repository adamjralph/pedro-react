import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Auth from "./Auth"
import NotAuth from "./NotAuth"

function MyButton() {
    return <button>I'm a button</button>
}

const user = {
    name: "Hedy Lamarr",
    imageUrl: "./public/images/yXOvdOSs.jpg",
    imageSize: 90,
}

function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={"Photo of " + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                }}
            />
        </>
    )
}

const auth = true

function App() {
    return (
        <div>
            {auth ? <Auth /> : <NotAuth />}
            <h1>Welcome to my app</h1>
            <MyButton />
            <Profile />
        </div>
    )
}

export default App
