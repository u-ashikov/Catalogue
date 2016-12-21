let SessionManager=(function () {
    function saveSession(user) {
        sessionStorage.setItem('authToken',user._kmd.authtoken);
        sessionStorage.setItem('username',user.username);
    }

    function clearSession() {
        sessionStorage.clear();
    }

    return {
        saveSession,
        clearSession
    }
})();

export default SessionManager;
