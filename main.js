var names = [];
function submit() {
    var guest = document.getElementById("guest_name").value;
    names.push(guest);
    document.getElementById("display").innerHTML = names.toString();
}
function show() {
    var i = names.join("<br>");
    document.getElementById("show").innerHTML = i.toString();
    document.getElementById("sort_btn").style.display = "block";
    document.getElementById("sort_special").style.display = "block";
    document.getElementById("sort_heading").style.display = "block";
}
function sorting() {
    names.sort();
    var i = names.join("<br>");
    document.getElementById("sorted_list").innerHTML = i.toString();
}
function finding() {
    var s = document.getElementById("find_input").value;
    var found = 0;
    var d;
    for(d = 0; d < names.length; d++) {
        if(s == names[d]) {
            found = found + 1;
        }
    }
    document.getElementById("found_you").innerHTML = "name found "+found+" time/s";x
    
}