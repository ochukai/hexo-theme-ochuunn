$(function () {
	// console.log('I am Oliver~');

	// image preview
	$('.post__main img').each(function (index, item) {
		var $img = $(this);
		var className = 'modalBox' + index;

		var $tpl = $('<div />');
		$tpl.addClass('modalBox').addClass(className).append($($img.prop('outerHTML')));
		$tpl.hide();

		$img.on('click', function () {
			$tpl.modalBox({
				onOpen: function () {
					$('body').addClass('modal-open');
				},
				onClose: function () {
					$('body').removeClass('modal-open');
				}
			});
		});

		$('body').append($tpl);
	});

	// key bind

	// j  down
	// k  top
	// t  page top
	// b  page bottom

	// i  go index
	var $body = $('html');

	var isKeydown = false;
	$body.on('keydown', function (e) {
		// console.log(e.which, 'key down');

		switch (e.which) {
			case 74: // j down
				if (!isKeydown) {
					isKeydown = true;
					requestAnimationFrame(function animate() {
						var curTop = window.scrollY;
						window.scrollTo(0, curTop + 15);

						if (isKeydown) {
							requestAnimationFrame(animate);
						}
					});
				}

				break;

			case 75: // k up
				if (!isKeydown) {
					isKeydown = true;
					requestAnimationFrame(function animate() {
						var curTop = window.scrollY;
						window.scrollTo(0, curTop - 15);

						if (isKeydown) {
							requestAnimationFrame(animate);
						}
					});
				}

				break;

			case 191: // shift + / = ? show help modal
				break;

				// 16 shift
			case 84: // t
				window.scrollToTop(1);
				break;

			case 66: // b
				window.scrollToBottom();
				break;

			case 78: // n half
				window.scrollPageDown(1);
				break;

			case 77: // m
				window.scrollPageUp(1);
				break;
		}

	});

	$body.on('keyup', function (e) {
		isKeydown = false;
	});

	// print hint

	var comments = [
		'',
		'                    .::::.            快捷键：',
		'                  .::::::::.            j：下移',
		'                 :::::::::::            k：上移',
		"             ..:::::::::::'             t：移到最顶",
		"           '::::::::::::'               b：移到最底",
		'             .::::::::::                n：下移很多',
		"        '::::::::::::::..               m：上移很多",
		'             ..::::::::::::.',
		'           ``::::::::::::::::',
		"            ::::``:::::::::'        .:::.",
		"           ::::'   ':::::'       .::::::::.",
		"         .::::'      ::::     .:::::::'::::.",
		"        .:::'       :::::  .::::::::'  ':::::.",
		"       .::'        :::::::::::::::'      ':::::.",
		"      .::'        :::::::::::::::'          ':::.",
		"  ...:::          :::::::::::::'              ``::.",
		" ```` ':.         '::::::::::'                  ::::..",
		"                    ':::::'                    ':'````..",
		''
	];

	comments.forEach(function (item) {
		console.log('%c' + item, 'color: #399c9c');
	});

	$('.btn-reward').on('click', function (e) {
		e.preventDefault();

		var $reward = $('.reward-wrapper');
		$reward.slideToggle();
	});

	$('header.head').addClass('queue-in');
	$('article.post').each(function (index) {
		var $this = $(this);

    if (index < 6) {
  		$this.css({
  			'animationDelay': .1 * (index + 1) + 's'
  		});
    }

		$this.addClass('queue-in');
	});

});
