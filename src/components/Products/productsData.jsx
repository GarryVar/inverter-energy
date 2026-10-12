// Invertors images
import deye66k from "../../assets/products/deye_6-6K.webp";
import deye1420k from "../../assets/products/deye_1420k.webp";
import deye25kw from "../../assets/products/deye25kw.webp";
import anl1100 from "../../assets/products/anl_11000T_48l_w-pro.webp";

// Charging
import dynessPowerBricSC from "../../assets/products/chargings/dyness_powerbrickSC.webp";
import deyeSpringSEG from "../../assets/products/chargings/deye_spring_seg1.webp";

// Solar Panels
import lr772hvhf from "../../assets/products/panels/LR7-72HVHF.webp"
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
        id: "DEYE_SUN-25K-SG01HP3-EU-AM2",
        title: "DEYE SUN-25K",
        tool: "Гибридный инвертор",
        model: "DEYE SUN-25K-SG01HP3-EU-AM2",
        subtitle: "Высоковольтный гибридный трехфазный солнечный инвертор",
        image: deye25kw,
        inStock: false,
        purpose: {
          label: "Назначение",
          value: "Для дома, для резервного питания, для котла отопления, для ИБП",
        },
        features: {
          brand: {
            label: "Бренд",
            value: "Deye",
            logo: <LogoDeye />,
            link: "https://www.deye-rus.ru/",
          },
          type: { label: "Тип", value: "Гибридный" },
          power: { label: "Мощность", value: "25кВт / 25000Вт" },
          controller: { label: "Контроллер", value: "MPPT (МППТ)" },
          solarPanelPower: {
            label: "Мощность солнечных панелей",
            value: "50 000 Вт",
          },
          batteryVoltage: {
            label: "Напряжение аккумулятора",
            value: "Литий-Ионный 160 - 700 В",
          },
          other: {
            label: "Дополнительные характеристики",
            value:
              "Подмешивание в сеть — есть, работа без АКБ — да, экспорт в сеть — есть",
          },
        },
        price: "415 040 ₽",
        badge: "Хит продаж",
      },
    ],
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
      subtitle: "Солнечная панель технологии  NType 2.0 Оснащена ячейками HPBC 2.0",
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
          label: "Количество ячеек", value: "144 (6x24)"
        }
      },
    },

    {
      id: "LR8-66HVD650M",
      tool: "Солнечная панель",
      title: "LONGI",
      model: "LR8-66HVD-650M",
      subtitle: "Солнечная панель технологии  NType 2.0 Оснащена ячейками HPBC 2.0",
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
          label: "Количество ячеек", value: "144 (6x24)"
        }
      },
    },

    {
      id: "LR7-60HVHL540M",
      tool: "Солнечная панель",
      title: "LONGI",
      model: "LR7-60HVHL-540M",
      subtitle: "Солнечная панель технологии  NType 2.0 Оснащена ячейками HPBC 2.0",
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
          label: "Количество ячеек", value: "120 (6x20)"
        }
      },
    },

    {
      id: "LR7-54HVH485M",
      tool: "Солнечная панель",
      title: "LONGI",
      model: "LR7-54HVH-485M",
      subtitle: "Солнечная панель технологии  NType 2.0 Оснащена ячейками HPBC 2.0",
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
          label: "Количество ячеек", value: "120 (6x20)"
        }
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
          label: "Количество ячеек", value: "264 (66x4)"
        }
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
          label: "Количество ячеек", value: "264 (66x4)"
        }
      },
    },

  ],
};
