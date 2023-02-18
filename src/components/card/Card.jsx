import "./Card.css"
import Card from 'react-bootstrap/Card';
import {Image} from "react-bootstrap";

const Main = (props) => {

const  { photographer,src} = props

  return (
    <>    
      <Card className="cards" border="light"  style={{ width: '18rem' }}>
        <Card.Header className="baslik"   >{photographer}</Card.Header>

        <div className="divv">
        <Image src={src.large} className="imgCard" ></Image>
        </div>

      </Card>
      <br />
      
    </>
  )
}

export default Main
