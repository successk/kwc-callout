(() => {
  "use strict";

  class KwcCallout {
    beforeRegister() {
      this.is = "kwc-callout";

      this.properties = {
        header: {
          type: String,
          value: null
        },
        show: {
          type: Boolean,
          value: true,
          reflectToAttribute: true,
          notify: true,
          observer: "_showChange"
        },
        closeable: {
          type: Boolean,
          value: false
        },
        autoclose: {
          type: Number,
          value: 0
        },
        _contentClass: {
          type: String,
          computed: "_computeContentClass(header)"
        }
      };

      this.listeners = {
        "close.tap": "_closeTap"
      };
    }

    attached() {
      if (this.show) {
        this._autoclose();
      }
    }

    _computeContentClass(header) {
      return header ? "content" : "content no-title";
    }

    _showChange(value) {
      if (this._timerClose) {
        clearTimeout(this._timerClose);
        this._timerClose = null;
      }

      if (value) {
        this.classList.remove("hidden");
        this._autoclose();
      } else {
        this.classList.add("hidden");
      }
    }

    _autoclose() {
      if (this.autoclose > 0) {
        const that = this;
        this._timerClose = setTimeout(() => that.show = false, this.autoclose);
      }
    }

    _closeTap(e) {
      e.preventDefault();
      this.show = false;
    }
  }

  Polymer(KwcCallout);
})();