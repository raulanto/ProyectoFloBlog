import { Dial } from 'flowbite';
// parent element wrapping the speed dial
var $parentEl = document.getElementById('dialParent');
// the trigger element that can be clicked or hovered
var $triggerEl = document.getElementById('dialButton');
// the content wrapping element of menu items or buttons
var $targetEl = document.getElementById('dialContent');
// options with default values
var options = {
    triggerType: 'hover',
    onHide: function () {
        // console.log('speed dial is shown');
    },
    onShow: function () {
        // console.log('speed dial is hidden');
    },
    onToggle: function () {
        // console.log('speed dial is toggled')
    }
};
if ($parentEl) {
    /*
    * parentEl: required
    * targetEl: required
    * triggerEl: required
    * options: optional
    */
    var dial = new Dial($parentEl, $triggerEl, $targetEl, options);
    // // show the speed dial
    // dial.show();
}
//# sourceMappingURL=dial.js.map