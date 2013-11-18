#!/bin/bash
set -m
if [ -d "../docs" ];then
  HTDOCS=../docs/
else
  HTDOCS=docs/
fi
cleanup(){
  pid=`ps axu | grep "SimpleHTTPServer 8001" |grep "Python"|awk '{print $2}'`
  if [ -n "$pid" ];then
    echo "kill -9 $pid"
    kill -9 $pid
  fi
  
  pid=`ps axu | grep "weinre.jar" |grep "java"|awk '{print $2}'`
  if [ -n "$pid" ];then
    echo "kill -9 $pid"
    kill -9 $pid
  fi

}

run(){

  echo "java -jar weinre.jar \
      --boundHost=-all- \
      --reuseAddr=true \
      --readTimeout=1 \
      --deathTimeout=5"

  java -jar weinre.jar \
      --boundHost=-all- \
      --reuseAddr=true \
      --readTimeout=1 \
      --deathTimeout=5 &

  cd $HTDOCS
  echo "python -m SimpleHTTPServer 8001"
  python -m SimpleHTTPServer 8001 

}

#########################
run
trap "echo cleanup" INT
cleanup
