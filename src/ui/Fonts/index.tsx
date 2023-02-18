import { Poppins } from '@next/font/google';

const poppinsMedium = Poppins({weight: "400"})
const poppinsBold = Poppins({weight: "400"})

export const fonts = {
  poppins: {
    medium: poppinsMedium,
    bold: poppinsBold
  }
}