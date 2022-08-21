import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPersonal, deletePersonal } from '../redux/personalSlice'
import { usePersonalLister } from "../config/firebase"
import '../components/table.css'
import {changeDraftPersonalName,
    changeDraftPersonalSurname,
    changeDraftPersonalBirthday,
    changeDraftPersonalStartDate,
    changeDraftPersonalDepartment,
    changeDraftPersonalPhone,
    changeDraftPersonalMail
  } from "../redux/personalSlice"

  import Button from 'react-bootstrap/Button';
  import Modal from 'react-bootstrap/Modal';
  import Form from 'react-bootstrap/Form';


function Main() {
    usePersonalLister()

    const [showPersonal, setPersonal] = useState(false);

    const handleClosePersonalModal = () => setPersonal(false);
    const handleShowPersonalModal = () => setPersonal(true);

    const dispatch = useDispatch();

    const personal = useSelector((state) => state.personal.personal);

    const name = useSelector((state) => state.personal.draftPersonal.name);
    const surname = useSelector((state) => state.personal.draftPersonal.surname);
    const birthday = useSelector((state) => state.personal.draftPersonal.birthday);
    const startDate = useSelector((state) => state.personal.draftPersonal.startDate);
    const department = useSelector((state) => state.personal.draftPersonal.department);
    const phone = useSelector((state) => state.personal.draftPersonal.phone);
    const mail = useSelector((state) => state.personal.draftPersonal.mail);

    
    const handleNameChange = (e) =>{
        dispatch(changeDraftPersonalName(e.currentTarget.value))
    }

    const handleSurnameChange = (e) =>{
        dispatch(changeDraftPersonalSurname(e.currentTarget.value))
    }

    const handleBirthdayChange = (e) =>{
        dispatch(changeDraftPersonalBirthday(e.currentTarget.value))
    }
    const handleStartDateChange = (e) =>{
        dispatch(changeDraftPersonalStartDate(e.currentTarget.value))
    }
    const handleDepartmentChange = (e) =>{
        dispatch(changeDraftPersonalDepartment(e.currentTarget.value))
    }
    const handlePhoneChange = (e) =>{
        dispatch(changeDraftPersonalPhone(e.currentTarget.value))
    }
    const handleMailChange = (e) =>{
        dispatch(changeDraftPersonalMail(e.currentTarget.value))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addPersonal({name, surname, birthday, startDate, department, phone, mail}))
      }
    
    return (
        

        
        <div className="container">
            <Button className="btn btn-success" onClick={handleShowPersonalModal}>
                            Personel Ekle
            </Button>

                            { <Modal show={showPersonal} onHide={handleClosePersonalModal}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Personel Ekleme</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Label>İsim</Form.Label>
                                    <Form.Control 
                                    type ="text"
                                    name ="addPersonal"
                                    onChange={handleNameChange}
                                    value = {name}
                                    required 
                               
                                    />

                                    <Form.Label>Soy Ad</Form.Label>
                                    <Form.Control 
                                    type ="text"
                                    name ="addPersonal"
                                    onChange={handleSurnameChange}
                                    value = {surname}
                                    required 
                                    />

                                    <Form.Label>Doğum Tarihi</Form.Label>
                                    <Form.Control 
                                    type ="text"
                                    name ="addPersonal"
                                    onChange={handleBirthdayChange}
                                    value = {birthday}
                                    required 
                                
                                    />

                                    <Form.Label>İşe Başlangıç Tarihi</Form.Label>
                                    <Form.Control 
                                    type ="text"
                                    name ="addPersonal"
                                    onChange={handleStartDateChange}
                                    value = {startDate}
                                    required 
                               
                                    />

                                    <Form.Label>Bölüm</Form.Label>
                                    <Form.Control 
                                    type ="text"
                                    name ="addPersonal"
                                    onChange={handleDepartmentChange}
                                    value = {department}
                                    required 
                                    
                                    />

                                    <Form.Label>Telefon Numarası</Form.Label>
                                    <Form.Control 
                                    type ="text"
                                    name ="addPersonal"
                                    onChange={handlePhoneChange}
                                    value = {phone}
                                    required 
                                   
                                    />


                                    <Form.Label>Mail</Form.Label>
                                    <Form.Control 
                                    type ="text"
                                    name ="addPersonal"
                                    onChange={handleMailChange}
                                    value = {mail}
                                    required 
                              
                                    />
                                    <Form.Group>
                                        <Button variant="success" onClick={handleClosePersonalModal} type="submit">Personeli Ekle</Button>
                                    </Form.Group>
                                </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="danger" onClick={handleClosePersonalModal}>
                                        Kapat
                                    </Button>
                                </Modal.Footer>
                            </Modal> }

            <button onClick={() => dispatch(addPersonal())}>Ekle</button>
            <table>
                <thead>
                    <tr>
                        <th>İsim</th>
                        <th>Soy İsim</th>
                        <th>Doğum Tarihi</th>
                        <th>Başlangıç</th>
                        <th>Bölüm</th>
                        <th>Telefon Numarası</th>
                        <th>E Posta</th>
                        <th>Sil</th>
                    </tr>
                </thead>
            {personal.map((personal) =>
               
                    <tbody>
                        <tr>
                            <td>{personal.name}</td>
                            <td>{personal.surname}</td>
                            <td>{personal.birthday}</td>
                            <td>{personal.startDate}</td>
                            <td>{personal.department}</td>
                            <td>{personal.phone}</td>
                            <td>{personal.mail}</td>
                            <a  href={() => false} onClick={() => dispatch(deletePersonal(personal.id))}>

                                <img src="https://img.icons8.com/fluency/344/delete-forever.png" alt="" width="55" height="50" className="d-inline-block align-text-top" />
                             
                            </a>
                        </tr>
                    </tbody>
            
            )}
            </table>
        </div>
    );
}

export default Main;
