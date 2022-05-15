/* This example requires Tailwind CSS v2.0+ */
import { useState, useEffect } from "react";
import {
	MicrophoneIcon,
	MinusCircleIcon,
	PlusCircleIcon,
	MailIcon,
	TrashIcon,
} from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";
const sortObjectsArray = require("sort-objects-array");

const applications = [
	{
		id: uuidv4(),
		name: "Hassan Sheikh Mohamud",
		count: 0,
		imageUrl: "2.jpg",
	},
	{
		id: uuidv4(),
		name: "Mohamed Abdullahi Farmajo",
		count: 0,
		imageUrl: "3.jpeg",
	},
];

export default function ListImage() {
	const [presidentList, setPresidentList] = useState([]);
	const [updated, setUpdated] = useState(false);

	useEffect(() => {
		saveToLocalStorage();
	}, []);

	useEffect(() => {
		if (JSON.parse(window.localStorage.getItem("som_president"))) {
			setPresidentList(
				sortObjectsArray(
					JSON.parse(window.localStorage.getItem("som_president")),
					"count",
					"desc"
				)
			);
		} else {
			setPresidentList(applications);
		}
	}, [updated]);

	const saveToLocalStorage = () => {
		if (!JSON.parse(window.localStorage.getItem("som_president"))) {
			window.localStorage.setItem(
				"som_president",
				JSON.stringify(applications)
			);
		}
	};

	const addCount = (user) => {
		var foundIndex = presidentList.findIndex((x) => x.id == user);
		presidentList[foundIndex].count = presidentList[foundIndex].count + 1;
		setPresidentList(sortObjectsArray(presidentList, "count", "desc"));
		window.localStorage.setItem("som_president", JSON.stringify(presidentList));
		setUpdated(!updated);
	};

	const removeCount = (user) => {
		var foundIndex = presidentList.findIndex((x) => x.id == user);
		presidentList[foundIndex].count >= 1 &&
			(presidentList[foundIndex].count = presidentList[foundIndex].count - 1);
		setPresidentList(sortObjectsArray(presidentList, "count", "desc"));
		window.localStorage.setItem("som_president", JSON.stringify(presidentList));
		setUpdated(!updated);
	};

	const resetAll = () => {
		if (window.confirm("Are you sure to reset ?")) {
			window.localStorage.removeItem("som_president");
			setUpdated(!updated);
		}
	};

	return (
		<div className="bg-white shadow overflow-hidden sm:rounded-md mt-6  sm:mx-auto sm:w-full sm:max-w-md divide-y divide-gray-200">
			<button
				onClick={() => resetAll()}
				type="button"
				className="my-6 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#d13131] hover:bg-[#d13131] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d13131]">
				<TrashIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
				Masax Dhamman Xogta
			</button>
			<ul role="list" className="divide-y divide-gray-200">
				{presidentList.length > 0 &&
					presidentList.map((application) => (
						<li key={application.id}>
							<a href={application.href} className="block hover:bg-gray-50">
								<div className="flex items-center px-4 py-4 sm:px-6">
									<div className="min-w-0 flex-1 flex items-center">
										<div className="flex-shrink-0">
											<img
												className="h-12 w-12 rounded-full"
												src={application.imageUrl}
												alt=""
											/>
										</div>
										<div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
											<div>
												<p className="text-sm font-medium text-indigo-600">
													{application.name}
												</p>
												<p className="mt-2 flex items-center text-sm text-gray-500">
													<MicrophoneIcon
														className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
														aria-hidden="true"
													/>
													<span className="truncate text-lg font-bold">
														{application.count}
													</span>
												</p>
											</div>
										</div>
									</div>
									<div>
										<PlusCircleIcon
											className="h-8 w-8 text-green-400 cursor-pointer"
											aria-hidden="true"
											onClick={() => addCount(application.id)}
										/>
										<MinusCircleIcon
											className="h-8 w-8 text-red-400 cursor-pointer"
											aria-hidden="true"
											onClick={() => removeCount(application.id)}
										/>
									</div>
								</div>
							</a>
						</li>
					))}
			</ul>
		</div>
	);
}
