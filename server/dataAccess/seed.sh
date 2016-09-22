#!/bin/sh

input=ingredients
cmd=prog

while read line
do
  node seedDatabase.js $line
done < "$input"
