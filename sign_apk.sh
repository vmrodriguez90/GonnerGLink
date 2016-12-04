#!/usr/bin/env bash


jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ./Gonner.keystore ./platforms/android/build/outputs/apk/android-release-unsigned.apk Gonner
