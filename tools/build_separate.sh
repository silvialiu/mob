#!/bin/bash
PWD=`pwd`
echo $PWD
if [ ${$PWD#*tools}x == "x" ]; then
    cd ..
fi

for i in less/*
do
    cssFileName=${i/\.less/.css}
    cssFileName=${cssFileName/less/css}
    echo "lessc $i $cssFileName"
	lessc $i $cssFileName
done
