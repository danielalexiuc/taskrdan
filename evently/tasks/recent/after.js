function() {
    var app = $$(this).app;

    $("#sortable").sortable({
        stop: function(event, ui) {
            $("#sortable").children().each(
                    function(i) {
                        var li = $(this);
                        var task_id = li.attr("data-id");
                        app.db.openDoc(task_id, {
                            success : function(doc) {
                                doc.danielOrder = i;
                                app.db.saveDoc(doc);
                            }
                        });
                    });
            alert('End');
        }
    });
    $("#sortable").disableSelection();
}