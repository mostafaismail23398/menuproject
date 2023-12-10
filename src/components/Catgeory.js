import React from 'react'
import { Row , Col } from 'react-bootstrap'

const Catgeory = ({filterbyCategory , allCategory}) => {
   
  const onFilter = (cat) => {
    filterbyCategory(cat)
  }
  return (
   <Row className='my-2 mb-5'>
      <Col className="justify-content-center d-flex" sm="12" >
        {
          allCategory.length >= 1 ? (allCategory.map((cat)=>{
            return(
              <div>
              <button onClick={()=>onFilter(cat)} style={{border: "1px solid #b45b34"}} className='btn mx-2'>{cat}</button>
          </div>
            )
          })) : <h4>لا يوجد اصناف</h4>
        }
        </Col>  
   </Row>
  )
}

export default Catgeory