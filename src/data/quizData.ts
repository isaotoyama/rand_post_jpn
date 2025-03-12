export interface QuizQuestion {
  id: string;
  category: 'art' | 'movie';
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  targetAudience: string[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    category: 'art',
    question: '葛飾北斎の「富嶽三十六景 神奈川沖浪裏」が制作された時期は？',
    options: ['1820-1825', '1829-1833', '1840-1845', '1850-1855'],
    correctAnswer: '1829-1833',
    explanation: '「神奈川沖浪裏」は葛飾北斎の代表作で、江戸時代後期の1829年から1833年にかけて制作されました。',
    difficulty: 'medium',
    targetAudience: ['art students', 'history enthusiasts', 'japanese culture fans']
  },
  {
    id: '2',
    category: 'art',
    question: '尾形光琳の「風神雷神図屏風」の特徴的な要素は？',
    options: ['金箔背景の使用', '水墨画の技法', '浮世絵の様式', '油彩画の技法'],
    correctAnswer: '金箔背景の使用',
    explanation: '尾形光琳の「風神雷神図屏風」は、金箔を贅沢に使用した背景が特徴的で、琳派の代表作として知られています。',
    difficulty: 'hard',
    targetAudience: ['art historians', 'traditional art enthusiasts', 'museum curators']
  },
  {
    id: '3',
    category: 'movie',
    question: '黒澤明の「七人の侍」が公開された年は？',
    options: ['1950', '1954', '1958', '1962'],
    correctAnswer: '1954',
    explanation: '「七人の侍」は1954年に公開され、日本映画の黄金期を代表する作品となりました。',
    difficulty: 'easy',
    targetAudience: ['film students', 'cinema enthusiasts', 'international movie fans']
  },
  {
    id: '4',
    category: 'movie',
    question: '「千と千尋の神隠し」のアカデミー賞受賞部門は？',
    options: ['長編アニメーション賞', '外国語映画賞', '美術賞', '音楽賞'],
    correctAnswer: '長編アニメーション賞',
    explanation: '「千と千尋の神隠し」は2003年のアカデミー賞で長編アニメーション賞を受賞し、日本アニメーション史上初の快挙となりました。',
    difficulty: 'medium',
    targetAudience: ['anime fans', 'film enthusiasts', 'animation students']
  },
  {
    id: '5',
    category: 'art',
    question: '長谷川等伯の「松林図屏風」の制作年代は？',
    options: ['1550年代', '1580年代', '1590年代', '1600年代'],
    correctAnswer: '1590年代',
    explanation: '「松林図屏風」は1590年代に制作され、水墨画の最高傑作の一つとして評価されています。',
    difficulty: 'hard',
    targetAudience: ['art historians', 'japanese art enthusiasts', 'museum professionals']
  },
  {
    id: '6',
    category: 'movie',
    question: '「羅生門」の国際的な評価を決定付けた賞は？',
    options: ['ヴェネチア国際映画祭金獅子賞', 'カンヌ国際映画祭パルムドール', 'ベルリン国際映画祭金熊賞', 'アカデミー名誉賞'],
    correctAnswer: 'ヴェネチア国際映画祭金獅子賞',
    explanation: '1951年のヴェネチア国際映画祭で金獅子賞を受賞し、日本映画の国際的評価を確立しました。',
    difficulty: 'medium',
    targetAudience: ['film historians', 'cinema students', 'international film fans']
  },
  {
    id: '7',
    category: 'art',
    question: '俵屋宗達の代表作「風神雷神図屏風」の現在の所蔵先は？',
    options: ['東京国立博物館', '建仁寺', '京都国立博物館', '出光美術館'],
    correctAnswer: '建仁寺',
    explanation: 'この国宝は京都の建仁寺に所蔵されており、琳派芸術の最高傑作として知られています。',
    difficulty: 'medium',
    targetAudience: ['art enthusiasts', 'museum visitors', 'cultural heritage fans']
  },
  {
    id: '8',
    category: 'movie',
    question: '「もののけ姫」の制作に要した年数は？',
    options: ['2年', '3年', '4年', '5年'],
    correctAnswer: '3年',
    explanation: '宮崎駿監督による「もののけ姫」は、1994年から1997年までの3年の歳月をかけて制作されました。',
    difficulty: 'hard',
    targetAudience: ['anime fans', 'studio ghibli enthusiasts', 'animation students']
  },
  {
    id: '9',
    category: 'art',
    question: '上村松園の「序の舞」が完成した年は？',
    options: ['1910年', '1920年', '1930年', '1940年'],
    correctAnswer: '1930年',
    explanation: '「序の舞」は1930年に完成し、上村松園の代表作として日本画の歴史に大きな影響を与えました。',
    difficulty: 'hard',
    targetAudience: ['art historians', 'japanese painting enthusiasts', 'women artists researchers']
  },
  {
    id: '10',
    category: 'movie',
    question: '「AKIRA」の制作予算は当時のアニメ映画として異例の規模でしたが、その額は？',
    options: ['5億円', '10億円', '15億円', '20億円'],
    correctAnswer: '10億円',
    explanation: '1988年公開の「AKIRA」は、当時としては異例の10億円の制作費を投じた大作アニメでした。',
    difficulty: 'medium',
    targetAudience: ['anime historians', 'film production students', 'animation industry professionals']
  },
  {
    id: '11',
    category: 'art',
    question: '葛飾北斎の「富嶽三十六景」シリーズの実際の図様数は？',
    options: ['36図', '46図', '56図', '66図'],
    correctAnswer: '46図',
    explanation: '「富嶽三十六景」は実際には46図が制作され、追加の10図は人気により後に制作されました。',
    difficulty: 'hard',
    targetAudience: ['art historians', 'ukiyo-e collectors', 'japanese art researchers']
  },
  {
    id: '12',
    category: 'movie',
    question: '「となりのトトロ」と同時上映された作品は？',
    options: ['火垂るの墓', '魔女の宅急便', '紅の豚', '耳をすませば'],
    correctAnswer: '火垂るの墓',
    explanation: '1988年、「となりのトトロ」は「火垂るの墓」と二本立てで公開されました。',
    difficulty: 'medium',
    targetAudience: ['studio ghibli fans', 'animation history enthusiasts', 'film students']
  },
  {
    id: '13',
    category: 'art',
    question: '尾形光琳の「紅白梅図襖」の特徴的な表現技法は？',
    options: ['墨流し', '截金', '絵暈し', '付立'],
    correctAnswer: '墨流し',
    explanation: '「紅白梅図襖」では、水面の表現に墨流しの技法が効果的に使用されています。',
    difficulty: 'hard',
    targetAudience: ['art technique researchers', 'traditional artists', 'art restoration experts']
  },
  {
    id: '14',
    category: 'movie',
    question: '「パーフェクトブルー」の今敏監督が影響を受けたとされる映画監督は？',
    options: ['ヒッチコック', 'キューブリック', 'タルコフスキー', 'リンチ'],
    correctAnswer: 'ヒッチコック',
    explanation: '今敏監督は「パーフェクトブルー」の演出にアルフレッド・ヒッチコックの影響を強く受けています。',
    difficulty: 'hard',
    targetAudience: ['film theory students', 'psychological thriller fans', 'animation directors']
  },
  {
    id: '15',
    category: 'art',
    question: '伊藤若冲の「動植綵絵」は何年かけて完成された？',
    options: ['3年', '5年', '10年', '30年'],
    correctAnswer: '10年',
    explanation: '「動植綵絵」は1757年から1766年までの10年間をかけて制作された大作です。',
    difficulty: 'medium',
    targetAudience: ['art history students', 'edo period researchers', 'painting technique enthusiasts']
  },
  {
    id: '16',
    category: 'movie',
    question: '「時をかける少女」の原作者は？',
    options: ['筒井康隆', '星新一', '小松左京', '眉村卓'],
    correctAnswer: '筒井康隆',
    explanation: '「時をかける少女」は筒井康隆による1967年の小説が原作です。',
    difficulty: 'medium',
    targetAudience: ['literature fans', 'sci-fi enthusiasts', 'adaptation researchers']
  },
  {
    id: '17',
    category: 'art',
    question: '狩野永徳の「唐獅子図屏風」が描かれた城は？',
    options: ['安土城', '大坂城', '江戸城', '姫路城'],
    correctAnswer: '安土城',
    explanation: '「唐獅子図屏風」は安土城天主閣の障壁画として制作されました。',
    difficulty: 'hard',
    targetAudience: ['castle architecture fans', 'japanese history researchers', 'art historians']
  },
  {
    id: '18',
    category: 'movie',
    question: '「パプリカ」の原作小説の作者は？',
    options: ['筒井康隆', '村上春樹', '京極夏彦', '恩田陸'],
    correctAnswer: '筒井康隆',
    explanation: '「パプリカ」は筒井康隆による1993年の小説が原作です。',
    difficulty: 'medium',
    targetAudience: ['literature fans', 'sci-fi enthusiasts', 'anime adaptation researchers']
  },
  {
    id: '19',
    category: 'art',
    question: '酒井抱一の「夏秋草図屏風」の特徴的な背景色は？',
    options: ['金地', '銀地', '群青地', '朱地'],
    correctAnswer: '銀地',
    explanation: '「夏秋草図屏風」は銀地を背景に使用し、優美な草花を描いた琳派の傑作です。',
    difficulty: 'hard',
    targetAudience: ['art technique researchers', 'edo art enthusiasts', 'metal leaf art specialists']
  },
  {
    id: '20',
    category: 'movie',
    question: '「耳をすませば」の制作に関わった宮崎駿の役割は？',
    options: ['監督', '脚本', 'プロデューサー', '原作'],
    correctAnswer: '脚本',
    explanation: '宮崎駿は「耳をすませば」の脚本を担当し、近藤喜文が監督を務めました。',
    difficulty: 'medium',
    targetAudience: ['studio ghibli fans', 'animation production students', 'screenplay writers']
  }
];