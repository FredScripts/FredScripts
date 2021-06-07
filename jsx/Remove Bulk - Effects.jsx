var remove_bulk_effects = function (comps, effects_name_arr, layer_name) {
    try {
        var ex_num = 0
        app.beginUndoGroup("Remove effcts bulk")
        for (var i = 0; i < comps.length; i++) {
            var comp = comps[i];
            var layer = comp.layer(layer_name)
            for (var j = layer.property("ADBE Effect Parade").numProperties; j >= 1; j--) {
                var prop = layer.property("ADBE Effect Parade").property(j)
                for (var k = 0; k < effects_name_arr.length; k++) {
                    if (effects_name_arr[k] == prop.name) {
                        prop.remove()
                        ex_num++
                        break
                    }
                }
            }
        }
        app.endUndoGroup()
        alert(ex_num + " - Effects Removed!")
    } catch (e) {
        alert(e.toString() + "\nError on line: " + e.line.toString());
    }
}

/******************  example ***********************/
var comps = app.project.selection
var effects_name = ["Position", "scale", "Rotation", "Opacity"]
remove_bulk_effects(comps,effects_name, "Controller")
