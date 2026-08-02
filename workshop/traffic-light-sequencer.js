const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles) {
  if (config.fault) {
    console.log("Faulted phase!");
  } else if (config.phases.length === 0) {
    console.log("No phases found")
  }
  else {
    while (cycles--) {
      for (let phase of config.phases) {
        if (phase.duration >= 0) {
          console.log(`Switching to ${phase.color} for ${phase.duration} s`)
        } else {
          console.log("Invalid phase detected")
        }

      }
    }
  }


}

function generateTimeline(config,cycles){
  let array = [];
  let total = 0;
  if (config.phases.length === 0) {
    return array
  }
  else {
    while (cycles--) {
      for (let phase of config.phases) {
        array.push(total+=phase.duration)
      }
    }
  }
  return array
}

