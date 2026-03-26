/**
 * Utilitário para captura, persistência e decoração de URLs com parâmetros UTM e trackers.
 * Essencial para atribuição de vendas no Meta (Facebook) e Google Ads.
 */

const UTM_FIELDS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'];

/**
 * Captura UTMs da URL e salva no localStorage.
 * Deve ser chamado no carregamento inicial da App ou da Landing Page.
 */
export function captureUTMs() {
  try {
    const params = new URLSearchParams(window.location.search);
    UTM_FIELDS.forEach(field => {
      const value = params.get(field);
      if (value) {
        localStorage.setItem(`utm_${field}`, value);
      }
    });
  } catch (err) {
    console.error("[UTM] Erro ao capturar UTMs:", err);
  }
}

/**
 * Recupera UTMs salvas no localStorage.
 */
export function getStoredUTMs(): Record<string, string> {
  const utms: Record<string, string> = {};
  UTM_FIELDS.forEach(field => {
    const value = localStorage.getItem(`utm_${field}`);
    if (value) {
      utms[field] = value;
    }
  });
  return utms;
}

/**
 * Decora uma URL base com os parâmetros salvos.
 * Útil para botões de checkout (Ticto, Hotmart, etc).
 */
export function decorateURL(baseUrl: string): string {
  try {
    const utms = getStoredUTMs();
    if (Object.keys(utms).length === 0) return baseUrl;

    const url = new URL(baseUrl);
    Object.entries(utms).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
    return url.toString();
  } catch (err) {
    console.error("[UTM] Erro ao decorar URL:", err);
    return baseUrl;
  }
}
