import { Outlet, Navigate } from "react-router-dom"
import { useCurrentUser, useIsLoggedIn } from "../config/hooks"
import Loading from "../components/Loading"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux"
import { logOut } from "../redux/authSlice"
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

export default function Layout() {

    const currentUser = useCurrentUser()
    const isLoggedIn = useIsLoggedIn();

    const [showUser, setShowUser] = useState(false);

    const handleCloseUser = () => setShowUser(false);
    const handleShowUser = () => setShowUser(true);

    const [showClose, setShowClose] = useState(false);

    const handleCloseClose = () => setShowClose(false);
    const handleShowClose = () => setShowClose(true);

    const dispatch = useDispatch();

    const name = useSelector((state) => state.auth.name)


    if (isLoggedIn === null) return <Loading />;
    else if (isLoggedIn === false) return <Navigate replace to="/admin-sign-in" />

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href={() => false}>
                        <img src="https://www.svgrepo.com/show/47767/exchange-personel.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    </a>
                    <a className="navbar-brand" href={() => false}>Personel Yönetim Sistemi</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/"}>
                                    <a className="nav-link active" aria-current="page" href={() => false}>Personeller</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/Meeting"}>
                                    <a className="nav-link" href={() => false}>Toplantılar</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/Announcements"}>
                                    <a className="nav-link" href={() => false}>Duyurular</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <a className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" href={() => false} role="button" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false" ><img src="https://freesvg.org/img/abstract-user-flat-1.png" alt="" width="35" height="35" className="d-inline-block align-text-top" /></a>


                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">

                            <Button variant="black" onClick={handleShowUser}>
                                Yönetici Bilgilerim
                            </Button>

                            <Modal show={showUser} onHide={handleCloseUser}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Yönetici Bilgilerim</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    İsim: {name}
                                    <hr />
                                    Email:  {currentUser.email}
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="danger" onClick={handleCloseUser}>
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