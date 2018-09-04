#!/bin/bash
CONFIG=./loadCss.js
SLACKFILE=/Applications/Slack.app/Contents/Resources/app.asar.unpacked/src/static/ssb-interop.js

cat "$CONFIG" >> "$SLACKFILE"
