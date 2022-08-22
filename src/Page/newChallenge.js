import React, {useState} from "react"
import {Container, FormGroup, Input, Label, Button} from "reactstrap";
import NavigationBar from "../Component/navbar";
import Select from 'react-select'
import {useNavigate} from 'react-router-dom';
const NewChallenge = () => {
    const navigate = useNavigate()
    const options = [
        { value: 'ai', label: 'AI' },
        { value: 'web', label: 'Web App' },
        { value: 'android', label: 'Android' },
        { value: 'ios', label: 'iOS' },
    ]
    const [input, setInput] = useState({title: "", description: "", tag: []})
    const handleOnChange =(e)=> {
        setInput({...input, [e.target.name]: [e.target.value]})
    }
    const [error, setError] = useState()
    const userId = localStorage.getItem("userId")
    return(
        <>
            <NavigationBar/>
            <Container className={"newChallenge"}>
                <FormGroup>
                    <Label>Enter title</Label>
                    <Input name={"title"} value={input["title"]} onChange={handleOnChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Enter description</Label>
                    <Input name={"description"} value={input["description"]} onChange={handleOnChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Select tech tag</Label>
                    <Select options={options} onChange={(value)=>
                        setInput({...input,
                            tag: value.map((data) => {
                                return (data.value)
                            })
                        })
                    } isMulti/>
                </FormGroup>
                <FormGroup>
                    <Button color={"primary"} onClick={()=> {

                        console.log(input["title"], input["description"], input["tag"]);
                        if(input["title"] && input["description"] && input["tag"].length > 0){
                            let hackathonData = JSON.parse(localStorage.getItem("hackathonTable"))
                            hackathonData.push({...input, user: userId, vote: {}})
                            console.log(hackathonData);
                            localStorage.setItem("hackathonTable", JSON.stringify(hackathonData))
                            navigate("/")
                        }
                        else {
                            setError("Please fill all inputs")
                        }
                    }}>Save</Button>
                </FormGroup>
                <h5 style={{color: "red"}}>{error}</h5>
            </Container>

        </>
    )
}
export default NewChallenge