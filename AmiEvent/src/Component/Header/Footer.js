import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <footer className="text-white text-center" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <ul className="p-0">

            <li> <Link to="/Home">Home</Link></li>
            <li> <Link to="/Quizzard">Quizzard</Link></li>
            <li> <Link to="/Treasure_hunt">Treasure_hunt</Link></li>
            <li> <Link to="/code_V">code_V</Link></li>
            <li> <Link to="/Register">Register</Link></li>
            <li> <Link to="/Register">Register</Link></li>
            <li> <Link to="/Register">Register</Link></li>
          </ul>
          <p className="my-3">Copyright 2022 © Designed by Ambient. All rights reserved.</p>
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
