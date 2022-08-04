import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="text-white text-center" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <ul className="p-0">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#games">Games</a></li>
            <li><a href="#selection">selection</a></li>
            <li><a href="#Schedule">Schedule</a></li>
            <li><a href="#Prizes">Rewards</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <p className="my-3">Copyright 2022 © Designed by Atul Kumar. All rights reserved.</p>
          <ul className="p-0">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}
