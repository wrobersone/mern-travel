import React, { useRef } from 'react'
import '../styles/style.css'
import { Col, Form, FormGroup } from 'reactstrap'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { RiMapPinTimeLine } from 'react-icons/ri'
import { BsPeople, BsSearch } from 'react-icons/bs'

const SearchBar = () => {
    const vacationRef = useRef('');
    const distanceRef = useRef('');
    const maxGroupSizeRef = useRef('');

    const searchHandler = () => {
        const vacation = vacationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if (vacation === '' || distance === '' || maxGroupSize === '') {
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
                    <h6>Vacation</h6>
                    <input type="text" placeholder="Where are you going?" ref={vacationRef} />
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
                    <input type="number" placeholder="0" ref={maxGroupSizeRef} />
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
