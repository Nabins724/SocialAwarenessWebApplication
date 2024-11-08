import React from 'react'
import NavBar from "../pages/home/NavBar.jsx";


const heading = {
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    borderBottom: '2px solid #ccc',
    paddingBottom: '10px',
    backgroundColor: '#467599',

};

const para = {
    fontSize: '1.2em', 
    lineHeight: '1.6', 
    color: '#666', 
    textAlign: 'justify', 
    margin: '20px 0', 
    padding: '0 10px', 
    backgroundColor: '#', 
    borderRadius: '5px', 
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    paddingLeft: '200px',
    paddingRight: '200px',

};
const aboutus = () => {
    return (

        <div>
            <NavBar />
            <h1 style={heading} > About Us</h1>
            <h2 style={heading}>Who we are</h2>
            <p style={para}>we believe in people being able to make a positive impact on the world. Our application give platform  to make people aware of the essential cause in this society, and make change by supporting and give their opinion, so they could change what they wish. We want to create a community where people like you can connect, come together and support the campaigns that move their hearts."</p>
            <h2 style={heading}>Our Vision</h2>
            <p style={para}>Our mission is to enable individuals to raise voice for wrong, raise awareness for important social cause and provide small businesses platform to make new customer and promote their business. We are on a mission to connect individuals with their passions and small businesses with customers who care about shopping local or fair-trade.</p>
            <h2 style={heading}>What we do</h2>
            <p style={para}>Raise Awareness for Social Causes: we give platform where user can create a profile and join a campaign they are interested in, to raise awareness by giving their opinion whether it is related to environment, social justices etc.

                Support Small Businesses:  create opportunity for small business owner to connected to customer by create their profile and promote their product and services.</p>
            <h2 style={heading}>why we are different</h2>
            <p style={para}>What makes our platform so unique is that it fuses social activism with business promotion. We know small businesses often have a social cause, like sustainability or ethical / local practices. we give opportunity to individual and small business to help each other and grow together.</p>
        </div>
    )
}

export default aboutus