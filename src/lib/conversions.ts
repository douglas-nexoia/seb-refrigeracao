// Conversions & Tracking Helper Oficial - SEB REFRIGERAÇÃO (São Paulo / SP)

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Contatos Oficiais Segregados
 */
export const OFFICIAL_WHATSAPP_NUMBER = '5511941428160';
export const OFFICIAL_WHATSAPP_DISPLAY = '(11) 94142-8160';

export const OFFICIAL_PHONE_NUMBER = '11969824380';
export const OFFICIAL_PHONE_DISPLAY = '(11) 96982-4380';
export const OFFICIAL_PHONE_LINK = `tel:${OFFICIAL_PHONE_NUMBER}`;

/**
 * Mensagem Padrão Universal do CRM (Gatilho de Lead)
 */
export const OFFICIAL_WHATSAPP_MESSAGE = 'Olá! Vim pelo site, gostaria de um atendimento.';
export const OFFICIAL_WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${OFFICIAL_WHATSAPP_NUMBER}&text=${encodeURIComponent(
  OFFICIAL_WHATSAPP_MESSAGE
)}`;

/**
 * IDs Oficiais do Google Ads
 */
export const GOOGLE_ADS_ID = 'AW-18430448949';
export const GOOGLE_ADS_WHATSAPP_CONVERSION = 'AW-18430448949/GvfdCKPxtO4cELWqqdRE';
export const GOOGLE_ADS_PHONE_CONVERSION = 'AW-18430448949/sxRZCKbxtO4cELWqqdRE';

/**
 * Dispara evento de conversão do WhatsApp diretamente para o Google Ads
 */
export const reportarConversaoWhatsApp = (callback?: () => void) => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
        value: 1.0,
        currency: 'BRL',
      });
    }
  } catch (err) {
    console.error('Erro ao reportar conversão WhatsApp para o Google Ads:', err);
  }

  if (callback && typeof callback === 'function') {
    setTimeout(callback, 200);
  }
};

/**
 * Dispara evento de conversão do Telefone diretamente para o Google Ads
 */
export const reportarConversaoTelefone = (callback?: () => void) => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: GOOGLE_ADS_PHONE_CONVERSION,
      });
    }
  } catch (err) {
    console.error('Erro ao reportar conversão Telefone para o Google Ads:', err);
  }

  if (callback && typeof callback === 'function') {
    setTimeout(callback, 200);
  }
};
