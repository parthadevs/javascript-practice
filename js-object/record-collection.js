/***
 * User Stories:
    Your function must always return the entire records object.
    If value is an empty string, delete the given prop property from the album.
    If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
    If prop is tracks and value isn't an empty string, but the album doesn't have a tracks property, create an empty array and add value to it.
    If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.

Note: A copy of the recordCollection object is used for the tests. Your function should not directly refer to the recordCollection object, only the function parameter.
 
*/

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records,id,prop,value){
  if(value === ""){
    delete records[id][prop]
  }else if(prop !== "tracks" && value !== ""){
    records[id][prop] = value;
  } else if(prop === "tracks" && value !== "" && !records[id].hasOwnProperty(prop)){
    records[id]["tracks"] = [];
    records[id][prop].push(value);
  } else if(prop === "tracks" && value !== "" && records[id].hasOwnProperty(prop)){
    records[id][prop].push(value);
  }
  return records
}

