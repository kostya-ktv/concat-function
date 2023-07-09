const stringConcat = (firstString) => {
  return {
    stringConcat: (additionalString) => {
      return additionalString
        ? stringConcat(`${firstString} ${additionalString}`)
        : firstString.trim()
    }
  }
}
console.log(
    stringConcat('hello').stringConcat('world').stringConcat('!!!').stringConcat()
)
module.exports = {
    stringConcat
}