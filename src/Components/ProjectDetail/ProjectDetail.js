import React from 'react';
import {useParams} from 'react-router-dom';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Slider from '../Slider/Slider';
import './ProjectDetail.css'
const projects=[
    {
        id: 1,
        projectName: 'G.Chair',
        summary: 'A gaming chair selling website with separate admin and user dashboard. Admin can add products, remove products, manage orders by changing status, make another person admin. User can view his/her cart can delete his orders or pay it. User has option to give review.',
        technology: 'React JS, Node JS, Firebase, Express JS, Mongo DB, React Router v-6',
        duration: '4 Days',
        client: 'https://github.com/razon1494/Gaming-Chair',
        server: 'https://github.com/razon1494/Gaming-Chair-Server',
        live: 'https://gamers-chair.web.app/home',
        img: ['https://i.ibb.co/rt5Wg34/Screenshot-86.png',
        'https://i.ibb.co/RDg3Dnr/Screenshot-87.png',
            'https://i.ibb.co/BZWMk7G/Screenshot-88.png',
        'https://i.ibb.co/72gGwYN/slider2.png',
        'https://i.ibb.co/VLRS0mF/Screenshot-94.png',
            'https://i.ibb.co/7RjGMNm/Screenshot-89.png',
            'https://i.ibb.co/nnNR7qY/Screenshot-90.png',
            'https://i.ibb.co/KqX7Dv0/Screenshot-91.png',
            'https://i.ibb.co/cDC9kFf/Screenshot-92.png',
            'https://i.ibb.co/M8X5HbD/Screenshot-93.png'

        ],
        points: [
            'On the landing page Home Page has an slider showing some energetic photos with qoutes.',
            'After the slider 6 of our most popular chair shown.',
            'We also have a section to contact us and get wholesale price.',
            'To access other options users must have to be logged in',
            'In the purchase page user can book his/her desired chair.',
            'User Dashboard user will see 3 different routes',
            'Customer can pay his/her bill in this segment',
            'Customer can See his/her own Orders in My Orders segment, he/she can also delete orders there.',
            'Customer can give a review us with rating in Review segment',
            'Admin Dashboard Admin will see all the orders in this route/section',
            'Admin can delete the order and change the status pending to shipped here.',
            'Admin can add a new chair product from this section.',
            'Admin can creat another admin by email',
            'Admin can delete any existing products here',
        ],
    },
    {
        id: 2,
        projectName: 'SeaKers',
        summary: 'A tour planner website with some special routes. User can view all tour packages, can book a packages. Confirm booking implemneted. User can delete his/her booked package. Most excitingly user can custom his own tour by adding new tour individually.',
        duration: '2 Days',
        technology: 'React JS, Node JS, Firebase, Express JS, Mongo DB, HTML, CSS.',
        client: 'https://github.com/razon1494/Seakers-Client',
        server: 'https://github.com/razon1494/Seakers-Server',
        live: 'https://free-run-travels.web.app/home',
        img: ['https://i.ibb.co/fvbrzXj/Screenshot-97.png',
            'https://i.ibb.co/Y048YCt/Screenshot-98.png',
        'https://i.ibb.co/6PwNMVv/Screenshot-99.png',
        'https://i.ibb.co/yshR9nJ/slide1.png',
        'https://i.ibb.co/S5NTXN5/Screenshot-100.png',
        'https://i.ibb.co/dMH0DJm/Screenshot-101.png',
        'https://i.ibb.co/mv033S1/Screenshot-102.png',
        'https://i.ibb.co/7jRDGK4/Screenshot-95.png',
        'https://i.ibb.co/N1gxVVg/Screenshot-96.png'
        ],
        points: [
            'On the landing page Home Page has an slider showing some energetic photos with qoutes so that people encourged to go byond.',
            'After the slider All the tour packages listed',
            'We also show our regular offer or discount packages on home page to get marketing value.',
            'To access other options users must have to be logged in',
            'In this page we also branding our luxary trips below',
            'There is an arrow button to go another page for confirming the trip',
            'In the Admin Dashboard user will see all the orders from all users',
            'User can approve pending orders',
            'User also can delete the order',
            'In the Add Tour page user can custom or add a new tour',
            'Admin can add a new chair product from this section.',
        ],
    },
    {
        id: 3,
        projectName: 'Cure & Care',
        summary: 'A diagonestic center website. In this website user can login and order any diagonestic tests. There are private route to order the service. As well as some more routes like about us, appointment booking and join us segment has been implemented. Work is still under progress',
        duration: '2 Days',
        technology: 'React JS, Node JS, Firebase, Express JS, Mongo DB, HTML, CSS.',
        client: 'https://github.com/razon1494/care-cure',
        server: 'https://github.com/razon1494/care-cure',
        live: 'https://health-care-assignment-10.web.app/',
        img: [        'https://i.ibb.co/2t2FvB8/Screenshot-108.png',
            'https://i.ibb.co/cQ4bbxx/Screenshot-103.png',

            'https://i.ibb.co/zGdLBLr/Screenshot-104.png',
        'https://i.ibb.co/GVs2GDW/slide3.png',
        'https://i.ibb.co/K6TtnbB/Screenshot-105.png',

'https://i.ibb.co/PYHx0Gd/Screenshot-106.png',
        'https://i.ibb.co/Hz0cgfX/Screenshot-107.png'
        ],
        points: [
            'In this website user can sign up & login using thei email password or google account.',
            'in this website user can sign up & login using thei email password or google account.',
            'user can toggle login sign up.',
            'In the landing page you will get an overview of our institutions.',

            'At top all our address and contact information is given in home page.',
            'Then a menu bar with all routings.',
            'In the premimum courses page All of our services listed.',
            'You can see details by clicking the details button.',
            'There are two extra part one is for hiring ambulance and other is to contact us.',
            'In The about page you will know about the mission and visions of our organization.',
            'Steps are shown how to book a doctor appointment.',
            'Job advertisements are shown in this page.',
        ],
    }
]
const ProjectDetail=() => {
    const params=useParams();
    const {id}=params;
    const site=projects[id-1];
    const {projectName, summary, client, server, live, img, points, technology}=site;
    return (
        <div>
            <NavBar></NavBar>
            <div className="container mt-4">

              <div className='d-flex justify-content-center align-items-center'>
            <div className="details-head row">
            <div className="details-slider col-md-7">
                <Slider img={img} ></Slider>
            </div>
                <div className="details-heading col-md-5">
            <h2 className='title-project'>{projectName}</h2>
                            <h5 className='summary'>{summary}</h5>
                            <a href={live} target='blank'> <button className='button-27'> Live Website</button></a> <br /> <br />
            <a href={client} target='blank'> <button className='button-27'>Github Server Side</button>  </a> <br /> <br />
            <a href={server} target='blank'><button className='button-27'>Github Server Side</button></a>
            <br /> <br />
             </div></div></div>
                <br /> <br />
                <h2 className='tech my-5'>{projectName} website was built using {technology}</h2>
                <h1 className='projects-title my-5'> More Details About The Website</h1>
            <ul className='lists'>
                {
                    points.map(point =><div className='text-start my-4 list'><i class="fas fa-hand-point-right d-inline"></i> <li className='text-start d-inline'>{point}</li></div> )
                }
                </ul>

            </div>
            <Footer/>

        </div>
    );
};

export default ProjectDetail;