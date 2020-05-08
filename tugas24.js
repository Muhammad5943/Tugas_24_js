function ascdesc() {
    var x = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

    console.log("Sebelumnya : " + x);

    y = x.sort(function(a, b){return a-b});
    y1 = x.splice(2,2);
    y2 = x.splice(1,1);
    y[3] = [2, 32];

    console.log("Ascending  : " + y + "," + y1[0] + "," + y1[1]);
    

    z = x.sort(function(a, b){return b-a});
    z1 = z.splice(7,1)
    z[4] = [32, 2, 16];
         
    console.log("Descending : " + y1[1] + "," + y1[0] + "," + z);
    

}

ascdesc();
