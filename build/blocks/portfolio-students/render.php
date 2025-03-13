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
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php while( $query->have_posts() ) : $query->the_post(); ?>
	<div className="">
		<div className="student">
			<div className="spicture">
				<?= get_the_post_thumbnail(); ?>
			</div>
			<div className="">
				<h3  style="font-size: 1.5em"><?= get_the_title()?></h3>
				<div className="program">Program: <?= get_post_meta(get_the_ID(), 'student_program', true); ?></div>
				<div className="linkedin">
					<a href=<?= get_post_meta(get_the_ID(), 'student_linkedin', true); ?> >LinkedIn</a>
				</div>
				<div className="portfolio">
					<a href=<?= get_post_meta(get_the_ID(), 'student_portfolio', true); ?> > <?=get_the_title()?>'s Portfolio Site</a>
				</div>
			</div>
		</div>
	</div>
<?php endwhile; ?>
</div>
