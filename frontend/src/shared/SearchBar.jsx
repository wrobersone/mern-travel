import React, { useRef } from 'react'
import '../styles/style.css'
import { Col, Form, FormGroup } from 'reactstrap'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { RiMapPinTimeLine } from 'react-icons/ri'
import { BsPeople, BsSearch } from 'react-icons/bs'

const SearchBar = () => {
    const locationRef = useRef('');
    const distanceRef = useRef('');
    const guestsRef = useRef('');

    const searchHandler = () => {
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const guests = guestsRef.current.value

        if (location === '' || distance === '' || guests === '') {
            return alert('All fields are required!');
        }
    }

  return (
    <Col lg='12'>
      <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span>
                    <HiOutlineMapPin />
                </span>
                <div>
                    <h6>Location</h6>
                    <input type="text" placeholder="Where are you going?" ref={locationRef} />
                </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span>
                    <RiMapPinTimeLine />
                </span>
                <div>
                    <h6>Distance</h6>
                    <input type="number" placeholder="Distance k/m" ref={distanceRef} />
                </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group form__group-last">
                <span>
                    <BsPeople />
                </span>
                <div>
                    <h6>Guests</h6>
                    <input type="number" placeholder="0" ref={guestsRef} />
                </div>
            </FormGroup>

            <span className="search__icon" type="submit" onClick={searchHandler}>
                <BsSearch />
            </span>
        </Form>
      </div>
    </Col>
  )
}

export default SearchBar
