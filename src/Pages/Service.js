import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import s from "./home.module.css";

export const Service = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className={s.wrapperPage}>
            <Container className={s.conteinerPages}>
                <h1>LEISTUNGEN</h1>
                <hr />
                <div>Leistungen bbbbbb bbbbbbbbbbbbbbb bbbbbbbbbbb</div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Leistungen</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum, culpa.
                            </td>
                            <td>35 </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum, culpa.
                            </td>
                            <td>35 </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum, culpa.
                            </td>
                            <td>35 </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum, culpa.
                            </td>
                            <td>35 </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum, culpa.
                            </td>
                            <td>35 </td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum, culpa.
                            </td>
                            <td>35 </td>
                        </tr>{" "}
                        <tr>
                            <td>7</td>
                            <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum, culpa.
                            </td>
                            <td>35 </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum, culpa.
                            </td>
                            <td>35 </td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum, culpa.
                            </td>
                            <td>35 </td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum, culpa.
                            </td>
                            <td>35 </td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum, culpa.
                            </td>
                            <td>35 </td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Illum, culpa.
                            </td>
                            <td>35 </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};
