import React, {useEffect, useState} from "react"

import NavigationBar from "../Component/navbar";
import {Badge, Card, CardBody, Col, Container, Row} from "reactstrap";
import Vote from "../Component/vote";

const Home = () => {
    const [hackathonList, setHackathonList] = useState([])
    const [userId, setUserId] = useState("")

    const tags = JSON.parse(localStorage.getItem("tagTable"))
    useEffect(()=> {
        let hackathonDetail = localStorage.getItem("hackathonTable")
        let userId = localStorage.getItem("userId")
        setUserId(userId)
        console.log(JSON.parse(hackathonDetail));
        if(hackathonDetail){
            setHackathonList(JSON.parse(hackathonDetail))
        }
    }, [])
    return(
        <>
            <NavigationBar/>
            <Container className={"challenge-container"}>
                <Row>
                    {hackathonList.map((data, key)=> {
                        return (
                            <Col xs = {12}>
                                <Card className={"challenge-card"} key={key}>
                                    <CardBody>
                                        <Row>
                                            <Col>
                                                <h3>Challenge name: {data.title}</h3>
                                            </Col>
                                            <Col xs={"auto"}>
                                                <Vote total={Object.values(data.vote).filter((key)=> key===true).length} vote={data.vote[userId]} onClick={()=>{
                                                    let newHackathonList = [...hackathonList]
                                                    newHackathonList[key] = {...data, vote: {...data.vote, [userId]: !data.vote[userId]}}
                                                    setHackathonList(newHackathonList)
                                                    localStorage.setItem("hackathonTable", JSON.stringify(newHackathonList))
                                                }}/>
                                            </Col>
                                            <Col xs={12}>
                                                <p>Challenge detail: {data.description}</p>
                                            </Col>
                                            <Col xs={12}>
                                                Tag: {data.tag.map(
                                                    (tag, key)=>{
                                                        return(
                                                            <Badge key={key} style={{marginRight: "10px"}} color={"danger"}>{tags[tag]}</Badge>
                                                        )
                                                    })}
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </>
    )
}
export default Home