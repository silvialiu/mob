#!/bin/bash
PWD=`pwd`
for lessFile in less/*
do
    cssFileName=${lessFile/\.less/.css}
    cssFileName=${cssFileName/less/css}
    echo "lessc $lessFile $cssFileName"
	lessc $lessFile $cssFileName
done
