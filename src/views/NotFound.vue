<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-12">
        <h1 class="text-center">404 - Page Not Found</h1>
        <p class="text-center">The page you are looking for does not exist.</p>
        <p class="text-center"><a href="/">Go back to the homepage</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Mascareignes 1789 - Page Not Found',
    meta: [
      { 
        name: 'description', 
        content: 'Association Mascareignes 1789'         
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Page Not Found'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Page Not Found'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Achille Michael Mario'
      },
      
      {
        hid: 'manifest',
        name: 'manifest',
        href:'./favicon_io/site.webmanifest'
      }
     
      
    ]


  }
};
</script>