var banner_left = 0;
var img_cnt = 0;
var first=1;
var last;
var interval;

$(document).ready(function() {
	$(".icon").each(function() {
		$(this).css("left", banner_left);
		banner_left += $(this).width()+5;
		$(this).attr("id", "icon"+(++img_cnt));
	});

	last = img_cnt;
	startAction();

});

function startAction() { //이미지를 롤링
	interval = setInterval(function() {
		$(".icon").each(function() { //왼쪽으로 한 픽셀씩 이동하는 애니메이션을 적용
			$(this).css("left", $(this).position().left-1);
		});


        
		// 조건문을 사용하여 롤링되는 이미지가 끝에 도달하면 다시 처음으로 돌아가도록 설정
		var first_content = $("#icon"+first);
		var last_content = $("#icon"+last);

		if(first_content.position().left < "-"+$(first_content).width()) {
			first_content.css("left", last_content.position().left+last_content.width()+5);
			first++;
			last++;
			if(last > img_cnt) { last = 1;}
			if(first > img_cnt) {first = 1;}
		}

	}, 10);
}

function stopAction() {
	clearInterval(interval);
}

var isAnimationOn = true;
var icon = $('.stop i');

function toggleAnimate() {
	if(isAnimationOn) {
		stopAction();
		isAnimationOn = false;

		//text 변경
		$('.ani_comment').text('애니메이션 켜기');

		//아이콘 변경
		if (icon.hasClass('fa-circle-stop')) {
			icon.removeClass('fa-circle-stop').addClass('fa-circle-play');
		} else {
		icon.removeClass('fa-circle-play').addClass('fa-circle-stop');
		}

		//아이콘 색 변경
		$('.stop').css('color', 'darkblue');
	}
	else {
		startAction();
		isAnimationOn = true;

		//text 변경
		$('.ani_comment').text('애니메이션 끄기');

		//아이콘 변경
		if (icon.hasClass('fa-circle-play')) {
			icon.removeClass('fa-circle-play').addClass('fa-circle-stop');
		} else {
		icon.removeClass('fa-circle-stop').addClass('fa-circle-play');
		}

		//아이콘 색 변경
		$('.stop').css('color', 'red');
	}
}