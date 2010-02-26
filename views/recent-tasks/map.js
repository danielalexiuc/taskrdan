function(doc) {
  if (doc.type == "task" && doc.state != "done") {
    emit(doc.sort_order, doc)
  }
}
