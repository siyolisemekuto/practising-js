let mark = 100

if(mark >=0 && mark <= 40){
  console.log('F');
}
else if(mark > 40 && mark <= 50){
  console.log('E');
}
else if(mark > 50 && mark <= 60){
  console.log('D');
}
else if(mark > 60 && mark <= 70){
  console.log('C');
}
else if(mark > 70 && mark <= 80){
  console.log('B');
}
 else if(mark > 80 && mark <= 90){
  console.log('A');
}
 else if(mark > 90 && mark <= 99){
  console.log('A+');
 }
 else if(mark == 100){
  console.log('S');
}
else{
  console.log('invalid mark');
}
