/* Browser SpeechSynthesis wrapper (ported from the prototype's speak()). */
export function speak(text: string, setPlaying?: (v: boolean) => void): void {
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 0.92;
    const vs = window.speechSynthesis.getVoices();
    const pref =
      vs.find((v) => /en-(US|GB)/.test(v.lang) && /(Samantha|Daniel|Google US|Google UK)/i.test(v.name)) ||
      vs.find((v) => /^en/i.test(v.lang));
    if (pref) u.voice = pref;
    if (setPlaying) {
      setPlaying(true);
      u.onend = () => setPlaying(false);
      u.onerror = () => setPlaying(false);
    }
    window.speechSynthesis.speak(u);
  } catch {
    /* ignore */
  }
}
