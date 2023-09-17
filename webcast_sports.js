function makePick(button) {
    var picks = button.parentElement.children
    for (var i = 0; i < picks.length; i++) {
        picks[i].classList.remove("enabled");
    }
    button.classList.add("enabled");
}
    
window.onload = function() {
    document.getElementById('dataFile').addEventListener('change', function() {
        let reader = new FileReader();
        reader.readAsText(this.files[0])
        reader.onload = function() {
            let lines = reader.result.split("\n");
            for (var i = 1; i < 11; i++) {
                var id = "match_" + i;
                var teams = lines[i-1].split(",")
                var matchup = document.getElementById(id);
                var div = matchup.children[0];
                var btnHomeTeam = div.children[0];
                var btnAwayTeam = div.children[2];
                btnHomeTeam.textContent = teams[0];
                btnAwayTeam.textContent = teams[1];
            }
            document.getElementById('dataFile').style.visibility = "hidden"
        }
    });
    
}


