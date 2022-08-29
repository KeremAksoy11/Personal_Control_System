import { Outlet, Navigate } from "react-router-dom"
import { useCurrentUser, useIsLoggedIn } from "../config/hooks"
import Loading from "../components/Loading"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux"
import { logOut } from "../redux/authSlice"
import { Link } from 'react-router-dom'
import emailjs from "emailjs-com"

export default function UserLayout() {

    const currentUser = useCurrentUser()
    const isLoggedIn = useIsLoggedIn();



    const [showUser, setShowUser] = useState(false);

    const handleCloseUser = () => setShowUser(false);
    const handleShowUser = () => setShowUser(true);

    const [showClose, setShowClose] = useState(false);

    const handleCloseClose = () => setShowClose(false);
    const handleShowClose = () => setShowClose(true);


    const [showEmail, setShowEmail] = useState(false);
    const handleCloseEmail = () => setShowEmail(false);
    const handleShowEmail = () => setShowEmail(true);

    const dispatch = useDispatch();

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_mof9i8g', 'template_1dygfz7', e.target, 'EFkWzF8H1URHxm76t')
            .then((result) => {
                console.log(result.text);
                alert('Mail Başarıyla Gönderildi.')
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

    }



    if (isLoggedIn === null) return <Loading />;
    else if (isLoggedIn === false) return <Navigate replace to="/sign-in" />

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href={() => false}>
                        <img src="https://www.svgrepo.com/show/47767/exchange-personel.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    </a>
                    <a className="navbar-brand" href={() => false}>Personel Bilgilendirme Sistemi</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/personalMain"}>
                                    <a className="nav-link active" aria-current="page" href={() => false}>Personeller</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/personalMeeting"}>
                                    <a className="nav-link" href={() => false}>Toplantılar</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/personalAnnouncements"}>
                                    <a className="nav-link" href={() => false}>Duyurular</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <a className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" href={() => false} role="button" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false" ><img src="https://freesvg.org/img/abstract-user-flat-1.png" alt="" width="35" height="35" className="d-inline-block align-text-top" /></a>


                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">

                            <Button variant="black" onClick={handleShowUser}>
                                Bilgilerim
                            </Button>

                            <Modal show={showUser} onHide={handleCloseUser}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Personel Bilgilerim</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Email:  {currentUser.email}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="danger" onClick={handleCloseUser}>
                                        Kapat
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <hr />
                            <Button variant="black" onClick={handleShowEmail}>
                                Mail Gönder
                            </Button>

                            <Modal show={showEmail} onHide={handleCloseEmail}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Email Gönder</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form onSubmit={sendEmail}>
                                        <div className="row pt-5 mx-auto">

                                            <div class="input-group">
                                                <input type="email" className="form-control" placeholder="Mail" required
                                                    name="email" value={currentUser.email} />
                                            </div>

                                            <div class="input-group">
                                                <input type="text" className="form-control" placeholder="İsim" name="name" required />
                                            </div>

                                            <div class="input-group">
                                                <input type="text" className="form-control" placeholder="Mail Başlığı" required name="subject" />
                                            </div>
                                            <div class="input-group">
                                                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Mesajınız" name="message" required />
                                                <br />
                                            </div>

                                            <div class="col text-center">
                                                <input type="submit" onClick={handleCloseEmail} className="btn btn-info" value="Mesajı Gönder" />
                                            </div>
                                        </div>
                                    </form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="danger" onClick={handleCloseEmail}>
                                        Kapat
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            <li><hr className="dropdown-divider" /></li>
                            <Button variant="black" onClick={handleShowClose}>
                                Çıkış Yap
                            </Button>

                            <Modal show={showClose} onHide={handleCloseClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Çıkış Yapmak İstediğinizden Emin Misiniz?</Modal.Title>
                                </Modal.Header>
                                <Modal.Footer>
                                    <Button variant="danger" onClick={() =>

                                        dispatch(logOut())}>
                                        Evet
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </ul>
                    </div>
                    <div />
                </div>
            </nav>
            <Outlet />
        </>
    )
}