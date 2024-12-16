import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Beranda from './pages/beranda';
import Perumahanpage from './pages/perumahan';
import Warisan from './pages/warisan';
import Rumah from './pages/rumah';
import Adminpages from './adminpages/adminpages';
import PerumahanAdmin from './adminpages/perumahanadmin';
import Warisanbudayaadmin from './adminpages/warisanbudayaadmin';
import TambahRumah from './components/tambahrumah';
import TambahWarisan from './components/tambahwarisan';
import Login from './adminpages/loginadmin';
import Register from './adminpages/registerpage';
import ListRumah from './components/tabelrumah';
import DetailRumah from './components/detailrumah';
import DetailWarisan from './components/detailwarisan';
import TabelWarisan from './components/tabelwarisan';
import EditRumah from './components/editrumah';
import EditWarisan from './components/editwarisan';
import CardPerumahan from './components/cardrumah';
import KartuWarisan from './components/kartuwarisan';
import KartuRumah from './components/karturumah';
import CardJumlahRumah from './components/jumlahrumah';
import CardJumlahWarisan from './components/jumlahwarisan';
import LandingPage from './adminpages/landingadmin';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/perumahan" element={<Perumahanpage />} />
          <Route path="/warisan" element={<Warisan />} />
          <Route path="/rumah" element={<Rumah />} />
          <Route path="/adminpages" element={<Adminpages />} />
          <Route path="/perumahanadmin" element={<PerumahanAdmin />} />
          <Route path="/warisanbudayaadmin" element={<Warisanbudayaadmin />} />
          <Route path="/loginadmin" element={<Login />} />
          <Route path="/registerpage" element={<Register />} />
          <Route path="/tambahrumah" element={<TambahRumah />} />
          <Route path="/tambahwarisan" element={<TambahWarisan />} />
          <Route path="/detailrumah/:id" element={<DetailRumah />} />
          <Route path="/tabelrumah" element={<ListRumah />} />
          <Route path="/detailwarisan" element={<DetailWarisan/>} />
          <Route path="/tabelwarisan" element={<TabelWarisan/>} />
          <Route path="/detailwarisan/:id" element={<DetailWarisan />} />
          <Route path="/editrumah/:id" element={<EditRumah />} />
          <Route path="/editwarisan/:id" element={<EditWarisan />} />
          <Route path="/cardrumah" element={<CardPerumahan />} />
          <Route path="/kartuwarisan" element={<KartuWarisan />} />
          <Route path="/karturumah" element={<KartuRumah />} />
          <Route path="/jumlahrumah" element={<CardJumlahRumah />} />
          <Route path="/jumlahwarisan" element={<CardJumlahWarisan />} />
          <Route path="/landingadmin" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
