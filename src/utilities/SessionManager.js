let SessionManager=(function () {
    function saveSession(user) {

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
