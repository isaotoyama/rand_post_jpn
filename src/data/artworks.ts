export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: string;
  category: 'art' | 'movie';
  imageUrl: string;
  description: string;
}

export const artworks: Artwork[] = [
  {
    id: '1',
    title: '富嶽三十六景 神奈川沖浪裏',
    artist: '葛飾北斎',
    year: '1829-1833',
    category: 'art',
    imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9',
    description: 'The Great Wave off Kanagawa, one of the most recognized works of Japanese art.'
  },
  {
    id: '2',
    title: '月に叢雲花に風',
    artist: '尾形光琳',
    year: '1709',
    category: 'art',
    imageUrl: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d',
    description: 'Wind and Thunder Gods, a pair of folding screens.'
  },
  {
    id: '3',
    title: '七宝つなぎ',
    artist: '伝統文様',
    year: '江戸時代',
    category: 'art',
    imageUrl: 'https://images.unsplash.com/photo-1573069684673-5268f9ae4b8a',
    description: 'Traditional Japanese pattern of linked circles.'
  },
  {
    id: '4',
    title: 'セブン侍',
    artist: '黒澤明',
    year: '1954',
    category: 'movie',
    imageUrl: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf',
    description: 'Seven Samurai, directed by Akira Kurosawa.'
  },
  {
    id: '5',
    title: '千と千尋の神隠し',
    artist: '宮崎駿',
    year: '2001',
    category: 'movie',
    imageUrl: 'https://images.unsplash.com/photo-1590796583326-afd3bb20d22d',
    description: 'Spirited Away, directed by Hayao Miyazaki.'
  },
  {
    id: '6',
    title: 'AKIRA',
    artist: '大友克洋',
    year: '1988',
    category: 'movie',
    imageUrl: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4',
    description: 'AKIRA, directed by Katsuhiro Otomo.'
  },
  {
    id: '7',
    title: '舞妓図',
    artist: '上村松園',
    year: '1915',
    category: 'art',
    imageUrl: 'https://images.unsplash.com/photo-1576076819613-26f8537ae375',
    description: 'Portrait of a maiko, showing the beauty of traditional Japanese culture.'
  },
  {
    id: '8',
    title: '雨月物語',
    artist: '溝口健二',
    year: '1953',
    category: 'movie',
    imageUrl: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f',
    description: 'Ugetsu, a masterpiece of Japanese cinema.'
  },
  {
    id: '9',
    title: '松林図屏風',
    artist: '長谷川等伯',
    year: '1595',
    category: 'art',
    imageUrl: 'https://images.unsplash.com/photo-1576076819613-26f8537ae375',
    description: 'Pine Trees, a masterpiece of Japanese ink painting.'
  },
  {
    id: '10',
    title: '羅生門',
    artist: '黒澤明',
    year: '1950',
    category: 'movie',
    imageUrl: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf',
    description: 'Rashomon, a groundbreaking film that introduced Japanese cinema to the world.'
  },
  {
    id: '11',
    title: '紅白梅図襖',
    artist: '尾形光琳',
    year: '1710-1716',
    category: 'art',
    imageUrl: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d',
    description: 'Red and White Plum Blossoms, a National Treasure of Japan.'
  },
  {
    id: '12',
    title: 'となりのトトロ',
    artist: '宮崎駿',
    year: '1988',
    category: 'movie',
    imageUrl: 'https://images.unsplash.com/photo-1590796583326-afd3bb20d22d',
    description: 'My Neighbor Totoro, a beloved animation classic.'
  },
  {
    id: '13',
    title: '富嶽三十六景 凱風快晴',
    artist: '葛飾北斎',
    year: '1830-1833',
    category: 'art',
    imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9',
    description: 'Fine Wind, Clear Morning, showing Mt. Fuji in red.'
  },
  {
    id: '14',
    title: 'もののけ姫',
    artist: '宮崎駿',
    year: '1997',
    category: 'movie',
    imageUrl: 'https://images.unsplash.com/photo-1590796583326-afd3bb20d22d',
    description: 'Princess Mononoke, an epic tale of humans and nature.'
  },
  {
    id: '15',
    title: '源氏物語絵巻',
    artist: '土佐光信',
    year: '1130-1140',
    category: 'art',
    imageUrl: 'https://images.unsplash.com/photo-1576076819613-26f8537ae375',
    description: 'The Tale of Genji Scroll, depicting scenes from the classic novel.'
  },
  {
    id: '16',
    title: '時をかける少女',
    artist: '細田守',
    year: '2006',
    category: 'movie',
    imageUrl: 'https://images.unsplash.com/photo-1590796583326-afd3bb20d22d',
    description: 'The Girl Who Leapt Through Time, a modern anime classic.'
  },
  {
    id: '17',
    title: '風神雷神図',
    artist: '俵屋宗達',
    year: '1600年代初期',
    category: 'art',
    imageUrl: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d',
    description: 'Wind God and Thunder God, a masterpiece of the Rinpa school.'
  },
  {
    id: '18',
    title: 'パーフェクトブルー',
    artist: '今敏',
    year: '1997',
    category: 'movie',
    imageUrl: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4',
    description: 'Perfect Blue, a psychological thriller anime.'
  },
  {
    id: '19',
    title: '四季花鳥図',
    artist: '酒井抱一',
    year: '1820-1830',
    category: 'art',
    imageUrl: 'https://images.unsplash.com/photo-1576076819613-26f8537ae375',
    description: 'Birds and Flowers of the Four Seasons, a masterpiece of the Edo period.'
  },
  {
    id: '20',
    title: 'パプリカ',
    artist: '今敏',
    year: '2006',
    category: 'movie',
    imageUrl: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4',
    description: 'Paprika, a surreal science fiction anime.'
  }
];