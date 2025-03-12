<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
/**
 * Variables WP gives us
 * @var array $attributes Array of block attributes
 */
$query = new WP_Query([
	'post_type' => 'staff',
	'orderby' => 'title',
	'order' => 'ACS',
]);
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php while( $query->have_posts() ) : $query->the_post(); ?>
		<div className="flip-card">
			<div className="flip-card-inner">
				<div className="flip-card-front">
					<?= get_the_post_thumbnail(); ?>
				</div>
				<div className="flip-card-back" style="background-color: <?= $attributes['cardColor'] ?>">
					<h3 className="name" style="color: <?= $attributes['headingColor'] ?>"><?= get_the_title()?></h3>
					<div className="position" style="color: <?= $attributes['textColor'] ?>"><?= get_post_meta(get_the_ID(), 'staff_position', true); ?></div>
					<div className="bio" style="color: <?= $attributes['textColor'] ?>">
						<p><?= get_post_meta(get_the_ID(), 'staff_bio', true); ?></p>
					</div>
				</div>
			</div>
		</div>
	<?php endwhile; ?>
</div>
