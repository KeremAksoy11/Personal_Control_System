import { Outlet, Navigate } from "react-router-dom"
import { useIsLoggedIn } from "../config/hooks"
import Loading from "../components/Loading"

export default function Layout() {
    const isLoggedIn = useIsLoggedIn();

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
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <a class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" id="dropdownMenuLink"  aria-haspopup="true" aria-expanded="false" ><img src="https://freesvg.org/img/abstract-user-flat-1.png" alt="" width="35" height="35" class="d-inline-block align-text-top" /></a>

                        <ul class="dropdown-menu dropdown-menu-end"  aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Link 1</a></li>
                            <li><a class="dropdown-item" href="#">Link 2</a></li>
                            <li><a class="dropdown-item" href="#">Link 3</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Another link</a></li>
                        </ul>
                    </div>
                    <div />
                </div>
            </nav>
            <Outlet />
        </>
    )
}