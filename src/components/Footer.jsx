const Footer = () =>{
    return (
        <nav className="footer bg-sky-400 shadow mt-20" id="sosial">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <p className="py-4">&copy;Copyright By: <span className="font-bold">IrfanDev1997</span></p>
                <div className="sosial-footer flex items-center sm:gap-7 gap-2">
                    <i className=" ri-instagram-fill text-2xl"></i>
                    < i className="ri-youtube-fill text-2xl"></i>
                    <i className="ri-whatsapp-fill text-2xl"></i>
                </div>
            </div>
        </nav>
    )
}
export default Footer;