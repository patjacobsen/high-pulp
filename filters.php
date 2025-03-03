<?php
function pj_add_borders( $block_content = '', $block = [] ) {
	//
	$defaults = [
		'bcBorderStyle' => 'none',
		'bcPadding' => '10px',
		'bcBorderWidth' => '2px',
		'bcBorderRadius' => '5px',
		'bcBorderColor' => 'black',
 	];

	$attrs = array_merge($defaults, $block['attrs']);

	// only do this if border style is set
	if($attrs['bcBorderStyle'] !== 'none'){
		$divStyles = "
			border-style => {$attrs['bcBorderStyle']};
			padding => {$attrs['bcPadding']}px;
			border-width => {$attrs['bcBorderWidth']};
			border-radius => {$attrs['bcBorderRadius']};
			border-color => {$attrs['bcBorderColor']};
		";

		// wrap the block contents with a div with these styles
		$block_content = '<div style="'.$divStyles.'">' . $block_content . '</div>';
	}


	// return unmodified block content
	return $block_content;
}

add_filter( 'render_block', 'pj_add_borders', 10, 2 );
