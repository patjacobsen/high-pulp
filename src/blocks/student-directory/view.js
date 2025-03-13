
import {createRoot} from "react-dom/client";
import BlockApp from "../student-directory/react-app/App";

const blocks = document.querySelectorAll('.wp-block-pj-staff-directory');

blocks.forEach( block => {
	createRoot(block).render(<BlockApp/>);
})
