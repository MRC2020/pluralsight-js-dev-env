export default function getBaseUrl() {
    return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

/*
Code from StackOverflow for using regex to extract query info from url.
Using this only due to wanting to use only POJO's during dev stage.
Libraries like jquery etc.. work better for this function

We can switch between dev and prod testing by adding a query string to the
prod url.... example... prod url = http://localhost:3000
so add query string for dev mock data = http://localhost:3000/?useMockApi=true
*/
function getQueryStringParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}