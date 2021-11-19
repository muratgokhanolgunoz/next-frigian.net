/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Container, Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import Link from "next/link";

const Navbar = () => {
    return (
        <div id="navbar">
            <BootstrapNavbar bg="light" expand="lg">
                <Container>
                    <BootstrapNavbar.Brand>
                        <Link href="/sarici2021">
                            <a>
                                <img src="../assets/img/logo.png" alt="" />
                            </a>
                        </Link>
                    </BootstrapNavbar.Brand>
                    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                    <BootstrapNavbar.Collapse id="basic-navbar-nav">
                        <Nav className={`me-auto`}>
                            <Link href="/sarici2021/blogs">BLOGS</Link>
                            <Link href="/sarici2021/careers">CAREERS</Link>
                            <Link href="/">BACK TO HOME</Link>
                        </Nav>
                    </BootstrapNavbar.Collapse>
                </Container>
            </BootstrapNavbar>
            <br />
            <br />
        </div>
    );
};
export default Navbar;
