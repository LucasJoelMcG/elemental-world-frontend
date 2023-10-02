var active = 0;

$(document).keydown(function (e) {
	reCalculate(e);
	rePosition();
	return false;
});

$("td").click(function () {
	active = $(this).closest("table").find("td").index(this);
	rePosition();
});

function reCalculate(e) {
	var rows = $("#navigate tr").length;
	var columns = $("#navigate tr:eq(0) td").length;
	//alert(columns + 'x' + rows);

	if (e.keyCode == 37) {
		//move left or wrap
		active = active > 0 ? active - 1 : active;
	}
	if (e.keyCode == 38) {
		// move up
		active = active - columns >= 0 ? active - columns : active;
	}
	if (e.keyCode == 39) {
		// move right or wrap
		active = active < columns * rows - 1 ? active + 1 : active;
	}
	if (e.keyCode == 40) {
		// move down
		active = active + columns <= rows * columns - 1 ? active + columns : active;
	}
}

function reCalculateMobile(arrowPressed) {
	var rows = $("#navigate tr").length;
	var columns = $("#navigate tr:eq(0) td").length;

	if (arrowPressed == "left") {
		active = active > 0 ? active - 1 : active;
	}
	if (arrowPressed == "up") {
		active = active - columns >= 0 ? active - columns : active;
	}
	if (arrowPressed == "right") {
		active = active < columns * rows - 1 ? active + 1 : active;
	}
	if (arrowPressed == "down") {
		active = active + columns <= rows * columns - 1 ? active + columns : active;
	}
	rePosition();
}

function rePosition() {
	$(".active").removeClass("active");
	$("#navigate tr td .arrow").eq(active).addClass("active");
}

function selectOption() {}

function cancelOption() {}
