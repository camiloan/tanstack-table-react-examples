export const ErrorPage = () => {
	return (
		<main className="grid min-h-full w-full place-items-center px-6 py-24 sm:py-32 lg:px-8 h-screen">
			<section>
				<div className=" py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
					<div className="mx-auto max-w-screen-sm text-center">
						<h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">
							500
						</h1>
						<p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">
							Server Error
						</p>
						<p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
							Whoops, something went wrong on our servers.
						</p>
						<a
							href="/"
							className="inline-flex bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
						>
							Back to Homepage
						</a>
					</div>
				</div>
			</section>
		</main>
	)
}
