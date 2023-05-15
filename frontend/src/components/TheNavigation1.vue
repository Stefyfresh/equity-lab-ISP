<template>
    <nav class="navbar bg-inherit" role="navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img src="/images/logo-title.png">
            </a>

            <!-- TODO: CREATE HAMBURGER MENU FOR MOBILE LAYOUT -->
            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a> 
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item">
                    About
                </a>

                <a class="navbar-item">
                    Contact
                </a>

                <a class="navbar-item">
                    Study
                </a>

                <!-- <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Study
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            About
                        </a>
                        <a class="navbar-item">
                            Jobs
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Report an issue
                        </a>
                    </div>
                </div> -->
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <RouterLink :to="{name:'login'}">
                            <a class="button is-info">
                                <strong>Sign in</strong>
                            </a>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>