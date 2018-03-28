var apclust = require('affinity-propagation')
 
// input is a two-dimensional similarity matrix, doesn't have to be symmetric
//var data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
/*
var data = [
			[3, 4, 3, 2, 1], 
			[4, 3, 5, 1, 1], 
			[3, 5, 3, 3, 3],
			[2, 1, 3, 3, 2],
			[1, 1, 3, 2, 3]
			]
*/
//  
//  // basic usage
//var result = apclust.getClusters(data)
//console.log(result)
//console.log(data)
//   
//   // result.exemplars is an array of indices of data points that are cluster exemplars
//   // result.clusters is an array indicating which cluster each data point belongs to
//    
//    // 'preference', 'damping', 'maxIter' and 'convIter' options are available
//    //
//    // 'preference' is the inital preference of each data point being a cluster exemplar
//    // it can be 'median' (data median, default), 'min' (data minimum), or any number
//    //
//    // 'damping' is the damping factor between iterations (default: 0.8)
//    //
//    // 'maxIter' is the maximum number of iterations to run
//    //
//    // 'convIter' is the number of iterations after which the clustering stops if it has converged
//    //
//result = apclust.getClusters(data, {preference: 'median', damping: 0.5})
//console.log(result)


var csv = require("fast-csv");
 
csv
 .fromPath("wine.txt", {delimiter:'\t', rowDelimiter:'\n'})
 .on("data", function(data){
     console.log(data);
 })
 .on("end", function(){
     console.log("done");
 });
