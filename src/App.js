import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route} from "react-router-dom";
import Login from "./Page/login";
import NewChallenge from "./Page/newChallenge";
import Home from "./Page";
import {useEffect} from "react";
import PrivateRoute from "./Component/PrivateRoute";

function App() {
    useEffect(()=> {
        if(!localStorage.getItem("userTable")){
            const userDatabase = {
                USER1: "USER 1",
                USER2: "USER 2",
                USER3: "USER 3",
                USER4: "USER 4",
                USER5: "USER 5",
                USER6: "USER 6"
            }
            const hackathonDatabase = [
                {user: "USER1",
                    title: "Order Management portal",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    vote: {
                        "USER1": true,
                        "USER2": true,
                    },
                    tag: ["android", "ios"]
                },
                {
                    user: "USER2",
                    title: "Portal Management portal",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    vote: {
                        "USER1": true,
                        "USER2": true,
                    },
                    tag: ["web"]
                },
                {
                    user: "USER3",
                    title: "Image processing",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    vote: {
                        "USER1": true,
                        "USER2": true,
                    },
                    tag: ["ai"]
                },
                {
                    user: "USER4",
                    title: "Voice detection",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    vote: {
                        "USER1": true,
                        "USER2": true,
                    },
                    tag: ["ai"]
                },
            ]
            const tagDatabase = {
                ai: "AI",
                android: "Android",
                web: "Web",
                ios: "iOS"
            }
        // console.log(JSON.stringify(hackathonDatabase));
        localStorage.setItem("userTable", JSON.stringify(userDatabase))
        localStorage.setItem("hackathonTable", JSON.stringify(hackathonDatabase))
        localStorage.setItem("tagTable", JSON.stringify(tagDatabase))
        }
    })
  return (
    <div className="App">
      {/*<NavigationBar/>*/}
        <Routes>
            <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/new-challenge" element={<PrivateRoute><NewChallenge /></PrivateRoute>} />

        </Routes>
    </div>
  );
}

export default App;
