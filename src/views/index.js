import { useState } from "react";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Index() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    return (
        <>
            <nav className="sticky top-0 w-full bg-white shadow-sm z-50 px-5">
                <div className="container mx-auto flex items-center justify-between p-4 lg:p-0">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img className="w-[50px] h-[50px] sm:w-[75px] sm:h-[75px]" src="/fat_racoon.png"
                             alt="Logo"/>
                    </div>

                    {/* Menu icon for mobile */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <IoClose className="w-8 h-8"/> : <IoMenu className="w-8 h-8"/>}
                        </button>
                    </div>

                    {/* Links and search bar for larger screens */}
                    <div className="hidden lg:flex items-center space-x-5">
                        <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500}
                                    className="font-medium text-lg sm:text-xl hover:text-secondary transition duration-300 ease-in-out">
                            Inicio
                        </ScrollLink>
                        <ScrollLink to="about-us" spy={true} smooth={true} offset={-70} duration={500}
                                    className="font-medium text-lg sm:text-xl hover:text-secondary transition duration-300 ease-in-out">
                            Nosotros
                        </ScrollLink>
                        <div className="relative flex items-center text-gray-500">
                            <IoSearch className="absolute ml-3 w-5 h-5"/>
                            <input
                                type="text"
                                name="search"
                                placeholder="Buscar..."
                                className="w-full sm:w-40 lg:w-56 py-2 pl-10 pr-3 font-semibold text-black placeholder-gray-500 rounded-lg border-none ring-2 ring-gray-300"
                            />
                        </div>
                        {!user ? (
                            <>
                                <Link
                                    to="/login"
                                    className="text-dark_complementary font-semibold bg-white border-2 border-secondary py-2 px-3 rounded-lg hover:bg-complementary hover:border-complementary hover:text-white transition duration-500 ease-in-out"
                                >
                                    Iniciar sesión
                                </Link>
                                <Link
                                    to="/sign-up"
                                    className="text-white font-semibold bg-secondary border-2 border-secondary py-2 px-3 rounded-lg hover:bg-white hover:border-complementary hover:text-dark_complementary transition duration-500 ease-in-out"
                                >
                                    Crear cuenta
                                </Link>
                            </>
                        ) : (
                            <>
                                <p className="font-medium text-lg sm:text-xl">¡Hola {user.name}!</p>
                                <button
                                    onClick={logout}
                                    className="text-white font-semibold bg-secondary border-2 border-secondary py-2 px-3 rounded-lg hover:bg-white hover:border-complementary hover:text-dark_complementary transition duration-500 ease-in-out"
                                >
                                    Cerrar sesión
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div
                        className="absolute top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center p-8 space-y-6 text-center shadow-lg lg:hidden">
                        {/* Close button */}
                        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-700">
                            <IoClose className="w-8 h-8"/>
                        </button>

                        <ScrollLink
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="w-full py-4 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            Inicio
                        </ScrollLink>
                        <ScrollLink
                            to="about-us"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="w-full py-4 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            Nosotros
                        </ScrollLink>
                        <div className="w-full flex items-center justify-center relative text-gray-500">
                            <IoSearch className="absolute left-3 w-5 h-5"/>
                            <input
                                type="text"
                                name="search"
                                placeholder="Buscar..."
                                className="w-full py-2 pl-10 pr-3 font-semibold text-black placeholder-gray-500 rounded-lg border-none ring-2 ring-gray-300"
                            />
                        </div>
                        {!user ? (
                            <>
                                <Link
                                    to="/login"
                                    className="w-full py-3 text-dark_complementary font-semibold bg-white border-2 border-secondary rounded-lg hover:bg-complementary hover:border-complementary hover:text-white transition duration-500 ease-in-out"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Iniciar sesión
                                </Link>
                                <Link
                                    to="/sign-up"
                                    className="w-full py-3 text-white font-semibold bg-secondary border-2 border-secondary rounded-lg hover:bg-white hover:border-complementary hover:text-dark_complementary transition duration-500 ease-in-out"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Crear cuenta
                                </Link>
                            </>
                        ) : (
                            <>
                                <p className="font-medium text-lg sm:text-xl">¡Bienvenido {user.name}!</p>
                                <button
                                    onClick={() => {
                                        logout();
                                        setIsOpen(false);
                                    }}
                                    className="w-full py-3 text-white font-semibold bg-secondary border-2 border-secondary rounded-lg hover:bg-white hover:border-complementary hover:text-dark_complementary transition duration-500 ease-in-out"
                                >
                                    Cerrar sesión
                                </button>
                            </>
                        )}
                    </div>
                )}
            </nav>

            <body>
            <section id="home" className="px-5">
                <div className="flex flex-col lg:flex-row items-center justify-around mt-20 lg:mt-40 mb-16 lg:mb-32">
                    <div className="text-center lg:text-left w-full lg:w-1/2 items-center">
                        <h1 className="text-4xl lg:text-6xl font-bold">
                            Descubre un mundo donde la basura sigue siendo una basura.
                        </h1>
                        <p className="mt-6 lg:mt-10 text-xl lg:text-3xl">
                            Trash es una aplicación basura la cual cambiará la forma en que veas tu basura a una visión más inserbible sobre tu basura.
                        </p>
                    </div>
                    <img src="https://static.vecteezy.com/system/resources/previews/012/774/589/large_2x/the-garbage-can-is-packed-with-garbage-and-waste-untimely-removal-of-garbage-in-populated-areas-photo.JPG"
                         className="h-64 w-80 sm:h-[300px] sm:w-[400px] lg:h-[400px] lg:w-[600px] rounded-3xl mt-5 lg:mt-0" alt={""}/>
                </div>
            </section>

            <section id="about-us" className="px-5">
                <div
                    className="flex flex-col lg:flex-row items-center lg:h-1/2 justify-around mt-16 lg:mt-32 mb-16 lg:mb-32">
                    <img src="https://static.wixstatic.com/media/6afd1b_6330011140ab4ffbb05d184069f148b0~mv2.jpg/v1/fill/w_980,h_818,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/6afd1b_6330011140ab4ffbb05d184069f148b0~mv2.jpg"
                         className="h-64 w-80 sm:h-[300px] sm:w-[400px] lg:h-[470px] lg:w-[600px] rounded-3xl mb-5 lg:mb-0" alt={""}/>
                    <div className="text-center lg:text-left w-full lg:w-1/2 items-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-left">Nosotros</h1>
                        <p className="mt-6 lg:mt-10 text-lg lg:text-2xl text-justify">
                        Trash surge de una idea basura, resultado de varias ideas desechables que formaron una aplicación... 
                        literalmente basura.
                        No entendemos por qué a nuestro público le encanta este contenido, si es una total basura. A pesar 
                        de no aportar creatividad, tenemos millones de usuarios consumiendo esto.
                        Estamos confundidos al presentar una aplicación que define lo que es "basura", 
                        diseñada para llenar tu espacio y ofrecerte algunas preferencias de llenado, mientras elevas tu lag a 
                        un nuevo nivel.
                        </p>
                    </div>
                </div>
            </section>
            </body>
        </>
    )
}