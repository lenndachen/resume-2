import React from 'react'
import Card from '../../components/SocialCard';
import boom1 from '../../../src/assets/images/boom1.jpg'
import boom2 from '../../../src/assets/images/boom2.jpg'
import ha from '../../../src/assets/images/ha.jpg'



class CardUI extends React.Component {


render() {
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={boom1}/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={ha}/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={boom2}/>
                </div>
                </div>
        </div>
    
    )
  }
}

export default CardUI;