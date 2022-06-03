import * as React from "react";
import { useCallback } from "react";
import {
	HStack,
	Button,
	Select,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
	VStack,
	Text,
} from "@chakra-ui/react";

export declare interface BoredSelectorsProps {
	onUrlChange: (url: string) => void;
	toggleReload: () => void;
}

function BoredSelectors(props: BoredSelectorsProps) {
	const [Filter, setFilter] = React.useState("None");

	const setUrlActivity = useCallback(
		(e: { target: { value: any } }) => {
			props.onUrlChange("activity/?type=" + e.target.value);
		},
		[props.onUrlChange]
	);

	const setUrlParticipants = useCallback(
		(e: { target: { value: string } }) => {
			props.onUrlChange("activity/?participants=" + e.target.value);
		},
		[props.onUrlChange]
	);

	const toggleReload = useCallback(() => {
		props.toggleReload();
	}, [props.toggleReload]);

	const ActivityFilter = (
		<HStack>
			<Text>Activity:</Text>
			<Select onChange={setUrlActivity} placeholder="Any">
				<option value="education">Education</option>
				<option value="recreational">Recreational</option>
				<option value="social">Social</option>
				<option value="diy">Diy</option>
				<option value="charity">Charity</option>
				<option value="cooking">Cooking</option>
				<option value="relaxation">Relaxation</option>
				<option value="music">Music</option>
				<option value="busywork">Busywork</option>
			</Select>
		</HStack>
	);
	const TypeFilter = (
		<HStack>
			<Text>Number of Participants:</Text>
			<NumberInput
				defaultValue={1}
				min={1}
				max={5}
				onChange={(valueString: string) => {
					setUrlParticipants({ target: { value: valueString } });
				}}
			>
				<NumberInputField />
				<NumberInputStepper>
					<NumberIncrementStepper />
					<NumberDecrementStepper />
				</NumberInputStepper>
			</NumberInput>
		</HStack>
	);

	return (
		<VStack spacing={6}>
			<Button onClick={toggleReload}>Get New Activity</Button>
			<HStack>
				<Text>Filter: </Text>
				<Select
					defaultValue="None"
					onChange={(e: {
						target: { value: React.SetStateAction<string> };
					}) => {
						setFilter(e.target.value);
					}}
				>
					<option>None</option>
					<option>Activity</option>
					<option>Number of Participants</option>
				</Select>
			</HStack>

			{Filter === "Activity" ? ActivityFilter : null}
			{Filter === "Number of Participants" ? TypeFilter : null}
		</VStack>
	);
}

export default BoredSelectors;
