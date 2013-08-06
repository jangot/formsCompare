window.onload=function(){

    var app = new Application();
    app.run();

    document.getElementById('showDifference').onclick = function() {
        app.showDifference();
    };
};
