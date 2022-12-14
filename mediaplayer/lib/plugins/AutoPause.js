"use strict";
exports.__esModule = true;
var AutoPause = /** @class */ (function () {
    function AutoPause() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    AutoPause.prototype.run = function (player) {
        this.player = player;
        var observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        });
        observer.observe(this.player.media);
        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    };
    AutoPause.prototype.handleIntersection = function (entries) {
        var entry = entries[0];
        var isVisible = entry.intersectionRatio >= this.threshold;
        isVisible ? this.player.play() : this.player.pause();
    };
    AutoPause.prototype.handleVisibilityChange = function () {
        var isVisible = document.visibilityState === "visible";
        isVisible ? this.player.play() : this.player.pause();
    };
    return AutoPause;
}());
exports["default"] = AutoPause;
