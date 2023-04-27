<template>
    <div class="columns is-gapless">
        <div class="column is-3">
            <div class="box profile-sidebar">
                <aside class="menu is-hidden-mobile">
                    <h1 class="title">
                        <RouterLink to="/">
                            <img src="/logo-dark.png" class="equity-lab-logo">
                        </RouterLink>
                    </h1>
                    <div class="card-image has-text-centered block">
                        <figure class="image is-128x128 is-inline-block">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                        </figure>
                    </div>
                    <div class="menu-list">
                        <span class="navbar-item">
                            <div class="button is-dark is-inverted is-medium">
                                <RouterLink to="study">
                                    <span class="icon is-medium">
                                        <i class="fa-solid fa-house"></i>
                                    </span>
                                    <span>Dashboard</span>
                                </RouterLink>
                            </div>
                        </span>
                        <span class="navbar-item">
                            <div class="button is-dark is-inverted is-medium">
                                <RouterLink to="study">
                                    <span class="icon is-medium">
                                        <i class="fa-solid fa-ranking-star"></i>
                                    </span>
                                    <span>Leaderboard</span>
                                </RouterLink>
                            </div>
                        </span>
                        <span class="navbar-item">
                            <div class="button is-dark is-inverted is-medium">
                                <RouterLink to="study">
                                    <span class="icon is-medium">
                                        <i class="fa-solid fa-user"></i>
                                    </span>
                                    <span>Profile</span>
                                </RouterLink>
                            </div>
                        </span>
                        <span class="navbar-item">
                            <div class="button is-dark is-inverted is-medium">
                                    <span class="icon is-medium">
                                        <i class="fa-solid fa-ellipsis"></i>
                                    </span>
                                    <span>More</span>
                            </div>
                        </span>
                    </div>
                    <ul class="menu-list">
                        <li>
                            <ul>
                                <li><button class="button is-primary is-inverted">Settings</button></li>
                                <li><button class="button is-primary is-inverted">Log Out</button></li>
                            </ul>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    </div>
</template>