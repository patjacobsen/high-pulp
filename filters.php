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
			border-style: {$attrs['bcBorderStyle']};
			padding:  {$attrs['bcPadding']}px;
			border-width:  {$attrs['bcBorderWidth']}px;
			border-radius:  {$attrs['bcBorderRadius']}px;
			border-color:  {$attrs['bcBorderColor']};
		";

		// wrap the block contents with a div with these styles
		$block_content = '<div style="'.$divStyles.'">' . $block_content . '</div>';
	}


	// return unmodified block content
	return $block_content;
}

add_filter( 'render_block', 'pj_add_borders', 10, 2 );

add_filter( 'block_type_metadata', function($metadata){
	$additionalMetadata =[
		'attributes' => [
			'bcBorderStyle' => ['type' => 'string'],
			'bcPadding' => ['type' => 'number'],
			'bcBorderWidth' => ['type' => 'number'],
			'bcBorderRadius' => ['type' => 'number'],
			'bcBorderColor' => ['type' => 'string'],
		]
	];

	return array_merge_recursive($metadata, $additionalMetadata);
});
