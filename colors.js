var termColors = [0x000000, 0x800000, 0x008000, 0x808000, 0x000080, 0x800080, 0x008080, 0xc0c0c0, 0x808080, 0xff0000, 0x00ff00, 0xffff00, 0x0000ff, 0xff00ff, 0x00ffff, 0xffffff, 0x000000, 0x00005f, 0x000087, 0x0000af, 0x0000d7, 0x0000ff, 0x005f00, 0x005f5f, 0x005f87, 0x005faf, 0x005fd7, 0x005fff, 0x008700, 0x00875f, 0x008787, 0x0087af, 0x0087d7, 0x0087ff, 0x00af00, 0x00af5f, 0x00af87, 0x00afaf, 0x00afd7, 0x00afff, 0x00d700, 0x00d75f, 0x00d787, 0x00d7af, 0x00d7d7, 0x00d7ff, 0x00ff00, 0x00ff5f, 0x00ff87, 0x00ffaf, 0x00ffd7, 0x00ffff, 0x5f0000, 0x5f005f, 0x5f0087, 0x5f00af, 0x5f00d7, 0x5f00ff, 0x5f5f00, 0x5f5f5f, 0x5f5f87, 0x5f5faf, 0x5f5fd7, 0x5f5fff, 0x5f8700, 0x5f875f, 0x5f8787, 0x5f87af, 0x5f87d7, 0x5f87ff, 0x5faf00, 0x5faf5f, 0x5faf87, 0x5fafaf, 0x5fafd7, 0x5fafff, 0x5fd700, 0x5fd75f, 0x5fd787, 0x5fd7af, 0x5fd7d7, 0x5fd7ff, 0x5fff00, 0x5fff5f, 0x5fff87, 0x5fffaf, 0x5fffd7, 0x5fffff, 0x870000, 0x87005f, 0x870087, 0x8700af, 0x8700d7, 0x8700ff, 0x875f00, 0x875f5f, 0x875f87, 0x875faf, 0x875fd7, 0x875fff, 0x878700, 0x87875f, 0x878787, 0x8787af, 0x8787d7, 0x8787ff, 0x87af00, 0x87af5f, 0x87af87, 0x87afaf, 0x87afd7, 0x87afff, 0x87d700, 0x87d75f, 0x87d787, 0x87d7af, 0x87d7d7, 0x87d7ff, 0x87ff00, 0x87ff5f, 0x87ff87, 0x87ffaf, 0x87ffd7, 0x87ffff, 0xaf0000, 0xaf005f, 0xaf0087, 0xaf00af, 0xaf00d7, 0xaf00ff, 0xaf5f00, 0xaf5f5f, 0xaf5f87, 0xaf5faf, 0xaf5fd7, 0xaf5fff, 0xaf8700, 0xaf875f, 0xaf8787, 0xaf87af, 0xaf87d7, 0xaf87ff, 0xafaf00, 0xafaf5f, 0xafaf87, 0xafafaf, 0xafafd7, 0xafafff, 0xafd700, 0xafd75f, 0xafd787, 0xafd7af, 0xafd7d7, 0xafd7ff, 0xafff00, 0xafff5f, 0xafff87, 0xafffaf, 0xafffd7, 0xafffff, 0xd70000, 0xd7005f, 0xd70087, 0xd700af, 0xd700d7, 0xd700ff, 0xd75f00, 0xd75f5f, 0xd75f87, 0xd75faf, 0xd75fd7, 0xd75fff, 0xd78700, 0xd7875f, 0xd78787, 0xd787af, 0xd787d7, 0xd787ff, 0xd7af00, 0xd7af5f, 0xd7af87, 0xd7afaf, 0xd7afd7, 0xd7afff, 0xd7d700, 0xd7d75f, 0xd7d787, 0xd7d7af, 0xd7d7d7, 0xd7d7ff, 0xd7ff00, 0xd7ff5f, 0xd7ff87, 0xd7ffaf, 0xd7ffd7, 0xd7ffff, 0xff0000, 0xff005f, 0xff0087, 0xff00af, 0xff00d7, 0xff00ff, 0xff5f00, 0xff5f5f, 0xff5f87, 0xff5faf, 0xff5fd7, 0xff5fff, 0xff8700, 0xff875f, 0xff8787, 0xff87af, 0xff87d7, 0xff87ff, 0xffaf00, 0xffaf5f, 0xffaf87, 0xffafaf, 0xffafd7, 0xffafff, 0xffd700, 0xffd75f, 0xffd787, 0xffd7af, 0xffd7d7, 0xffd7ff, 0xffff00, 0xffff5f, 0xffff87, 0xffffaf, 0xffffd7, 0xffffff, 0x080808, 0x121212, 0x1c1c1c, 0x262626, 0x303030, 0x3a3a3a, 0x444444, 0x4e4e4e, 0x585858, 0x606060, 0x666666, 0x767676, 0x808080, 0x8a8a8a, 0x949494, 0x9e9e9e, 0xa8a8a8, 0xb2b2b2, 0xbcbcbc, 0xc6c6c6, 0xd0d0d0, 0xdadada, 0xe4e4e4, 0xeeeeee];

function RGBColor(rgb) {
  this._value = rgb;
}
RGBColor.prototype = {
  toHex: function() {
    return '#' + this._value.map(function(e) {
      return ('00' + Math.round(e).toString(16)).slice(-2);
    }).join('');
  },
  toXYZ: function() {
    var R = this._value[0] / 255,
    G = this._value[1] / 255,
    B = this._value[2] / 255;
    R = R > 0.04045 ?
      Math.pow((R + 0.055) / 1.055, 2.4) :
      R / 12.92;
    G = G > 0.04045 ?
      Math.pow((G + 0.055) / 1.055, 2.4) :
      G / 12.92;
    B = B > 0.04045 ?
      Math.pow((B + 0.055) / 1.055, 2.4) :
      B / 12.92;
    R *= 100;
    G *= 100;
    B *= 100;
    var X = R * 0.4124 + G * 0.3576 + B * 0.1805,
    Y = R * 0.2126 + G * 0.7152 + B * 0.0722,
      Z = R * 0.0193 + G * 0.1192 + B * 0.9505;
    return new XYZColor([X, Y, Z]);
  },
  toLab: function() {
    return this.toXYZ().toLab();
  },
  toLCH: function() {
    return this.toLab().toLCH();
  },
  toHSL: function() {
    var R = this._value[0] / 255;
    var G = this._value[1] / 255;
    var B = this._value[2] / 255;
    var Min = Math.min(R, G, B);
    var Max = Math.max(R, G, B);
    var dMax = Max - Min;
    var L = (Max + Min) / 2;
    if (dMax === 0) {
      return [0, 0, L];
    }
    var S = L < 0.5 ?
      dMax / (Max + Min) :
      dMax / (2 - Max - Min);
    var dR = (((Max - R) / 6) + (dMax / 2)) / dMax;
    var dG = (((Max - G) / 6) + (dMax / 2)) / dMax;
    var dB = (((Max - B) / 6) + (dMax / 2)) / dMax;
    var H = 0;
    if (R === Max) {
      H = dB - dG;
    } else if (G === Max) {
      H = (1 / 3) + dR - dB;
    } else if (B === Max) {
      H = (2 / 3) + dG - dR;
    }
    if (H < 0) {
      H += 1;
    } else if (H > 1) {
      H -= 1;
    }
    return new HSLColor([H, S, L]);
  },
  lightness: function(scale) {
    return this.toHSL().lightness(scale).toRGB();
  },
  saturation: function(scale) {
    return this.toHSL().saturation(scale).toRGB();
  }
};

function HSLColor(hsl) {
  this._value = hsl;
}
HSLColor.prototype = {
  toRGB: function() {
    var H = this._value[0],
    S = this._value[1],
    L = this._value[2];
    var Hue_RGB = function(v1, v2, vH) {
      if (vH < 0) {
        vH += 1;
      } else if (vH > 1) {
        vH -= 1;
      }
      if (6 * vH < 1) {
        return v1 + (v2 - v1) * 6 * vH;
      }
      if (2 * vH < 1) {
        return v2;
      }
      if (3 * vH < 2) {
        return v1 + (v2 - v1) * (2 / 3 - vH) * 6;
      }
      return v1;
    };
    if (S === 0) {
      return [L * 255, L * 255, L * 255];
    }
    var v2 = L < 0.5 ?
      L * (1 + S) :
      (L + S) - (S * L);
    var v1 = 2 * L - v2;
    var R = 255 * Hue_RGB(v1, v2, H + (1 / 3));
    var G = 255 * Hue_RGB(v1, v2, H);
    var B = 255 * Hue_RGB(v1, v2, H - (1 / 3));
    return new RGBColor([R, G, B]);
  },
  toHex: function() {
    return this.toRGB().toHex();
  },
  toXYZ: function() {
    return this.toRGB().toXYZ();
  },
  toLab: function() {
    return this.toRGB().toLab();
  },
  toLCH: function() {
    return this.toRGB().toLCH();
  },
  toHSL: function() {
    return this;
  },
  lightness: function(scale) {
    var L = this._value[2];
    L *= scale;
    if (L < 0) {
      L = 0;
    } else if (L > 1) {
      L = 1;
    }
    return new HSLColor([this._value[0], this._value[1], L]);
  },
  saturation: function(scale) {
    var S = this._value[1];
    S *= scale;
    if (S < 0) {
      S = 0;
    } else if (S > 1) {
      S = 1;
    }
    return new HSLColor([this._value[0], S, this._value[2]]);
  }
};

function XYZColor(xyz) {
  this._value = xyz;
}
XYZColor.prototype = {
  toRGB: function() {
    var X = this._value[0] / 100;
    var Y = this._value[1] / 100;
    var Z = this._value[2] / 100;
    var R = X *  3.2406 + Y * -1.5372 + Z * -0.4986;
    var G = X * -0.9689 + Y *  1.8758 + Z *  0.0415;
    var B = X *  0.0557 + Y * -0.2040 + Z *  1.0570;
    R = R > 0.0031308 ?
      1.055 * Math.pow(R, 1 / 2.4) - 0.055 :
      12.92 * R;
    G = G > 0.0031308 ?
      1.055 * Math.pow(G, 1 / 2.4) - 0.055 :
      12.92 * G;
    B = B > 0.0031308 ?
      1.055 * Math.pow(B, 1 / 2.4) - 0.055 :
      12.92 * B;
    R *= 255;
    G *= 255;
    B *= 255;
    return new RGBColor([R, G, B]);
  },
  toHex: function() {
    return this.toRGB().toHex();
  },
  toLCH: function() {
    return this.toLab().toLCH();
  },
  toHSL: function() {
    return this.toRGB().toHSL();
  },
  toLab: function() {
    var ep = 0.008856,
    ka = 903.3;
    var X = this._value[0] / 95.047,
    Y = this._value[1] / 100,
      Z = this._value[2] / 108.883;
    var fX = X > ep ?
      Math.pow(X, 1 / 3) :
      (ka * X + 16) / 116;
    var fY = Y > ep ?
      Math.pow(Y, 1 / 3) :
      (ka * Y + 16) / 116;
    var fZ = Z > ep ?
      Math.pow(Z, 1 / 3) :
      (ka * Z + 16) / 116;
    var L = 116 * fY - 16,
    a = 500 * (fX - fY),
      b = 200 * (fY - fZ);
    return new LabColor([L, a, b]);
  },
  lightness: function(scale) {
    return this.toHSL().lightness(scale).toXYZ();
  },
  saturation: function(scale) {
    return this.toHSL().saturation(scale).toXYZ();
  }
};

function LabColor(lab) {
  this._value = lab;
}
LabColor.prototype = {
  toRGB: function() {
    return this.toXYZ().toRGB();
  },
  toHSL: function() {
    return this.toRGB().toHSL();
  },
  toLab: function() {
    return this;
  },
  toHex: function() {
    return this.toRGB().toHex();
  },
  toXYZ: function() {
    var Y = (this._value[0] + 16) / 116;
    var X = this._value[1] / 500 + Y;
    var Z = Y - this._value[2] / 200;
    Y = Math.pow(Y, 3) > 0.008856 ?
      Math.pow(Y, 3) :
      (Y - 16 / 116) / 7.787;
    X = Math.pow(X, 3) > 0.008856 ?
      Math.pow(X, 3) :
      (X - 16 / 116) / 7.787;
    Z = Math.pow(Z, 3) > 0.008856 ?
      Math.pow(Z, 3) :
      (Z - 16 / 116) / 7.787;
    X *= 95.047;
    Y *= 100;
    Z *= 108.883;
    return new XYZColor([X, Y, Z]);
  },
  toLCH: function() {
    var a = this._value[1], b = this._value[2];
    var H = Math.atan2(b, a);
    H = H > 0 ? (H / Math.PI) * 180 :
      360 - (Math.abs(H) / Math.PI) * 180;
    var C = Math.sqrt(a * a + b * b);
    return [this._value[0], C, H];
  }
};

function Color(hex) {
  return new RGBColor(this.toRGB(hex));
}
Color.prototype = {
  toRGB: function(hex) {
    var hexVal = typeof hex === 'string' ? parseInt(hex.replace('#', ''), 16) : hex;
    var R = (hexVal >> 16) & 0xff,
    G = (hexVal >> 8) & 0xff,
      B = hexVal & 0xff;
    return [R, G, B];
  },
};

var ColorTools = {
  hexTo256: function(hex) {
    var lab = new Color(hex).toLab();
    var deltas = termColors.map(function(hex) {
      return ColorTools.CIE76(lab, new Color(hex).toLab());
    });
    var deltaUpper = Infinity;
    var deltaCode;
    deltas.slice(16).forEach(function(e, i) {
      if (e < deltaUpper) {
        deltaUpper = e;
        deltaCode = i + 16;
      }
    });
    return deltaCode;
  },
  CIE76: function(lab1, lab2) {
    lab1 = lab1.toLab()._value;
    lab2 = lab2.toLab()._value;
    var dE = Math.sqrt(Math.pow(lab2[0] - lab1[0], 2) +
        Math.pow(lab2[1] - lab1[1], 2) +
        Math.pow(lab2[2] - lab1[2], 2));
    return dE;
  }
};
