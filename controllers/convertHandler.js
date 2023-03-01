/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function (input) {
    let numbers, result
    if (/^[A-Za-z]+$/.test(input)) {
      return 1
    }
    let regExp = /\d*\.*\d*\/*\d*\.*\d*/
    numbers = input.match(regExp)
    if (/\//.test(input)) {
      if (input.match(/\//g).length > 1) {
        return 0
      }
      result = numbers[0].split("/")
      return parseFloat(result[0]) / parseFloat(result[1])
    }
    regExp = /\d*\.*\d*[A-Za-z]*/g
    numbers = input.match(regExp)
    if (numbers.length > 2) {
      return 0
    }
    result = parseFloat(input)
    if (!result) {
      return 0
    }
    return result
  }

  this.getUnit = function (input) {
    if (/kg$/i.test(input)) {
      return "kg"
    }
    if (/lbs$/i.test(input)) {
      return "lbs"
    }
    if (/mi$/i.test(input)) {
      return "mi"
    }
    if (/km$/i.test(input)) {
      return "km"
    }
    if (/gal$/i.test(input)) {
      return "gal"
    }
    if (/l$/i.test(input)) {
      return "L"
    }
    return 0
  }

  this.getReturnUnit = function (initUnit) {
    let result
    switch (initUnit) {
      case "kg":
        result = "lbs"
        break
      case "lbs":
        result = "kg"
        break
      case "L":
        result = "gal"
        break
      case "gal":
        result = "L"
        break
      case "mi":
        result = "km"
        break
      case "km":
        result = "mi"
    }
    return result
  }

  this.spellOutUnit = function (unit) {
    let result
    switch (unit) {
      case "kg":
        result = "kilograms"
        break
      case "lbs":
        result = "pounds"
        break
      case "L":
        result = "liters"
        break
      case "gal":
        result = "gallons"
        break
      case "mi":
        result = "miles"
        break
      case "km":
        result = "kilometers"
    }
    return result
  }

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934
    let result

    switch (initUnit) {
      case "kg":
        result = initNum / lbsToKg
        break
      case "lbs":
        result = initNum * lbsToKg
        break
      case "L":
        result = initNum / galToL
        break
      case "gal":
        result = initNum * galToL
        break
      case "mi":
        result = initNum * miToKm
        break
      case "km":
        result = initNum / miToKm
        break
    }
    result = result.toFixed(5)
    return parseFloat(result)
  }

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`
  }
}

module.exports = ConvertHandler
