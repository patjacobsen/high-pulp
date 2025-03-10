<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
/**
 * Variables WP gives us
 * @var array $attributes Array of block attributes
 */
$query = new WP_Query([
	'post_type' => 'student',
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
				<h3  style="font-size: 1.5em"><?= get_the_title()?></h3>
				<div className="program" style="">Program: <?= get_post_meta(get_the_ID(), 'student_program', true); ?></div>
				<div className="linkedin" style="">
					<a href=<?= get_post_meta(get_the_ID(), 'student_linkedin', true); ?> >LinkedIn</a>
				</div>
				<div className="portfolio" style="">
					<a href=<?= get_post_meta(get_the_ID(), 'student_portfolio', true); ?> > <?=get_the_title()?>'s Portfolio Site</a>
				</div>
			</div>
		</div>
	</div>
<?php endwhile; ?>
</p>
