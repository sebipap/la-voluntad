import quantize from "quantize";
import getPixels from "get-pixels";

function createPixelArray(imgData: any, pixelCount: any, quality: any) {
  const pixels = imgData;
  const pixelArray = [];

  for (let i = 0, offset, r, g, b, a; i < pixelCount; i = i + quality) {
    offset = i * 4;
    r = pixels[offset + 0];
    g = pixels[offset + 1];
    b = pixels[offset + 2];
    a = pixels[offset + 3];

    // If pixel is mostly opaque and not white
    if (typeof a === "undefined" || a >= 125) {
      if (!(r > 250 && g > 250 && b > 250)) {
        pixelArray.push([r, g, b]);
      }
    }
  }
  return pixelArray;
}

function validateOptions(options: any) {
  let { colorCount, quality } = options;

  if (typeof colorCount === "undefined" || !Number.isInteger(colorCount)) {
    colorCount = 10;
  } else if (colorCount === 1) {
    throw new Error(
      "colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()"
    );
  } else {
    colorCount = Math.max(colorCount, 2);
    colorCount = Math.min(colorCount, 20);
  }

  if (
    typeof quality === "undefined" ||
    !Number.isInteger(quality) ||
    quality < 1
  ) {
    quality = 10;
  }

  return {
    colorCount,
    quality,
  };
}

function loadImg(img: any) {
  return new Promise((resolve, reject) => {
    getPixels(img, function (err: any, data: any) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function getColor(img: any, quality: any) {
  return new Promise((resolve, reject) => {
    getPalette(img, 5, quality)
      .then((palette: any) => {
        resolve(palette[0]);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getPalette(img: any, colorCount = 10, quality = 10) {
  const options = validateOptions({
    colorCount,
    quality,
  });

  return new Promise((resolve, reject) => {
    loadImg(img)
      .then((imgData: any) => {
        const pixelCount = imgData.shape[0] * imgData.shape[1];
        const pixelArray = createPixelArray(
          imgData.data,
          pixelCount,
          options.quality
        );

        const cmap = quantize(pixelArray, options.colorCount);
        const palette = cmap ? cmap.palette() : null;

        resolve(palette);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// Complement

export function compliment(color: string) {
  const [r, g, b] = colorStringToRgbArray(color);

  const temprgb = { r, g, b };
  let temphsv = RGB2HSV(temprgb);

  return temphsv.value >= 50 ? getDarkOf(color) : getBrightOf(color);
}

export function getDarkOf(colorString: string) {
  const [r, g, b] = colorStringToRgbArray(colorString);

  const temprgb = { r, g, b };
  let temphsv = RGB2HSV(temprgb);
  temphsv.value -= 70;
  temphsv.saturation += 20;

  const { r: red, g: green, b: blue } = HSV2RGB(temphsv);

  return `rgb(${red}, ${green}, ${blue})`;
}

export function getBrightOf(colorString: string) {
  const [r, g, b] = colorStringToRgbArray(colorString);

  const temprgb = { r, g, b };
  let temphsv = RGB2HSV(temprgb);
  temphsv.value += 70;
  temphsv.saturation -= 20;

  const { r: red, g: green, b: blue } = HSV2RGB(temphsv);

  return `rgb(${red}, ${green}, ${blue})`;
}

export function x(color: string) {
  const [r, g, b] = colorStringToRgbArray(color);

  const temprgb = { r, g, b };
  let temphsv = RGB2HSV(temprgb);
  temphsv.hue = HueShift(temphsv.hue, 180.0);
  const { r: red, g: green, b: blue } = HSV2RGB(temphsv);

  return `rgb(${red}, ${green}, ${blue})`;
}

function RGB2HSV(rgb: { r: number; g: number; b: number }) {
  const hsv: any = new Object();
  const max = max3(rgb.r, rgb.g, rgb.b);
  const dif = max - min3(rgb.r, rgb.g, rgb.b);
  hsv.saturation = max == 0.0 ? 0 : (100 * dif) / max;
  if (hsv.saturation == 0) hsv.hue = 0;
  else if (rgb.r == max) hsv.hue = (60.0 * (rgb.g - rgb.b)) / dif;
  else if (rgb.g == max) hsv.hue = 120.0 + (60.0 * (rgb.b - rgb.r)) / dif;
  else if (rgb.b == max) hsv.hue = 240.0 + (60.0 * (rgb.r - rgb.g)) / dif;
  if (hsv.hue < 0.0) hsv.hue += 360.0;
  hsv.value = Math.round((max * 100) / 255);
  hsv.hue = Math.round(hsv.hue);
  hsv.saturation = Math.round(hsv.saturation);
  return hsv;
}

// RGB2HSV and HSV2RGB are based on Color Match Remix [http://color.twysted.net/]
// which is based on or copied from ColorMatch 5K [http://colormatch.dk/]
function HSV2RGB(hsv: { saturation: number; value: number; hue: number }) {
  var rgb: any = {};
  if (hsv.saturation == 0) {
    rgb.r = rgb.g = rgb.b = Math.round(hsv.value * 2.55);
  } else {
    hsv.hue /= 60;
    hsv.saturation /= 100;
    hsv.value /= 100;
    const i = Math.floor(hsv.hue);
    const f = hsv.hue - i;
    const p = hsv.value * (1 - hsv.saturation);
    const q = hsv.value * (1 - hsv.saturation * f);
    const t = hsv.value * (1 - hsv.saturation * (1 - f));
    switch (i) {
      case 0:
        rgb.r = hsv.value;
        rgb.g = t;
        rgb.b = p;
        break;
      case 1:
        rgb.r = q;
        rgb.g = hsv.value;
        rgb.b = p;
        break;
      case 2:
        rgb.r = p;
        rgb.g = hsv.value;
        rgb.b = t;
        break;
      case 3:
        rgb.r = p;
        rgb.g = q;
        rgb.b = hsv.value;
        break;
      case 4:
        rgb.r = t;
        rgb.g = p;
        rgb.b = hsv.value;
        break;
      default:
        rgb.r = hsv.value;
        rgb.g = p;
        rgb.b = q;
    }
    rgb.r = Math.round(rgb.r * 255);
    rgb.g = Math.round(rgb.g * 255);
    rgb.b = Math.round(rgb.b * 255);
  }
  return rgb;
}

//Adding HueShift via Jacob (see comments)
function HueShift(h: number, s: number) {
  h += s;
  while (h >= 360.0) h -= 360.0;
  while (h < 0.0) h += 360.0;
  return h;
}

//min max via Hairgami_Master (see comments)
function min3(a: number, b: number, c: number) {
  return a < b ? (a < c ? a : c) : b < c ? b : c;
}
function max3(a: number, b: number, c: number) {
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}

function colorStringToRgbArray(colorString: string) {
  if (!colorString) return [0, 0, 0];

  // colorString example is 'rgb(255, 0, 0)'

  const r = parseInt(colorString.substring(4, colorString.indexOf(",")));
  const g = parseInt(
    colorString.substring(
      colorString.indexOf(",") + 1,
      colorString.lastIndexOf(",")
    )
  );
  const b = parseInt(
    colorString.substring(
      colorString.lastIndexOf(",") + 1,
      colorString.length - 1
    )
  );

  return [r, g, b];
}

export { getColor, getPalette };
