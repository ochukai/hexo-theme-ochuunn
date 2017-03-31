; (function($, window, document, undefined) {
  $.fn.modalBox = function(method, option) {

    if (methods[method]) {
      methods[method].call(this, option);
    } else if (typeof method === 'object' || !method) {
      methods.open.call(this, method);
    }
    return this;
  };
  $.modalBox = {};

  //default options
  $.modalBox.defaults = {
    //all properties with unit like 10px
    width: 'auto',
    height: 'auto',
    left: 'auto',
    top: 'auto',
    overlay: true,
    iconClose: false,
    keyClose: true,
    bodyClose: true,
    iconImg: 'image/closeIcon.png',

    //callback function
    onOpen: function() {},
    onClose: function() {}
  };

  //global methods
  //to close all modal box
  $.modalBox.close = function() {
    $('.iw-modalBox').each(function() {
      methods.close.call($(this));
    });

  };

  //internal method
  var keyEvent = function(e) {
    var keyCode = e.keyCode;
    //check for esc key is pressed.
    if (keyCode == 27) {
      $.modalBox.close();
    }
  };

  var clickEvent = function(e) {
    //check if modalbox is defined in data
    if (e.data) {
      methods.close.call(e.data.modalBox);
    } else {
      $.modalBox.close();
    }
  };

  var resizeEvent = function(e) {
    var img = e.data.img,
    elm = e.data.elm;
    img.css({
      top: (elm.offset().top - $(window).scrollTop() - 8) + 'px',
      left: (elm.offset().left - $(window).scrollLeft() + elm.width() - 8) + 'px',
      position: 'fixed',
      'z-index': '99999'
    });
  };

  //to show overlay
  var addOverlay = function() {
    $('body').append('<div class="iw-modalOverlay"></div>');
    $('.iw-modalOverlay').css({
      display: 'block',
      width: '100%',
      height: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      'z-index': '1000'
    });
  };

  var methods = {
    open: function(option) {
      option = $.extend({}, $.modalBox.defaults, option);

      var elm = this,
      elmWidth = elm.width(),
      elmHeight = elm.height(),
      elmWidthO = elm.outerWidth(),
      elmHeightO = elm.outerHeight(),
      windowWidth = $(window).width(),
      windowHeight = $(window).height(),
      width = Math.min(elmWidthO, windowWidth) - (elmWidthO - elmWidth),
      height = Math.min(elmHeightO, windowHeight) - (elmHeightO - elmHeight);

      //to add modalBox class
      elm.data('iw-size', {
        'width': elmWidth,
        'height': elmHeight
      }).addClass('iw-modalBox');

      //to maintian box-sizing property if a user define width and height use css method else use width/ height method.	
      if (option.width != 'auto') {
        elm.css('width', option.width);
      } else {
        elm.width(width);
      }

      if (option.height != 'auto') {
        elm.css('height', option.height);
      } else {
        elm.height(height);
      }

      var top = '50%',
      left = '50%',
      marginLeft = elm.outerWidth() / 2,
      marginTop = elm.outerHeight() / 2;

      if (option.left != 'auto') {
        left = option.left;
        marginLeft = '0';
      }

      if (option.top != 'auto') {
        top = option.top;
        marginTop = '0';
      }

      elm.css({
        top: top,
        left: left,
        position: 'fixed',
        // display: 'block',
        'margin-left': -marginLeft,
        'margin-top': -marginTop,
        'z-index': '99999',
        'border': '1px solid #399c9c'
      });

      elm.fadeIn();
      // elm.slideUp();

      if (option.overlay) {
        addOverlay();
      }

      //to bind close event   
      if (option.iconClose) {
        if ((elm.outerWidth() < (windowWidth - 50)) && (elm.outerHeight() < (windowHeight - 50))) {
          var randId = Math.ceil(Math.random() * 1000) + 'close';
          var img = $('<img src="' + option.iconImg + '" class="iw-closeImg" id="' + randId + '"/>');
          elm.attr('closeImg', randId);
          img.bind('click', {modalBox: elm}, clickEvent);
          
          // we will add resize event to retain the correct position of close button.
          $(window).bind('resize.iw-modalBox', {
            img: img,
            elm: elm
          }, resizeEvent);

          $(window).triggerHandler('resize.iw-modalBox');
          $('body').append(img);
        }
      }

      if (option.keyClose) {
        $(document).bind('keyup.iw-modalBox', keyEvent);
      }

      if (option.bodyClose) {
        /*create a overlay(or use existing) in which we will give close event to overlay
                        and not in the body to come out of bubbling issue */
        var overlay = $('.iw-modalOverlay');
        if (overlay.length === 0) {
          addOverlay();
          overlay = $('.iw-modalOverlay');
          overlay.css({ 'background': 'none' });
        }

        overlay.bind('click', clickEvent);
      }

      //call callback function
      option.onOpen.call(this);
      elm.data('closeFun', option.onClose);
    },

    close: function() {
      var elm = this;
      if (elm.data('iw-size')) {
        //close modal and unbind all event associated with it.
        var imgId = elm.attr('closeImg');
        elm.fadeOut();
        if (imgId) {
          elm.removeAttr('closeImg');
          $('#' + imgId).fadeOut().remove();
        }

        //to maintain box-sizing using width and height method instead css to set width or height
        var orgSize = elm.data('iw-size');
        elm.width(orgSize.width);
        elm.height(orgSize.height);

        //call callback function
        elm.data('closeFun').call(this);

        //restore modal box
        elm
          .removeData('iw-size')
          .removeData('closeFun')
          //remove class
          .removeClass('iw-modalBox');

        //if all modal box is closed unbinde all events.
        if ($('.iw-modalBox').length === 0) {
          $('.iw-modalOverlay').remove();
          $(document).unbind('keyup.iw-modalBox');
          $(window).unbind('resize.iw-modalBox');
        }
      }
    }
  };
  
})(jQuery, window, document);
