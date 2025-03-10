import React, {useEffect, useState} from 'react';
import StaffList from "./StaffList";
import {TextControl} from "@wordpress/components";

export default function BlockApp(props){
	let [keyword, setKeyword] = useState('');
	let [staff, setStaff] = useState([])
	let[filteredStaff, setFilteredStaff] = useState([]);

	useEffect(() => {
		fetch('/wp-json/wp/v2/staff')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setStaff(data);
				setFilteredStaff(data);
			})
	}, []); //<-- []defines when or how often the hook is run

	function filterStaff(keyword){
		//If there was a ton of records, I would do an ajax call here
		const results = staff.filter(person => {
			return person.title.rendered.toLowerCase().includes(keyword.toLowerCase());
		})

		setKeyword(keyword);
		setFilteredStaff(results);
	}

	return(
		<div>
			<div>
				<label>
					Search:
					<input type="text"
						   value={keyword}
						   onChange={e => filterStaff(e.target.value)}
					/>
				</label>
				<br/>
				<TextControl
					label="Search"
					value={keyword}
					onChange={keyword => filteredStaff(keyword)}
					/>
			</div>
			<StaffList posts={filteredStaff}/>
		</div>
	)
}
