# React native utils

![](https://img.shields.io/npm/v/rn-bash-utils.svg)
![](https://img.shields.io/github/stars/ObidosDev/rn-utils.svg) ![](https://img.shields.io/github/forks/ObidosDev/rn-utils.svg) ![](https://img.shields.io/github/issues/ObidosDev/rn-utils.svg)

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

Remove `Derived data` folder.

---

## Android

### adb-reverse

```shell
rn-utils android adb-reverse
```

Calls the method `adb reverse` with default ports `tcp:8081 tcp:8081`.

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