function tallyVotes (opinions) {
  var counts = {}
  for (var i = 0; i < opinions.length; i++) {
    const opinion = opinions[i].ranking
    if (opinion.length > 0) {
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
    if (opinions[i].ranking.length > 0) {
      if (opinions[i].ranking[0].toString() === minArg) {
        opinions[i].ranking.shift()
      }
    }
  }
  return opinions
}

function countValidVotes (opinions) {
  var votes = 0
  for (var i = 0; i < opinions.length; i++) {
    if (opinions[i].ranking.length > 0) {
      votes += 1
    }
  }
  return votes
}

function buildTraces (results, numberOfChoices, rounds) {
  var traces = []
  const labels = Array.from(Array(numberOfChoices).keys())
  var gradient = 0
  var oldX = Array.from(Array(numberOfChoices).keys())
  for (var round = 1; round <= rounds; ++round) {
    var x = Array.apply(null, Array(numberOfChoices)).map(Number.prototype.valueOf, 0)
    Object.keys(results[round]).forEach(function (candidate) {
      x[candidate] = results[round][candidate]
      if (round > 1) {
        x[candidate] -= oldX[candidate]
      }
    })
    traces.push({
      x: x,
      y: labels,
      name: 'Round ' + round,
      orientation: 'h',
      marker: {
        color: 'rgba(' + gradient + ',' + gradient + ',255, 0.8)',
        width: 0.8
      },
      type: 'bar'
    })
    gradient += 200 / rounds
    oldX = x
  }
  return traces
}

// The function gets an array of OpinionGiven and the pollUid (uint256)
function computeResults (opinionGiven, pollUid, numberOfChoices) {
  var opinions = opinionGiven.filter(function (el) {
    return el.pollUid === pollUid
  })

  var results = {}
  var max = 0
  var voteCount = opinions.length
  var round = 1
  while (max / voteCount < 0.5) {
    var votes = tallyVotes(opinions)
    results[round] = votes
    round += 1
    max = findMax(votes)
    var minArg = findMinArg(votes)
    opinions = removeWorst(opinions, minArg)
    voteCount = countValidVotes(opinions)
  }

  const traces = buildTraces(results, numberOfChoices, round - 1)

  return traces
}

export default computeResults
