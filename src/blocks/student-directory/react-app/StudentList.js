import React, {useState} from 'react';
import StudentListItem from './StudentListItem';

export default function StaffList({posts}){

	return(
		<card>
			{posts.map(post => (
				<StudentListItem post={post} key={post.id}/>
			))}
		</card>
	)
}
