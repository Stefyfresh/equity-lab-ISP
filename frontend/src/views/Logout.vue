<script setup>
import { useAuth0 } from "@auth0/auth0-vue";

const { logout } = useAuth0();

logout({
    logoutParams: {
        returnTo: window.location.origin,
    }
});
</script>