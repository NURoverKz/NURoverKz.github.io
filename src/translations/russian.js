const ru = {
  navbar: {
    linkHome: 'Главная',
    linkAbout: 'О нас',
    linkRoadmap: 'Roadmap и прогресс',
    linkTeam: 'Команда',
    linkAdvisers: 'Советники',
    linkPartners: 'Партнеры',
    mobileSocialMedia: 'Наши соц. сети'
  },
  announcement: {
    header: 'Рекрутмент Команды Открыт',
    info: 'Присоединяйтесь к нашей Марсианской миссии и станьте частью истории!',
    action: 'Отправить заявку',
    full_action: 'Отправить заявку на Рекрутмент'
  },
  hero: {
    typedArr: ['Центральной Азии', 'Казахстана'],
    headline: 'Nazarbayev University Rover Team',
    infoStatic: 'Первая команда по строительстве Марсианского ровера из '
  },
  about: {
    header: 'Кто мы?',
    para: `NU Rover — это команда энтузиастов космоса, работающие над созданием первого марсианского вездехода в Центральной Азии. 
          В команду входят преданные своему делу люди из разных областей — инженерии, науки, информатики, финансов, экономики, управления 
          бизнесом — с общей страстью к космосу и желанием раздвинуть границы своих возможностей. Подразделения команды: 
          Обеспечение качества, Роборука, Система корпуса и подвижности, Научное исследование, Поддержка ядерного реактора, 
          Система автоматизации и Консоли, Управление финансами и ресурсами.`
  },
  mission: {
    header: 'Наша миссия',
    para: `<p>
          Нашей главной целью является не только построить первый <orange_text>Марсианский Ровер</orange_text> в Центральной Азии, но и сделать его дешевым,
          автономным и маневренным марсоходом нового поколения с использованием передовых технологий и дизайнерских решений.
          </p>
          <p>
          Мы также хотим представлять Казахстан и Назарбаев Университет в международном соревновании University Rover Challenge, где ежегодно 36 лучших команд 
          со всего мира соревнуются в пустыне Юта, США.
          </p>`
  },
  roadmap: {
    header: 'Стратегия развития',
    caption: 'TRL - Уровень Технологической Готовности Ровера',
    milestones: [
      {
        date: 'Март, 2023',
        description: 'Сбор команды'
      },
      {
        date: 'Апрель, 2023',
        description: 'TRL 1'
      },
      {
        date: 'Май, 2023',
        description: 'TRL 2'
      },
      {
        date: 'Октябрь, 2023',
        description: 'TRL 3 и Регистрация в URC'
      },
      {
        date: 'Ноябрь, 2023',
        description: 'TRL 4 и Предварительный отчет по части дизайна'
      },
      {
        date: 'Февраль, 2024',
        description: 'TRL 5 и Обзор готовности системы'
      },
      {
        date: 'Май, 2024',
        description: 'TRL 6 и Финансовый отчет Исследовательский отчет'
      },
      {
        date: 'Июнь, 2024',
        description: 'TRL 7 и Финал URC'
      },
      {
        date: 'Будущее',
        description: 'Дальнейшее развитие...'
      }
    ],
    roverTRL1: {
      header: 'Ровер TRL 1',
      body: {
        name: 'Корпус',
        description: 'Из алюминия с шириной борта 30 мм'
      },
      wheels: {
        name: 'Колеса',
        description: '6 колес с дифференциалом, предназначенным для сохранения сцепления с почвой и равномерного распределения нагрузки'
      },
      controls: {
        name: 'Управления',
        description: 'Управляется вручную Консолью управления, подключенным через интернет'
      },
      moreInfo: 'Дополнительная информация здесь'
    },
    roverTRL5: {
      header: 'Главная цель: Ровер TRL 5',
      size: {
        name: 'Размеры',
        width: '1.2 м',
        height: '1.2 м',
        depth: '1.2 м',
      },
      weight: {
        name: 'Вес',
        inKg: '70 кг'
      },
      parameters: {
        name: 'Параметры',
        description: 'автономность, маневренность и предсказуемость маршрута'
      },
      tools: {
        name: 'Инструменты',
        description: 'роботизированная рука, мини-лаборатория и механизм сбора почвы'
      }
    }
  },
  team: {
    header: 'Наша команда',
    achievements: 'Достижения',
    caption: 'Наведите или нажмите, чтобы увидеть больше',
    departments: {
      leads: "Руководители команды",
      me: "Механика и Электроника",
      sc: "Программирование и Контроль",
      mf: "Маркетинг и Финансы",
      sn: "Научные исследования и Ядерный реактор",
      qa: "Обеспечение качества (QA)"
    },
    infoHeghine: {
      fullname: 'Агаджанян Егине',
      position: 'Лидер команды/Команда Механики',
      achievements: ['Второе место по Microsoft International AI Hackathon',
      'Организатор инженерного чемпионата "Cosmothon" с более чем 100 участниками']
    },
    infoYussuf: {
      fullname: 'Шахин Юсуф',
      position: 'Команда Электроники',
      achievements: ['Президент клуба робототехники в Международном университете Ала-Тоо',
      'Ассистент по исследованиям в лаборатории преобразования мощности']
    },
    infoLeila: {
      fullname: 'Акишева Лейла',
      position: 'Команда Программирования/Системы',
      achievements: ['Соавтор проекта презентованного в MIT', "Стажер по машинному обучению в Ла-Корунья, Испания"]
    },
    infoBatyrkhan: {
      fullname: 'Шәріпбай Батырхан',
      position: 'Соруководитель команды Программирования/Системы',
      achievements: ['Первое место на Командном Хакатоне по Разработке ПО от StepIT Academy',
      'Автор научного проекта, награжденного на Республиканской олимпиаде по физике']
    },
    infoTomiris: {
      fullname: 'Жумагалиева Томирис',
      position: 'Руководитель команды Ядерного реактора',
      achievements: ['Ассистент в лаборатории биоматериалов и регенеративной инженерии',
        "Топ 1 CGPA в потоке Химической инженерии-2025 с 3 наградами Dean's list"]
    },
    infoAlikhan: {
      fullname: 'Қалмаханбет Алихан',
      position: 'Команда Ядерного реактора',
      achievements: ['Золотой медаль VII Президентской Олимпиады', 
        'Участие многих Олимиад по Химии']
    },
    infoMuslim: {
      fullname: 'Адедамола Муслим',
      position: 'Соруководитель команды Программирования/Системы',
      achievements: ['1% лучших выпускников 2021 года, Илоринский университет', "Президент 'National Society of Black Engineers' в Илоринском университете"]
    },
    infoSymbat: {
      fullname: 'Аккулова Сымбат',
      position: 'Руководитель команды Маркетинга/Брендинга',
      achievements: ['Автор инстаграм постов с более чем 14000 просмотров и 1000 лайков',
       'SMM-менеджер, фотограф и видеооператор коммерческой компании более 3 лет']
    },
    infoDana: {
      fullname: 'Құрманғали Дана',
      position: 'Команда Маркетинга/Брендинга',
      achievements: ['Участница "Unisat Nano-satellite Educational Programme for Girls" (UNEPG), запустившей наноспутник в стратосферу',
      'Экс-руководитель отдела по связям с общественностью NU Student Awards 2023']
    },
    infoZhaniya: {
      fullname: 'Қали Жания',
      position: 'Руководитель команды Научных исследовании',
      achievements: ['Топ 2 CGPA в потоке 2026', 'Волонтëр по многим направлениям в рамках Республиканской программы развития Медаль Елбасы']
    },
    infoDenis: {
      fullname: 'Тен Денис',
      position: 'Команда Программирования/Системы',
      achievements: ['Тренер WRO Всемирной Олимпиады Роботов', 'Тренер FIRST Global Challenge']
    },
    infoZhamila: {
      fullname: 'Азизбекова Жамила',
      position: 'Руководитель команды обеспечения качества (QA)',
      achievements: ['Выпускница проекта UniSat 2022 от ЮНИСЕФ', '2-е место на хакатоне Microsoft Imagine Cup Junior Local']
    },
    infoZhuldyz: {
      fullname: 'Караматдинова Жулдыз',
      position: 'Команда Финансов/Ресурсов',
      achievements: ['Обладатель серебряной награды IYMC 2021',
      '3-е и 2-е места на Международной олимпиаде Phystech по математике и физике']
    },
    infoYerkebulan: {
      fullname: 'Тазабек Еркебұлан',
      position: 'Команда обеспечения качества (QA)',
      achievements: ['Серебряный призер IGeo Istanbul 2021, бронзовый призер IGeo Paris 2022', 'Стажер-писатель National Geographic Qazaqstan']
    },
    infoAruzhan: {
      fullname: 'Аружан Акимхан',
      position: 'Руководитель команды Финансов/Ресурсов',
      achievements: ['IEOx WiC’21 бронза, Казахстанская делегация FBLA 2020', 'Стажировка в должности ассистента-исследователя в НУ, факультет физики']
    },
    infoAizhar: {
      fullname: 'Куденова Айжар',
      position: 'Команда Финансов/Ресурсов',
      achievements: ['Полуфиналистка Technovation Girls 2021', 'Победитель международной олимпиады по математике от МГТУ']
    },
    infoAlisher: {
      fullname: 'Сабигалиев Алишер',
      position: 'Команда Механики',
      achievements: ["Основатель организации 'НИШ ВОЛОНТЕРЫ СЕМЕЙ'",
        'Диплом 3 степени XVI Международного научного конкурса по космическим исследованиям «Открывая мир науки»']
    },
    infoSultan: {
      fullname: 'Касенов Султан',
      position: 'Команда Программирования/Системы',
      achievements: ['3-е место на хакатоне машинного обучения от Quantori и GDSC в НУ',
        '1 место на Республиканской олимпиаде по астрофизике']
    },
    infoAibat: {
      fullname: 'Мұқаметқали Айбат',
      position: 'Руководитель команды Механики',
      achievements: ['2-е место на инженерном хакатоне, организованном NU IMechE', 'Обладатель гранта Python Tech Orda']
    },
    infoSanzhar: {
      fullname: 'Косшыбай Санжар',
      position: 'Команда Механики',
      achievements: ['Лидер команды, занявшей 2-е место в чемпионате "Cosmothon", SEDS chapter',
        '2-е место в Республиканской Олимпиаде Физики']
    },
    infoZhangir: {
      fullname: 'Жумадилов Жангир',
      position: 'Команда Научных исследовании',
      achievements: ['Ассистент-исследователь в проекте IMPT', 'Победитель химических олимпиад (NIS Net, проекты Республиканской олимпиады наук, KBO, Shoqan Ecology)']
    },
    infoAssylzat: {
      fullname: 'Аширбаева Асылзат',
      position: 'Команда Механики',
      achievements: ['Организовала "Engineering case championship" на 150 человек', 'Победительница многих олимпиад по математике']
    }
  },
  advisers: {
    header: 'Консультативный совет',
    caption: 'Наведите или нажмите, чтобы увидеть больше',
    infoElhadidi: {
      fullname: 'Basman Elhadidi',
      achievements: ['Автор дизайнов для низкоорбитальных спутников', 'Обладатель награды Университета Нотр-Дам']
    },
    infoSpitas: {
      fullname: 'Christos Spitas',
      achievements: ['Руководитель проектов для Paramount Engineering и т.д.',
      'Лидер 15 проектов, спонсируемых Еврокомиссией, CERN, Toyota']
    },
    infoVarol: {
      fullname: 'Huseyin Atakan Varol',
      achievements: ['Более 60 опубликованных статьей по робототехнике', 'Старший член и технических редактор IEEE']
    },
    infoBagheri: {
      fullname: 'Mehdi Bagheri',
      achievements: ['Обладатель престижной награды Scopus', 'Входит в лучшие 2% исследователей по количеству публикаций']
    },
    infoKostas: {
      fullname: 'Konstantinos Kostas',
      achievements: ['Участник международных конференций по динамике привычек пешеходов', 'Автор книги «3D дизайн & вычисления в Rhino3D»']
    },
    infoZhao: {
      fullname: 'Yong Zhao',
      achievements: ['Обладатель награды Blue Chip от IBM Corporation', 'Золотая медаль на CrayQuest 2000 от Silicon Graphics Inc.']
    },
    infoJamwal: {
      fullname: 'Prashant Jamwal',
      achievements: ['Обладатель награды Jewel of India', 'Выиграл 2 гранта от Всемирного Банка и запустил несколько стартап компании']
    }
  },
  partners: {
    header: 'Партнеры и спонсоры',
    support: {
      header: 'Хотите поддержать нас?',
      para: `
        <orange_text>Сделав пожертвование нашему проекту, </orange_text>вы можете внести непосредственный вклад в продвижение и успех нашей миссии.
        Ваша щедрость поможет нам: разработать прототипы, купить материалы, спонсировать наше участие в конкурсах и многое другое.`,
      action: 'Поддержать',
      form: {
        header: 'Пожертвования',
        bankHeader: 'Банковские реквизиты "NU Rover"',
        phone: 'Номер телефона',
        card: 'Номер карты',
        action: 'Отменить'
      }
    }
  },
  contact: {
    shortInfo: `
      <p>NU Rover — это команда энтузиастов космоса, работающие над созданием первого марсианского вездехода в Центральной Азии.</p>
      <p>Нашей главной целью является не только построить первый <orange_text>Марсианский Ровер</orange_text> в Центральной Азии, но и сделать его дешевым,
      автономным и маневренным марсоходом нового поколения с использованием передовых технологий и дизайнерских решений.</p>
    `,
    header: 'Наши контакты',
    phone: {
      name: 'Телефон',
    },
    email: {
      name: 'Почта'
    },
    address: {
      name: 'Адрес',
      description: 'проспект Кабанбай батыр, 53, Астана, Казахстан'
    },
    social: {
      name: 'Соц. сети',
      info: 'Не забудьте подписаться на наши аккаунты'
    }
  }
};

export default ru;