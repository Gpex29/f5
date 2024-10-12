import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../Components/AuthPage";
import Layout from '../Components/Layout';
import App from '../App';
import { linkToAuth, linkToMain } from '../constants/routes';

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: linkToMain,
				element: <App />,
			},
			{
				path: linkToAuth,
				element: <AuthPage />,
			}
		]
	},
]);

export default router;
