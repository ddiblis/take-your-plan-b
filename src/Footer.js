import './App.css';
import React from "react"
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Row } from 'react-bootstrap';
import seal from "./wax-seal-sticker1.png"
import Button from 'react-bootstrap/Button';



function Footer() {
  return (
    <MDBFooter className='bg-l text-center text-white p-3'>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <Row align="center">
            <h4 className='text mini-title'>Lorem ipsum</h4>
            <h1 className='text less-mini-title'>Lorem ipsum dolor</h1>
          </Row>
          <Row align="center">
            <div class="h-divider margin">
              <div class="shadow"></div>
              <div class="text2"><img src={seal} /></div>
            </div>
          </Row>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' label='Email address' contrast />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn outline color='light'>
                Subscribe
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
      <MDBContainer className='p-3 pb-0'>
        <section className='mb-4'>
          <Button btn-circle size="lg" variant="outline-light">
            <MDBIcon fab icon="facebook-f" />
          </Button>{' '}
          <Button size="lg" variant="outline-light">
            <MDBIcon fab icon='twitter' size="2x" />
          </Button>{' '}
          <Button size="lg" variant="outline-light">
            <MDBIcon fab icon='instagram' size="2x" />
          </Button>{' '}
          <Button size="lg" variant="outline-light">
            <MDBIcon fab icon='linkedin-in' size="2x" />
          </Button>{' '}
          <MDBBtn size='lg' floating style={{ backgroundColor: '#ac2bac' }} href='#'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
          <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          <MDBBtn className='mx-2' tag='a' color='success' outline floating>
            <MDBIcon fas icon='star' />
          </MDBBtn>
          <MDBBtn outline color='light'>
            Light
          </MDBBtn>
        </section>
      </MDBContainer>
    </MDBFooter>
  )
}

export default Footer;