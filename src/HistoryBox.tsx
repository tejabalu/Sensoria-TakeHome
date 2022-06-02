import {
	Box,
	Text,
	Button,
	VStack,
	HStack,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
} from "@chakra-ui/react";

function HistoryBox({
	localkey,
	historyReload,
}: {
	localkey: string;
	historyReload: () => void;
}) {
	const localStorageData = localStorage.getItem(localkey);
	const activity = localStorageData ? JSON.parse(localStorageData) : {};

	return (
		<Box>
			<Box
				width="lg"
				mx="auto"
				p={12}
				borderRadius="lg"
				borderWidth="1px"
				mb={4}
			>
				<VStack spacing={4}>
					<Text fontSize="xl">{activity.activity}</Text>
					<Text fontSize="md">Type: {activity.type}</Text>
					<Text fontSize="md">
						Number of Participants: {activity.participants}
					</Text>
					<VStack align={["center", "center", "flex-end"]}>
						<HStack w={"100%"} justifyContent="space-between">
							<Text mr={4} fontSize="lg">
								Price:{" "}
								{Math.round(Number(activity.price) * 100)}
							</Text>
							<Slider
								w="200px"
								aria-label="slider-ex-1"
								value={Number(activity.price)}
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
								{Math.round(activity.accessibility * 100)}%
							</Text>
							<Slider
								w="200px"
								aria-label="slider-ex-1"
								value={activity.accessibility}
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
					<Button
						onClick={() => {
							localStorage.removeItem(localkey);
							historyReload();
						}}
					>
						Remove Item
					</Button>
				</VStack>
			</Box>
		</Box>
	);
}

export default HistoryBox;
