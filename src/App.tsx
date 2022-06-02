import * as React from "react";
import {
	ChakraProvider,
	Box,
	VStack,
	Grid,
	theme,
	Container,
} from "@chakra-ui/react";
import BoredBox from "./Bored";
import BoredSelectors from "./BoredSelectors";
import Footer from "./Footer";
import Nav from "./NavBar";
import History from "./History";
import { Help } from "./Help";

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
	const [history, setHistory] = React.useState(false);
	const [help, setHelp] = React.useState(false);

	const setHomePage = () => {
		setHome(true);
		setHistory(false);
		setHelp(false);
	};
	const setHistoryPage = () => {
		setHome(false);
		setHistory(true);
		setHelp(false);
	};
	const setHelpPage = () => {
		setHome(false);
		setHistory(false);
		setHelp(true);
	};

	return (
		<ChakraProvider theme={theme}>
			<Box
				// vertical flex
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"space-between"}
				fontSize="xl"
				minH={["100vh", "100vh", "100vh", "100vh"]}
			>
				<Nav
					setHome={setHomePage}
					setHistory={setHistoryPage}
					setHelp={setHelpPage}
				/>
				<Container maxW={"4xl"}>
					<Grid p={3}>
						{home && (
							<>
								<BoredSelectors
									onUrlChange={onUrlChange}
									toggleReload={toggleReload}
								/>
								<BoredBox url={url} toggleReload={reload} />
							</>
						)}
						{history && <History toggleReload={reload} />}
						{help && <Help />}
					</Grid>
				</Container>
				<Footer />
			</Box>
		</ChakraProvider>
	);
};
