import React, {useState} from "react"
import {Card, Input, Button, CardBody, Form, FormGroup, Label} from "reactstrap";
import {useNavigate} from "react-router";

const Login =()=> {
    const [user, setUser] = useState()
    const navigate= useNavigate()
    return(
        <div className={"loginPage"}>
            <Card className={"loginFrom"}>
                <CardBody>
                    <p>Login to continue</p>
                    <Form>
                        <FormGroup>
                            <Label>Enter your ID</Label>
                            <Input value={user} onChange={(e)=> setUser(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>

                                <Button color={"primary"} onClick={()=> {
                                    localStorage.setItem("userId", user)
                                    navigate("/")
                                }}>
                                    Submit
                                </Button>
                        </FormGroup>
                    </Form>
                </CardBody>

            </Card>
        </div>
    )
}
export default Login