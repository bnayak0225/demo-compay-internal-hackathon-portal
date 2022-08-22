import React, {useEffect, useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText, Row, Col,
} from 'reactstrap';
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import UserImage from "../image/user.png"
function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [userId, setUserId] = useState("");
    const navigate= useNavigate()
    const toggle = () => setIsOpen(!isOpen);
    useEffect(()=>{
        setUserId(localStorage.getItem("userId"))
    }, [])
    return (
        <div>
            <Navbar color={"primary"} dark={true} expand={"sm"} container={true}>
                <NavbarBrand href="/">LOGO</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <Link className={"nav-link"} to = "/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"nav-link"} to = "/new-challenge">New challenge</Link>
                        </NavItem>
                    </Nav>
                    <Row className={"align-items-center"}>
                       <Col xs={"auto"}>
                           <Row className={"g-1 align-items-center"}>
                               <Col xs={"auto"} className={"pr2"}>
                                   <img src={UserImage} alt={"user-icon"}/>
                               </Col>
                               <Col xs={"auto"}>
                                   <NavbarText>{` ${userId}`}</NavbarText>
                               </Col>
                           </Row>
                       </Col>
                        <Col>
                            <NavbarText onClick={()=>{
                                localStorage.removeItem("userId")
                                navigate("login")
                            }}>Log out</NavbarText>

                        </Col>
                    </Row>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavigationBar;