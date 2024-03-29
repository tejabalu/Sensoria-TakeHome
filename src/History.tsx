import { Text, VStack } from "@chakra-ui/react";
import React from "react";
import HistoryBox from "./HistoryBox";

const initialkeylist = Object.keys(localStorage).filter((key) =>
	key.includes("activities")
);
// sort the list by time
const sortedkeylist = initialkeylist.sort((a, b) => {
	if (localStorage.getItem(a) && localStorage.getItem(b)) {
		const aTime = localStorage.getItem(a);
		const bTime = localStorage.getItem(b);
		if (aTime && bTime) {
			const aDate = new Date(aTime);
			const bDate = new Date(bTime);
			return bDate.getTime() - aDate.getTime();
		}
	}
	return 0;
});

function History({ toggleReload }: { toggleReload: boolean }) {
	const [historyReload, setHistoryReload] = React.useState(false);
	const [keylist, setKeyList] = React.useState(sortedkeylist);

	React.useEffect(() => {
		setHistoryReload(!historyReload);
	}, [toggleReload, historyReload]);

	// update keylist when new activity is added
	React.useEffect(() => {
		const newkeylist = Object.keys(localStorage).filter((key) =>
			key.includes("activities")
		);
		setKeyList(newkeylist);
	}, [toggleReload, historyReload]);

	const historyReloadSwitch = () => {
		setHistoryReload(!historyReload);
	};

	return (
		<VStack>
			<Text mt={12} fontSize="4xl" fontWeight="bold">
				History
			</Text>
			{keylist.map((key) => {
				return (
					<HistoryBox
						localkey={key}
						historyReload={historyReloadSwitch}
					/>
				);
			})}
		</VStack>
	);
}

export default History;
