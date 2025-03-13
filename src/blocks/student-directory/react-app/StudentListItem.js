import React, {useState} from 'react';

export default function StudentListItem({post}){

	return(
		<div className="card">
			{/*<div>*/}
			{/*	{post.acf.student_picture}*/}
			{/*</div>*/}
				<div>
					<h3><b>{post.title.rendered}</b></h3>
					<p>{post.acf.student_program}</p>
					<p className="portfolio">{post.acf.student_portfolio}</p>
				</div>
		</div>
	)
}
