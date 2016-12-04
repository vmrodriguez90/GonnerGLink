#!/usr/bin/env bash


zipalign -v 4 ./platforms/android/build/outputs/apk/android-release-unsigned.apk ./GLink.apk
