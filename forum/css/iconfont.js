;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-text" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M608 293.1968c14.1568 0 25.6-11.6224 25.6-25.9584 0-14.336-11.4432-25.9328-25.6-25.9328l-140.8 0c-14.1312 0-25.6 11.6224-25.6 25.9328 0 14.336 11.4688 25.9584 25.6 25.9584L608 293.1968 608 293.1968z"  ></path>' +
    '' +
    '<path d="M864 293.1968c14.1568 0 25.6-11.6224 25.6-25.9584 0-14.336-11.4432-25.9328-25.6-25.9328l-140.8 0c-14.1568 0-25.6 11.6224-25.6 25.9328 0 14.336 11.4432 25.9584 25.6 25.9584L864 293.1968 864 293.1968z"  ></path>' +
    '' +
    '<path d="M608 448.8448c14.1568 0 25.6-11.5968 25.6-25.9328s-11.4432-25.9584-25.6-25.9584l-140.8 0c-14.1312 0-25.6 11.6224-25.6 25.9584s11.4688 25.9328 25.6 25.9328L608 448.8448 608 448.8448z"  ></path>' +
    '' +
    '<path d="M864 448.8448c14.1568 0 25.6-11.5968 25.6-25.9328s-11.4432-25.9584-25.6-25.9584l-140.8 0c-14.1568 0-25.6 11.6224-25.6 25.9584s11.4432 25.9328 25.6 25.9328L864 448.8448 864 448.8448z"  ></path>' +
    '' +
    '<path d="M608 604.544c14.1568 0 25.6-11.6224 25.6-25.9584 0-14.3616-11.4432-25.9584-25.6-25.9584l-140.8 0c-14.1312 0-25.6 11.5968-25.6 25.9584 0 14.336 11.4688 25.9584 25.6 25.9584L608 604.544 608 604.544z"  ></path>' +
    '' +
    '<path d="M864 604.544c14.1568 0 25.6-11.6224 25.6-25.9584 0-14.3616-11.4432-25.9584-25.6-25.9584l-140.8 0c-14.1568 0-25.6 11.5968-25.6 25.9584 0 14.336 11.4432 25.9584 25.6 25.9584L864 604.544 864 604.544z"  ></path>' +
    '' +
    '<path d="M864 604.544"  ></path>' +
    '' +
    '<path d="M608 760.2688c14.1568 0 25.6-11.6224 25.6-25.9584 0-14.3616-11.4432-25.9584-25.6-25.9584l-140.8 0c-14.1312 0-25.6 11.5968-25.6 25.9584 0 14.336 11.4688 25.9584 25.6 25.9584L608 760.2688 608 760.2688z"  ></path>' +
    '' +
    '<path d="M864 760.2688c14.1568 0 25.6-11.6224 25.6-25.9584 0-14.3616-11.4432-25.9584-25.6-25.9584l-140.8 0c-14.1568 0-25.6 11.5968-25.6 25.9584 0 14.336 11.4432 25.9584 25.6 25.9584L864 760.2688 864 760.2688z"  ></path>' +
    '' +
    '<path d="M864 760.2688"  ></path>' +
    '' +
    '<path d="M352 293.1968c14.1568 0 25.6-11.6224 25.6-25.9584 0-14.336-11.4432-25.9328-25.6-25.9328l-140.8 0c-14.1312 0-25.6 11.6224-25.6 25.9328 0 14.336 11.4688 25.9584 25.6 25.9584L352 293.1968 352 293.1968z"  ></path>' +
    '' +
    '<path d="M352 448.8448c14.1568 0 25.6-11.5968 25.6-25.9328s-11.4432-25.9584-25.6-25.9584l-140.8 0c-14.1312 0-25.6 11.6224-25.6 25.9584s11.4688 25.9328 25.6 25.9328L352 448.8448 352 448.8448z"  ></path>' +
    '' +
    '<path d="M352 604.544c14.1568 0 25.6-11.6224 25.6-25.9584 0-14.3616-11.4432-25.9584-25.6-25.9584l-140.8 0c-14.1312 0-25.6 11.5968-25.6 25.9584 0 14.336 11.4688 25.9584 25.6 25.9584L352 604.544 352 604.544z"  ></path>' +
    '' +
    '<path d="M608 604.544"  ></path>' +
    '' +
    '<path d="M352 760.2688c14.1568 0 25.6-11.6224 25.6-25.9584 0-14.3616-11.4432-25.9584-25.6-25.9584l-140.8 0c-14.1312 0-25.6 11.5968-25.6 25.9584 0 14.336 11.4688 25.9584 25.6 25.9584L352 760.2688 352 760.2688z"  ></path>' +
    '' +
    '<path d="M608 760.2688"  ></path>' +
    '' +
    '<path d="M881.7664 64 28.4416 64 0 64l0 28.9024 0 722.5344C0 895.2576 63.6928 960 142.2336 960l853.3248 0L1024 960l0-28.9024L1024 670.976c0-15.9744-12.7232-28.9024-28.4416-28.9024-15.6928 0-28.4416 12.928-28.4416 28.9024l0 231.2192L142.2336 902.1952c-47.104 0-85.3248-38.8608-85.3248-86.784L56.9088 121.8048l824.8832 0c47.104 0 85.3248 38.912 85.3248 86.8864l0.2304 259.9424c0.4608 15.3088 12.8512 27.648 28.2624 27.648s27.8016-12.3392 28.2624-27.648L1024 208.6912C1024 128.7936 960.3328 64 881.7664 64z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M949.408141 435.168124l-77.728292-67.567885 0-87.451748c0-17.253966-13.96199-31.233352-31.210839-31.233352s-31.210839 13.980409-31.210839 31.233352l0 33.189913L532.967544 73.163323c-0.01535-0.013303-0.031722-0.025583-0.048095-0.038886-2.004657-1.741667-4.186346-3.190669-6.487761-4.339842-0.002047-0.001023-0.005117-0.00307-0.007163-0.004093-0.421602-0.210801-0.848321-0.409322-1.278109-0.599657-0.046049-0.020466-0.092098-0.042979-0.13917-0.063445-0.381693-0.166799-0.76748-0.322341-1.154289-0.473791-0.094144-0.036839-0.187265-0.077771-0.282433-0.113587-0.341784-0.12996-0.686638-0.24764-1.032516-0.36532-0.140193-0.048095-0.278339-0.099261-0.418532-0.145309-0.309038-0.100284-0.621147-0.189312-0.933255-0.279363-0.176009-0.051165-0.352017-0.107447-0.529049-0.155543-0.298805-0.080841-0.599657-0.150426-0.900509-0.223081-0.188288-0.045025-0.375553-0.095167-0.563842-0.1361-0.315178-0.069585-0.633427-0.12689-0.950651-0.186242-0.173962-0.032746-0.346901-0.070608-0.51984-0.100284-0.364297-0.061398-0.729617-0.11154-1.094938-0.160659-0.125867-0.016373-0.25071-0.038886-0.3776-0.054235-0.452301-0.055259-0.906649-0.098237-1.360997-0.13303-0.036839-0.00307-0.074701-0.008186-0.11154-0.010233-4.9088-0.363274-9.899464 0.430812-14.536065 2.407839-0.052189 0.021489-0.104377 0.041956-0.155543 0.064468-0.330528 0.143263-0.656963 0.296759-0.983397 0.452301-0.149403 0.070608-0.299829 0.137123-0.448208 0.210801-0.237407 0.11768-0.470721 0.243547-0.706081 0.367367-0.234337 0.122797-0.468674 0.243547-0.699941 0.372483-0.157589 0.088004-0.313132 0.183172-0.468674 0.274246-0.303922 0.177032-0.607844 0.355087-0.906649 0.542352-0.096191 0.060375-0.189312 0.124843-0.284479 0.186242-0.352017 0.226151-0.701988 0.458441-1.045819 0.699941-0.060375 0.042979-0.119727 0.088004-0.180102 0.130983-0.370437 0.264013-0.737804 0.536212-1.098008 0.818645-0.055259 0.042979-0.10847 0.088004-0.162706 0.130983-0.356111 0.282433-0.708128 0.571005-1.054005 0.870834-0.021489 0.01842-0.042979 0.034792-0.064468 0.053212L205.507514 322.186933l0-31.627325c0-17.253966-13.96199-31.233352-31.210839-31.233352-17.248849 0-31.210839 13.980409-31.210839 31.233352l0 83.289961c0 0.844228 0.042979 1.677199 0.10847 2.50403l-67.661006 58.814524c-13.019525 11.31572-14.396895 31.04097-3.080152 44.054355 6.176676 7.106862 14.854313 10.746762 23.588231 10.746762 7.264451 0 14.564717-2.521426 20.476357-7.66661l395.9581-344.191086 395.9581 344.191086c5.907547 5.14416 13.20679 7.66661 20.476357 7.66661 8.723685 0 17.406438-3.6399 23.577998-10.746762C963.815269 466.208071 962.431759 446.483844 949.408141 435.168124z"  ></path>' +
    '' +
    '<path d="M845.633636 484.671585c-17.248849 0-31.233352 13.980409-31.233352 31.233352L814.400285 826.200028c0 39.133276-26.928303 72.197322-58.807361 72.197322L269.354658 898.397351c-31.879058 0-58.807361-33.064047-58.807361-72.197322L210.547297 515.90596c0-17.253966-13.985526-31.233352-31.233352-31.233352-17.248849 0-31.233352 13.980409-31.233352 31.233352L148.080593 826.200028c0 74.251098 54.405097 134.665049 121.275087 134.665049L755.592924 960.865077c66.86999 0 121.275087-60.413951 121.275087-134.665049L876.868011 515.90596C876.868011 498.651994 862.882486 484.671585 845.633636 484.671585z"  ></path>' +
    '' +
    '<path d="M390.586766 405.783887c-17.248849 0-31.233352 13.980409-31.233352 31.233352l0 30.470989c0 17.253966 13.985526 31.233352 31.233352 31.233352 17.248849 0 31.233352-13.980409 31.233352-31.233352l0-30.470989C421.820118 419.764296 407.835615 405.783887 390.586766 405.783887z"  ></path>' +
    '' +
    '<path d="M634.360815 405.783887c-17.248849 0-31.233352 13.980409-31.233352 31.233352l0 30.470989c0 17.253966 13.985526 31.233352 31.233352 31.233352 17.248849 0 31.233352-13.980409 31.233352-31.233352l0-30.470989C665.59519 419.764296 651.609665 405.783887 634.360815 405.783887z"  ></path>' +
    '' +
    '<path d="M589.269851 546.844599c-14.539134-9.31311-33.841759-5.053086-43.149752 9.455349-0.121773 0.193405-13.379729 19.449981-33.968649 19.449981-20.008706 0-32.454156-18.138102-33.276894-19.378349-9.175987-14.417361-28.269857-18.809391-42.834574-9.750061-14.650675 9.099239-19.145036 28.356838-10.044774 43.007513 11.214413 18.047028 41.980113 48.589648 86.157265 48.589648 43.958164 0 75.100442-30.308283 86.573751-48.223305C608.028077 575.46545 603.793636 556.147476 589.269851 546.844599z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)