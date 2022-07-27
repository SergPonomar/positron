function getImageUrl(name) {
  return new URL(`../assets/${name}`, import.meta.url).href
}

function formatPrice(price) {
  let split = price.toString().split(".")
  split[0] = split[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  return split.join(".")
}

export {formatPrice, getImageUrl}