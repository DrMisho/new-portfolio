import eifinnImg from '../assets/images/project_eifinn_banking_1795364032228.jpg';
import smartcrmImg from '../assets/images/project_smartcrm_engine_1795363986319.jpg';
import wathbaImg from '../assets/images/project_wathba_commerce_1795363986759.jpg';
import paymentsImg from '../assets/images/project_saas_payments_1795363987409.jpg';

export interface ProjectVisualAsset {
  src: string;
  alt: { en: string; ar: string };
}

export const PROJECT_VISUALS: Partial<Record<string, ProjectVisualAsset>> = {
  eifinn: {
    src: eifinnImg,
    alt: {
      en: 'Architectural glass towers at dusk representing Eifinn core banking infrastructure',
      ar: 'مبانٍ زجاجية حديثة تمثل البنية المصرفية لمنظومة Eifinn',
    },
  },
  smartcrm: {
    src: smartcrmImg,
    alt: {
      en: 'Interconnected dark aluminum and navy glass structure representing SmartCRM data pipelines',
      ar: 'بنية هندسية مترابطة تمثل تدفق البيانات في نظام SmartCRM',
    },
  },
  wathba: {
    src: wathbaImg,
    alt: {
      en: 'Modular navy glass pavilions arranged on dark stone representing Wathba multi-vendor storefronts',
      ar: 'وحدات زجاجية كحلية معيارية تمثل متاجر منصة Wathba متعددة التجار',
    },
  },
  'fulinks-aheadof': {
    src: paymentsImg,
    alt: {
      en: 'Brushed black metal and midnight navy acrylic blocks representing Paymob and Thawani payment rails',
      ar: 'كتل معدنية سوداء وزجاج كحلي تمثل بوابات الدفع في Fulinks وAheadOf',
    },
  },
};
