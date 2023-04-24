<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand navbar-height">
                <h1 class="title"><a class="navbar-item has-text-danger navbar-text has-text-weight-bold"
                        href="index.html">Equity Lab</a></h1>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu topheight">
                <div class="navbar-end">
                    <span class="navbar-item">
                        <RouterLink to="about">
                            <a class="button is-dark is-inverted" href="landing.html">
                                <span>About</span>
                            </a>
                        </RouterLink>
                    </span>
                    <span class="navbar-item">
                        <RouterLink to="about">
                            <a class="button is-dark is-inverted" href="landing.html">
                                <span>About</span>
                            </a>
                        </RouterLink>
                    </span>
                    <span class="navbar-item">
                        <RouterLink to="login">
                            <a class="button is-primary is-inverted">
                                <span>About Us</span>
                            </a>
                        </RouterLink>
                    </span>
                </div>
            </div>
        </div>
    </nav>
</template>