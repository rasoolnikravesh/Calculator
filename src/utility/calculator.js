const Calculat = (_op = []) => {
  let newRes = [..._op]
  do {

    let resualt = findOps(newRes)
    if (resualt.length > 0) {
      let mulDivid = resualt.filter(item => item.type === "*" || item.type === "/")
      if (mulDivid.length > 0) {
        let first = mulDivid[0]
        if (first.type === "*") {
          let left = Number(newRes[first.index - 1])
          let rith = Number(newRes[first.index + 1])
          let res = left * rith
          newRes.splice(first.index - 1, 1)
          newRes.splice(first.index - 1, 1)
          newRes[first.index - 1] = res
        }
        else if (first.type === "/") {
          let left = Number(newRes[first.index - 1])
          let rith = Number(newRes[first.index + 1])
          let res = left / rith
          newRes.splice(first.index - 1, 1)
          newRes.splice(first.index - 1, 1)
          newRes[first.index - 1] = res
        }
      } else {
        let first = resualt[0]
        if (first.type === "+") {
          let left = Number(newRes[first.index - 1])
          let rith = Number(newRes[first.index + 1])
          let res = rith + left
          newRes.splice(first.index - 1, 1)
          newRes.splice(first.index - 1, 1)
          newRes[first.index - 1] = res
        }
        else if (first.type === "-") {
          let left = Number(newRes[first.index - 1])
          let rith = Number(newRes[first.index + 1])
          let res = left - rith
          newRes.splice(first.index - 1, 1)
          newRes.splice(first.index - 1, 1)
          newRes[first.index - 1] = res
        }
      }
    }
  } while (newRes.length > 1)
  return newRes[0]
}

const findOps = (ops = []) => {
  let res = []
  for (let i = 0; i < ops.length; i++) {
    let item = ops[i]
    switch (item) {
      case "+":
        res.push({
          type: "+",
          index: i
        });
        break
      case "-":
        res.push({
          type: "-",
          index: i
        })
        break
      case "*":
        res.push({
          type: "*",
          index: i
        })
        break
      case "/":
        res.push({
          type: "/",
          index: i
        })
        break
      default:

        break
    }
  }
  return res
}

export { Calculat }