import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

/* --------- routes protection -------- */
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import UnAuthenticatedRoutes from './components/UnAuthenticatedRoutes';

/* ------------- helpers ------------ */
import { changeThemeMode } from './helpers/changeThemeMode';

const App = () => {
	changeThemeMode('selectedOptionTheme');

	return (
		<Router>
			<Container>
				<Navbar />
				<Routes>
					{/* home route: only for authenticated users */}
					<Route path='/' element={<AuthenticatedRoutes />}>
						<Route path='/' element={<Home />} />
					</Route>
					{/* settings route: only for authenticated users */}
					<Route path='/settings' element={<AuthenticatedRoutes />}>
						<Route path='/settings' element={<Settings />} />
					</Route>
					{/* sign-in route: only for unauthenticated users */}
					<Route path='/sign-in' element={<UnAuthenticatedRoutes />}>
						<Route path='/sign-in' element={<SignIn />} />
					</Route>
					{/* sign-up route: only for unauthenticated user */}
					<Route path='/sign-up' element={<UnAuthenticatedRoutes />}>
						<Route path='/sign-up' element={<SignUp />} />
					</Route>
					{/* forgot-password route: authenticated and unauthenticated users can access to reset their password */}
					<Route path='/forgot-password' element={<ForgotPassword />} />
				</Routes>
			</Container>
			<ToastContainer
				position='top-center'
				autoClose={1000}
				className='sm:mt-10 mt-5 px-5'
			/>
		</Router>
	);
};

export default App;
