import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "@/routes";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";

const queryClient = new QueryClient();

const App = () => (
	<MantineProvider>
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<BrowserRouter>
					<Routes>
						{routes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								element={
									route.layout ? (
										<route.layout>
											<route.element />
										</route.layout>
									) : (
										<route.element />
									)
								}
							/>
						))}
					</Routes>
				</BrowserRouter>
			</TooltipProvider>
		</QueryClientProvider>
	</MantineProvider>
);

export default App;
