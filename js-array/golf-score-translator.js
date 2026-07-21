/**
 * -----------------------------------------------------------------------------
 * Golf Score Calculator
 * -----------------------------------------------------------------------------
 *
 * In golf, every hole has a **par**, which represents the expected number of
 * strokes needed to complete the hole.
 *
 * The player's score is determined by comparing the number of **strokes** to
 * the **par**. Depending on the result, a specific golf term is returned.
 *
 * -----------------------------------------------------------------------------
 * Objective
 * -----------------------------------------------------------------------------
 *
 * Implement a function named `golfScore(par, strokes)` that returns the
 * appropriate golf score nickname.
 *
 * -----------------------------------------------------------------------------
 * Function Signature
 * -----------------------------------------------------------------------------
 *
 * golfScore(par, strokes) -> string
 *
 * Parameters:
 *   - par: Number
 *   - strokes: Number
 *
 * Returns:
 *   - String
 *
 * -----------------------------------------------------------------------------
 * Scoring Rules
 * -----------------------------------------------------------------------------
 *
 * Hole-in-one!
 *   - strokes === 1
 *
 * Eagle
 *   - strokes === par - 2
 *
 * Birdie
 *   - strokes === par - 1
 *
 * Par
 *   - strokes === par
 *
 * Bogey
 *   - strokes === par + 1
 *
 * Double Bogey
 *   - strokes === par + 2
 *
 * Go Home!
 *   - strokes >= par + 4
 *
 * -----------------------------------------------------------------------------
 * Test Cases
 * -----------------------------------------------------------------------------
 *
 * Hole-in-one!
 *   golfScore(1, 1) -> "Hole-in-one!"
 *   golfScore(3, 1) -> "Hole-in-one!"
 *   golfScore(4, 1) -> "Hole-in-one!"
 *   golfScore(5, 1) -> "Hole-in-one!"
 *
 * Eagle
 *   golfScore(4, 2) -> "Eagle"
 *   golfScore(5, 2) -> "Eagle"
 *
 * Birdie
 *   golfScore(3, 2) -> "Birdie"
 *   golfScore(4, 3) -> "Birdie"
 *   golfScore(5, 4) -> "Birdie"
 *
 * Par
 *   golfScore(3, 3) -> "Par"
 *   golfScore(4, 4) -> "Par"
 *   golfScore(5, 5) -> "Par"
 *
 * Bogey
 *   golfScore(3, 4) -> "Bogey"
 *   golfScore(4, 5) -> "Bogey"
 *   golfScore(5, 6) -> "Bogey"
 *
 * Double Bogey
 *   golfScore(3, 5) -> "Double Bogey"
 *   golfScore(4, 6) -> "Double Bogey"
 *   golfScore(5, 7) -> "Double Bogey"
 *
 * Go Home!
 *   golfScore(3, 7) -> "Go Home!"
 *   golfScore(4, 8) -> "Go Home!"
 *   golfScore(5, 9) -> "Go Home!"
 *
 * -----------------------------------------------------------------------------
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * -----------------------------------------------------------------------------
 */


function golfScore(par,strokes){
  if(strokes == 1){
    return "Hole-in-one!"
  } else if(strokes <= par - 2){
    return "Eagle"
  }else if(strokes == par - 1){
    return "Birdie"
  } else if(strokes == par){
    return "Par"
  }else if(strokes == par + 1){
    return "Bogey"
  } else if(strokes == par + 2){
    return "Double Bogey"
  } else if(strokes >= par + 3){
    return "Go Home!"
  }

}

console.log(golfScore(3, 7))