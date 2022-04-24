import { Button } from "react-bootstrap";
import Appbar from "../components/Appbar";
import Content from "../components/Content";
import Footer from "../components/Footer";

function Informasi() {
    return(
        <div className="App">
   <Appbar />
   <Content>
       <h3>Informasi Umum</h3>
       <h4>Bukti Permulaan</h4><hr></hr>
       <p>adalah keadaan, perbuatan, dan atau bukti berupa keterangan, tulisan, atau benda yang dapat memberikan petunjuk adanya dugaan kuat bahwa bidang perpajakan yang dilakukan oleh siapa saja yang dapat menimbulkan kerugian pada pendapatan negara</p>
       <h4>Pemeriksaan Bukti Permulaan</h4><hr></hr>
        <p>Adalah pemeriksaan yang dilakukan untuk mendapatkan bukti permulaan tentang adanya dugaan telah terjadi tindak pidana di bidang perpajakan</p>     
        <h4>Penanggung Pajak</h4><hr></hr>
        <p>Adalah orang pribadi atau badan yang bertanggung jawab atas pembayaran pajak termasuk wakil yang menjalankan hak dan memenuhi kewajiban wajib pajak sesuai dengan ketentuan perpajakan</p>
       <h4>Pembukuan</h4><hr></hr>
        <p>Adalah suatu proses pencatatan yang dilakukan secara teratur untuk mengumpulkan data dan informasi keuangan yang meliputi harta kewajiban modal, penghasilan dan biaya serta jumlah harga perolehan dan penyerahan barang atau jasa, yang ditutup dengan menyusun laporan keuangan berupa neraca, dan laporan laba rugi untuk periode tahun pajak tersebut.</p>
       <h4>Penelitian</h4><hr></hr>
       <p>adalah serangkaian kegiatan yang dilakukan untuk menilai kelengkapan pengisian surat pemberitahuan dan lampiran-lampiran termasuk penilaian tentang kebenaran penulisan dan perhitungannya</p>
       <h4>Penyidik</h4><hr></hr>
       <p>Adalah pejabat pawai negeri sipil tertentu di lingkungan Ditjen pajak yang diberi wewenang khusus sebagai penyidik untuk melakukan penyidikan tindak pidana di bidang perpajakan sesuai dengan ketentuan</p>
   </Content>
   <Footer />
   </div>
    )
}

export default Informasi;