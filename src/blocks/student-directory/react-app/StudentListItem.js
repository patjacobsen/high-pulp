import React, {useState} from 'react';

export default function StudentListItem({post}){

	return(
		<div>
			<img src={post} alt="Avatar" style="width:100%"></img>
				<div className="container">
					<h4><b>John Doe</b></h4>
					<p>Architect & Engineer</p>
				</div>
		</div>
	)
}
