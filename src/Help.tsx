import {
	Box,
	Container,
	Flex,
	Image,
	ListItem,
	Text,
	UnorderedList,
	VStack,
} from "@chakra-ui/react";
import React from "react";

export const Help = () => {
	return (
		<Container>
			<VStack spacing={4} alignItems="left">
				<Text
					textAlign={"center"}
					w={"100%"}
					fontSize="4xl"
					fontWeight={"bold"}
				>
					Help
				</Text>
				<Box pt={8} w={"100%"}>
					<Image margin={"auto"} rounded={8} w="100%" src="img.jpg" />
				</Box>
				<Text>
					This is a simple app that will generate random activities
					for you to do.
				</Text>
				<UnorderedList>
					<Text>You can do the following in this app:</Text>
					<ListItem>
						Filter your activities based on the type of activity you
						want.
					</ListItem>
					<ListItem>
						Filter based on the number of participants required.
					</ListItem>
					<ListItem>View your history of activities.</ListItem>
					<ListItem>Switch to light and dark modes.</ListItem>
				</UnorderedList>
				<Text>Thanks for visiting!</Text>
			</VStack>
		</Container>
	);
};
