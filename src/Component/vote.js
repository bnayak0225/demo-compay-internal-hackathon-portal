import React from "react"
import unVoteIcon from "../image/like.png"
import voteIcon from "../image/heart.png"
import {Col, Row} from "reactstrap";

const Vote = ({vote, total=0, onClick}) => {
    return(
        <Row>

            <Col xs={"auto"}>
                Total vote {total}
            </Col>
            <Col xs={"auto"}>
                {
                    vote ? <img src={unVoteIcon} onClick={onClick}/> : <img src={voteIcon} onClick={onClick}/>
                }
            </Col>
        </Row>
    )
}
export default Vote