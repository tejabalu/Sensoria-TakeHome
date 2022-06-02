import * as React from "react";
import {
	Box,
	VStack,
	Grid,
	theme,
	Text,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Slider,
	SliderMark,
	HStack,
} from "@chakra-ui/react";
import { useEffect } from "react";

export declare interface UrlProps {
	url: string;
	toggleReload: boolean;
}

function BoredBox(props: UrlProps) {
	const [data, setData] = React.useState({
		activity: "",
		type: "",
		participants: "",
		price: "",
		accessibility: 0,
		key: 0,
		time: "",
	});

	const getNewActivity = async (url: string) => {
		const response = await fetch(url);

		const data = await response.json();
		// append time to data
		data.time = new Date().getTime().toLocaleString();
		setData(data);
		localStorage.setItem("activities" + data.key, JSON.stringify(data));
	};

	useEffect(() => {
		getNewActivity(props.url);
	}, [props.url, props.toggleReload]);

	return (
		<Box width="lg" mx="auto" p={12} borderRadius="lg" borderWidth="1px">
			<VStack spacing={8}>
				<Text fontSize="xl">{data.activity}</Text>
				<Text fontSize="lg">Type: {data.type}</Text>
				<Text fontSize="lg">
					Number of Participants: {data.participants}
				</Text>
				<VStack align={["center", "center", "flex-end"]}>
					<HStack w={"100%"} justifyContent="space-between">
						<Text mr={4} fontSize="lg">
							Price: {Math.round(Number(data.price) * 100)}
						</Text>
						<Slider
							w="200px"
							aria-label="slider-ex-1"
							value={Number(data.price)}
							min={0}
							max={1}
						>
							<SliderTrack>
								<SliderFilledTrack />
							</SliderTrack>
							<SliderThumb />
						</Slider>
					</HStack>
					<HStack w={"100%"} justifyContent="space-between">
						<Text mr={4} fontSize="lg">
							Accessibility:{" "}
							{Math.round(data.accessibility * 100)}%
						</Text>
						<Slider
							w="200px"
							aria-label="slider-ex-1"
							value={data.accessibility}
							min={0}
							max={1}
						>
							<SliderTrack>
								<SliderFilledTrack />
							</SliderTrack>
							<SliderThumb />
						</Slider>
					</HStack>
				</VStack>
			</VStack>
		</Box>
	);
}

export default BoredBox;
