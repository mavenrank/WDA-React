import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaAmazon } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { TbLogin2 } from "react-icons/tb";
const NavBar = () => {
    const cities = [
        "Tokyo",
        "Delhi",
        "Shanghai",
        "São Paulo",
        "Mexico City",
        "Cairo",
        "Mumbai",
        "Beijing",
        "Dhaka",
        "Osaka",
        "New York",
        "Karachi",
        "Buenos Aires",
        "Chongqing",
        "Istanbul",
        "Kolkata",
        "Manila",
        "Lagos",
        "Rio de Janeiro",
        "Tianjin",
        "Kinshasa",
        "Guangzhou",
        "Los Angeles",
        "Moscow",
        "Shenzhen",
        "Lahore",
        "Bangalore",
        "Paris",
        "Bogotá",
        "Jakarta",
        "Chennai",
        "Lima",
        "Bangkok",
        "Seoul",
        "Nagoya",
        "Hyderabad",
        "London",
        "Tehran",
        "Chicago",
        "Chengdu",
        "Nanjing",
        "Wuhan",
        "Ho Chi Minh City",
        "Luanda",
        "Ahmedabad",
        "Kuala Lumpur",
        "Xi'an",
        "Hong Kong",
        "Dongguan",
        "Hangzhou",
        "Foshan",
        "Shenyang",
        "Riyadh",
        "Baghdad",
        "Santiago",
        "Surat",
        "Madrid",
        "Suzhou",
        "Pune",
        "Harbin",
        "Houston",
        "Dallas",
        "Toronto",
        "Dar es Salaam",
        "Miami",
        "Belo Horizonte",
        "Singapore",
        "Philadelphia",
        "Atlanta",
        "Fukuoka",
        "Khartoum",
        "Barcelona",
        "Johannesburg",
        "Saint Petersburg",
        "Qingdao",
        "Dalian",
        "Washington",
        "Yangon",
        "Alexandria",
        "Jinan",
    ];
    const randomIndex = Math.floor(Math.random() * cities.length);
    const randomCity = cities[randomIndex];

    return (
        <>
            <div className="navbar">
                <div className="logo-delivery">
                    <Link to="/">
                        <button className="amazon-btn">
                            <FaAmazon className="logo" />
                        </button>
                    </Link>
                    <div className="delivery">
                        <FaMapLocationDot className="geo-logo" />
                        <div className="delivering-to-city">
                            <p className="delivering-to">Delivering to </p>
                            <p className="random-city">{randomCity}</p>
                        </div>
                    </div>
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        name="search-bar"
                        id="search-bar"
                        placeholder="Search Amazon"
                    />
                </div>
                <div className="navlinks-section">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
                <div className="login">
                    <Link to="/login">
                        <button className="login-button">Login</button>
                    </Link>
                    <TbLogin2 className="login-logo" />
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default NavBar;
