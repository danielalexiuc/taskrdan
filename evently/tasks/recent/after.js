function() {
    $("#sortable").sortable({
        stop: function(event, ui) {
            alert('Hey it worked.');
//            function() {
//                var li = $(this).parents("li");
//                var task_id = li.attr("data-id");
//                var app = $$(this).app;
//                app.db.openDoc(task_id, {
//                    success : function(doc) {
//                        doc.danielOrder = 1;
//                        app.db.saveDoc(doc, {
//                            success : function() {
//                                li.addClass("done");
//                                li.slideUp("slow");
//                            }
//                        });
//                    }
//                });
//                return false;
//            }
        }
    });
    $("#sortable").disableSelection();
}