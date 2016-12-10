function updateOutput(){

			$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

			document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
		}

		$(".toggleButton").hover(function() {
			$(this).addClass("highlighted");
		}, function() {
			$(this).removeClass("highlighted");
		});

		$(".toggleButton").click(function(){
			$(this).toggleClass("active");
			$(this).removeClass("highlighted");

			var panelId = $(this).attr("id") + "Panel";

			$("#" + panelId).toggleClass("hidden");

			var numberOfActivePanels = 4- ( $(".hidden").length)

			$(".panel").width(($(window).width() / numberOfActivePanels) -10);
		});

		$(".panel").height($(window).height() - $("#header").height() - 20);
		$(".panel").width(($(window).width() / 2) -10);

		updateOutput();
		//This on method apllied to textarea will also accept the html tags and it will chage it on the go.
		$("textarea").on('change keyup paste', function() {
			updateOutput();
		});
