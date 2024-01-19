export const getDiscountedPricePercentage = (
    originalPrice,
    discountedPrice
) => {
    const discount = originalPrice - discountedPrice;

    const discountPercentage = (discount / originalPrice) * 100;

    return discountPercentage.toFixed(2);
};


export function shuffleArray (copied) {
  console.log("copied", copied)
	for (let i = copied.length - 1; i > 0; i--) {
	  const j = Math.floor(Math.random() * (i + 1));
	  [copied[i], copied[j]] = [copied[j], copied[i]];
	}
}