# React native utils

![](https://img.shields.io/npm/v/rn-bash-utils.svg)
![](https://img.shields.io/github/stars/ObidosDev/rn-utils.svg) ![](https://img.shields.io/github/forks/ObidosDev/rn-utils.svg) ![](https://img.shields.io/github/issues/ObidosDev/rn-utils.svg)

###### Table of Contents

- [Installation](#installation)
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
