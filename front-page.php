<?php get_header(); ?>

<!-- Main page -->
<div id="primary" class="content-area">
   <main id="main" class="site-main" role="main">
      <?php if( have_posts()):the_post(); ?>

           <div class="container py-5">
              <div class="row">
                  <div class="col-12 col-md-12">
                     <h1 class="with-main-label"><?php the_title(); ?></h1>
                  </div>
                  <div class="col-12 col-md-12">
                       <?php the_content(); ?>
                  </div>
              </div>
           </div>

      <?php endif; ?>
   </main>
</div>
<!-- Main page -->

<?php get_footer(); ?>
