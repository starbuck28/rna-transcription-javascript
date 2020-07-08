let transcriptionMap = new Map()
transcriptionMap.set("G","C")
transcriptionMap.set("C", "G")
transcriptionMap.set("T", "A")
transcriptionMap.set("A", "U")

const generateRNA = (dnaStrand) => {
  let dnaArray = dnaStrand.split("")
  let rnaArray = dnaArray.map((nucleotide) => {
    return transcriptionMap.get(nucleotide)
  })
  return rnaArray.join("")
}

export const toRna = (dnaStrand) => {
  return dnaStrand == "" ? "" : generateRNA(dnaStrand)
};
