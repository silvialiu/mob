#!/bin/bash
rm -rf ./.build; mkdir -p .build;
cat less/*.less > .build/mob.less
lessc .build/mob.less .build/mob.css
rm -rf release;
mkdir -p release/css
cp .build/mob.css release/css/mob.css ;
cp .build/mob.css docs/css/mob.css
cp css/* docs/examples/css/
cat js/*.js > .build/mob.js

mkdir -p release/js
cp .build/mob.js release/js/mob.js
cp .build/mob.js docs/js/mob.js
mkdir -p release/img
cp -r img release/
cp -r img docs/
