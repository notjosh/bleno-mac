# Bleno (Node.js Bluetooth LE) for MacOS
[![Build Status](https://travis-ci.com/notjosh/bleno-mac.svg?branch=master)](https://travis-ci.com/notjosh/bleno-mac)

_The mac bindings in the [`bleno`](https://github.com/sandeepmistry/bleno) repository use a XPC connection and an undocumented protocol to communicate directly with the bluetooth daemon.
This is error prone, as the protocol needs to be reverse engineered by sniffing the communication between a regular program which uses the official CoreBluetooth API and the 
bluetooth daemon. Since the protocol is not public Apple can change it at anytime (For now every new OSX release changed the protocol)._

This package provides the same functionality as the regular bleno mac bindings using the official [CoreBluetooth API](https://developer.apple.com/documentation/corebluetooth).

## System Requirements
 * Node.js v6.14.2 or later.
 * macOS 10.7 or later

## Prerequisites

### OS X
 * install [Xcode](https://itunes.apple.com/ca/app/xcode/id497799835?mt=12)

## Usage
Simply require `bleno-mac` instead of `bleno`:
```javascript
const bleno = require('bleno-mac');
```
On non-Mac platforms this will use the regular [bleno](https://github.com/noble/bleno/blob/master/README.md) implementation and on MacOS it will use the native binding using the official CoreBluetooth API.

## Note
Be careful to not write to the `Client Characteristic Configuration` descriptor directly to enable notification.
Use `subscribe` instead to enable and listen to notifications.
## Implementation Status
Everything should work that also works with the regular bleno mac bindings.
