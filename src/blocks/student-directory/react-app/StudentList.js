import React, {useState} from 'react';
import StudentListItem from './StudentListItem';

export default function StaffList({posts}){

	return(
		<div className="container">
			{posts.map(post => (
				<StudentListItem post={post} key={post.id}/>
			))}
		</div>
	)
}
