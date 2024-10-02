"use strict";

var _index = require("./index.mjs");

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll('.nav-link');
  var allContent = document.querySelectorAll('.content');
  var allImages = document.querySelectorAll('.main-img');
  var logo = document.getElementById('logo');
  var menuBtn = document.querySelectorAll('.menu-btn');
  var menuTab = document.querySelectorAll('.menu-links');
  var gnav = document.querySelector('.gnav');
  var overlay = document.querySelector('#overlay');
  var windowHeight = window.innerHeight - 50;
  var mediaQuery = window.matchMedia("(max-width: 768px)");
  var lastScrollTop = 0; // 初期状態で全てのコンテンツを非表示にする

  function hideAllContent() {
    allContent.forEach(function (div) {
      return div.style.display = 'none';
    });
    links.forEach(function (link) {
      return link.classList.remove('active');
    });
    allImages.forEach(function (img) {
      return img.style.display = 'none';
    });
  } // IDに基づいてコンテンツを表示する関数


  function showContentById(id) {
    hideAllContent();
    var targetDiv = document.getElementById(id);
    var targetLink = Array.from(document.getElementsByClassName("nav-link-" + id));
    var targetImage = Array.from(document.getElementsByClassName(id + "-img"));

    if (targetDiv) {
      targetImage.forEach(function (img) {
        return img.style.display = 'block';
      });
      targetLink.forEach(function (link) {
        return link.classList.add('active');
      });
      targetDiv.style.display = 'block';
    } else {
      // IDが一致しない場合はデフォルトコンテンツ ("world") を表示する
      var defaultContent = document.getElementById('world');

      if (defaultContent) {
        defaultContent.style.display = 'block';
      }
    } // "product" ページのスタイリングを処理する


    if (id === 'product') {
      if (logo) {
        logo.classList.add('product-logo');
      }

      if (menuBtn.length > 0) {
        menuBtn.forEach(function (btn) {
          return btn.classList.add('product-menu');
        });
      }
    } else {
      if (logo) {
        logo.classList.remove('product-logo');
      }

      if (menuBtn.length > 0) {
        menuBtn.forEach(function (btn) {
          return btn.classList.remove('product-menu');
        });
      }
    }
  }

  function showLinkById(id) {
    var targetLink = Array.from(document.getElementsByClassName("nav-link-" + id));
    links.forEach(function (link) {
      return link.classList.remove('active');
    });

    if (targetLink) {
      targetLink.forEach(function (link) {
        return link.classList.add('active');
      });
    }
  } // URLパスからコンテンツIDを取得する関数


  function getContentIdFromUrl() {
    var pathname = window.location.pathname; // URL構造に基づいて条件を調整する

    if (pathname.endsWith('/look')) {
      return 'look';
    } else if (pathname.endsWith('/product')) {
      return 'product';
    } else if (pathname === '/' || pathname === '/onegravity/') {
      return 'world';
    } else {
      return 'world';
    }
  } // リンクにクリックイベントを設定する


  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var contentId = this.getAttribute('data-target');
      captureScreen(contentId);
      showLinkById(contentId); // ページをリロードせずにURLを更新する

      history.pushState({
        id: contentId
      }, '', this.href);
    });
  });

  function captureScreen(contentId) {
    var content = $("body").get(0); // html2canvasを使ってHTML要素を画像に変換

    html2canvas(content).then(function (snapshotCanvas) {
      var canvasWrapper = $("#canvas");
      canvasWrapper.empty();
      var canvas = $("<canvas>");
      canvas.attr("width", canvasWrapper.width());
      canvas.attr("height", canvasWrapper.height());
      var ctx = canvas.get(0).getContext('2d');
      var scrollTop = $(window).scrollTop(); // スナップショットの内容をCanvasに描画

      var x = $(snapshotCanvas).width() > $("body").width() ? ($("body").width() - $(snapshotCanvas).width()) / 2 : 0;
      ctx.drawImage(snapshotCanvas, x, -1 * scrollTop, $(snapshotCanvas).width(), $(snapshotCanvas).height());
      var dataURL = canvas.get(0).toDataURL('image/png');
      var img = $("<img>").attr("src", dataURL).attr("id", "screen-image");
      $(".image-container").append(img);
      animation(contentId);
    });
  }

  function animation(contentId) {
    $("#canvas").show();
    var curtains = new _index.Curtains({
      container: "canvas",
      watchScroll: false,
      pixelRatio: Math.min(1.5, window.devicePixelRatio)
    });
    var planeElements = document.getElementsByClassName("image-container");
    var slideshowState = {
      activeTextureIndex: 4,
      nextTextureIndex: 2,
      maxTextures: 5,
      isChanging: false,
      transitionTimer: 0
    };
    curtains.onError(function () {
      document.body.classList.add("no-curtains", "image-1");
    }).onContextLost(function () {
      curtains.restoreContext();
    });
    curtains.disableDrawing();
    var vs = "\n\t\t\tprecision mediump float;\n\t\t\tattribute vec3 aVertexPosition;\n\t\t\tattribute vec2 aTextureCoord;\n\t\t\tuniform mat4 uMVMatrix;\n\t\t\tuniform mat4 uPMatrix;\n\t\t\tvarying vec3 vVertexPosition;\n\t\t\tvarying vec2 vTextureCoord;\n\t\t\tvarying vec2 vActiveTextureCoord;\n\t\t\tvarying vec2 vNextTextureCoord;\n\t\t\tuniform mat4 activeTexMatrix;\n\t\t\tuniform mat4 nextTexMatrix;\n\t\t\tuniform float uTransitionTimer;\n\t\t\tvoid main() {\n\t\t\t\tgl_Position = uPMatrix  uMVMatrix  vec4(aVertexPosition, 1.0);\n\t\t\t\tvTextureCoord = aTextureCoord;\n\t\t\t\tvActiveTextureCoord = (activeTexMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n\t\t\t\tvNextTextureCoord = (nextTexMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;\n\t\t\t\tvVertexPosition = aVertexPosition;\n\t\t\t}\n\t\t";
    var fs = "\n\t\t\tprecision mediump float;\n\t\t\tvarying vec3 vVertexPosition;\n\t\t\tvarying vec2 vTextureCoord;\n\t\t\tvarying vec2 vActiveTextureCoord;\n\t\t\tvarying vec2 vNextTextureCoord;\n\t\t\tuniform float uTransitionTimer;\n\t\t\tuniform sampler2D activeTex;\n\t\t\tuniform sampler2D nextTex;\n\t\t\tuniform sampler2D displacement;\n\t\t\tuniform float uTransitionDirection;\n\t\t\tvoid main() {\n\t\t\t\tvec4 displacementTexture = texture2D(displacement, vTextureCoord);\n\t\t\t\tfloat direction = uTransitionDirection == 1.0 ? 1.0 : -1.0;\n\t\t\t\tvec2 firstDisplacementCoords = vActiveTextureCoord - direction  displacementTexture.r  ((cos((uTransitionTimer + 90.0) / (90.0 / 3.141592)) + 1.0) / 1.25);\n\t\t\t\tvec4 firstDistortedColor = texture2D(activeTex, vec2(firstDisplacementCoords.x, vActiveTextureCoord.y));\n\t\t\t\tvec2 secondDisplacementCoords = vNextTextureCoord - direction  displacementTexture.r  ((cos(uTransitionTimer / (90.0 / 3.141592)) + 1.0) / 1.25);\n\t\t\t\tvec4 secondDistortedColor = texture2D(nextTex, vec2(secondDisplacementCoords.x, vNextTextureCoord.y));\n\t\t\t\tvec4 finalColor = mix(firstDistortedColor, secondDistortedColor, 1.0 - ((cos(uTransitionTimer / (90.0 / 3.141592)) + 1.0) / 2.0));\n\t\t\t\tfinalColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);\n\t\t\t\tgl_FragColor = finalColor;\n\t\t\t}\n\t\t";
    var params = {
      vertexShader: vs,
      fragmentShader: fs,
      uniforms: {
        transitionTimer: {
          name: "uTransitionTimer",
          type: "1f",
          value: 0
        },
        transitionDirection: {
          name: "uTransitionDirection",
          type: "1f",
          value: 1.0
        }
      }
    };
    var multiTexturesPlane = new _index.Plane(curtains, planeElements[0], params);
    multiTexturesPlane.onLoading(function (texture) {
      texture.setMinFilter(curtains.gl.LINEAR_MIPMAP_NEAREST);
    }).onReady(function () {
      var activeTex = multiTexturesPlane.createTexture({
        sampler: "activeTex",
        fromTexture: multiTexturesPlane.textures[slideshowState.activeTextureIndex]
      });
      var nextTex = multiTexturesPlane.createTexture({
        sampler: "nextTex",
        fromTexture: multiTexturesPlane.textures[slideshowState.nextTextureIndex]
      });
      var targetIndex = 1;
      if (contentId == "look") targetIndex = 2;else if (contentId == "product") targetIndex = 3;

      if (slideshowState.isChanging || targetIndex === slideshowState.activeTextureIndex) {
        return;
      } // Determine animation direction


      var direction = targetIndex > slideshowState.activeTextureIndex ? 1.0 : -1.0;
      multiTexturesPlane.uniforms.transitionDirection.value = direction;
      window.scrollTo(0, 0);
      curtains.enableDrawing();
      slideshowState.isChanging = true;
      slideshowState.nextTextureIndex = targetIndex;

      if (slideshowState.nextTextureIndex > slideshowState.activeTextureIndex) {
        multiTexturesPlane.uniforms.transitionDirection.value = 1.0;
      } else {
        multiTexturesPlane.uniforms.transitionDirection.value = -1.0;
      }

      nextTex.setSource(multiTexturesPlane.images[slideshowState.nextTextureIndex]);
      setTimeout(function () {
        curtains.disableDrawing();
        slideshowState.isChanging = false;
        slideshowState.activeTextureIndex = slideshowState.nextTextureIndex;
        activeTex.setSource(multiTexturesPlane.images[slideshowState.activeTextureIndex]);
        slideshowState.transitionTimer = 0;
        showContentById(contentId);
        $("#screen-image").remove();
        $("#canvas").hide();
        curtains.dispose();
      }, 1700);
    }).onRender(function () {
      if (slideshowState.isChanging) {
        slideshowState.transitionTimer += (90 - slideshowState.transitionTimer) * 0.04;

        if (slideshowState.transitionTimer >= 88.5 && slideshowState.transitionTimer !== 90) {
          slideshowState.transitionTimer = 90;
          curtains.disableDrawing();
          slideshowState.isChanging = false;
        }
      }

      multiTexturesPlane.uniforms.transitionTimer.value = slideshowState.transitionTimer;
    });
  } // ブラウザのナビゲーション (戻る/進むボタン) を処理する


  window.addEventListener('popstate', function (event) {
    var id = event.state ? event.state.id : getContentIdFromUrl();
    showContentById(id || 'world');
  }); // 初期URLに基づいてコンテンツをロードする

  function loadInitialContent() {
    var id = getContentIdFromUrl();
    showContentById(id);
  }

  loadInitialContent();
  window.addEventListener('scroll', function () {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (mediaQuery.matches) {
      if (scrollTop > lastScrollTop || scrollTop === 0) {
        hideMenuTabs();
        toggleHeader(true); // Show header
      } else {
        showMenuTabs();
        toggleHeader(false); // Hide header
      }
    } else {
      if (scrollTop <= lastScrollTop && scrollTop !== 0) {
        toggleHeader(false); // Hide header
      } else {
        toggleHeader(true); // Show header
      }
    }

    lastScrollTop = scrollTop;
  });

  function toggleHeader(show) {
    var topValue = show ? '35px' : '-90px';

    if (menuBtn && menuBtn.length > 0) {
      menuBtn.forEach(function (btn) {
        btn.style.top = topValue;
        btn.classList.toggle('ease-in', show);
        btn.classList.toggle('ease-out', !show);
      });
    }

    if (logo) {
      logo.style.top = topValue;
      logo.classList.toggle('ease-in', show);
      logo.classList.toggle('ease-out', !show);
    }
  }

  function showMenuTabs() {
    menuTab.forEach(function (tab) {
      tab.classList.add('show', 'ease-in');
      tab.classList.remove('ease-out');
    });
  }

  function hideMenuTabs() {
    menuTab.forEach(function (tab) {
      tab.classList.remove('show', 'ease-in', 'ease-out');
    });
  } // ウィンドウリサイズ時に全てのクラスを削除する関数


  function removeAllClasses() {
    // ロゴからクラスを削除する
    logo.classList.remove('product-logo', 'ease-in', 'ease-out'); // メニューボタンからクラスを削除する

    menuBtn.forEach(function (btn) {
      btn.classList.remove('product-menu', 'ease-in', 'ease-out', 'active');
      btn.style.top = 'inherit';
    }); // gnavとオーバーレイからクラスを削除する

    gnav.classList.remove('show', 'hide');
    overlay.classList.remove('active'); // メニュータブからクラスを削除する

    menuTab.forEach(function (tab) {
      tab.classList.remove('show', 'hide');
    });
  }

  window.addEventListener('resize', removeAllClasses);
});