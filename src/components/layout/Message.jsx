import { useState, useEffect } from "react";
import bus from "../../utils/bus";

function Message() {
	const [visibility, setVisibility] = useState(false);
	const [message, setMessage] = useState("");
	const [type, setType] = useState("");

	useEffect(() => {
		bus.addListener("flash", ({ message, type }) => {
			if (type === "success") {
				setType("alert-success");
			} else {
				setType("alert-danger");
			}

			setVisibility(true);
			setMessage(message);

			setTimeout(() => {
				setVisibility(false);
			}, 3000);
		});
	}, []);

	return (
		visibility && (
			<div
				className={`col-10
                    col-lg-6
                    text-center
                    alert 
                    position-fixed
                    top-0
                    start-50
                    translate-middle-x
                    mt-2
                    z-1
                    ${type}`}
				role="alert">
				{message}
			</div>
		)
	);
}

export default Message;
