import React from 'react';
import{Row,Col}from 'antd'
import NavBar from '../../containers/Navbar';

const styles={
    homeContainer:{
        height:"calc(100vh-100px)",
        position:"relative",
        zIndex:0
    },
    imgFondo:{
        width:"100%",
        height:"100vh",
        objectFit:"cover"
    },
    containerInfo:{
        position:"absolute",
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        height:"100vh",
        width:"100%",
        opacity:.6,
        backgroundColor: "#000",
        top:0, 
        
    },
    containertitle:{
        top:"50%",
    },
    title:{
        color:"#fff",
        fontSize:"50px"
    }

}
function HomePage(props) {

    return (
        <div>
            <NavBar/>
            <div style={styles.homeContainer}>
                <img  style={styles.imgFondo} src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="fondo" />
                <div style={styles.containerInfo}>
                    <div style={styles.containertitle}>
                        <h1 style={styles.title}>Bienvenido al Home</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;