import React from 'react'
import { Col } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
        <Col sm='12' className='justify-content-center text-center'>
            <div className='title'>
                    قائمة الطعام
            </div>
            <div className='justify-content-center d-flex' >
            <p className='underline '></p>
            </div>
        </Col>
    </div>
  )
}
export default Header