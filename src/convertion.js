module.exports = {
  get AU_IN_KM() { return 149587870},

  convertAUtoKM(au) {
    return au * this.AU_IN_KM 
  }
}