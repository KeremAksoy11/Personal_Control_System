function convertDate(d) {
    var p = d.split("/");
    return +(p[2] + p[1] + p[0]);
}

function sortByDate(direction) {
    var tbody = document.querySelector("#results tbody");
    // get trs as array for ease of use
    var rows = [].slice.call(tbody.querySelectorAll("tr"));

    if (direction === 'asc') {
        document.querySelector(".sort-season").classList.remove('sort-season--start');
        document.querySelector(".sort-season").classList.add('sort-season--end');

        rows.sort(function (a, b) {
            return (
                convertDate(b.cells[0].innerHTML) -
                convertDate(a.cells[0].innerHTML)
            );
        });
    } else {
        document.querySelector(".sort-season").classList.add('sort-season--start');
        document.querySelector(".sort-season").classList.remove('sort-season--end');

        rows.sort(function (a, b) {
            return (
                convertDate(a.cells[0].innerHTML) -
                convertDate(b.cells[0].innerHTML)
            );
        });
    }

    rows.forEach(function (v) {
        tbody.appendChild(v);
    });
}

document.querySelector(".sort-season").addEventListener("click", () => {
    if (document.querySelector(".sort-season").classList.contains('sort-season--start')) {
        document.querySelector(".sort-season").innerText = "Season End";

        sortByDate('asc');
    } else {
        document.querySelector(".sort-season").innerText = "Season Start";

        sortByDate('desc');
    }
});
