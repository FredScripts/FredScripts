var panelGlobal = this;
var dialog = (function () {

    /*
    Code for Import https://scriptui.joonas.me — (Triple click to select): 
    {"activeId":11,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Dialog","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["fill","center"]}},"item-2":{"id":2,"type":"Panel","parentId":21,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":true},"text":"Description *","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","center"],"alignment":"fill"}},"item-4":{"id":4,"type":"Panel","parentId":2,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":true},"text":"Type *","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-8":{"id":8,"type":"RadioButton","parentId":4,"style":{"enabled":true,"varName":"Type_Footages","text":"Footages","preferredSize":[0,0],"alignment":"left","helpTip":"this is filmed video","checked":true}},"item-9":{"id":9,"type":"RadioButton","parentId":4,"style":{"enabled":true,"varName":"Type_MotionGraphics","text":"Motion Graphics","preferredSize":[0,0],"alignment":"left","helpTip":"this is graphic video","checked":false}},"item-11":{"id":11,"type":"ListBox","parentId":21,"style":{"enabled":true,"varName":"items_list","creationProps":{"multiselect":true,"numberOfColumns":"2","columnWidths":"[250,50]","columnTitles":"[\"file name\",\"stat\"]","showHeaders":true},"listItems":"Items Name 01.mp4, Items Name 01.mp4, Items Name 01.mp4, Items Name 01.mp4, Items Name 01.mp4, Items Name 01.mp4, Items Name 01.mp4, Items Name 01.mp4","preferredSize":[0,400],"alignment":"fill","helpTip":"select one or more item","selection":[]}},"item-14":{"id":14,"type":"Panel","parentId":2,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":true},"text":"Texts *","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","center"],"alignment":"fill"}},"item-15":{"id":15,"type":"EditText","parentId":14,"style":{"enabled":true,"varName":"item_name_txt","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":true},"softWrap":false,"text":"namee","justify":"left","preferredSize":[150,0],"alignment":null,"helpTip":"Type descriptive title MAX : ( 70 charcater ) || ( 10 words )"}},"item-16":{"id":16,"type":"EditText","parentId":14,"style":{"enabled":true,"varName":"item_desc_txt","creationProps":{"noecho":false,"readonly":false,"multiline":true,"scrollable":true,"borderless":false,"enterKeySignalsOnChange":true},"softWrap":true,"text":"descc","justify":"left","preferredSize":[150,100],"alignment":null,"helpTip":"Type description Max: (200 character) || ( 25 words )"}},"item-17":{"id":17,"type":"EditText","parentId":14,"style":{"enabled":true,"varName":"item_tags_txt","creationProps":{"noecho":false,"readonly":false,"multiline":true,"scrollable":true,"borderless":false,"enterKeySignalsOnChange":true},"softWrap":true,"text":"tagss","justify":"left","preferredSize":[150,100],"alignment":null,"helpTip":"Min 20 tags <-->  Max 50 tags \\nSeparate them with comma ( , ) \\n small words are better."}},"item-18":{"id":18,"type":"Panel","parentId":2,"style":{"enabled":true,"varName":"Category_pannel","creationProps":{"borderStyle":"etched","su1PanelCoordinates":true},"text":"Select Category *","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["center","top"],"alignment":"fill"}},"item-19":{"id":19,"type":"DropDownList","parentId":18,"style":{"enabled":true,"varName":"Main_category","text":"DropDownList","listItems":"lower-thirds,\nbackgrounds,\nbugs,\nelements,\ninterface-effects,\noverlays,\nrevealer,\ntransitions,\nmiscellaneous,\ninfographics","preferredSize":[0,0],"alignment":"fill","selection":9,"helpTip":"** please select footages type **"}},"item-20":{"id":20,"type":"DropDownList","parentId":18,"style":{"enabled":true,"varName":"sub_category","text":"DropDownList","listItems":"3d-object,\nabstract,\ncartoons,\ncorporate,\nelectric,\nevents,\nfire,\ngrunge,\nindustrial,\nkids,\nlight,\nmedical,\nnature,\nretro,\nsky-clouds,\nspace,\nsports,\ntechnology,\nwater,\nmiscellaneous","preferredSize":[0,0],"alignment":"fill","selection":0,"helpTip":null}},"item-21":{"id":21,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["center","fill"],"alignment":"fill"}},"item-22":{"id":22,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Info","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-23":{"id":23,"type":"StaticText","parentId":22,"style":{"enabled":true,"varName":null,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":true,"text":"item5 - tags: is low and Filename :30 charcater\nTitle:70 character\nDescription :200 character\nKeywords: 50Categories:{From List} {connect list equality}\n","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":"information about this item"}},"item-25":{"id":25,"type":"Button","parentId":29,"style":{"enabled":true,"varName":"import_btn","text":"Import","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":"Import .csv or video format footages to reveal in items list."}},"item-26":{"id":26,"type":"Button","parentId":29,"style":{"enabled":true,"varName":"export_btn","text":"Export","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":"Export all files and data in one folder and if it need render footages."}},"item-27":{"id":27,"type":"Button","parentId":30,"style":{"enabled":true,"varName":"remove_item_btn","text":"Remove This Item","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Remove selected items from list"}},"item-28":{"id":28,"type":"StaticText","parentId":29,"style":{"enabled":true,"varName":"location_text_btn","creationProps":{"truncate":"none","multiline":true,"scrolling":false},"softWrap":true,"text":" c:/user/mydocuments/user/myd20-jul-2121","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"location of data and final render . you can click here and change it.\\n default is ( My Document ) Folder"}},"item-29":{"id":29,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"File","preferredSize":[0,0],"margins":10,"orientation":"row","spacing":10,"alignChildren":["left","fill"],"alignment":"fill"}},"item-30":{"id":30,"type":"Group","parentId":2,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["right","bottom"],"alignment":"fill"}}},"order":[0,29,25,26,28,21,11,2,4,8,9,18,19,20,14,15,16,17,30,27,22,23],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":true,"afterEffectsDockable":true,"itemReferenceList":"None"}}
    */

    // DIALOG
    // ======
    var dialog = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette");
    if (!(panelGlobal instanceof Panel)) dialog.text = "Dialog";
    dialog.orientation = "column";
    dialog.alignChildren = ["fill", "center"];
    dialog.spacing = 10;
    dialog.margins = 16;

    // PANEL1
    // ======
    var panel1 = dialog.add("panel", undefined, undefined, {
        name: "panel1"
    });
    panel1.text = "File";
    panel1.orientation = "row";
    panel1.alignChildren = ["left", "fill"];
    panel1.spacing = 10;
    panel1.margins = 10;
    panel1.alignment = ["fill", "center"];

    var import_btn = panel1.add("button", undefined, undefined, {
        name: "import_btn"
    });
    import_btn.helpTip = "Import .csv or video format footages to reveal in items list.";
    import_btn.text = "Import";
    import_btn.justify = "left";
    import_btn.alignment = ["left", "fill"];

    var export_btn = panel1.add("button", undefined, undefined, {
        name: "export_btn"
    });
    export_btn.helpTip = "Export all files and data in one folder and if it need render footages.";
    export_btn.text = "Export";
    export_btn.justify = "left";
    export_btn.alignment = ["left", "fill"];


    // GROUP1
    // ======
    var group1 = dialog.add("group", undefined, {
        name: "group1"
    });
    group1.orientation = "row";
    group1.alignChildren = ["fill", "fill"];
    group1.spacing = 10;
    group1.margins = 0;
    group1.alignment = ["fill", "center"];

    var items_list_array = [];
    var items_list = group1.add("listbox", undefined, undefined, {
        name: "items_list",
        items: items_list_array,
        multiselect: true,
        numberOfColumns: 4,
        columnWidths: [40, 60, 180, 70],
        columnTitles: ["ID", "Stat", "File Name", "New Name"],
        showHeaders: true
    });
    items_list.preferredSize.height = 400;
    items_list.alignment = ["fill", "fill"];



    var panel2 = group1.add("panel", undefined, undefined, {
        name: "panel2",
        su1PanelCoordinates: true
    });
    panel2.text = "Description *";
    panel2.orientation = "column";
    panel2.alignChildren = ["fill", "center"];
    panel2.spacing = 10;
    panel2.margins = 10;
    panel2.alignment = ["center", "fill"];

    // PANEL3
    // ======
    var panel3 = panel2.add("panel", undefined, undefined, {
        name: "panel3",
        su1PanelCoordinates: true
    });
    panel3.text = "Type *";
    panel3.orientation = "row";
    panel3.alignChildren = ["left", "top"];
    panel3.spacing = 10;
    panel3.margins = 10;
    panel3.alignment = ["fill", "center"];

    var Type_Footages = panel3.add("radiobutton", undefined, undefined, {
        name: "Type_Footages"
    });
    Type_Footages.helpTip = "this is filmed video";
    Type_Footages.text = "Footages";
    Type_Footages.value = true;
    Type_Footages.alignment = ["left", "top"];

    var Type_MotionGraphics = panel3.add("radiobutton", undefined, undefined, {
        name: "Type_MotionGraphics"
    });
    Type_MotionGraphics.helpTip = "this is graphic video";
    Type_MotionGraphics.text = "Motion Graphics";
    Type_MotionGraphics.alignment = ["left", "top"];

    // CATEGORY_PANNEL
    // ===============
    var Category_pannel = panel2.add("panel", undefined, undefined, {
        name: "Category_pannel",
        su1PanelCoordinates: true
    });
    Category_pannel.text = "Select Category *";
    Category_pannel.orientation = "row";
    Category_pannel.alignChildren = ["left", "top"];
    Category_pannel.spacing = 10;
    Category_pannel.margins = 12;
    Category_pannel.alignment = ["fill", "center"];

    var Main_category = Category_pannel.add("dropdownlist", undefined, undefined, {
        items: ["????????????????-????????????????", "????????????????-????????????????", ]
    });
    Main_category.helpTip = "** please select footages type **";
    Main_category.selection = 0;
    Main_category.alignment = ["fill", "fill"];
    Main_category.title = 'Cat';


    var motiongraphic_cat = ["backgrounds", "backgrounds/3d-object", "backgrounds/abstract", "backgrounds/cartoons", "backgrounds/corporate", "backgrounds/electric", "backgrounds/events", "backgrounds/fire", "backgrounds/grunge", "backgrounds/industrial", "backgrounds/kids", "backgrounds/light", "backgrounds/medical", "backgrounds/nature", "backgrounds/retro", "backgrounds/sky-clouds", "backgrounds/space", "backgrounds/sports", "backgrounds/technology", "backgrounds/water", "backgrounds/miscellaneous", "bugs", "bugs/3d-object", "bugs/abstract", "bugs/cartoons", "bugs/corporate", "bugs/electric", "bugs/events", "bugs/fire", "bugs/grunge", "bugs/industrial", "bugs/kids", "bugs/light", "bugs/medical", "bugs/nature", "bugs/retro", "bugs/sky-clouds", "bugs/space", "bugs/sports", "bugs/technology", "bugs/water", "bugs/miscellaneous", "elements", "elements/3d-object", "elements/abstract", "elements/cartoons", "elements/corporate", "elements/electric", "elements/events", "elements/fire", "elements/grunge", "elements/industrial", "elements/kids", "elements/light", "elements/medical", "elements/nature", "elements/retro", "elements/sky-clouds", "elements/space", "elements/sports", "elements/technology", "elements/water", "elements/miscellaneous", "interface-effects", "interface-effects/3d-object", "interface-effects/abstract", "interface-effects/cartoons", "interface-effects/corporate", "interface-effects/electric", "interface-effects/events", "interface-effects/fire", "interface-effects/grunge", "interface-effects/industrial", "interface-effects/kids", "interface-effects/light", "interface-effects/medical", "interface-effects/nature", "interface-effects/retro", "interface-effects/sky-clouds", "interface-effects/space", "interface-effects/sports", "interface-effects/technology", "interface-effects/water", "interface-effects/miscellaneous", "lower-thirds", "lower-thirds/3d-object", "lower-thirds/abstract", "lower-thirds/cartoons", "lower-thirds/corporate", "lower-thirds/electric", "lower-thirds/events", "lower-thirds/fire", "lower-thirds/grunge", "lower-thirds/industrial", "lower-thirds/kids", "lower-thirds/light", "lower-thirds/medical", "lower-thirds/nature", "lower-thirds/retro", "lower-thirds/sky-clouds", "lower-thirds/space", "lower-thirds/sports", "lower-thirds/technology", "lower-thirds/water", "lower-thirds/miscellaneous", "overlays", "overlays/3d-object", "overlays/abstract", "overlays/cartoons", "overlays/corporate", "overlays/electric", "overlays/events", "overlays/fire", "overlays/grunge", "overlays/industrial", "overlays/kids", "overlays/light", "overlays/medical", "overlays/nature", "overlays/retro", "overlays/sky-clouds", "overlays/space", "overlays/sports", "overlays/technology", "overlays/water", "overlays/miscellaneous", "revealer", "revealer/3d-object", "revealer/abstract", "revealer/cartoons", "revealer/corporate", "revealer/electric", "revealer/events", "revealer/fire", "revealer/grunge", "revealer/industrial", "revealer/kids", "revealer/light", "revealer/medical", "revealer/nature", "revealer/retro", "revealer/sky-clouds", "revealer/space", "revealer/sports", "revealer/technology", "revealer/water", "revealer/miscellaneous", "transitions", "transitions/3d-object", "transitions/abstract", "transitions/cartoons", "transitions/corporate", "transitions/electric", "transitions/events", "transitions/fire", "transitions/grunge", "transitions/industrial", "transitions/kids", "transitions/light", "transitions/medical", "transitions/nature", "transitions/retro", "transitions/sky-clouds", "transitions/space", "transitions/sports", "transitions/technology", "transitions/water", "transitions/miscellaneous", "miscellaneous", "miscellaneous/3d-object", "miscellaneous/abstract", "miscellaneous/cartoons", "miscellaneous/corporate", "miscellaneous/electric", "miscellaneous/events", "miscellaneous/fire", "miscellaneous/grunge", "miscellaneous/industrial", "miscellaneous/kids", "miscellaneous/light", "miscellaneous/medical", "miscellaneous/nature", "miscellaneous/retro", "miscellaneous/sky-clouds", "miscellaneous/space", "miscellaneous/sports", "miscellaneous/technology", "miscellaneous/water", "miscellaneous/miscellaneous", "infographics"]
    var footage_cats = ["Buildings", "Business", "Corporate", "Cartoons", "City", "Construction", "Education", "Food", "Holidays", "Industrial", "Kids", "Lifestyle", "Medical", "Military", "Nature", "Overhead", "People", "Religious", "Science", "Slow Motion", "Special Events", "Sports", "Stop Motion", "Technology", "Time Lapse", "Vehicles", "Weather"];
    make_cats(footage_cats)

    function make_cats(cats) {
        var arr = Main_category.items
        for (var i = arr.length - 1; i >= 0; i--) {
            Main_category.remove(arr[i])
        }
        arr = cats
        for (var i = 0; i < arr.length; i++) {
            Main_category.add("item", arr[i])
        }

        //Main_category.items=cats

        dialog.layout.layout();
        dialog.layout.resize()

    }

    // PANEL4
    // ======
    var panel4 = panel2.add("panel", undefined, undefined, {
        name: "panel4",
        su1PanelCoordinates: true
    });
    panel4.text = "Texts *";
    panel4.orientation = "column";
    panel4.alignChildren = ["fill", "center"];
    panel4.spacing = 10;
    panel4.margins = 10;
    panel4.alignment = ["fill", "center"];

    var item_name_txt = panel4.add('edittext {properties: {name: "item_name_txt", enterKeySignalsOnChange: true}}');
    item_name_txt.helpTip = "Type descriptive title MAX : ( 70 charcater ) || ( 10 words )";
    item_name_txt.text = "namee";
    item_name_txt.preferredSize.width = 150;

    var item_desc_txt = panel4.add('edittext {properties: {name: "item_desc_txt", multiline: true, scrollable: true, enterKeySignalsOnChange: true}}');
    item_desc_txt.helpTip = "Type description Max: (200 character) || ( 25 words )";
    item_desc_txt.text = "descc";
    item_desc_txt.preferredSize.width = 150;
    item_desc_txt.preferredSize.height = 100;

    var item_tags_txt = panel4.add('edittext {properties: {name: "item_tags_txt", multiline: true, scrollable: true, enterKeySignalsOnChange: true}}');
    item_tags_txt.helpTip = "Min 20 tags <-->  Max 50 tags\nSeparate them with comma ( , )\nsmall words are better.";
    item_tags_txt.text = "tagss";
    item_tags_txt.preferredSize.width = 150;
    item_tags_txt.preferredSize.height = 100;



    // GROUP2
    // ======
    var group2 = panel2.add("group", undefined, {
        name: "group2"
    });
    group2.orientation = "row";
    group2.alignChildren = ["right", "bottom"];
    group2.spacing = 10;
    group2.margins = 0;
    group2.alignment = ["fill", "center"];

    var remove_item_btn = group2.add("button", undefined, undefined, {
        name: "remove_item_btn"
    });
    remove_item_btn.helpTip = "Remove selected items from list";
    remove_item_btn.text = "Remove This Item";
    remove_item_btn.alignment = ["right", "fill"];

    // PANEL5
    // ======
    var panel5 = dialog.add("panel", undefined, undefined, {
        name: "panel5"
    });
    panel5.text = "Info";
    panel5.orientation = "column";
    panel5.alignChildren = ["fill", "fill"];
    panel5.spacing = 10;
    panel5.margins = 10;
    panel5.alignment = ["fill", "fill"];

    var statictext1 = panel5.add("group");
    statictext1.orientation = "column";
    statictext1.alignChildren = ["fill", "fill"];
    statictext1.spacing = 0;

    var info_text = statictext1.add("statictext", undefined, "Hello to new application for upload footage -------------------------------\n\n\n\n", {
        multiline: true
    });
    info_text.alignment = ["fill", "fill"];
    statictext1.helpTip = "information about this item";
    info_text.preferredSize.width = 650;
    info_text.preferredSize.height = 100;
    /****************************************************************************************************************************************************************/
    /****************************************************************************************************************************************************************/
    /****************************************************************************************************************************************************************/
    item_name_txt.onChanging = function () {
        data_hub("name", this.text)
    }

    item_tags_txt.onChanging = function () {
        data_hub("tags", this.text)
    }

    item_desc_txt.onChanging = function () {
        data_hub("desc", this.text)
    }


    Main_category.onChange = function () {
        data_hub("cat", this.selection)
    }
    Type_Footages.onClick = function () {
        make_cats(footage_cats)
        data_hub("type", "footage")
    }

    Type_MotionGraphics.onClick = function () {
        make_cats(motiongraphic_cat)
        data_hub("type", "motiongraphics")
    }

    import_btn.onClick = function () {
        try {
            var files = File.openDialog("prompt", "*.mp4;*.mov;*.avi", true)
            for (i = 0; i < files.length; i++) {
                var f_name = files[i]
                data_hub("import", f_name.fsName)
                var length = items_list.items.length
                var last_id = (length > 0) ? parseFloat(items_list.items[length - 1].text) + 1 : 0
                var it = items_list.add('item', last_id)
                it.subItems[0].text = get_stat(last_id)["small_stat"]
                it.subItems[1].text = f_name
                it.subItems[2].text = last_id + ".mp4"
                fd.import(f_name, last_id)
            }
        } catch (e) {
            alert(e.toString() + "\nError on line: " + e.line.toString());
        }
    }
    export_btn.onClick = function () {
        data_hub("export", locatio)
    }
    remove_item_btn.onClick = function () {

        var conf = confirm("Do you want to dellet ???")
        if (conf) {
            var arr = get_list_selection()
            for (var i = 0; i < arr.length; i++) {
                remove_list(arr[i])
                data_hub("delete", arr[i])
            }
        }
    }

    items_list.onChange = function () {
        var sel = get_list_selection()
        data_hub("select", sel)
        // alert( items_list.items[sel].text)
        drop_info(items_list.items[sel].subItems[1].text + "\n" + get_stat(items_list.items[sel].text)["full_stat"])
    }
    /****************************************************************************************************************************************************************/
    /****************************************************************************************************************************************************************/
    /****************************************************************************************************************************************************************/
    /***********************************************************************  CECK ROLES  *****************************************************************************************/
    function data_hub(type, data) {
        function update(ftype, cat, title, desc, tags) {
            var sel = get_list_selection()

            for (var i = 0; i < sel.length; i++) {

                var id = sel[i]
                fd.update_item(id, "", ftype, cat, title, desc, tags)
            }
        }

        try {
            var info_str = ""
            var fd = new Footage_Detail

            var sel = get_list_selection()
            if (sel) {


                switch (type) {
                    case "name":
                        var title = item_name_txt.text
                        update("", "", title, "", "")
                        var validate_str = fd.check_string_validity(data)
                        info_str += validate_str
                    case "tags":
                        var tags = item_tags_txt.text
                        update("", "", "", "", tags)
                        var validate_str = fd.check_string_validity(data)
                        info_str += validate_str
                    case "desc":
                        var desc = item_desc_txt.text
                        update("", "", "", desc, "")
                        var validate_str = fd.check_string_validity(data)
                        info_str += validate_str
                    case "cat":
                        var cat = Main_category.selection
                        if (cat) {
                            update("", cat.text, "", "", "")
                        } else {

                            info_str += "\nPlease Select Category"
                        }
                        case "type":
                            var ftype = (Type_Footages.value) ? "footage" : "motiongraphic";
                            update(ftype, "", "", "", "")
                        case "delete":
                        case "select":
                        case "import":
                            if (data) {
                                info_str += "\nFiles Imported"
                            }
                            case "export":
                }


                if (info_str != "") {
                    drop_info(info_str)
                }
            }
        } catch (e) {
            alert(e.toString() + "\nError on line: " + e.line.toString());
        }
    }


    /****************************************************************************************************************************************************************/
    /****************************************************************************************************************************************************************/
    /****************************************************************************************************************************************************************/


    function drop_info(inf) {
        info_text.text = inf
    }

    function get_stat(id) {
        return {
            "small_stat": "ready",
            "full_stat": "the file needed to change characters\nchange name\nchange tags"
        }
    }

    function get_list_item(id) {
        var items = items_list.items
        for (var i = 0; i < items.length; i++) {
            var item = items[i]
            if (item.text == id.toString()) {
                return item
            }
        }
    }

    function change_list_item(id) {
        var item = get_list_item(id)
        item.subItems[0].text = get_stat(last_id)
    }

    function get_list_selection() {
        return items_list.selection;
    }

    function remove_list(id) {
        
        for (var i = 0; i < Database.length; i++) {
            if (id.toString() == Database[i][0]) {
                Database.splice(i,1)
            }
        }

        var item = get_list_item(id)
        items_list.remove(item);
        var fd = new Footage_Detail
        fd.w_data(Database)
    }

    dialog.layout.layout(true);
    dialog.layout.resize();
    dialog.onResizing = dialog.onResize = function () {
        this.layout.resize();
    }

    if (dialog instanceof Window) dialog.show();

    return dialog;

}());
var file = File(File($.fileName).parent.fsName + '/Database.txt')



function Footage_Detail() {}

Footage_Detail.prototype.check_string_validity = function () {
    return true
}
Footage_Detail.prototype.projects = function () {
    try {
        function get_comps_in_folder(folder_obj) {
            var arr = []
            for (var i = 1; i <= folder_obj.numItems; i++) {
                if (folder_obj.item(i) instanceof CompItem) {
                    arr.push(folder_obj.item(i))
                }
            }
            return arr;
        }

        var get_item = this.get_item
        return {
            "footages_folder": function () {
                var item = get_item("Footages", FolderItem, app.project.rootFolder)
                if (!item) {
                    var item = app.project.items.addFolder("Footages")
                }
                return item
            }(),
            "comps_folder": function () {
                var item = get_item("Final Render", FolderItem, app.project.rootFolder)
                if (!item) {
                    var item = app.project.items.addFolder("Final Render")
                }
                return item
            }(),
            "comps": function () {
                var item = get_item("Final Render", FolderItem, app.project.rootFolder)
                if (!item) {
                    var item = app.project.items.addFolder("Final Render")
                }
                return get_comps_in_folder(item)
            }()
        }
    } catch (e) {
        alert(e.toString() + "\nError on line: " + e.line.toString());
    }
}
Footage_Detail.prototype.info = function () {}
Footage_Detail.prototype.make_data = function () {}
Footage_Detail.prototype.save_data = function () {}
Footage_Detail.prototype.check_list = function () {
    var proj = this.projects()

    var comps = proj.comps
    var items_list = this.r_data()
    if (items_list) {
        var length = items_list.length
        for (var i = 0; i < length; i++) {
            var is = false

            for (var j = 0; j < comps.length; j++) {
                if (comps[j].name == items_list[i][1]) {
                    is = true
                }
            }

            if (!is) {
                this.import(items_list[i][1], items_list[i][0])
            }

        }

        for (var i = 0; i < comps.length; i++) {
            var is = false

            for (var j = 0; j < length; j++) {
                if (comps[i].name == items_list[i][1]) {
                    is = true
                }
            }

            if (!is) {
                comps[i].remove()
            }

        }
    }
}
Footage_Detail.prototype.import = function (file, id) {

    var proj = this.projects()
    var comps_folder = proj.comps_folder
    var footages_folder = proj.footages_folder
    var imp = app.project.importFile(new ImportOptions(File(file)));
    imp.parentFolder = footages_folder
    var duration = (imp.duration > 20) ? 20 : imp.duration;
    var comp = app.project.items.addComp(id, imp.width, imp.height, 1, duration, imp.frameRate)
    var layer = comp.layers.add(imp)
    layer.audioEnabled = false;
    comp.parentFolder = comps_folder;
    this.update_item(id, file, "1", "2", "3", "4", "5")

}
Footage_Detail.prototype.update_item = function (id, file, ftype, cat, title, desc, tags) {
    var is = false
    for (var i = 0; i < Database.length; i++) {
        if (id.toString() == Database[i][0]) {
            var item = Database[i]
            is = true
        }
    }
    if (!is) {
        Database.push([id, file.fsName, ftype, cat, title, desc, tags])
        var item = Database[Database.length - 1]
    }

    if (ftype != "") {
        item[2] = ftype
    }
    if (cat != "") {
        item[3] = cat
    }
    if (title != "") {
        item[4] = title
    }

    if (desc != "") {
        item[5] = desc
    }
    if (tags != "") {
        item[6] = tags
    }
    this.w_data(Database)
    return item
}
Footage_Detail.prototype.collect_files = function () {}
Footage_Detail.prototype.w_data = function (data_arr) {
    var str = ""
    for (var i = 0; i < data_arr.length; i++) {
        var arr = data_arr[i]
        for (var j = 0; j < arr.length; j++) {
            str += arr[j] + "@"
        }
        str += "#"
    }
    this.write_file(File(File($.fileName).parent.fsName + '/Database.txt'), str)
}
Footage_Detail.prototype.r_data = function () {
    var arr = this.read_file(File(File($.fileName).parent.fsName + '/Database.txt')).split('#')
    
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("@")
    }
    alert(arr)
    return arr
}


Footage_Detail.prototype.read_file = function (file) {
    file.open('r');
    var str = file.readln();
    return str;
}
Footage_Detail.prototype.write_file = function (file, str) {
    file.open("w");
    file.write(str);
    file.close();
}
Footage_Detail.prototype.Create_folder = function (Location_Folder_obj, f1, f2, f3, f4) {

    if (!Location_Folder_obj.exists) {
        alert("this file\n" + Location_Folder_obj + "\n dose not exist")
        return null;
    }
    var file = Location_Folder_obj;

    if (f1 != "") {
        file = new Folder(file.fsName + "/" + f1);
        if (!file.exists) file.create();
    }
    if (f2 != "") {
        file = new Folder(file.fsName + "/" + f2);
        if (!file.exists) file.create();
    }
    if (f3 != "") {
        file = new Folder(file.fsName + "/" + f3);
        if (!file.exists) file.create();
    }
    if (f4 != "") {
        file = new Folder(file.fsName + "/" + f4);
        if (!file.exists) file.create();
    }
    return file;
}
Footage_Detail.prototype.get_item = function (itemName, itemInstanceName, locationObject) {

    /* app.project.rootFolder    is root folder object */
    if (locationObject.numItems > 0) {
        for (var i = 1; i <= locationObject.numItems; i++) {
            var curItem = locationObject.item(i);
            if (curItem.name === itemName) {
                if (curItem instanceof itemInstanceName || (curItem.mainSource !== "undefined" && curItem.mainSource instanceof itemInstanceName)) {
                    return curItem;
                }
            }
        }
    }
    return null;
}
var fd = new Footage_Detail
Database = []
Database=fd.r_data()
alert(Database)