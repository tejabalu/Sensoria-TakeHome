import * as React from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import BoredBox from "./Bored";
import BoredSelectors from "./BoredSelectors";
import Footer from "./Footer";
import Nav from "./NavBar";
import History from "./History";

export const App = () => {
	const [url, setUrl] = React.useState(
		"https://www.boredapi.com/api/activity/"
	);
	const onUrlChange = (url: string) => {
		setUrl(url);
		console.log(url);
	};
	const [reload, setReloadSwitch] = React.useState(false);

	const toggleReload = () => {
		setReloadSwitch(!reload);
	};

	const [home, setHome] = React.useState(true);
	const setHomePage = () => {
		setHome(true);
	};
	const setHistoryPage = () => {
		setHome(false);
	};

	return (
		<ChakraProvider theme={theme}>
			<Box fontSize="xl">
				<Nav setHome={setHomePage} setHistory={setHistoryPage} />
				<Grid mt={16} minH={"80vh"} p={3}>
					<VStack spacing={8}>
						{/* show home if home is true, show history if history is true */}
						{home ? (
							<>
								<BoredSelectors
									onUrlChange={onUrlChange}
									toggleReload={toggleReload}
								/>
								<BoredBox url={url} toggleReload={reload} />
							</>
						) : (
							<History toggleReload={reload} />
						)}
					</VStack>
				</Grid>
				<Footer />
			</Box>
		</ChakraProvider>
	);
};
