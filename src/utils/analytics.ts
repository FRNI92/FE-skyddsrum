type AnalyticsEvent = {
  name: string;
  params?: Record<string, string | number | boolean>;
};

const analyticsEnabled = false;

export const initAnalytics = () => {
  if (!analyticsEnabled) {
    return;
  }

  // TODO: Aktivera Google Analytics 4 när mät-ID finns.
  // TODO: Lägg till Google Search Console-verifiering i index.html eller via DNS.
  // TODO: Aktivera Microsoft Clarity när projekt-ID finns.
};

export const trackEvent = ({ name, params }: AnalyticsEvent) => {
  if (!analyticsEnabled) {
    return;
  }

  window.dispatchEvent(new CustomEvent("analytics:event", { detail: { name, params } }));
};
