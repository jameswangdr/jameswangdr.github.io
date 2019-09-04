$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});

lightbox.option({
    'albumLabel': "© James Wang 2019"
})