import { purple, blue, cyan, black} from "../assets";

export const watchDatas = {
  title:"Classy Modern Smart Watch",
  rating: 3.5,
  reviews: 3,
  des: "I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
  watchType: "Model Number",
  watchModel: "Forerunner 290XT",
  images:[purple, blue, cyan, black],
  sizes : [
    { label: 'S', price: 69 },
    { label: 'M', price: 79 },
    { label: 'L', price: 89 },
    { label: 'XL', price: 99 },
  ],
  colors : [
    { name: 'purple', hex: 'bg-purple-500', txt: 'text-purple-600', bdr: 'border-purple-500', rin: 'ring-purple-500', thumbImage: purple},
    { name: 'cyan', hex: 'bg-cyan-400', txt: 'text-cyan-600', bdr: 'border-cyan-500', rin: 'ring-cyan-400', thumbImage: cyan},
    { name: 'blue', hex: 'bg-blue-400', txt: 'text-blue-600', bdr: 'border-blue-500', rin: 'ring-blue-400', thumbImage: blue},
    { name: 'gray', hex: 'bg-gray-600', txt: 'text-gray-600', bdr: 'border-gray-500', rin: 'ring-gray-600', thumbImage: black},
  ]
}