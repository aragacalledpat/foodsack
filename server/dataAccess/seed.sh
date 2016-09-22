#!/bin/sh

input=ingredients
cmd=prog

while read -r line
do
  node seedDatabase.js "$line"
done < "$input"
