import "./Main.css"
import Card from "../card/Card"
import { Col, Container, Row} from "react-bootstrap";
import data from"../../ultis/data"

const Main = () => {

  return (

    <Container className="" > 
      <h1 className="text-center albums" >Albums</h1>
      <Row className="gap-5 cont">
        {data.map((props)=>{
          return(
            <Col>
            <Card {...props}  />
            </Col>
          )
        })}     


      </Row> 
      
    </Container>
  )
}
export default Main
