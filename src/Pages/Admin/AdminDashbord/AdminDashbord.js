import React from 'react'
import { useState } from 'react'
import 'react-pro-sidebar/dist/css/styles.css';
// import { Button, Container, Navbar } from 'react-bootstrap';
import { FaUserTie, FaBars } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { BsPower } from 'react-icons/bs';
import {
    BsStarFill, BsCreditCard2BackFill, BsFillHouseFill,
    BsFillCartFill, BsFillInboxesFill, BsFillGearFill
} from "react-icons/bs";
import { Button, Container, Navbar } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const AdminDashbord = () => {
    const {admin} = useAuth();
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);

    // const admin = 1;
    // const activeStyle = {
    //     fontWeight: "bold",
    //     color: "#A48484",
    // }

    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };
  return (
    <div className={`app d-flex ${toggled ? 'toggled' : ''}`}>
    <ProSidebar
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
        style={{ height: '102vh' }}
    >
        <SidebarHeader>
            <div
                style={{
                    padding: '24px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: 14,
                    letterSpacing: '1px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
            >
                Name
            </div>
        </SidebarHeader>

        <SidebarContent>
            <Menu iconShape="circle">

                <MenuItem icon={<BsFillHouseFill />}> <NavLink to={'/home'}>Home</NavLink></MenuItem>
                {!admin ?
                    (
                        <>
                            {/* <MenuItem icon={<BsFillCartFill />}> <NavLink activeStyle={activeStyle} to={`${url}/my-orders`}>My Orders</NavLink></MenuItem>
                            <MenuItem icon={<BsCreditCard2BackFill />}> <NavLink activeStyle={activeStyle} to={`${url}/payment`}>Payment</NavLink></MenuItem>
                            <MenuItem icon={<BsStarFill />}> <NavLink activeStyle={activeStyle} to={`${url}/add-review`}>Add Review</NavLink></MenuItem> */}
                        </>
                    ) : (
                        <>
                            {/* <MenuItem icon={<BsFillCartFill />}> <Link activeStyle={activeStyle} to={`admin/users`}>Manage User</Link></MenuItem> */}
                            <MenuItem icon={<BsFillCartFill />}><Link to={`makeAdmin`}>Make Admin</Link></MenuItem>
                            <MenuItem icon={<FaUserTie />}><Link to={`addService`}>Add Service</Link></MenuItem>
                            
                         
                            {/* <MenuItem icon={<BsFillInboxesFill />}> <Link activeStyle={activeStyle} to={`admin/manage-tutor-ads`}>Manage Tutor Request</Link></MenuItem> */}
                            <MenuItem icon={<BsFillInboxesFill />}><Link to={`manage-travel-books`}>Manage travel Books</Link></MenuItem>
                            <MenuItem icon={<BsFillGearFill />}><Link to={`manage-travel`}>Manage Travel</Link></MenuItem>
                        </>
                    )
                }

            </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: 'center' }}>
            <div
                className="sidebar-btn-wrapper"
                style={{
                    padding: '40px 24px',
                }}
            >
                <Button variant="danger" 
                // onClick={signOut}
                ><BsPower /> Logout</Button>
            </div>
        </SidebarFooter>
    </ProSidebar>


    <main style={{ width: '100%' }}>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <div className="d-lg-none" onClick={() => handleToggleSidebar(!toggled)}>
                        <FaBars className="mb-1 me-2" /> <span> Dashboard</span>
                    </div>
                    <div className="d-none d-lg-block" onClick={() => handleCollapsedChange(!collapsed)}>
                        <FaBars className="mb-1 me-2" /> <span> Dashboard</span>
                    </div>
                </Navbar.Brand>
            </Container>
        </Navbar>
        <section className="p-4" >
            <Outlet></Outlet>
        </section>
    </main>
</div>
  )
}

export default AdminDashbord