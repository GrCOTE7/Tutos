(function ($) {
    $(document).on('ready', function () {
        var sortable = $('[data-uk-sortable]'),
            button = $('button');
        button.click(function () {
            saveOrdering(sortable, button);
        });
        sortable.on('stop.uk.sortable', function (e, el, type) {
            setOrdering(sortable, el);
        });
        setOrdering(sortable);
    });
    function setOrdering(sortable, activeEl) {
        var ordering = 1;
        sortable.find('>li').each(function () {
            var $ele = $(this);
            $ele.data('ordering', ordering);
            $ele.find('div.uk-badge').text(ordering);
            ordering++;
        });
        if (activeEl) {
            activeEl.find('div.uk-badge').addClass('uk-animation-scale-down');
        }
    }
    function saveOrdering (sortable, button) {
        var url = 'index.php',
            data = {
                task: 'saveOrdering',
                ordering: {}
            };
        sortable.find('>li').each(function () {
            data.ordering[$(this).data('id')] = $(this).data('ordering');
        });
        button.prop('disabled', true);
        console.log(data); //data going to server
        $.getJSON(url, data, function (result) {
            console.log(result); //json response from server
            button.prop('disabled', false);
        });
        setTimeout(function(){button.prop('disabled', false);},1000);//for testing only!
    }
})(jQuery);

UIkit.ready(function() {UIkit.$body.prepend('<div class="uk-float-right uk-badge">UIkit version ' + UIkit.version + '</div>')});
