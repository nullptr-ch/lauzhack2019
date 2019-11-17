function tallyVotes (opinions) {
  var counts = {}
  for (var i = 0; i < opinions.length; i++) {
    const opinion = opinions[i].ranking
    if (opinion) {
      const n = opinion[0]
      counts[n] = counts[n] ? counts[n] + 1 : 1
    }
  }
  return counts
}

function findMax (votes) {
  var max = -1
  Object.keys(votes).forEach(function (key) {
    if (max < votes[key]) {
      max = votes[key]
    }
  })
  return max
}

function findMinArg (votes) {
  var min = -1
  var val = ''
  Object.keys(votes).forEach(function (key) {
    if (min === -1 || votes[key] < min) {
      min = votes[key]
      val = key
    }
  })
  return val
}

function removeWorst (opinions, minArg) {
  for (var i = 0; i < opinions.length; i++) {
    if (opinions[i]) {
      if (opinions[i][0] === minArg) {
        opinions[i].shift()
      }
    }
  }
  return opinions
}

// The function gets an array of OpinionGiven and the pollUid (uint256)
function computeResults (opinionGiven, pollUid) {
  var opinions = opinionGiven.filter(function (el) {
    return el.pollUid === pollUid
  })

  var results = {}
  var max = 0
  const voteCount = opinions.length
  var round = 1
  while (max / voteCount <= 0.5) {
    var votes = tallyVotes(opinions)
    results[round] = votes
    round += 1
    max = findMax(votes)
    var minArg = findMinArg(votes)
    opinions = removeWorst(opinions, minArg)
  }

  return results
}

export default computeResults
