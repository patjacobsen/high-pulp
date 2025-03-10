import { createRoot } from 'react-dom/client';
import BlockApp from "./react-app/App";

//Render your React component instead
const blocks = document.querySelectorAll('.wp-block-pj-staff-directory');

blocks.forEach( block => {
	createRoot(block).render(<BlockApp/>);
})
