import Snowflakes from 'magic-snowflakes';

const snowflakes = new Snowflakes({
    color: '#fff', // Default: "#5ECDEF"
    count: 100, // 100 snowflakes. Default: 50
    minOpacity: 0.1, // From 0 to 1. Default: 0.6
    maxOpacity: 0.9, // From 0 to 1. Default: 1
    maxSize: 35, // Default: 25
    speed: 0.9, // The property affects the speed of falling. Default: 1
    height: 500, // Default: height of container
    zIndex: 1, // Default: 9999,
});

snowflakes.start();