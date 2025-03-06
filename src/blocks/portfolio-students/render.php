<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
$query = new WP_Query([
	'post_type' => 'portfolio_students',
	'orderby' => 'program',
	'order' => 'ASC',
])
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php while( $query->have_posts() ) : $query->the_post(); ?>
	<div className="flip-card">
		<div className="flip-card-inner">
			<div className="flip-card-front">
				<?= get_the_post_thumbnail(); ?>
			</div>
			<div className="flip-card-back" style="">
				<h3 className="name" style=""><?= get_the_title()?></h3>
				<div className="program" style=""><?= get_post_meta(get_the_ID(), 'staff_position', true); ?></div>
				<div className="linkedin" style=""><?= get_post_meta(get_the_ID(), 'staff_position', true); ?></div>
				<div className="portfolio" style=""><?= get_post_meta(get_the_ID(), 'staff_position', true); ?></div>
			</div>
		</div>
	</div>
<?php endwhile; ?>
</p>
