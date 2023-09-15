/*

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
 */

function rgb(r, g, b) {
    if (r > 255) r = 255;
    if (r < 0) r = 0;
    if (g > 255) g = 255;
    if (g < 0) g = 0;
    if (b > 255) b = 255;
    if (b < 0) b = 0;
    let rh = Number(r).toString(16).toUpperCase();
    let gh = Number(g).toString(16).toUpperCase();
    let bh = Number(b).toString(16).toUpperCase();
    if (r === 0) rh = "00";
    if (g === 0) gh = "00";
    if (b === 0) bh = "00";
    if (r < 16) rh = "0"+Number(r).toString(16).toUpperCase();
    if (g <16) gh = "0"+Number(g).toString(16).toUpperCase();
    if (b <16) bh = "0"+Number(b).toString(16).toUpperCase();
    return rh+gh+bh;
}

console.log(rgb(7,0,0));