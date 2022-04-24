String.prototype.markDown = function () {
        try {
            var txt = this
            .replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g, '<strong>$2</strong>')
            .replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g, '<em>$2</em>')
            .replace(/!\[([^\]]*)]\(([^(]+)\)/g, '<img alt="$1" src="$2">')
			.replace(/\[([^\]]+)]\(([^(]+?)\)/g, '$1'.link('$2'))

            txt = txt.split("\n")
            var sibll = []

            for (var i = 0; i < txt.length; i++) {
               
                if (txt[i].match("# ")) {
                    var f = txt[i].indexOf(" ")
                    txt[i] = '<h' + f + '>' + txt[i].slice(f + 1) + '</h' + f + '>'
                    if (sibll.length > 0) {
                        txt[i-1] = "<ul>" + sibll.join("") + "</ul>"
                        sibll = []
                    }
                }

                if (txt[i] == ("") || txt[i] == (" ") || txt[i] == ("  ") || txt[i] == ("   ") || txt[i] == ("   ") || txt[i] == ("    ") || txt[i] == ("      ")) {
                    txt[i] = "<br>"
                    if (sibll.length > 0) {
                        txt[i-1] = "\n<ul>" + sibll.join("") + "</ul>\n"
                        sibll = []
                    }
                }
                
                if (txt[i].slice(0,2)=="* ") {
                    sibll.push("<li>"+txt[i].replace("* ","")+"</li>")
                    txt[i]=""  
                }
                
            }
            txt =txt.join("\n")
            .replace("  "," ")
            .replace("   "," ")
            .replace("    "," ")
            .replace("     "," ")
            .replace("      "," ")
            .replace("       "," ")
            .replace("        "," ")
            .replace("         "," ")

            txt = txt.split("\n")
            for (var i = 0; i < txt.length; i++) {
                if (txt[i] != ("") && txt[i].slice(0,1)!="<" ) {
                    txt[i] = "<p>"+txt[i]+"</p>"
                }
            }
            return txt.join("\n")

        } catch (e) {
            alert(e)
        }
    }

//example test below 
/*******************/

var sample = '\
# Heading One\
## Heading Two\
### Heading Three\
#### Heading Four\
##### Heading Five\
###### Heading Six\
\
I will need:\
\
* **list1**\
* list2\
* list3\
\
**bold stuff**\
\
*italic*\
\
[Google link](http://google.com)\
![The Google Logo](http://google.com/logo.png)\
'

alert(sample.markDown())
