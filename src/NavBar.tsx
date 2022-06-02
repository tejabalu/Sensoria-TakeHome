import {
	Box,
	Flex,
	Button,
	useColorModeValue,
	Stack,
	useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Nav({
	setHome,
	setHistory,
}: {
	setHome: () => void;
	setHistory: () => void;
}) {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
				<Flex
					h={16}
					alignItems={"center"}
					justifyContent={"space-between"}
				>
					<Flex
						padding={2}
						w={200}
						justifyContent={"space-between"}
						alignItems={"center"}
					>
						<Button
							onClick={() => {
								setHome();
							}}
						>
							Home
						</Button>
						<Button
							onClick={() => {
								setHistory();
							}}
						>
							History
						</Button>
					</Flex>
					<Flex alignItems={"center"}>
						<Stack direction={"row"} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === "light" ? (
									<MoonIcon />
								) : (
									<SunIcon />
								)}
							</Button>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}
