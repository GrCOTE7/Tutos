/**
 * Created by cote on 01/08/16.
 */
$(function () {

    var $list, $newItemForm;
    $list = $('ul');
    $newItemForm = $('#newItemForm');

    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        var text = $('input:text').val();

        $list.append('<li class="item">' + grCote7.tools.ucFirst(text) + '</li>');
        $('input:text').val('');
    });

    $list.on('click', 'li', function () {
        var $this = $(this);
        $this.remove();
    });

    console.log('Ready !');

});
