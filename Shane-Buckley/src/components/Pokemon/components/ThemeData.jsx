import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Copy, Moon, Sun } from 'lucide-react';

const ThemeGenerator = () => {
  const [primaryColor, setPrimaryColor] = useState('#2563eb');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [darkLevel, setDarkLevel] = useState(2);
  const [lightLevel, setLightLevel] = useState(1);

  const darkThemeLevels = [
    { name: 'Dim', background: '#1e293b', surface: '#334155' },
    { name: 'Dark', background: '#0f172a', surface: '#1e293b' },
    { name: 'Darker', background: '#020617', surface: '#0f172a' },
    { name: 'Darkest', background: '#000000', surface: '#020617' }
  ];

  const lightThemeLevels = [
    { name: 'Bright', background: '#ffffff', surface: '#f8fafc' },
    { name: 'Light', background: '#f8fafc', surface: '#f1f5f9' },
    { name: 'Softer', background: '#f1f5f9', surface: '#e2e8f0' },
    { name: 'Muted', background: '#e2e8f0', surface: '#cbd5e1' }
  ];

  const hexToHSL = (hex) => {
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16) / 255;
    let g = parseInt(hex.substring(2, 4), 16) / 255;
    let b = parseInt(hex.substring(4, 6), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  };

  const hslToHex = (h, s, l) => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  const generateColorVariations = (hsl, isDark) => {
    const levelAdjust = isDark ? darkLevel * 5 : lightLevel * -3;
    const baseS = isDark ? hsl.s : Math.max(30, hsl.s);

    if (isDark) {
      return {
        lightest: hslToHex(hsl.h, Math.max(0, baseS - 10 + levelAdjust), Math.min(100, hsl.l + 25)),
        lighter: hslToHex(hsl.h, Math.max(0, baseS - 5 + levelAdjust), Math.min(100, hsl.l + 15)),
        light: hslToHex(hsl.h, baseS + levelAdjust, Math.min(100, hsl.l + 7)),
        base: hslToHex(hsl.h, baseS + levelAdjust, hsl.l),
        dark: hslToHex(hsl.h, Math.min(100, baseS + 10 + levelAdjust), Math.max(0, hsl.l - 7)),
        darker: hslToHex(hsl.h, Math.min(100, baseS + 15 + levelAdjust), Math.max(0, hsl.l - 15)),
        darkest: hslToHex(hsl.h, Math.min(100, baseS + 20 + levelAdjust), Math.max(0, hsl.l - 25))
      };
    } else {
      return {
        lightest: hslToHex(hsl.h, Math.max(0, baseS - 20 + levelAdjust), Math.min(100, hsl.l + 25)),
        lighter: hslToHex(hsl.h, Math.max(0, baseS - 15 + levelAdjust), Math.min(100, hsl.l + 15)),
        light: hslToHex(hsl.h, Math.max(0, baseS - 10 + levelAdjust), Math.min(100, hsl.l + 7)),
        base: hslToHex(hsl.h, baseS + levelAdjust, hsl.l),
        dark: hslToHex(hsl.h, Math.min(100, baseS + 5 + levelAdjust), Math.max(0, hsl.l - 7)),
        darker: hslToHex(hsl.h, Math.min(100, baseS + 10 + levelAdjust), Math.max(0, hsl.l - 15)),
        darkest: hslToHex(hsl.h, Math.min(100, baseS + 15 + levelAdjust), Math.max(0, hsl.l - 25))
      };
    }
  };

  const generateTheme = (baseColor) => {
    const hsl = hexToHSL(baseColor);
    const themeBase = isDarkMode
      ? darkThemeLevels[darkLevel]
      : lightThemeLevels[lightLevel];

    return {
      primary: generateColorVariations(hsl, isDarkMode),
      background: themeBase.background,
      surface: themeBase.surface,
      hover: isDarkMode
        ? hslToHex(hsl.h, Math.min(100, hsl.s + 10), Math.max(0, hsl.l - 10))
        : hslToHex(hsl.h, Math.max(0, hsl.s - 10), Math.min(100, hsl.l + 10)),
      muted: isDarkMode
        ? hslToHex(hsl.h, Math.max(0, hsl.s - 20), Math.max(15, hsl.l - 30))
        : hslToHex(hsl.h, Math.max(0, hsl.s - 30), Math.min(95, hsl.l + 30)),
      text: isDarkMode ? '#f8fafc' : '#0f172a',
      'text-muted': isDarkMode ? '#94a3b8' : '#475569'
    };
  };

  const theme = generateTheme(primaryColor);

  const ColorBlock = ({ color, name }) => (
    <div className="flex items-center gap-2 mb-2">
      <div
        className={`w-12 h-12 rounded border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
        style={{ backgroundColor: typeof color === 'object' ? color.base : color }}
      />
      <div className="flex-1">
        <p className={`font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{name}</p>
        <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {typeof color === 'object' ? color.base : color}
        </p>
      </div>
      <button
        className={`p-2 rounded ${
          isDarkMode
            ? 'hover:bg-gray-800 text-gray-400'
            : 'hover:bg-gray-100 text-gray-500'
        }`}
        onClick={() => navigator.clipboard.writeText(typeof color === 'object' ? color.base : color)}
      >
        <Copy className="w-4 h-4" />
      </button>
    </div>
  );

  const ColorVariations = ({ variations, title }) => (
    <div className={`mt-4 p-4 rounded-lg ${
      isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100'
    }`}>
      <h4 className={`font-medium mb-3 ${
        isDarkMode ? 'text-gray-200' : 'text-gray-700'
      }`}>{title} Variations</h4>
      <div className="grid grid-cols-1 gap-2">
        {Object.entries(variations).map(([key, value]) => (
          <div key={key} className="flex items-center gap-2">
            <div
              className={`w-8 h-8 rounded border ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              }`}
              style={{ backgroundColor: value }}
            />
            <div className="flex-1">
              <p className={`text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>{key}</p>
              <p className={`text-xs ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>{value}</p>
            </div>
            <button
              className={`p-1 rounded ${
                isDarkMode
                  ? 'hover:bg-gray-700 text-gray-400'
                  : 'hover:bg-gray-200 text-gray-500'
              }`}
              onClick={() => navigator.clipboard.writeText(value)}
            >
              <Copy className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Card className={`w-full max-w-2xl ${
      isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
    }`}>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Theme Generator
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full ${
              isDarkMode
                ? 'bg-gray-800 hover:bg-gray-700'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-gray-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="primary-color" className={
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }>Primary Color</Label>
          <Input
            id="primary-color"
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className={`w-full h-12 ${
              isDarkMode
                ? 'bg-gray-800 border-gray-700'
                : 'bg-gray-50 border-gray-200'
            }`}
          />
        </div>

        <div>
          <Label className={isDarkMode ? 'text-gray-200' : 'text-gray-700'}>
            {isDarkMode ? 'Dark Theme Level' : 'Light Theme Level'}
          </Label>
          <div className="grid grid-cols-4 gap-2 mt-2">
            {(isDarkMode ? darkThemeLevels : lightThemeLevels).map((level, index) => (
              <button
                key={index}
                onClick={() => isDarkMode ? setDarkLevel(index) : setLightLevel(index)}
                className={`p-3 rounded border ${
                  (isDarkMode ? darkLevel : lightLevel) === index
                    ? 'border-blue-500'
                    : isDarkMode
                      ? 'border-gray-700 hover:bg-gray-800'
                      : 'border-gray-200 hover:bg-gray-50'
                } ${
                  isDarkMode ? 'bg-gray-800/50' : 'bg-gray-50/50'
                }`}
              >
                <div
                  className="w-full h-6 rounded mb-2"
                  style={{ backgroundColor: level.background }}
                />
                <span className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{level.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {Object.entries(theme).map(([key, value]) => (
            <div key={key}>
              <ColorBlock color={value} name={key} />
              {key === 'primary' && (
                <ColorVariations variations={value} title="Primary Color" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ThemeGenerator;
