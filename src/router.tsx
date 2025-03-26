import { Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import Layout from './layout/layout';
import { ErrorPage } from './ErrorPage';
import { NotFoundPage } from './NotFoundPage';
import { EditableData } from './pages/EditableData';

export const router = createBrowserRouter([

	{
		path: "main",
		element: (
			<Suspense fallback={<div className="h-screen w-full bg-base-100 flex justify-center content-center">
				<span className="loading loading-lg " />
			</div>}>
				<Layout />
			</Suspense>
		),
		errorElement: <ErrorPage />,
		children: [
			{ path: 'editable-data', element: <EditableData /> },
			/* {
				path: "ecommerce",
				element: <EcommercePage />,
				errorElement: <ErrorPage />,
			},
			{
				path: "check-in",
				element: <CheckInPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: "analytics",
				element: <AnalyticsPage />,
				errorElement: <ErrorPage />,
			},
			
			{
				path: "",
				element: <Navigate to="ecommerce" replace />,
			}, */
		],
	},
	{
		path: "/",
		element: <Navigate to="/main" />,
	},
	{
		path: "*",
		element: <NotFoundPage />,
	},
])
