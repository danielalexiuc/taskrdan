function() {
    $("#sortable").sortable({
        stop: function(event, ui) {
            alert('Start');

            $("#sortable").children().each(
                    function(i) {

                        var li = $(this);
                        var task_id = li.attr("data-id");
                        alert(task_id);
                        var app = $$(this).app;
                        app.db.openDoc(task_id, {
                            success : function(doc) {
                                doc.danielOrder = i;
                                app.db.saveDoc(doc, {
                                    success : function() {
                                        alert("It worked!");
                                    }
                                });
                            }
                        });
                    });
            alert('End');
        }
    });
    $("#sortable").disableSelection();
}