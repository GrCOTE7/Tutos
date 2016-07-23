#!/bin/bash

LC_NUMERIC='C'
lettre='Z'

alphabet[$lettre]=529
somme=25000

#pct=$(echo "${alphabet[$lettre]}/$somme" | bc -l)
pct=$(printf '%.3f' $(echo "${alphabet[$lettre]}/$somme" | bc -l))

echo ''
echo 'Résultat = ' ${pct}


#let "n=10/3 | bc -l";
  n=$( echo "100*10/3" | bc -l)
echo ${n};





#a=2; b=3; [ $a == $b ] && c='oui' || c='non'
#echo $c
