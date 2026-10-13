// Invertors images
import deye66k from "../../assets/products/deye_6-6K.webp";
import deye1420k from "../../assets/products/deye_1420k.webp";
import deye25kw from "../../assets/products/deye25kw.webp";
import deye5kw from "../../assets/products/deye_5kw.webp";
import deye8kw from "../../assets/products/deye_8kw.webp";
import deye10kw from "../../assets/products/deye_10kw.webp";
import anl1100 from "../../assets/products/anl_11000T_48l_w-pro.webp";

// Charging
import dynessPowerBricSC from "../../assets/products/chargings/dyness_powerbrickSC.webp";
import deyeSpringSEG from "../../assets/products/chargings/deye_spring_seg1.webp";

// Solar Panels
import lr772hvhf from "../../assets/products/panels/LR7-72HVHF.webp";
import lp1624Second from "../../assets/products/chargings/lp1624100--2.jpg";
import jkm650670n from "../../assets/products/panels/jkm650-670n-66ql6.jpg";

// Brand Logos
import LogoJinko from "../SvgIcons/LogoBrandJinko";
import LogoDeye from "../SvgIcons/LogoBrandDeye";
import LogoDyness from "../SvgIcons/LogoBrandDyness";
import LogoAninerel from "../SvgIcons/LogoAninerel";
import LogoBrandLongi from "../SvgIcons/LogoBrandLongi";

export const products = {
  invertors: {
    hybridLV: [
      {
        id: "SUN-5K-SG05LP1-EU",
        title: "DEYE SUN-5K (5кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-5K-SG05LP1-EU",
        subtitle: "Низковольтный гибридный однофазный инвертор",
        image: deye5kw,
        inStock: true,
        price: "120 000 ₽",
        badge: "Хит продаж",
        purpose: {
          label: "Назначение",
          value:
            "Инверторы Deye SUN-5K– это современные однофазные гибридные устройства, разработанные по высоким стандартам для эффективного управления энергией. Они обеспечивают оптимальное хранение и использование энергии, что делает их отличным выбором как для дома, так и для небольших коммерческих объектов. Мощность в 5 кВт позволяет этим инверторам справляться с различными задачами энергоснабжения, при этом они легко интегрируются с уже установленными солнечными системами.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "5кВт" },
          type: { label: "Тип", value: "Гибридный" },
          phase: { label: "Фазы", value: 1 },
          maxChargeV: { label: "Mакс.зарядный ток", value: "120 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 48 В.",
          },
          size: {
            label: "Габариты",
            value: "330×580×232 мм.",
          },
          weight: { label: "Вес", value: "25 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },

      {
        id: "SUN-6K-SG05LP1-EU",
        title: "DEYE SUN-6K (6кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-6K-SG05LP1-EU",
        subtitle: "Низковольтный гибридный однофазный инвертор",
        image: deye5kw,
        inStock: true,
        price: "135 000 ₽",
        badge: "Хит продаж",
        purpose: {
          label: "Назначение",
          value:
            "Серия инверторов Deye SUN-6K представляет собой современную линейку однофазных гибридных инверторов, созданных для эффективного управления энергией. Эти инверторы разработаны для оптимизации процессов хранения и потребления энергии, что делает их идеальным выбором как для жилых, так и для небольших коммерческих объектов. С мощностью 6 кВт эта универсальная серия удовлетворяет различные потребности в энергии и легко интегрируется с существующими солнечными системами.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "6кВт" },
          phase: { label: "Фазы", value: 1 },
          type: { label: "Тип", value: "Гибридный" },
          maxChargeV: { label: "Mакс.зарядный ток", value: "135 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 48 В.",
          },
          size: {
            label: "Габариты",
            value: "330×580×232 мм.",
          },
          weight: { label: "Вес", value: "24.9 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },

      {
        id: "SUN-8K-SG05LP1-EU",
        title: "DEYE SUN-8K (8кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-8K-SG05LP1-EU",
        subtitle: "Низковольтный гибридный однофазный инвертор",
        image: deye8kw,
        inStock: true,
        price: "190 000 ₽",
        badge: "Хит продаж",
        purpose: {
          label: "Назначение",
          value:
            "Серия инверторов Deye SUN-8K представляет собой современную линейку однофазных гибридных инверторов, разработанных для эффективного управления энергией. Эти инверторы предназначены для оптимизации процессов хранения и потребления энергии, что делает их идеальным решением как для жилых, так и для небольших коммерческих объектов. С мощностью 8 кВт эта серия удовлетворяет различные потребности в энергоснабжении и легко интегрируется с существующими солнечными системами.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "8кВт" },
          phase: { label: "Фазы", value: 1 },
          type: { label: "Тип", value: "Гибридный" },
          maxChargeV: { label: "Mакс.зарядный ток", value: "190 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 48 В.",
          },
          size: {
            label: "Габариты",
            value: "330×580×232 мм.",
          },
          weight: { label: "Вес", value: "26 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },

      {
        id: "SUN-10K-SG06LP1-EU",
        title: "DEYE SUN-10K (10кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-10K-SG06LP1-EU",
        subtitle: "Низковольтный гибридный однофазный инвертор",
        image: deye10kw,
        inStock: true,
        price: "200 000 ₽",
        badge: "Хит продаж",
        purpose: {
          label: "Назначение",
          value:
            "Инвертор Deye SUN-10K современный однофазный гибридный инвертор, разработанный для улучшения хранения и использования энергии в жилых и коммерческих приложениях. Этот инвертор объединяет передовые технологии и прочный дизайн, обеспечивая непревзойденную энергоэффективность и надежность.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "10кВт" },
          phase: { label: "Фазы", value: 1 },
          type: { label: "Тип", value: "Гибридный" },
          maxChargeV: { label: "Mакс.зарядный ток", value: "200 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 40 - 60 В.",
          },
          size: {
            label: "Габариты",
            value: "464×763×282 мм.",
          },
          weight: { label: "Вес", value: "52 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },

      {
        id: "SUN-12K-SG06LP1-EU",
        title: "DEYE SUN-12K (12 кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-12K-SG06LP1-EU",
        subtitle: "Низковольтный гибридный однофазный инвертор",
        image: deye10kw,
        inStock: true,
        price: "225 000 ₽",
        badge: "Хит продаж",
        purpose: {
          label: "Назначение",
          value:
            "Инвертор Deye SUN-12K современный однофазный гибридный инвертор, разработанный для улучшения хранения и использования энергии в жилых и коммерческих приложениях. Этот инвертор объединяет передовые технологии и прочный дизайн, обеспечивая непревзойденную энергоэффективность и надежность.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "12кВт" },
          phase: { label: "Фазы", value: 1 },
          type: { label: "Тип", value: "Гибридный" },
          maxChargeV: { label: "Mакс.зарядный ток", value: "220 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 40 - 60 В.",
          },
          size: {
            label: "Габариты",
            value: "464×763×282 мм.",
          },
          weight: { label: "Вес", value: "52 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },

      {
        id: "SUN-12K-SG05LP3-EU",
        title: "DEYE SUN-12K (12 кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-12K-SG05LP3-EU",
        subtitle: "Низковольтный, гибридный, трёхфазный инвертор",
        image: deye25kw,
        inStock: true,
        price: "290 000 ₽",
        badge: "Хит продаж",
        purpose: {
          label: "Назначение",
          value:
            "Трёхфазный гибридный инвертор Deye, модель SUN-12K, представляет собой современное решение для управления энергией, разработанное как для жилых, так и для коммерческих солнечных установок. Эта серия инверторов обеспечивает интеграцию солнечной генерации с аккумуляторным хранением энергии, что позволяет оптимально использовать энергию и повышать общую эффективность системы.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "12кВт" },
          phase: { label: "Фазы", value: 3 },
          type: { label: "Тип", value: "Гибридный" },
          maxChargeV: { label: "Mакс.зарядный ток", value: "240 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 40 - 60 В.",
          },
          size: {
            label: "Габариты",
            value: "422×658×254 мм.",
          },
          weight: { label: "Вес", value: "38 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },

      {
        id: "SUN-15K-SG05LP3-EU",
        title: "DEYE SUN-15K (15 кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-15K-SG05LP3-EU",
        subtitle: "Низковольтный, гибридный, трёхфазный инвертор",
        image: deye1420k,
        inStock: true,
        price: "320 000 ₽",
        badge: "Хит продаж",
        purpose: {
          label: "Назначение",
          value:
            "DEYE SUN-15K — это универсальный инвертор, сочетающий в себе функции преобразователя, солнечного зарядного устройства и устройства для зарядки батарей. Он обеспечивает надежное и непрерывное электроснабжение в компактном и эргономичном исполнении. Интуитивно понятный ЖК-дисплей упрощает доступ к настройкам и управлению, позволяя пользователю легко регулировать параметры зарядки аккумулятора, выбирать приоритеты между сетью и солнечными панелями, а также задавать допустимые уровни входного напряжения для адаптации к различным условиям эксплуатации.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "15кВт" },
          type: { label: "Тип", value: "Гибридный" },
          phase: { label: "Фазы", value: 3 },
          maxChargeV: { label: "Mакс.зарядный ток", value: "280 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 40 - 60 В.",
          },
          size: {
            label: "Габариты",
            value: "456×750×268.5 мм.",
          },
          weight: { label: "Вес", value: "50.6 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },
      {
        id: "SUN-16K-SG05LP3-EU",
        title: "DEYE SUN-16K (16 кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-15K-SG05LP3-EU",
        subtitle: "Низковольтный, гибридный, трёхфазный инвертор",
        image: deye1420k,
        inStock: true,
        price: "320 000 ₽",
        badge: "Хит продаж",
        purpose: {
          label: "Назначение",
          value:
            "DEYE SUN-16K — многофункциональный инвертор, объединяющий возможности преобразователя, солнечного зарядного устройства и устройства зарядки батарей. Он обеспечивает стабильное и бесперебойное энергоснабжение, отличаясь компактностью и удобством в использовании. Удобный ЖК-дисплей обеспечивает простой доступ к настройкам, позволяя легко управлять процессом зарядки аккумуляторов, выбирать приоритеты между источниками питания и настраивать допустимые уровни входного напряжения для работы в различных условиях.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "16кВт" },
          type: { label: "Тип", value: "Гибридный" },
          phase: { label: "Фазы", value: 3 },
          maxChargeV: { label: "Mакс.зарядный ток", value: "300 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 40 - 60 В.",
          },
          size: {
            label: "Габариты",
            value: "456×750×268.5 мм.",
          },
          weight: { label: "Вес", value: "50.6 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },

      {
        id: "SUN-20K-SG05LP3-EU",
        title: "DEYE SUN-20K (20 кВт)",
        tool: "Гибридный инвертор",
        model: "SUN-20K-SG05LP3-EU",
        subtitle: "Низковольтный, гибридный, трёхфазный инвертор",
        image: deye1420k,
        inStock: true,
        price: "400 000 ₽",
        badge: "Хит продаж",
        purpose: {
          label: "Назначение",
          value:
            "DEYE SUN-20K-SG05LP3-EU-SM2 представляет собой высокотехнологичный инвертор, объединяющий функции преобразования энергии, солнечной зарядки и аккумуляторной поддержки. Устройство обеспечивает стабильное энергоснабжение, сочетая надёжность, эргономичность и компактный дизайн.",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          power: { label: "Мощность", value: "20кВт" },
          type: { label: "Тип", value: "Гибридный" },
          phase: { label: "Фазы", value: 3 },
          maxChargeV: { label: "Mакс.зарядный ток", value: "350 А" },
          controller: { label: "Контроллер", value: " 2 MPPT (МППТ)" },
          //   solarPanelPower: {
          //     label: "Мощность солнечных панелей",
          //     value: "8000 Вт",
          //   },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 40 - 60 В.",
          },
          size: {
            label: "Габариты",
            value: "456×750×268.5 мм.",
          },
          weight: { label: "Вес", value: "50.6 кг" },

          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
      },
    ],
    hybridHV: [],
  },

  chargings: [
    {
      id: "dyness_powerbrickSC",
      tool: "Аккумуляторная батарея",
      title: "Аккумуляторная батарея (LiFePO₄)",
      model: "Dyness PowerBrick SCD",
      image: dynessPowerBricSC,
      inStock: true,
      price: "220 000 ₽",
      badge: "Хит продаж",
      subtitle:
        "Низковольтная литий-железо-фосфатная (LiFePO₄) аккумуляторная батарея, разработанная для домашнего и небольшого коммерческого хранения энергии, в том числе в составе солнечных систем. ",
      purpose: {
        label: "Назначение",
        value:
          "Хранение энергии в солнечных системах для использования ночью или при отключениях сети.",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "Dyness",
          logo: <LogoDyness />,
          link: "https://www.deye-rus.ru/",
        },
        type: {
          label: "Тип батареи",
          value: "LiFePO4(LFP)",
        },
        power: { label: "Номинальное напряжение", value: " 51,2 В" },
        energy: { label: "Номинальная энергия", value: "16,076 кВт·ч." },
        capacity: { label: "Номинальная мощность", value: "314 А·ч" },
        internalResistance: {
          label: "Внутреннее сопротивление",
          value: "≤60mΩ",
        },
        lifeCycles: {
          label: "Количество жизненных циклов разряда/заряда",
          value: "≥8000 циклов",
        },
        ServicePeriod: { label: "Срок службы", value: "10 лет" },
        size: {
          label: "Размер",
          value: "435*233*857 мм.",
        },
        weight: { label: "Вес", value: "116кг" },
      },
    },

    {
      id: "dyness_powerbrickSC",
      tool: "Аккумуляторная батарея",
      title: "Аккумуляторная батарея (LiFePO₄)",
      model: "Dyness PowerBrick SC",
      image: dynessPowerBricSC,
      inStock: true,
      price: "220 000 ₽",
      badge: "Хит продаж",
      subtitle:
        "Низковольтная литий-железо-фосфатная (LiFePO₄) аккумуляторная батарея, разработанная для домашнего и небольшого коммерческого хранения энергии, в том числе в составе солнечных систем. ",
      purpose: {
        label: "Назначение",
        value:
          "Хранение энергии в солнечных системах для использования ночью или при отключениях сети.",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "Dyness",
          logo: <LogoDyness />,
          link: "https://www.deye-rus.ru/",
        },
        type: {
          label: "Тип батареи",
          value: "LiFePO4(LFP)",
        },
        power: { label: "Номинальное напряжение", value: " 51,2 В" },
        energy: { label: "Номинальная энергия", value: "16,076 кВт·ч." },
        capacity: { label: "Номинальная мощность", value: "314 А·ч" },
        internalResistance: {
          label: "Внутреннее сопротивление",
          value: "≤60mΩ",
        },
        lifeCycles: {
          label: "Количество жизненных циклов разряда/заряда",
          value: "≥8000 циклов",
        },
        ServicePeriod: { label: "Срок службы", value: "10 лет" },
        size: {
          label: "Размер",
          value: "435*233*857 мм.",
        },
        weight: { label: "Вес", value: "116кг" },
      },
    },

    {
      id: "DEYE_SPRING_SEG1PROB",
      tool: "Аккумуляторная батарея",
      title: "Аккумуляторная батарея (LiFePO₄)",
      model: "Deye SE-G5.1 Pro-B",
      inStock: false,
      image: deyeSpringSEG,
      price: "220 000 ₽",
      badge: "Хит продаж",
      subtitle:
        "Низковольтный литий-железо-фосфатный (LiFePO₄) аккумуляторный модуль ёмкостью 5,12 кВт·ч. Он предназначен для работы с гибридными инверторами Deye и системами накопления энергии.",
      purpose: {
        label: "Назначение",
        value:
          "Хранение энергии в солнечных системах для использования ночью или при отключениях сети.",
      },

      features: {
        brand: {
          label: "Бренд",
          value: "Deye",
          logo: <LogoDeye />,
          link: "https://www.deye-rus.ru/",
        },
        type: {
          label: "Тип батареи",
          value: "LiFePO4(LFP)",
        },
        power: { label: "Номинальное напряжение", value: " 51,2 В" },
        energy: { label: "Номинальная энергия", value: "16,076 кВт·ч." },
        capacity: { label: "Номинальная мощность", value: "314 А·ч" },
        internalResistance: {
          label: "Внутреннее сопротивление",
          value: "≤60mΩ",
        },
        lifeCycles: {
          label: "Количество жизненных циклов разряда/заряда",
          value: "≥8000 циклов",
        },
        ServicePeriod: { label: "Срок службы", value: "10 лет" },
        size: {
          label: "Размер",
          value: "435*233*857 мм.",
        },
        weight: { label: "Вес", value: "116кг" },
      },
    },
  ],
  panels: [
    // LONGI
    {
      id: "LR7-72HVHF650M",
      tool: "Солнечная панель",
      title: "LONGI",
      model: "LR7-72HVHF-650M",
      subtitle:
        "Солнечная панель технологии  NType 2.0 Оснащена ячейками HPBC 2.0",
      image: lr772hvhf,
      inStock: true,
      price: "17 600 ₽",
      badge: "Есть в наличии",

      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "LONGI",
          logo: <LogoBrandLongi />,
          link: "https://www.longi.com/en/",
        },
        technology: {
          label: "Технология",
          value: "TOPCon, HPBC2.0",
          titleSmall:
            "TOPCon (Tunnel Oxide Passivated Contact — «туннельный оксидный пассивированный контакт») — это технология изготовления самих солнечных ячеек. Она пришла на смену более старой технологии PERC и позволяет заметно повысить эффективность преобразования солнечного света в электричество, HPBC 2.0 (Hybrid Passivated Back Contact) минимизирует затенение ячеек и локальный перегрев.",
        },
        power: { label: "Мощность", value: "650Вт" },
        efficiency: { label: "КПД", value: "24.1%" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "25 A",
        },
        size: {
          label: "Габариты",
          value: "2382x1134x30 мм.",
        },
        weight: { label: "Вес", value: "28, 5 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+85 °C",
        },

        cell: {
          label: "Количество ячеек",
          value: "144 (6x24)",
        },
      },
    },

    {
      id: "LR8-66HVD650M",
      tool: "Солнечная панель",
      title: "LONGI",
      model: "LR8-66HVD-650M",
      subtitle:
        "Солнечная панель технологии  NType 2.0 Оснащена ячейками HPBC 2.0",
      image: lr772hvhf,
      inStock: true,
      price: "17 500 ₽",
      badge: "Есть в наличии",

      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "LONGI",
          logo: <LogoBrandLongi />,
          link: "https://www.longi.com/en/",
        },
        technology: {
          label: "Технология",
          value: "TOPCon, HPBC2.0",
          titleSmall:
            "TOPCon (Tunnel Oxide Passivated Contact — «туннельный оксидный пассивированный контакт») — это технология изготовления самих солнечных ячеек. Она пришла на смену более старой технологии PERC и позволяет заметно повысить эффективность преобразования солнечного света в электричество, HPBC 2.0 (Hybrid Passivated Back Contact) минимизирует затенение ячеек и локальный перегрев.",
        },
        power: { label: "Мощность", value: "650Вт" },
        efficiency: { label: "КПД", value: "24.1%" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "25 A",
        },
        size: {
          label: "Габариты",
          value: "2382x1134x30 мм.",
        },
        weight: { label: "Вес", value: "28, 5 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+85 °C",
        },

        cell: {
          label: "Количество ячеек",
          value: "144 (6x24)",
        },
      },
    },

    {
      id: "LR7-60HVHL540M",
      tool: "Солнечная панель",
      title: "LONGI",
      model: "LR7-60HVHL-540M",
      subtitle:
        "Солнечная панель технологии  NType 2.0 Оснащена ячейками HPBC 2.0",
      image: lr772hvhf,
      inStock: true,
      price: "16 700 ₽",
      badge: "Хит продаж",

      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "LONGI",
          logo: <LogoBrandLongi />,
          link: "https://www.longi.com/en/",
        },
        technology: {
          label: "Технология",
          value: "TOPCon, HPBC2.0",
          titleSmall:
            "TOPCon (Tunnel Oxide Passivated Contact — «туннельный оксидный пассивированный контакт») — это технология изготовления самих солнечных ячеек. Она пришла на смену более старой технологии PERC и позволяет заметно повысить эффективность преобразования солнечного света в электричество, HPBC 2.0 (Hybrid Passivated Back Contact) минимизирует затенение ячеек и локальный перегрев.",
        },
        power: { label: "Мощность", value: "540Вт" },
        efficiency: { label: "КПД", value: "23.9%" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "25 A",
        },
        size: {
          label: "Габариты",
          value: "1990x1134x30 мм.",
        },
        weight: { label: "Вес", value: "16, 3 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+85 °C",
        },

        cell: {
          label: "Количество ячеек",
          value: "120 (6x20)",
        },
      },
    },

    {
      id: "LR7-54HVH485M",
      tool: "Солнечная панель",
      title: "LONGI",
      model: "LR7-54HVH-485M",
      subtitle:
        "Солнечная панель технологии  NType 2.0 Оснащена ячейками HPBC 2.0",
      image: lr772hvhf,
      inStock: true,
      price: "14 000 ₽",
      badge: "Хит продаж",

      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "LONGI",
          logo: <LogoBrandLongi />,
          link: "https://www.longi.com/en/",
        },
        technology: {
          label: "Технология",
          value: "TOPCon, HPBC2.0",
          titleSmall:
            "TOPCon (Tunnel Oxide Passivated Contact — «туннельный оксидный пассивированный контакт») — это технология изготовления самих солнечных ячеек. Она пришла на смену более старой технологии PERC и позволяет заметно повысить эффективность преобразования солнечного света в электричество, HPBC 2.0 (Hybrid Passivated Back Contact) минимизирует затенение ячеек и локальный перегрев.",
        },
        power: { label: "Мощность", value: "485Вт" },
        efficiency: { label: "КПД", value: "23.9%" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "25 A",
        },
        size: {
          label: "Габариты",
          value: "1800x1134x30 мм.",
        },
        weight: { label: "Вес", value: "23, 5 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+85 °C",
        },

        cell: {
          label: "Количество ячеек",
          value: "120 (6x20)",
        },
      },
    },

    // JINKO

    // {
    //   id: "JKN48QL6-DB",
    //   tool: "Солнечная панель",
    //   title: "Jinko 460",
    //   model: "48QL60DB",
    //   subtitle:
    //     "Солнечная панель технологии Tiger Neo III. Ведущий класс мощности на базе усовершенствованной платформы N‑type TOPCon благодаря передовым технологиям и оптимизированной компоновке, которая улавливает больше солнечного света",
    //   image: jkm650670n,
    //   price: "Уточняйте на складе",
    //   badge: "Хит продаж",
    //   inStock: false,
    //   purpose: {
    //     label: "Назначение",
    //     value: "Преобразование солнечной энергии в электричество",
    //   },
    //   features: {
    //     brand: {
    //       label: "Бренд",
    //       value: "JINKO",
    //       logo: <LogoJinko />,
    //       link: "https://www.jinkosolar.com/en/",
    //     },
    //     technology: {
    //       label: "Технология",
    //       value: "N-type Mono-crystaline",
    //       titleSmall:
    //         "N-type Mono-crystaline -  — это тип солнечных ячеек (и панелей на их основе): «mono‑crystalline» значит, что ячейка сделана из одного кристалла кремния, а «N‑type» — что это кремний n‑типа (с электронной проводимостью).",
    //     },
    //     voltage: {
    //       label: "Максимальное напрежение",
    //       value: "36.63 В",
    //     },
    //     power: { label: "Мощность", value: "460Вт" },
    //     maxFuseCurrentA: {
    //       label: "Max ток предохранителя",
    //       value: "30 A",
    //     },
    //     size: {
    //       label: "Габариты",
    //       value: "1762x1140x30 мм.",
    //     },
    //     weight: { label: "Вес", value: "24.4 кг" },
    //     operatingTemperatureRangeC: {
    //       label: "Рабочая температура",
    //       value: "−40…+70 °C",
    //     },
    //     cell: {
    //       label: "Количество ячеек", value: "264 (66x4)"
    //     }
    //   },
    // },

    {
      id: "JKM465M-48QL6-DB",
      tool: "Солнечная панель",
      title: "Jinko 465",
      model: "JKM465M-48QL60DB",
      subtitle: "Солнечная панель технологии Tiger Neo III",
      image: jkm650670n,
      price: "12 400 ₽",
      badge: "Хит продаж",
      inStock: true,
      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "JINKO",
          logo: <LogoJinko />,
          link: "https://www.jinkosolar.com/en/",
        },
        technology: {
          label: "Технология",
          value: "N-type Mono-crystaline",
          titleSmall:
            "N-type Mono-crystaline -  — это тип солнечных ячеек (и панелей на их основе): «mono‑crystalline» значит, что ячейка сделана из одного кристалла кремния, а «N‑type» — что это кремний n‑типа (с электронной проводимостью).",
        },
        voltage: {
          label: "Максимальное напрежение",
          value: "30.80 В",
        },
        power: { label: "Мощность", value: "465Вт" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "30 A",
        },
        efficiency: { label: "КПД", value: "23.27%" },
        size: {
          label: "Габариты",
          value: "1762x1140x30 мм.",
        },
        weight: { label: "Вес", value: "24.4 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+70 °C",
        },

        cell: {
          label: "Количество ячеек",
          value: "264 (66x4)",
        },
      },
    },
    {
      id: "JKM650N-66QL6-BDV",
      tool: "Солнечная панель",
      title: "Jinko 650",
      model: "JKM650N-66QL6BDV",
      subtitle: "Солнечная панель технологии Tiger Neo III",
      image: jkm650670n,
      price: "16 800 ",
      badge: "Хит продаж",
      inStock: false,
      purpose: {
        label: "Назначение",
        value: "Преобразование солнечной энергии в электричество",
      },
      features: {
        brand: {
          label: "Бренд",
          value: "JINKO",
          logo: <LogoJinko />,
          link: "https://www.jinkosolar.com/en/",
        },
        technology: {
          label: "Технология",
          value: "N-type Mono-crystaline",
          titleSmall:
            "N-type Mono-crystaline -  — это тип солнечных ячеек (и панелей на их основе): «mono‑crystalline» значит, что ячейка сделана из одного кристалла кремния, а «N‑type» — что это кремний n‑типа (с электронной проводимостью).",
        },
        voltage: {
          label: "Максимальное напрежение",
          value: "42,57 В",
        },
        power: { label: "Мощность", value: "650Вт" },
        efficiency: { label: "КПД", value: "24. 6%" },
        maxFuseCurrentA: {
          label: "Max ток предохранителя",
          value: "35 A",
        },
        size: {
          label: "Габариты",
          value: "2382x1140x30 мм.",
        },
        weight: { label: "Вес", value: "32, 5 кг" },
        operatingTemperatureRangeC: {
          label: "Рабочая температура",
          value: "−40…+70 °C",
        },

        cell: {
          label: "Количество ячеек",
          value: "264 (66x4)",
        },
      },
    },
  ],
};
