import React, {useState} from 'react';

export default function StaffListItem({post}){

	return(
		<div>
			<li>{post.title.rendered} – {post.acf.staff_position}</li>
		</div>
	)
}
