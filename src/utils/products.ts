interface ProductProps {
  title: string,
  price: string,
  isFavorite: boolean,
  spec: Array<string>
}

const products: ProductProps[] = [
  {
    title: 'Tier 1',
    price: '$45',
    isFavorite: false,
    spec: [
      'Mencatat barang masuk',
      'Mencatat barang keluar',
      'Mencatat hasil keuntungan'
    ]
  },
  {
    title: 'Tier 3',
    price: '$80',
    isFavorite: true,
    spec: [
      'Mencatat barang masuk dan keluar',
      'Mencatat Keuntungan',
      'Dapat menganalisa hasil penjualan dengan CHART',
      'Support 7x24 Jam',
      'Export data ke Exce',
      'AI Prediksi penghasilan'
    ]
  },
  {
    title: 'Tier 2',
    price: '$65',
    isFavorite: false,
    spec: [
      'Mencatat barang masuk dan keluar',
      'Mencatat Keuntungan',
      'Dapat menganalisa hasil penjualan dengan CHART',
      'Support 7x24 Jam'
    ]
  }
];

export default products;