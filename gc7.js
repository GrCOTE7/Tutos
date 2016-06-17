$(function () {
    $(document).ready(function () {


        $('#button').click(function () {
            var v = $('input[name=checkListItem]').val();
            console.log(v);
            $('h2').css('color', 'blue');

            $('.list').append('<div class="item">' +
                '<input type="checkbox">' + v
                + '</div>');

        }).click().click().click();

        $(document).on('click', '.item', function () {
            $(this).remove();
        })

    });
});
