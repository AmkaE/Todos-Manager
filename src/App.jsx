import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/* ---------- todos context --------- */
import { TodosProvider } from './context/TodosContext';

/* --------- react toastify --------- */
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

/* ----------- components ----------- */
import Container from './components/Container';
import Navbar from './components/Navbar';

/* -------------- pages ------------- */
import Home from './pages/home';
import Settings from './pages/settings';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import ForgotPassword from './pages/forgot-password';

const App = () => {
	return (
		<Router>
			<TodosProvider>
				<Container>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/settings' element={<Settings />} />
						<Route path='/sign-in' element={<SignIn />} />
						<Route path='/sign-up' element={<SignUp />} />
						<Route path='/forgot-password' element={<ForgotPassword />} />
					</Routes>
				</Container>
				<ToastContainer
					position='top-center'
					autoClose={1000}
					className='sm:mt-10 mt-5 px-5'
				/>
			</TodosProvider>
		</Router>
	);
};

export default App;
