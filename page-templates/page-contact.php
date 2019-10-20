<?php
/**
* Template Name: Contact Template
*/
?>

<?php get_header(); ?>

<!-- Main page -->
<div id="primary" class="content-area">
   <main id="main" class="site-main" role="main">
      <?php if( have_posts()):the_post(); ?>

        <!--  Post Here -->

      <?php else: ?>
         <!--  No Post -->
      <?php endif; ?>
   </main>
</div>
<!-- Main page -->

<?php get_footer(); ?>
