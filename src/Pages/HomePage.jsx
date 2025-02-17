import HeroImage from "../assets/images/gambar1.png";
import AboutImage from "../assets/images/gambar4.jpg";
import Prestasi1 from "../assets/images/Prestasi1.jpg";
import Prestasi2 from "../assets/images/Prestasi2.jpg";


const HomePage = () =>{
    return (
        <div className="homepages pb-10">
            <div className="container mx-auto px-4 mb-30">
                <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
                    <div className="box">
                        <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">Selamat datang di website <span className="text-sky-400 font-bold underline">UPT SATUAN PENDIDIKAN SDN TOYANING I</span></h1>
                        <p className="text-base/8 mb-7">Berprestasi, Berimtaq mengutamakan akhlak dan budi pekerti luhur serta cinta terhadap lingkungan</p>
                        <a href="#tentang kami" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">Tentang Kami <i className="ri-information-2-line ms-1:"></i></a>
                    </div>
                    <div className="box">
                        <img src={HeroImage} alt="" className="md:w-full w-[400px] mx-auto md:m-0"/>
                    </div>
                </div>

                <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 md:pt-20 pt-32 "id="tentang kami">
                    <div className="box md:order-1 order-2">
                        <img src={AboutImage} alt="" className="lg:w-[500px] w-[400px]  md:m-0 mx-auto rounded"/>
                    </div>
                    <div className="box md:order-2 order-1">
                        <h1 className="lg:text-4xl/tight text-3xl font-medium mb-7">TENTANG KAMI <span
                            className="text-sky-400 font-bold underline">UPT SATUAN PENDIDIKAN SDN TOYANING I</span>
                        </h1>
                        <p className="text-base/loose"> UPT Satuan Pendidikan SDN Toyaning I Rejoso merupakan lembaga
                            pendidikan dasar negeri yang terletak di Desa Toyaning, Kecamatan Rejoso, Kabupaten
                            Pasuruan, Provinsi Jawa Timur. Berdiri sejak tahun 1950, sekolah ini telah menjadi tonggak
                            pendidikan bagi generasi muda di wilayah tersebut. Dengan luas tanah mencapai 1.190 meter
                            persegi, SDN Toyaning I Rejoso menyediakan ruang belajar yang nyaman dan memadai untuk
                            mendukung proses pembelajaran yang efektif.</p>
                        <p className="text-base/loose"> SDN Toyaning I Rejoso menyelenggarakan pendidikan dengan sistem pagi selama enam hari dalam seminggu. Sebagai lembaga pendidikan di bawah naungan Pemerintah Daerah, sekolah ini berkomitmen untuk memberikan pendidikan berkualitas dan terjangkau bagi seluruh warga masyarakat. Hal ini terbukti dengan akreditasi B yang diraih pada tanggal 24 Oktober 2018, berdasarkan SK No. 133/BAN-S/M.35/SK/X/2018.</p>
                    </div>
                </div>

                <div className="service pt-32" id="pelayanan">
                    <h1 className=" text-center lg:text-4xl/tight text-3xl font-medium mb-2">LAYANAN</h1>
                    <p className="text-center">SDN TOYANING I</p>
                    <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        <div className="box bg-sky-400 rounded-lg shadow p-4">
                            <i className="ri-magic-line text-3xl text-white"></i>
                            <h3 className=" text-xl font-bold text-white mt-6 mb-2">PPDB ONLINE & OFFLINE</h3>
                            <p className=" text-white text-base/loose">Pendaftaran Gratis</p>
                        </div>
                        <div className="box bg-sky-400 rounded-lg shadow p-4">
                            <i className="ri-emoji-sticker-line text-3xl text-white"></i>
                            <h3 className=" text-xl font-bold text-white mt-6 mb-2">MENERAPKAN SIKAP</h3>
                            <p className=" text-white text-base/loose">Ramah & Sopan</p>
                        </div>
                        <div className="box bg-sky-400 rounded-lg shadow p-4">
                            <i className="ri-map-pin-fill text-3xl text-white"></i>
                            <h3 className=" text-xl font-bold text-white mt-6 mb-2">LOKASI</h3>
                            <p className=" text-white text-base/loose">lokasi Sekolah Mudah di jangkau</p>
                        </div>
                    </div>
                </div>

                <div className="galery pt-32" id="kegiatan">
                    <h1 className=" text-center lg:text-4xl/tight text-3xl font-medium mb-2">KEGIATAN</h1>
                    <p className="text-center">SDN TOYANING I</p>
                    <div className="galeri-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        <div className="box p-2 bg-white rounded-lg shadow">
                            <img src={Prestasi1} alt="Prestasi1" className="w-full h-[220px]"/>
                            <h3 className=" text-xl font-bold text-sky-400 mt-6 mb-2">Meraih Juara Harapan 1 Literasi - Numerasi Kelas IV Kecamatan Rejoso</h3>
                            <p className="  text-base/loose">Nama : ZAKIATUS SYIFA</p>
                        </div>
                        <div className="box p-2 bg-white rounded-lg shadow">
                            <img src={Prestasi2} alt="Prestasi2" className="w-full h-[220px]"/>
                            <h3 className=" text-xl font-bold text-sky-400 mt-6 mb-2">Meraih Juara Harapan 2 Literasi - Numerasi Kelas V Kecamatan Rejoso</h3>
                            <p className=" text-base/loose">Nama : MUKHAMMAD ASHIF RADITYA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;