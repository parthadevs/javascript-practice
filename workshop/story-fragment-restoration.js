/**
 * Story Fragment Restoration
 * --------------------------
 *
 * Restores a story from shuffled, duplicated, incomplete, and
 * undefined fragments.
 *
 * The restoration pipeline:
 *
 * 1. Compact
 *    Remove undefined fragments without modifying the source array.
 *
 * 2. Sort
 *    Arrange fragments by ascending `id` using a custom stable sorting
 *    algorithm. JavaScript's built-in `sort()` must not be used.
 *
 * 3. Deduplicate
 *    Remove duplicate fragments with the same `id`, keeping the first
 *    occurrence.
 *
 * 4. Fill Missing Fragments
 *    Detect gaps in the ID sequence and insert placeholder fragments:
 *
 *    { id: missingId, text: "[...]" }
 *
 * 5. Assemble
 *    Combine all fragment text values into the final story, separated
 *    by newline characters.
 *
 * Requirements:
 * - Do not modify the original `shuffledFragments` array.
 * - All processing functions must return new data without mutating
 *   their input arrays.
 * - Log `[COMPACTED]`, `[DEDUPED]`, and `[FILLED]` messages when the
 *   corresponding operations occur.
 *
 * Data Flow:
 *
 * shuffledFragments
 *        ↓
 * compactFragments()
 *        ↓
 * compactedShuffledFragments
 *        ↓
 * sortFragments()
 *        ↓
 * sortedFragments
 *        ↓
 * dedupeFragments()
 *        ↓
 * dedupedFragments
 *        ↓
 * fillMissingFragments()
 *        ↓
 * filledFragments
 *        ↓
 * assembleStory()
 *        ↓
 * Complete Story
 */

const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(array) {
  let result = [];

  for (let item of array) {
    if (item === undefined) {
      console.log("[COMPACTED] Removed undefined fragment");
      continue;
    }
    result.push(item);
  }
  return result;
}

const compactedShuffledFragments = compactFragments(shuffledFragments)

function sortFragments(fragments) {
  const sorted = [...fragments];

  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - i - 1; j++) {
      if (sorted[j].id > sorted[j + 1].id) {
        const temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }

  return sorted;
}

const sortedFragments = sortFragments(compactedShuffledFragments);



function dedupeFragments(sortedArray) {
  const seen = new Set();
  const result = [];

  for (const fragment of sortedArray) {
    if (!seen.has(fragment.id)) {
      seen.add(fragment.id);
      result.push(fragment);
    } else {
      console.log(`[DEDUPED] Fragment with id ${fragment.id}`);
    }
  }

  return result;
}

const dedupedFragments = dedupeFragments(sortedFragments)

function fillMissingFragments(sArray){

  let sortedArray = [...sArray];
  
  const result = [];
  for(let i=0; i < sortedArray.length - 1; i++){
    result.push(sortedArray[i]);
    let current = sortedArray[i].id;
    let next = sortedArray[i+1].id;

    for(let j = current + 1; j < next;j++){
      result.push({id : j,text : "[...]"})
      console.log("[FILLED]")
    }

  } 
  result.push(sortedArray[sortedArray.length - 1]);
  return result
}

const filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(fragments) {
  let result = "";

  for (let i = 0; i < fragments.length; i++) {
    result += fragments[i].text;

    if (i < fragments.length - 1) {
      result += "\n";
    }
  }

  return result;
}

console.log(assembleStory(filledFragments)) 