import React from 'react';
import logo from './logo.svg';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
  useHistory,
  ImageBackground,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div className="nav">
          <ul>
            <li><Link to="/beranda">BERANDA</Link></li>
            <li><Link to="/mapel">DAFTAR MATA PELAJARAN</Link></li>
            <li><Link to="/mulaibelajar">PELAJARAN DIMULAI</Link></li>
            <li><Link to="/profil">PROFIL</Link></li>
            <AuthButton />
          </ul>

          <Switch>
            <Route path="/beranda">
              <Beranda />
            </Route>
            <Route path="/mapel">
              <Mapel />
            </Route>
            <PremiumRoute path="/mulaibelajar">
              <Mulaibelajar />
            </PremiumRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profil">
              <Profil />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();
  return fakeAuth.isAuthenticated ? (
    <p>
      Selamat! Anda Bisa Mengikuti Pelajaran Ongoing{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/mulaibelajar"));
        }}
      >
        Sign Out
      </button>
    </p>
  ) : (
      <p></p>
    );
}

// kegunaan fungsi ini adalah sebagai halaman(konten) di situs yang aktif.
function Beranda() {
  return (
    <div className="container">
      <div>
        <h2 align="center">MARI BELAJAR</h2>
        <div>
          <img src={require("./img/guru.png")} alt="" width="1000" height="700"></img>
        </div><br />
        <h4>Selamat Datang ! website ini berisi tentang beberapa list mata pelajaran sekolah.</h4>
      </div>
    </div>
  );
}

function Mapel() {
  return (
    <div>
      <h2 align='center'>Buku Mata Pelajaran</h2><br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div>
              <img src={require("./img/ips.jpg")} alt="" width="300" height="auto"></img>
              <p className='Caption'>Ilmu Pengetahuan Sosial</p>
              <p1>"Pendidikan Ilmu Pengetahuan Sosial Berdasarkan kebutuhan akan pengembangan sumber daya manusia tersebut, khususnya kebutuhan terhadap calon guru mata pelajaran IPS di sekolah/ madrasah dan kebutuhan dunia usaha.</p1><br />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div>
              <img src={require("./img/bahasa indonesia.jpg")} alt="" width="300" height="auto"></img>
              <p className='Caption'>Bahasa indonesia</p>
              <p1>"Bahasa Indonesia", adalah bahasa Melayu yang dijadikan sebagai bahasa resmi Republik Indonesia dan bahasa persatuan bangsa Indonesia. Bahasa Indonesia diresmikan penggunaannya setelah Proklamasi Kemerdekaan Indonesia, tepatnya sehari sesudahnya, bersamaan dengan mulai berlakunya konstitusi.</p1>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div>
              <img src={require("./img/bahasa inggris.jpg")} alt="" width="300" height="435"></img>
              <p className='Caption'>Bahasa Inggris</p>
              <p1>"Bahasa Inggris", adalah bahasa Jermanik yang pertama kali dituturkan di Inggris pada Abad Pertengahan Awal dan saat ini merupakan bahasa yang paling umum digunakan di seluruh dunia.</p1>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div>
              <img src={require("./img/bahasa jawa.jpg")} alt="" width="300" height="430"></img>
              <p className='Caption'>Bahasa Jawa</p>
              <p1>“Bahasa Jawa”, adalah bahasa Austronesia yang utamanya dituturkan oleh penduduk bersuku Jawa di wilayah bagian tengah dan timur pulau Jawa. Bahasa Jawa juga dituturkan oleh diaspora Jawa di wilayah lain di Indonesia, seperti di Sumatra dan Kalimantan; serta di luar Indonesia seperti di Suriname, Belanda, dan Malaysia..</p1>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div><br />
              <img src={require("./img/informatika.jpg")} alt="" width="300" height="430"></img>
              <p className='Caption'>Informatika</p>
              <p1>"Informatika", adalah ilmu komputer yaitu data maupun informasi pada mesin berbasis komputasi. Disiplin ilmu ini mencakup beberapa macam bidang, termasuk di dalamnya: sistem informasi, ilmu komputer, ilmu informasi, teknik komputer dan aplikasi informasi dalam sistem informasi manajemen.</p1>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div><br />
              <img src={require("./img/ipa.jpg")} alt="" width="300" height="430"></img>
              <p className='Caption'>Ilmu Pengetahuan Alam</p>
              <p1>"Ilmu Pengetahuan Alam",  adalah istilah yang digunakan yang merujuk pada rumpun ilmu di mana obyeknya adalah benda-benda alam dengan hukum-hukum yang pasti dan umum, berlaku kapan pun dan di mana pun. Orang yang menekuni bidang ilmu pengetahuan alam disebut sebagai Saintis.</p1>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div><br />
              <img src={require("./img/matematika.jpg")} alt="" width="300" height="430"></img>
              <p className='Caption'>Matematika</p>
              <p1>“Matematika”, adalah Matematika atau sebelumnya disebut ilmu hisab adalah ilmu yang mempelajari hal-hal seperti besaran, struktur, ruang, dan perubahan.</p1>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div><br />
              <img src={require("./img/seni budaya.jpg")} alt="" width="300" height="430"></img>
              <p className='Caption'>Seni Budaya</p>
              <p1>"Seni Budaya", adalah cabang seni yang membentuk karya seni dengan media yang bisa ditangkap mata dan dirasakan dengan rabaan. Kesan ini diciptakan dengan mengolah konsep titik, garis, bidang, bentuk, volume, warna, tekstur, dan pencahayaan dengan acuan estetika.</p1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Login() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/mulaibelajar" } };
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div className="container">
      <div>
        <h2 align="center">Klik tombol dibawah untuk mengikuti "Pembelajaran"</h2><br />
        <button className="info" onClick={login}>Ayo Mulai Belajar</button> {" "}
      </div>
    </div>
  );
}

function Mulaibelajar() {
  return (
    <div>
      <h2 align='center'>Pembelajaran Dimulai</h2><br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div>
              <img src={require("./img/guru matematika.png")} alt="" width="1800" height="600"></img>
              <div></div>
              <h4 align='center'>"Pembelajaran Berlangsung", seorang guru Matemamtika yang sedang menjelaskan materi didepan.</h4>
            </div>

            <div>
              <img src={require("./img/guru1.jpg")} alt="" width="1800" height="600"></img>
              <div></div>
              <h4 align='center'>"Pembelajaran Berlangsung", seorang guru Bahasa Indonesia menjelaskan tentang Kata Majemuk adalah gabungan dua kata (morfem) dasar yang pada akhirnya memiliki makna baru. Bentuk kata ini akan dengan mudah teman-teman temukan dalam pelajaran Bahasa Indonesia selain kalimat majemuk kalimat majemuk. Namun, teman-teman harus jeli untuk membedakannya dengan frasa sebab keduanya berbeda jenis.</h4>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

function PremiumRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

function Profil() {
  return (
    <div className="container">
      <div>
        <body>
          <h2 align="">PROFIL</h2>
          <div class=''>
            <div class="ccol-lg-3 col-md-4 col-sm-3 col-xs-12">
            </div>
            <div class="col-md-8 kertas-biodata">
              <div class="biodata">
                <table width="150%" border="100">
                  <div class="card">
                    <table class="table">
                      <tbody>
                        <tr>
                          <th scope="row"></th>
                          <th>Nama</th>
                          <td>:</td>
                          <td>Nor Wahid Hidayad Ulloh</td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <th>TTL</th>
                          <td>:</td>
                          <td>Sragen, 8 Maret 1999</td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <th>Jenis Kelamin</th>
                          <td>:</td>
                          <td>Laki-Laki</td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <th>Alamat</th>
                          <td>:</td>
                          <td>Candi Plosorejo Gondang Sragen</td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <th>No. Hp</th>
                          <td>:</td>
                          <td>085333005636</td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <th>Status</th>
                          <td>:</td>
                          <td>Mahasiswa</td>
                          <td></td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <th>Nim</th>
                          <td>:</td>
                          <td>1641720157</td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <th>Hobi</th>
                          <td>:</td>
                          <td>Olahraga</td>
                        </tr>
                        <tr>
                          <th scope="row"></th>
                          <th>Email</th>
                          <td>:</td>
                          <td>wahidhidayat3899@gmail.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </table>
              </div>
            </div>
          </div>
        </body>
        <footer>
          <p>Kelas TI-3A</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
