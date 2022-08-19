import { Outlet, Navigate } from "react-router-dom"
import { useCurrentUser, useIsLoggedIn } from "../config/hooks"
import Loading from "../components/Loading"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from "react-redux"
import { logOut } from "../redux/authSlice"
import { useSelector } from "react-redux";

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
    else if (isLoggedIn === false) return <Navigate replace to="/sign-in" />

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="https://www.svgrepo.com/show/47767/exchange-personel.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                    </a>
                    <a class="navbar-brand" href="#">Personal Control System</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Personeller</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Toplantılar</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Duyurular</a>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <a class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false" ><img src="https://freesvg.org/img/abstract-user-flat-1.png" alt="" width="35" height="35" class="d-inline-block align-text-top" /></a>


                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            
                            <Button variant="black" onClick={handleShowUser}>
                            Kişisel Bilgilerim
                            </Button>
                            <Modal show={showUser} onHide={handleCloseUser}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Kişisel Bilgilerim</Modal.Title>
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

                            <li><hr class="dropdown-divider" /></li>
                            <Button variant="black" onClick={handleShowClose}>
                            Çıkış Yap
                            </Button>
                            <Modal show={showClose} onHide={handleCloseClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Çıkış Yapmak İstediğinizden Emin Misiniz?</Modal.Title>
                                </Modal.Header>
                                <Modal.Footer>
                                    <Button variant="danger" onClick={()=>
                                        
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