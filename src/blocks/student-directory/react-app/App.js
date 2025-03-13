import React, {useEffect, useState} from 'react';
import StudentList from "./StudentList";
import {TextControl} from "@wordpress/components";

export default function BlockApp(props){
	let [keyword, setKeyword] = useState('');
	let [student, setStudent] = useState([])
	let[filteredStudents, setFilteredStudents] = useState([]);

	useEffect(() => {
		fetch('/wp-json/wp/v2/student')
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setStudent(data);
				setFilteredStudents(data);
			})
	}, []); //<-- []defines when or how often the hook is run

	function filterStudents(keyword){
		//If there was a ton of records, I would do an ajax call here
		const results = student.filter(student => {
			return student.title.rendered.toLowerCase().includes(keyword.toLowerCase());
		})

		setKeyword(keyword);
		setFilteredStudents(results);
	}

	return(
		<div>
			<div>
				<label>
					Search:
					<input type="text"
						   value={keyword}
						   onChange={e => filterStudents(e.target.value)}
					/>
				</label>
				<br/>
				<TextControl
					label="Search"
					value={keyword}
					onChange={keyword => filteredStudents(keyword)}
				/>
			</div>
			<StudentList posts={filteredStudents}/>
		</div>
	)
}
