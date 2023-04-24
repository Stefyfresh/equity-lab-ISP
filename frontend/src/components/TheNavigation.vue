<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <RouterLink to="/">
                    <img src="/logo-dark.png" class="equity-lab-logo">
                </RouterLink>
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
                            <a class="button is-dark is-inverted">
                                <span>About</span>
                            </a>
                        </RouterLink>
                    </span>
                    <span class="navbar-item">
                        <RouterLink to="contact">
                            <a class="button is-dark is-inverted">
                                <span>Contact</span>
                            </a>
                        </RouterLink>
                    </span>
                    <span class="navbar-item">
                        <RouterLink to="study">
                            <a class="button is-dark is-inverted">
                                <span>Study</span>
                            </a>
                        </RouterLink>
                    </span>
                    <span class="navbar-item">
                        <RouterLink to="login">
                            <a class="button is-primary is-inverted">
                                <span>Log In</span>
                            </a>
                        </RouterLink>
                    </span>
                </div>
            </div>
        </div>
    </nav>
</template>