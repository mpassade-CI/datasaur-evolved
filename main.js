/***********************
 * ITERATION FUNCTIONS *
 **********************/

const makeDino = function(species, period, carnivore, extinct=false){
  const dino = {
    species: species,
    period: period,
    carnivore: carnivore,
    extinct: extinct
  }
  return dino
}
const singularizeDinos = function(arr){
  return arr.map(function(dino){
    const newDino = makeDino(dino.species,dino.period,dino.carnivore,dino.extinct)
    if (newDino.species.endsWith('us')){
      newDino.species = newDino.species.slice(0, newDino.species.length-2)
    }
    return newDino
  })
}
const truncateDinos = function(arr){
  return arr.map(function(dino){
    const newDino = makeDino(dino.species,dino.period,dino.carnivore,dino.extinct)
    if (newDino.species.length>8){
      newDino.species = newDino.species.slice(0,7)+'...'
    }
    return newDino
  })
}
const makeAllExtinct = function(arr){
  return arr.map(function(dino){
    const newDino = makeDino(dino.species,dino.period,dino.carnivore,dino.extinct)
    newDino.extinct = true
    return newDino
  })
}
const carnivoresOnly = function(arr){
  return arr.filter(function(dino){
    return dino.carnivore
  })
}
const herbivoresOnly = function(arr){
  return arr.filter(function(dino){
    return !dino.carnivore
  })
}
const extinctOnly = function(arr){
  return arr.filter(function(dino){
    return dino.extinct
  })
}
const notExtinct = function(arr){
  return arr.filter(function(dino){
    return !dino.extinct
  })
}
const triassicOnly = function(arr){
  return arr.filter(function(dino){
    return dino.period === 'Triassic'
  })
}
const notTriassic = function(arr){
  return arr.filter(function(dino){
    return dino.period !== 'Triassic'
  })
}
const bySpecies = function(arr){
  return [...arr].sort(function(a,b){
    if (a.species<b.species){
      return -1
    }
    if (a.species>b.species){
      return 1
    }
    return 0
  })
}
const byExtinctLast = function(arr){
  return [...arr].sort(function(a,b){
    if (a.extinct<b.extinct){
      return -1
    }
    if (a.extinct>b.extinct){
      return 1
    }
    return 0
  })
}
const byCarnivoresFirst = function(arr){
  return [...arr].sort(function(a,b){
    if (a.carnivore<b.carnivore){
      return 1
    }
    if (a.carnivore>b.carnivore){
      return -1
    }
    return 0
  })
}
const byPeriod = function(arr){
  return [...arr].sort(function(a,b){
    if (a.period<b.period){
      return 1
    }
    if (a.period>b.period){
      return -1
    }
    return 0
  })
}
/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
