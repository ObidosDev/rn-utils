# React native utils

[![](https://img.shields.io/npm/v/rn-bash-utils.svg)](https://www.npmjs.com/package/rn-bash-utils)
[![](https://img.shields.io/github/stars/ObidosDev/rn-utils.svg)](https://github.com/ObidosDev/rn-utils/stargazers)
[![](https://img.shields.io/github/forks/ObidosDev/rn-utils.svg)](https://github.com/ObidosDev/rn-utils/network/members)
[![](https://img.shields.io/github/issues/ObidosDev/rn-utils.svg)](https://github.com/ObidosDev/rn-utils/issues)

This is package with useful bash scripts for React-Native developers.<br/>
It will eliminate the need of cheatsheet with different scripts for any actions with a project from terminal.<br/>
Also it will simplify some usual activities with a project.

###### Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [General scripts](#general-scripts)
  - [clear](#clear)
- [iOS](#ios)
  - [remove-derived-data](#remove-derived-data)
- [Android](#android)
  - [reverse](#reverse)
  - [assemble-release](#assemble-release)
  - [install-apk-release](#install-apk-release)
  - [bundle-release](#bundle-release)
  - [install-bundle-release](#install-bundle-release)

## Installation

```shell
npm install -g rn-bash-utils
```

After installation you should relaunch your terminal to enable autocompletion.

---

## Usage

From `ROOT` of the React-Native project you can run all scripts.

```shell
# Platform specific script
# <name_of_the_tool> <platform OR name_of_general_script> <name_of_platform_specific_script>
rn-utils android reverse

# General script
# <name_of_the_tool> <name_of_general_script>
rn-utils clear
```

## General scripts

### clear

```shell
rn-utils clear
```

- Clear watchman watches;
- Delete the `node_modules` folder;
- `npm/yarn` install `node_modules` (depends on lock file);
- Install `pod`s if need;
- Reset Metro Bundler cache;
- Remove haste cache.

---

## iOS

### remove-derived-data

```shell
rn-utils ios remove-derived-data
```

Removing `Derived data` folder.

---

## Android

### reverse

```shell
rn-utils android reverse
```

Calls the method `adb -s <device> reverse tcp:<port> tcp:<port>`. <br/>
It allow to choose one of devices attached and enter port.

Links:

1. [React Native: Connecting to the development server](https://facebook.github.io/react-native/docs/running-on-device#connecting-to-the-development-server-1)

---

### assemble-release

```shell
rn-utils android assemble-release
```

- Remove `android/build` and `android/app/build` folders;
- Calls the method `android/gradlew assembleRelease`;
- Copy apk to root of the project (file `app-release.apk`).

---

### install-apk-release

```shell
rn-utils android install-apk-release
```

Calls the method `adb install` with file `android/app/build/outputs/apk/release/app-release.apk` (Generated after `gradlew assembleRelease`).

---

### bundle-release

```shell
rn-utils android bundle-release
```

- Remove `android/build` and `android/app/build` folders;
- Calls the method `android/gradlew bundleRelease`;
- Copy bundle (.aab) to root of the project (file `app.aab`).

---

### install-bundle-release

```shell
rn-utils android install-bundle-release
```

It uses values from `gradle.properties` for signing.

- Calls the method `bundletool build-apks`
- Generated .apks file is `./release_signed.apks`
- Install apk on device with `bundletool install-apks`

---

## Author

Vitalii Obideiko, Mobile developer.<br/>
[![](https://img.shields.io/static/v1?label=Profile&message=LinkedIn&color=0077b5)](https://www.linkedin.com/in/obidosdev/)<br/>
[![](https://img.shields.io/static/v1?label=Profile&message=GitHub&color=333)](https://github.com/ObidosDev)<br/>
[![](https://img.shields.io/static/v1?label=Profile&message=Facebook&color=3C5A99)](https://www.facebook.com/ObidosDev)
