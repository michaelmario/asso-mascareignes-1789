<template>
  <div>
    <header class="navbar navbar-expand navbar-dark bg-dark headerUserPage ">
      <nav class="sb-topnav">
        <!-- Navbar Brand-->
        <div class="navbar-brand ps-3 text-light" >{{ store.email }}</div>
        <!-- Sidebar Toggle-->
        <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i
            class="fas fa-bars"></i></button>
        <!-- Navbar Search-->
        <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div class="input-group">
            <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..."
              aria-describedby="btnNavbarSearch" />
            <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
          </div>
        </form>
        
        <button type="button" class="btn btn-danger text-white  mx-3" @click="store.signOut">
            <i class="bi bi-box-arrow-right text-white"></i>
            </button>
      </nav>
    </header>
    <div id="layoutSidenav" :class="isOpen ? 'w-52' : 'w-225'">
      <div id="layoutSidenav_nav">
        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div class="sb-sidenav-menu">
            <div class="nav">
              <div class="sb-sidenav-menu-heading">Core</div>
              <router-link class="btn btn-ouline text-white" to="/usercredentials">
                <i class="bi bi-person-circle"></i> User Profile
            </router-link>
              <div class="sb-sidenav-menu-heading">Interface</div>
              <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts"
                aria-expanded="false" aria-controls="collapseLayouts">
                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                Layouts
                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
              </a>
              <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                data-bs-parent="#sidenavAccordion">
                <nav class="sb-sidenav-menu-nested nav">
                  <a class="nav-link" href="layout-static.html">Static Navigation</a>
                  <a class="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                </nav>
              </div>
               <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages"
                aria-expanded="false" aria-controls="collapsePages">
                <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                Pages
                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
              </a>
              <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                  <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth"
                    aria-expanded="false" aria-controls="pagesCollapseAuth">
                    Authentication
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                  </a>
                  <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordionPages">
                    <nav class="sb-sidenav-menu-nested nav">
                      <a class="nav-link" href="login.html">Login</a>
                      <a class="nav-link" href="register.html">Register</a>
                      <a class="nav-link" href="password.html">Forgot Password</a>
                    </nav>
                  </div>
                  <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError"
                    aria-expanded="false" aria-controls="pagesCollapseError">
                    Error
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                  </a>
                  <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordionPages">
                    <nav class="sb-sidenav-menu-nested nav">
                      <a class="nav-link" href="401.html">401 Page</a>
                      <a class="nav-link" href="404.html">404 Page</a>
                      <a class="nav-link" href="500.html">500 Page</a>
                    </nav>
                  </div>
                </nav>
              </div>
              <div class="sb-sidenav-menu-heading">Addons</div>
              <a class="nav-link" href="charts.html">
                <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                Charts
              </a>
              <a class="nav-link" href="tables.html">
                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                Tables
              </a>
            </div>
          </div>
          
        </nav>
      </div>
      <div id="layoutSidenav_content">
        <main>
          <div class="container-fluid mt-5">
                               
          <router-view />
          </div>
        </main>
        </div>
    </div>
  </div>
</template>

<script>

 import { useUserStore } from '@/stores/userStore'
 import { ref,watch } from 'vue';
 export default {  
  setup(){
   const store = useUserStore(); 
   const isOpen = ref(false);
   const storageIsOpen = window.localStorage.getItem('isSidebarOpen')
   watch(isOpen,()=>{
    window.localStorage.setItem('isSidebarOpen',isOpen.value)
   })
   
   return {
    store,
    isOpen,
    storageIsOpen
   
   }
  }
}
</script>
<style scoped>
.headerUserPage {
  margin-top: 90px;
  position:relative;
  z-index:10;
}

.sb-sidenav .sb-sidenav-menu .nav {
  flex-direction: column;
  flex-wrap: nowrap;
}

.sb-topnav .navbar-brand {
  width: 225px;
  margin: 0;
}

.sb-topnav {
  padding-left: 0;
  height: 56px;
  z-index: 1039;
}

.sb-sidenav .sb-sidenav-menu {
  flex-grow: 1;
}

.sb-sidenav-dark {
  background-color: #212529;
  color: rgba(255, 255, 255, 0.5);
}

.sb-sidenav {
  display: flex;
  flex-direction: column;
  height: 95%;
  flex-wrap: nowrap;
}

#layoutSidenav {
  display: flex;
  position: relative;
    /* z-index: -10; */
}

#layoutSidenav #layoutSidenav_nav {
  flex-basis: 225px;
  flex-shrink: 0;
  transition: transform 0.15s ease-in-out;
  position:relative;
  /* z-index: -10; */
  transform: translateX(-225px);
}

.nav {
  --bs-nav-link-padding-x: 1rem;
  --bs-nav-link-padding-y: 0.5rem;
  --bs-nav-link-font-weight: ;
  --bs-nav-link-color: var(--bs-link-color);
  --bs-nav-link-hover-color: var(--bs-link-hover-color);
  --bs-nav-link-disabled-color: #6c757d;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
 
}
nav{
  width:90%;
}
.sb-sidenav .sb-sidenav-menu .nav .nav-link {
  display: flex;
  align-items: center;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  position: relative;
}

.sb-sidenav .sb-sidenav-menu .nav .nav-link .sb-nav-link-icon {
  font-size: 0.9rem;
}

.sb-sidenav-dark .sb-sidenav-menu .nav-link .sb-nav-link-icon {
  color: rgba(255, 255, 255, 0.25);
}

.nav .nav-link .sb-nav-link-icon,
.sb-sidenav-menu .nav-link .sb-nav-link-icon {
  margin-right: 0.5rem;
}

.sb-sidenav .sb-sidenav-menu .nav .sb-sidenav-menu-heading {
  padding: 1.75rem 1rem 0.75rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
}

.sb-sidenav-dark .sb-sidenav-menu .sb-sidenav-menu-heading {
  color: rgba(255, 255, 255, 0.25);
}

@media (min-width: 992px) {
  #layoutSidenav #layoutSidenav_nav {
    transform: translateX(0);
  }
}
@media(max-width:768px){
  #layoutSidenav{
    flex-direction:column;

  }
  #layoutSidenav_nav{
    display:none;
  }
}
</style>