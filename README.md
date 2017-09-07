# Example ultrasonic sensor for distance measuremnet.
Example with HC-SR04 ultrasonic sensor including firmware, module driver and tile.

## Hardware required
- 1 x Breadboard
- male – female connectors and jumper wires
- 1 x Ultrasonic sensor HC-SR04
- 1 x nexpaq MSP module
- 1 x nexpaq Developer’s board
- 1 x MSP-EXP430G2 LaunchPad
- 1 Android Phone

## Software required

- [Code Composer Studion IDE][ccs] for firmware
- Any code editor (like [Atom][atom], [Visual Studio Code][vscode], [Sublime Text][sublime], [Brackets][brackets], etc..) for tile
- nexpaq application
  - [Unstable developer's version][unstableapp] (more features)
  - [Stable user's version][stableapp] (more reliable)
  
## Breadboard configuration
![breadboard]

## Useful links:
- [HC-SR04 ultrasonic sensor data sheet][HC-SR04]
- [MSP430 Firmware template and how module firmware works][MSP-TEMP]
- [Flashing firmware to MSP430 developer's module][module]
- [MSP430 developer's module introduction][module]
- [WebView Tile template and TODO: How webview tile works][webview-template]
- TODO: Installing webview tile onto your smartphone in developer's mode



[stableapp]: https://nexpaq.com/app
[unstableapp]: https://nexpaq.com/app-dev
[ccs]: http://www.ti.com/tool/CCSTUDIO
[atom]: https://atom.io/
[vscode]: https://code.visualstudio.com/
[sublime]: https://www.sublimetext.com/
[brackets]: http://brackets.io/

[breadboard]: https://github.com/nexpaq/example-ultrasonic/blob/master/breadboard/HC-SR04.jpg "HC-SR04 ultrasonic sensor Example"
[HC-SR04]: https://cdn.sparkfun.com/datasheets/Sensors/Proximity/HCSR04.pdf
[webview-template]: https://github.com/nexpaq/webview-tile-template
[MSP-TEMP]: https://github.com/nexpaq/msp430-firmware-template
[module]: https://developers.nexpaq.com/
