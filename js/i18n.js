/* EN / DE switch. */

(function () {
  const KEY = "hpe-lang";

  const de = {
    "hero.alt": "Wanderer springt vor einem Bergsee",
    "hero.title": "Willkommen zur <em>HPE Private Lounge</em> &ndash; Exklusive Vorteile für unsere Partner",
    "hero.sub": "Sichern Sie sich Tank- und Wunschgutscheine und gewinnen Sie einen spektakulären Aktivurlaub für 2",

    "nav.lounge.desc": "Gewinnen Sie einen unvergesslichen Aktivurlaub, sowie Tank- und Wunschgutscheine",
    "nav.benefits.title": "Exklusive Vorteile",
    "nav.benefits.desc": "Maßgeschneiderte Angebote und zusätzliche Punkte, die nur für Mitglieder einsehbar sind",
    "nav.incentive.title": "Partner-Vorteile",
    "nav.incentive.desc": "Tank- und Wunschgutscheine im Wert von 15 €",
    "nav.prize.title": "Aktivurlaub",
    "nav.prize.desc": "Gewinnen Sie einen unvergesslichen Aktivurlaub im Wert von 199,90 €",

    "intro.eyebrow": "HPE Private Lounge Programm",
    "intro.lead": "Entdecken Sie exklusive Vorteile und maßgeschneiderte Angebote unseres HPE Private Lounge Programms. Werden Sie Teil eines exklusiven Clubs, der speziell darauf ausgerichtet ist, Ihr Hewlett Packard Enterprise &amp; HPE Aruba Networking Geschäftswachstum zu fördern und Ihre Erfahrungen mit unseren führenden Produkten zu bereichern.",
    "intro.title": "Exklusive Angebote erwarten Sie!",
    "intro.take": "Nutzen Sie unsere speziellen Produktangebote und sichern Sie sich nicht nur Tank- und Wunschgutscheine, sondern auch die Chance auf einen unvergesslichen Aktivurlaub.",
    "intro.experience": "Erleben Sie, wie Ihre Investitionen in führende HPE-Technologien Sie nicht nur technologisch voranbringen, sondern auch mit einzigartigen Erlebnissen belohnen!",
    "points.label": "Nur für Mitglieder",
    "points.text": "Als Mitglied des Private Lounge Clubs profitieren Sie zusätzlich von hohen Punkten des ALSO Bonus Clubs, die Sie in unserem Prämienshop einlösen können. Neben den Standardpunkten, welche wir quartalsweise auf unsere HPE-Produkte vergeben, erhalten unsere Private Lounge Members zusätzliche Punkte, die nur für Mitglieder einsehbar sind.",

    "incentive.title": "Das Incentive",
    "incentive.period": "Aktionszeitraum:",
    "incentive.dates": "1. August bis 15. Oktober 2024",
    "voucher.fuel": "Tankgutschein",
    "voucher.wish": "Wunschgutschein",
    "voucher.amount": "15 €",
    "chip.max": "Max. 2 pro Kunde",
    "chip.v100": "100 Gutscheine verfügbar",
    "chip.v70": "70 Gutscheine verfügbar",

    "smart.alt": "HPE Smart Choice Server",
    "smart.desc": "Erhalten Sie Tankgutscheine im Wert von 15 € für jedes gekaufte Gerät aus der HPE Smart Choice Produktreihe. Pro Kunde werden maximal 2 Gutscheine ausgegeben. Insgesamt stehen 100 Gutscheine zur Verfügung.",
    "smart.cta": "HPE Smart Choice Produkte im ALSO-Shop",
    "msa.alt": "HPE MSA Storage System",
    "msa.desc": "Für jeden Kauf der im Folgenden aufgeführten HPE MSA Storage Geräte erhalten Sie einen Wunschgutschein im Wert von 15 €. Pro Kunde können maximal 2 Gutscheine beansprucht werden. Insgesamt stehen 100 Gutscheine zur Verfügung.",
    "msa.cta": "HPE MSA Storage Produkte im ALSO-Shop",
    "ap.alt": "HPE Networking Instant On Access Point",
    "ap.desc": "Erhalten Sie Tankgutscheine im Wert von 15 € für jeden Kauf eines der im Folgenden aufgeführten HPE Networking Instant On Access Points. Pro Kunde können maximal 2 Gutscheine vergeben werden. Insgesamt stehen 70 Gutscheine zur Verfügung.",
    "ap.cta": "HPE Networking Instant On Access Points im ALSO-Shop",
    "sw.alt": "HPE Networking Instant On Switch",
    "sw.desc": "Für jedes gekaufte Gerät der unter dem u.g. Link aufgeführten HPE Networking Instant On Switches können Sie einen Wunschgutschein im Wert von 15 € erhalten. Pro Kunde können max. 2 Gutscheine beansprucht werden. Insgesamt vergeben wir 70 Gutscheine.",
    "sw.cta": "HPE Networking Instant On Switches im ALSO-Shop",

    "prize.alt": "Wanderin steht auf einem Felsen über einem Bergtal",
    "prize.eyebrow": "Verlosung",
    "prize.title": "Steigern Sie Ihre Gewinnchancen",
    "prize.amount": "199,90 €",
    "prize.text": "Mit jedem Kauf eines HPE Smart Choice, HPE MSA Storage oder HPE Networking Instant On sammeln Sie Lose für eine exklusive Verlosung. Pro Kauf eines der aufgeführten Geräte (separiert in HPE &amp; HPE Networking Instant On) erhalten Sie ein Los.",
    "prize.bold": "Gewinnen Sie einen unvergesslichen Aktivurlaub im Wert von 199,90 €. Je mehr Sie kaufen, desto höher Ihre Gewinnchancen!",

    "reg.title": "Melden Sie sich noch heute an",
    "reg.text": "Bereits registrierte Mitglieder müssen sich nicht erneut anmelden, sondern nehmen automatisch am Incentive teil.",
    "reg.valid": "1. Aug. – 15. Okt. 2024",
    "reg.cta": "Jetzt registrieren",

    "contact.title": "Kontakt",
    "contact.text": "Für weitere Informationen oder bei Fragen wenden Sie sich bitte an unser Vertriebsteam:",
    "contact.email": "Email",
    "contact.phone": "Telefon",
    "note.1": "Bereits registrierte Kunden müssen sich <strong>nicht</strong> erneut registrieren und nehmen automatisch am Incentive teil.",
    "note.2": "Gültig solange der Vorrat reicht.",
    "note.3": "Wir müssen Sie darauf hinweisen, dass Sie Ihre Gewinne versteuern und unverzüglich dem Finanzamt melden müssen.",
    "endbar.up": "Nach oben"
  };

  const texts = Array.from(document.querySelectorAll("[data-i18n]"))
    .map((el) => ({ el, en: el.innerHTML, key: el.dataset.i18n }));
  const alts = Array.from(document.querySelectorAll("[data-i18n-alt]"))
    .map((el) => ({ el, en: el.alt, key: el.dataset.i18nAlt }));
  const buttons = Array.from(document.querySelectorAll("[data-lang]"));

  function setLanguage(lang) {
    const german = lang === "de";
    texts.forEach((t) => { t.el.innerHTML = german && de[t.key] ? de[t.key] : t.en; });
    alts.forEach((a) => { a.el.alt = german && de[a.key] ? de[a.key] : a.en; });
    document.documentElement.lang = lang;
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    try { localStorage.setItem(KEY, lang); } catch (e) { /* storage can be blocked */ }
  }

  buttons.forEach((b) => b.addEventListener("click", () => setLanguage(b.dataset.lang)));

  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) { /* ignore */ }
  if (saved === "de") setLanguage("de");
})();
