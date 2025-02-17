import {useEffect, useState} from 'react';


const Navbar = () =>{
        const [tampil, setTampil] = useState(false);
        const [scroll, setScroll] = useState(false);

        const handleClick = () =>{
                setTampil(!tampil);
        };

        let menuActive = tampil ? "left-0" : "left-full";

        useEffect(() => {
                window.addEventListener("scroll", () =>{
                        if(window.scrollY > 5){
                                setScroll(true);
                                setTampil(false)
                        }else  {
                                setScroll(false);
                        }
                });
        });

        let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";

        return (
            <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
                    <div className="container mx-auto px-4 ">
                            <div className="navbar-box flex items-center justify-between">
                                    <div className="navbar-logo">
                                            <h1 className="sm:text-2xl text-xl font-bold" >SDN TOYANING I</h1>
                                    </div>
                                    <ul className={`flex lg:12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}>
                                            <li className="flex items-center gap-3">
                                                    <i className="ri-home-8-line text-3xl md:hidden block"></i>
                                                    <a href="#home" className="ri-home-8-line font-medium opacity-75 hover:text-sky-400">Beranda</a>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                    <i className="ri-information-2-line text-3xl md:hidden block"></i>
                                                    <a href="#tentang kami" className="ri-information-2-line font-medium opacity-75 hover:text-sky-400">Tentang Kami</a>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                    <i className="ri-shake-hands-line text-3xl md:hidden block"></i>
                                                    <a href="#pelayanan" className="ri-shake-hands-line font-medium opacity-75 hover:text-sky-400">Layanan</a>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                    <i className="ri-group-line text-3xl md:hidden block"></i>
                                                    <a href="#kegiatan" className="ri-group-line font-medium opacity-75 hover:text-sky-400">Kegiatan</a>
                                            </li>
                                    </ul>
                                    <div className="social flex items-center gap-2">
                                            <a href="#"
                                               className=" bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all">Daftar
                                                    Sekarang</a>
                                            <i className="ri-menu-3-line text-3xl md:hidden block" onClick={handleClick}></i>
                                    </div>
                            </div>
                    </div>
            </div>
        )
}
export default Navbar;
