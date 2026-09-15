// -------------------------------------------------------------------
    // Clean 80-Language Dataset (No internal engine labels shown)
    // -------------------------------------------------------------------
    const LANGUAGES_DATA = [
      { name: 'English', flag: '🇺🇸', region: 'americas' },
      { name: 'Spanish', flag: '🇪🇸', region: 'europe' },
      { name: 'Portuguese', flag: '🇧🇷', region: 'americas' },
      { name: 'French', flag: '🇫🇷', region: 'europe' },
      { name: 'German', flag: '🇩🇪', region: 'europe' },
      { name: 'Italian', flag: '🇮🇹', region: 'europe' },
      { name: 'Russian', flag: '🇷🇺', region: 'europe' },
      { name: 'Chinese', flag: '🇨🇳', region: 'asia' },
      { name: 'Japanese', flag: '🇯🇵', region: 'asia' },
      { name: 'Korean', flag: '🇰🇷', region: 'asia' },
      { name: 'Hindi', flag: '🇮🇳', region: 'asia' },
      { name: 'Indonesian', flag: '🇮🇩', region: 'asia' },
      { name: 'Vietnamese', flag: '🇻🇳', region: 'asia' },

      // Script / Region Variants
      { name: 'Chinese (Simplified)', flag: '🇨🇳', region: 'asia' },
      { name: 'Chinese (Traditional)', flag: '🇹🇼', region: 'asia' },
      { name: 'Portuguese (Brazil)', flag: '🇧🇷', region: 'americas' },
      { name: 'Portuguese (Portugal)', flag: '🇵🇹', region: 'europe' },

      // Additional 63 Languages
      { name: 'Afrikaans', flag: '🇿🇦', region: 'mea' },
      { name: 'Akan', flag: '🇬🇭', region: 'mea' },
      { name: 'Albanian', flag: '🇦🇱', region: 'europe' },
      { name: 'Amharic', flag: '🇪🇹', region: 'mea' },
      { name: 'Arabic', flag: '🇸🇦', region: 'mea' },
      { name: 'Armenian', flag: '🇦🇲', region: 'europe' },
      { name: 'Azerbaijani', flag: '🇦🇿', region: 'asia' },
      { name: 'Basque', flag: '🇪🇸', region: 'europe' },
      { name: 'Belarusian', flag: '🇧🇾', region: 'europe' },
      { name: 'Bengali', flag: '🇧🇩', region: 'asia' },
      { name: 'Bulgarian', flag: '🇧🇬', region: 'europe' },
      { name: 'Burmese', flag: '🇲🇲', region: 'asia' },
      { name: 'Catalan', flag: '🇪🇸', region: 'europe' },
      { name: 'Croatian', flag: '🇭🇷', region: 'europe' },
      { name: 'Czech', flag: '🇨🇿', region: 'europe' },
      { name: 'Danish', flag: '🇩🇰', region: 'europe' },
      { name: 'Dutch', flag: '🇳🇱', region: 'europe' },
      { name: 'Estonian', flag: '🇪🇪', region: 'europe' },
      { name: 'Filipino', flag: '🇵🇭', region: 'asia' },
      { name: 'Finnish', flag: '🇫🇮', region: 'europe' },
      { name: 'Galician', flag: '🇪🇸', region: 'europe' },
      { name: 'Georgian', flag: '🇬🇪', region: 'europe' },
      { name: 'Greek', flag: '🇬🇷', region: 'europe' },
      { name: 'Gujarati', flag: '🇮🇳', region: 'asia' },
      { name: 'Hausa', flag: '🇳🇬', region: 'mea' },
      { name: 'Hebrew', flag: '🇮🇱', region: 'mea' },
      { name: 'Hungarian', flag: '🇭🇺', region: 'europe' },
      { name: 'Icelandic', flag: '🇮🇸', region: 'europe' },
      { name: 'Javanese', flag: '🇮🇩', region: 'asia' },
      { name: 'Kannada', flag: '🇮🇳', region: 'asia' },
      { name: 'Kazakh', flag: '🇰🇿', region: 'asia' },
      { name: 'Khmer', flag: '🇰🇭', region: 'asia' },
      { name: 'Kinyarwanda', flag: '🇷🇼', region: 'mea' },
      { name: 'Lao', flag: '🇱🇦', region: 'asia' },
      { name: 'Latvian', flag: '🇱🇻', region: 'europe' },
      { name: 'Lithuanian', flag: '🇱🇹', region: 'europe' },
      { name: 'Macedonian', flag: '🇲🇰', region: 'europe' },
      { name: 'Malay', flag: '🇲🇾', region: 'asia' },
      { name: 'Malayalam', flag: '🇮🇳', region: 'asia' },
      { name: 'Marathi', flag: '🇮🇳', region: 'asia' },
      { name: 'Mongolian', flag: '🇲🇳', region: 'asia' },
      { name: 'Nepali', flag: '🇳🇵', region: 'asia' },
      { name: 'Norwegian', flag: '🇳🇴', region: 'europe' },
      { name: 'Persian', flag: '🇮🇷', region: 'mea' },
      { name: 'Polish', flag: '🇵🇱', region: 'europe' },
      { name: 'Punjabi', flag: '🇮🇳', region: 'asia' },
      { name: 'Romanian', flag: '🇷🇴', region: 'europe' },
      { name: 'Serbian', flag: '🇷🇸', region: 'europe' },
      { name: 'Sindhi', flag: '🇵🇰', region: 'asia' },
      { name: 'Sinhala', flag: '🇱🇰', region: 'asia' },
      { name: 'Slovak', flag: '🇸🇰', region: 'europe' },
      { name: 'Slovenian', flag: '🇸🇮', region: 'europe' },
      { name: 'Sundanese', flag: '🇮🇩', region: 'asia' },
      { name: 'Swahili', flag: '🇰🇪', region: 'mea' },
      { name: 'Swedish', flag: '🇸🇪', region: 'europe' },
      { name: 'Tamil', flag: '🇮🇳', region: 'asia' },
      { name: 'Telugu', flag: '🇮🇳', region: 'asia' },
      { name: 'Thai', flag: '🇹🇭', region: 'asia' },
      { name: 'Turkish', flag: '🇹🇷', region: 'europe' },
      { name: 'Ukrainian', flag: '🇺🇦', region: 'europe' },
      { name: 'Urdu', flag: '🇵🇰', region: 'asia' },
      { name: 'Uzbek', flag: '🇺🇿', region: 'asia' },
      { name: 'Zulu', flag: '🇿🇦', region: 'mea' },
    ];

    let currentRegion = 'all';

    function renderLanguages(filterText = '') {
      const grid = document.getElementById('languages-grid');
      grid.innerHTML = '';

      const searchLower = filterText.toLowerCase().trim();
      const filtered = LANGUAGES_DATA.filter(lang => {
        const matchesRegion = (currentRegion === 'all' || lang.region === currentRegion);
        const matchesSearch = (!searchLower ||
          lang.name.toLowerCase().includes(searchLower));
        return matchesRegion && matchesSearch;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `<div class="col-span-full py-8 text-center text-sm font-bold text-gray-500">No language matches found. We support 80 languages and regional scripts.</div>`;
        return;
      }

      filtered.forEach(lang => {
        const card = document.createElement('div');
        card.className = 'card-brutal p-3 bg-white hover:bg-neo-yellow transition-all duration-150 cursor-pointer flex flex-col justify-between';
        card.onclick = () => {
          alert(`Language: ${lang.name} (${lang.flag})\nStatus: Active in Chrome Extension`);
        };
        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-2xl">${lang.flag}</span>
              <span class="text-[10px] font-mono font-bold text-neo-black bg-neo-yellow px-1.5 py-0.5 border border-black">LIVE</span>
            </div>
            <div class="font-black text-sm text-neo-black truncate">${lang.name}</div>
          </div>
          <div class="text-[10px] text-emerald-700 font-mono font-black mt-2 flex items-center justify-between">
            <span>Supported</span>
            <span>✓</span>
          </div>
        `;
        grid.appendChild(card);
      });
    }

    function setRegionFilter(region) {
      currentRegion = region;
      document.querySelectorAll('.region-filter-btn').forEach(b => {
        if (b.getAttribute('data-region') === region) {
          b.classList.remove('bg-white');
          b.classList.add('bg-neo-yellow', 'active-region');
        } else {
          b.classList.remove('bg-neo-yellow', 'active-region');
          b.classList.add('bg-white');
        }
      });
      renderLanguages(document.getElementById('language-search').value);
    }

    function filterLanguages() {
      const query = document.getElementById('language-search').value;
      renderLanguages(query);
    }

    // -------------------------------------------------------------------
    // Simulator Presets & Phrases
    // -------------------------------------------------------------------
    const SAMPLE_PHRASES = {
      en: "Hello, our central database in Tokyo has stopped responding to inbound queries. We need emergency failover protocol immediately.",
      ja: "こんにちは。東京の中央データベースが着信クエリに応答しなくなりました。直ちに緊急フェイルオーバープロトコルが必要です。",
      es: "Buenas noches, nuestro vuelo llegó con retraso. ¿Podríamos organizar un traslado privado desde el aeropuerto y el registro tardío?",
      fr: "Le patient ressent une douleur thoracique aiguë sévère et un essoufflement. Nous avons immédiatement besoin du cardiologue de garde.",
      de: "Wir haben den Rahmenvertrag geprüft und sind bereit, die weltweite Einführung ab kommenden Montag durchzuführen.",
      zh: "您好，我们在东京的中央数据库已停止响应传入查询。我们需要立即启动紧急故障转移协议。",
      pt: "Boa noite, nosso voo chegou com atraso. Podemos organizar um transfer privado do aeroporto e check-in tardio para dois hóspedes?",
      hi: "नमस्ते, टोक्यो में हमारे केंद्रीय डेटाबेस ने इनबाउंड प्रश्नों का उत्तर देना बंद कर दिया है। हमें तुरंत आपातकालीन प्रोटोकॉल की आवश्यकता है।",
      it: "Buongiorno, abbiamo verificato il contratto quadro e siamo pronti a procedere con l'implementazione globale a partire da lunedì.",
      ru: "Здравствуйте, наша центральная база данных в Токио перестала отвечать на входящие запросы. Нам срочно требуется протокол восстановления.",
      ko: "안녕하세요, 도쿄의 중앙 데이터베이스가 인바운드 쿼리에 응답하지 않습니다. 즉시 긴급 장애 조치 프로토콜이 필요합니다.",
      ar: "مرحباً، لقد توقفت قاعدة بياناتنا المركزية في طوكيو عن الاستجابة للاستفسارات الواردة. نحتاج فوراً إلى بروتوكول تجاوز الأعطال.",
      nl: "Goedemiddag, we hebben de raamovereenkomst doorgenomen en zijn klaar om vanaf maandag wereldwijd uit te rollen.",
      tr: "Merhaba, Tokyo'daki merkezi veritabanımız gelen sorgulara yanıt vermeyi durdurdu. Acil durum protokolüne ihtiyacımız var.",
      vi: "Xin chào, cơ sở dữ liệu trung tâm của chúng tôi tại Tokyo đã ngừng phản hồi các truy vấn. Chúng tôi cần giao thức khẩn cấp ngay.",
      id: "Halo, basis data pusat kami di Tokyo berhenti merespons kueri masuk. Kami membutuhkan protokol failover darurat sekarang juga.",
      pl: "Dzień dobry, nasza centralna baza danych w Tokio przestała odpowiadać. Potrzebujemy natychmiastowego protokołu awaryjnego."
    };

    const CHANNELS = [
      {
        srcCode: "en",
        srcFlag: "🇺🇸",
        srcLang: "English",
        outCode: "es",
        outFlag: "🇪🇸",
        outLang: "Spanish",
        srcText: "Enjoy clear, real-time communication.",
        outText: "Disfrute de una comunicación clara y en tiempo real."
      },
      {
        srcCode: "ja",
        srcFlag: "🇯🇵",
        srcLang: "Japanese",
        outCode: "en",
        outFlag: "🇺🇸",
        outLang: "English",
        srcText: "クリアなコミュニケーションをお楽しみください。",
        outText: "Enjoy crystal-clear communication."
      },
      {
        srcCode: "fr",
        srcFlag: "🇫🇷",
        srcLang: "French",
        outCode: "de",
        outFlag: "🇩🇪",
        outLang: "German",
        srcText: "Profitez d'une communication claire et instantanée.",
        outText: "Genießen Sie eine klare und sofortige Kommunikation."
      }
    ];

    const LANG_METADATA = {
      en: { flag: "🇺🇸", name: "English" },
      es: { flag: "🇪🇸", name: "Spanish" },
      ja: { flag: "🇯🇵", name: "Japanese" },
      fr: { flag: "🇫🇷", name: "French" },
      de: { flag: "🇩🇪", name: "German" },
      zh: { flag: "🇨🇳", name: "Chinese" },
      pt: { flag: "🇧🇷", name: "Portuguese" },
      hi: { flag: "🇮🇳", name: "Hindi" },
      it: { flag: "🇮🇹", name: "Italian" },
      ru: { flag: "🇷🇺", name: "Russian" },
      ko: { flag: "🇰🇷", name: "Korean" },
      ar: { flag: "🇸🇦", name: "Arabic" },
      nl: { flag: "🇳🇱", name: "Dutch" },
      tr: { flag: "🇹🇷", name: "Turkish" },
      vi: { flag: "🇻🇳", name: "Vietnamese" },
      id: { flag: "🇮🇩", name: "Indonesian" },
      pl: { flag: "🇵🇱", name: "Polish" }
    };

    const SCENARIOS = {
      support: {
        sourceLang: "en",
        targetLang: "ja",
        sourceText: "Hello, our central database in Tokyo has stopped responding to inbound queries. We need emergency failover protocol immediately.",
        targetText: "こんにちは。東京の中央データベースが着信クエリに応答しなくなりました。直ちに緊急フェイルオーバープロトコルが必要です。"
      },
      hotel: {
        sourceLang: "en",
        targetLang: "es",
        sourceText: "Good evening, our flight arrived late. Can we arrange a private airport transfer and late check-in for two guests?",
        targetText: "Buenas noches, nuestro vuelo llegó con retraso. ¿Podríamos organizar un traslado privado desde el aeropuerto y el registro tardío para dos huéspedes?"
      },
      medical: {
        sourceLang: "en",
        targetLang: "fr",
        sourceText: "Patient is experiencing severe acute chest pain and shortness of breath. We need the on-duty cardiologist immediately.",
        targetText: "Le patient ressent une douleur thoracique aiguë sévère et un essoufflement. Nous avons immédiatement besoin du cardiologue de garde."
      },
      sales: {
        sourceLang: "en",
        targetLang: "de",
        sourceText: "We reviewed the master service agreement and we are ready to proceed with the global deployment starting next Monday.",
        targetText: "Wir haben den Rahmenvertrag geprüft und sind bereit, die weltweite Einführung ab kommenden Montag durchzuführen."
      }
    };

    let currentChannelIdx = 2;
    let currentScenario = 'support';
    let isMuted = false;
    let isVoicePlaying = false;
    let isSimRunning = true;
    let bufferWindow = 61;
    let noiseFloor = 29;
    let animTime = 0;
    let hubAngle = 0;

    // 4 Dynamic traveling packets
    const packets = [
      { x: 182.17, seed: 1 },
      { x: 307.89, seed: 2 },
      { x: 400.59, seed: 3 },
      { x: 450.24, seed: 4 }
    ];

    // Pipeline DOM Element References
    let playToggleBtn, playIcon, pauseIcon;
    let srcBadgeText, outBadgeText, srcTextVal, outTextVal;
    let metricLatency, metricAccuracy, metricBitrate;
    let bufferSlider, bufferFill, bufferValueText;
    let noiseSlider, noiseFill, noiseValueText;
    let leftWavePath, rightWavePath, hubOuter, hubInner, hubAura, packetElements;

    function initPipelineDOM() {
      playToggleBtn = document.getElementById("playToggle");
      playIcon = document.getElementById("playIcon");
      pauseIcon = document.getElementById("pauseIcon");

      srcBadgeText = document.getElementById("srcBadgeText");
      outBadgeText = document.getElementById("outBadgeText");
      srcTextVal = document.getElementById("srcTextVal");
      outTextVal = document.getElementById("outTextVal");

      metricLatency = document.getElementById("metricLatency");
      metricAccuracy = document.getElementById("metricAccuracy");
      metricBitrate = document.getElementById("metricBitrate");

      bufferSlider = document.getElementById("bufferSlider");
      bufferFill = document.getElementById("bufferFill");
      bufferValueText = document.getElementById("bufferValueText");

      noiseSlider = document.getElementById("noiseSlider");
      noiseFill = document.getElementById("noiseFill");
      noiseValueText = document.getElementById("noiseValueText");

      leftWavePath = document.getElementById("leftWave");
      rightWavePath = document.getElementById("rightWave");
      hubOuter = document.getElementById("hubOuter");
      hubInner = document.getElementById("hubInner");
      hubAura = document.getElementById("hubAura");
      packetElements = document.querySelectorAll(".packet");

      if (bufferSlider) {
        bufferSlider.addEventListener("input", (e) => {
          bufferWindow = parseInt(e.target.value, 10);
          updateSliderTracks();
        });
      }

      if (noiseSlider) {
        noiseSlider.addEventListener("input", (e) => {
          noiseFloor = parseInt(e.target.value, 10);
          updateSliderTracks();
        });
      }

      if (playToggleBtn) {
        playToggleBtn.addEventListener("click", togglePipelineSimulation);
      }

      updateSliderTracks();
      updatePipelineBadgesAndTranscripts();
    }

    // Oscillating sine wave path calculation (reacts to noiseFloor jitter & bufferWindow frequency)
    function generateWavePath(startX, endX, centerY, amplitude, frequency, timeOffset, noiseNorm = 0) {
      let d = "";
      const steps = 24;
      const stepSize = (endX - startX) / steps;
      for (let i = 0; i <= steps; i++) {
        const x = startX + i * stepSize;
        const progress = i / steps;
        const envelope = Math.sin(progress * Math.PI);
        const pureWave = Math.sin(i * frequency + timeOffset) * amplitude * envelope;
        const noiseJitter = (Math.sin(i * 4.7 + timeOffset * 2.5) * (noiseNorm * 6) + Math.cos(i * 8.3) * (noiseNorm * 3.5)) * envelope;
        d += (i === 0 ? "M " : " L ") + x.toFixed(2) + " " + (centerY + pureWave + noiseJitter).toFixed(2);
      }
      return d;
    }

    function togglePipelineSimulation() {
      isSimRunning = !isSimRunning;
      if (playIcon) playIcon.style.display = isSimRunning ? "none" : "block";
      if (pauseIcon) pauseIcon.style.display = isSimRunning ? "block" : "none";
      if (playToggleBtn) playToggleBtn.style.backgroundColor = isSimRunning ? "#22c55e" : "#f43f5e";
    }

    function updateSliderTracks() {
      if (bufferSlider && bufferFill && bufferValueText) {
        const bufPct = ((bufferWindow - 20) / (100 - 20)) * 100;
        bufferFill.style.width = `${bufPct}%`;
        bufferValueText.textContent = `${bufferWindow}ms`;
      }

      if (noiseSlider && noiseFill && noiseValueText) {
        const noisePct = ((noiseFloor - 5) / (50 - 5)) * 100;
        noiseFill.style.width = `${noisePct}%`;
        noiseValueText.textContent = `${noiseFloor}dB`;
      }
    }

    function setChannel(idx) {
      currentChannelIdx = idx;
      document.querySelectorAll(".channel-btn").forEach((btn, i) => {
        btn.classList.toggle("active", i === idx);
      });
      document.querySelectorAll(".scenario-btn").forEach(btn => {
        btn.classList.remove("bg-neo-yellow", "active-scenario");
        btn.classList.add("bg-white");
      });

      const data = CHANNELS[idx];
      if (!data) return;

      const srcSelect = document.getElementById("source-lang-select");
      const trgSelect = document.getElementById("target-lang-select");
      const callerEl = document.getElementById("caller-speech-text");
      const targetEl = document.getElementById("target-speech-text");

      if (srcSelect) srcSelect.value = data.srcCode;
      if (trgSelect) trgSelect.value = data.outCode;
      if (callerEl) callerEl.value = data.srcText;
      if (targetEl) targetEl.value = data.outText;

      const statusBadge = document.getElementById("translation-status-badge");
      if (statusBadge) {
        statusBadge.textContent = "READY";
        statusBadge.className = "bg-neo-lime text-black px-1.5 py-0.2 border border-black font-bold text-[9px] font-mono";
      }

      updatePipelineBadgesAndTranscripts();
    }

    function setScenario(id) {
      if (!SCENARIOS[id]) return;
      currentScenario = id;
      const sc = SCENARIOS[id];

      document.querySelectorAll(".channel-btn").forEach(btn => btn.classList.remove("active"));
      document.querySelectorAll(".scenario-btn").forEach(btn => {
        if (btn.getAttribute("data-id") === id) {
          btn.classList.remove("bg-white");
          btn.classList.add("bg-neo-yellow", "active-scenario");
        } else {
          btn.classList.remove("bg-neo-yellow", "active-scenario");
          btn.classList.add("bg-white");
        }
      });

      const callerEl = document.getElementById("caller-speech-text");
      const targetEl = document.getElementById("target-speech-text");
      const srcSelect = document.getElementById("source-lang-select");
      const trgSelect = document.getElementById("target-lang-select");

      if (srcSelect) srcSelect.value = sc.sourceLang;
      if (trgSelect) trgSelect.value = sc.targetLang;
      if (callerEl) callerEl.value = sc.sourceText;
      if (targetEl) targetEl.value = sc.targetText;

      const statusBadge = document.getElementById("translation-status-badge");
      if (statusBadge) {
        statusBadge.textContent = "READY";
        statusBadge.className = "bg-neo-lime text-black px-1.5 py-0.2 border border-black font-bold text-[9px] font-mono";
      }

      updatePipelineBadgesAndTranscripts();
    }

    function updatePipelineBadgesAndTranscripts() {
      const srcSelect = document.getElementById("source-lang-select");
      const trgSelect = document.getElementById("target-lang-select");
      const callerEl = document.getElementById("caller-speech-text");
      const targetEl = document.getElementById("target-speech-text");

      const srcCode = srcSelect ? srcSelect.value : "fr";
      const trgCode = trgSelect ? trgSelect.value : "de";
      const srcMeta = LANG_METADATA[srcCode] || { flag: "🌐", name: srcCode.toUpperCase() };
      const trgMeta = LANG_METADATA[trgCode] || { flag: "🌐", name: trgCode.toUpperCase() };

      const srcBadgeEl = document.getElementById("srcBadgeText");
      const outBadgeEl = document.getElementById("outBadgeText");
      if (srcBadgeEl) srcBadgeEl.textContent = `${srcMeta.flag} ${srcMeta.name}`;
      if (outBadgeEl) outBadgeEl.textContent = `${trgMeta.flag} ${trgMeta.name}`;

      const srcValEl = document.getElementById("srcTextVal");
      const outValEl = document.getElementById("outTextVal");
      if (srcValEl && callerEl) {
        const txt = callerEl.value.trim();
        srcValEl.textContent = txt ? `“${txt}”` : "—";
      }
      if (outValEl && targetEl) {
        const txt = targetEl.value.trim();
        outValEl.textContent = txt ? `“${txt}”` : "—";
      }
    }

    function syncActivePresetState() {
      const srcSelect = document.getElementById("source-lang-select");
      const trgSelect = document.getElementById("target-lang-select");
      if (!srcSelect || !trgSelect) return;
      const srcCode = srcSelect.value;
      const trgCode = trgSelect.value;

      document.querySelectorAll(".channel-btn").forEach((btn, idx) => {
        const ch = CHANNELS[idx];
        if (ch && ch.srcCode === srcCode && ch.outCode === trgCode) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });

      document.querySelectorAll(".scenario-btn").forEach(btn => {
        const scId = btn.getAttribute("data-id");
        const sc = SCENARIOS[scId];
        if (sc && sc.sourceLang === srcCode && sc.targetLang === trgCode) {
          btn.classList.add("bg-neo-yellow", "active-scenario");
          btn.classList.remove("bg-white");
        } else {
          btn.classList.remove("bg-neo-yellow", "active-scenario");
          btn.classList.add("bg-white");
        }
      });
    }

    function updateLanguagePairs(side) {
      const srcSelect = document.getElementById("source-lang-select");
      const trgSelect = document.getElementById("target-lang-select");
      const callerTextEl = document.getElementById("caller-speech-text");

      if (side === "source" && srcSelect && callerTextEl) {
        const lang = srcSelect.value;
        if (!callerTextEl.value.trim() && SAMPLE_PHRASES[lang]) {
          callerTextEl.value = SAMPLE_PHRASES[lang];
        }
      }

      updatePipelineBadgesAndTranscripts();
      syncActivePresetState();
      autoTranslate();
    }

    // Dynamic Animation Loop (driven dynamically by bufferWindow & noiseFloor sliders)
    function tickPipeline() {
      if (isSimRunning) {
        animTime += 0.05;

        // Sliders normalized values (0.0 to 1.0)
        const bufferNorm = (bufferWindow - 20) / (100 - 20); // 0.0 at 20ms (fast/tight) to 1.0 at 100ms (steady/relaxed)
        const noiseNorm = (noiseFloor - 5) / (50 - 5);       // 0.0 at 5dB (whisper/clean) to 1.0 at 50dB (noisy/jittery)
        const voiceMultiplier = isVoicePlaying ? 1.45 : 1.0;

        // 1. Hub rotation speed (driven by bufferWindow - tighter buffer means faster processing cycle)
        const hubSpeed = (2.6 - bufferNorm * 1.8) * (isVoicePlaying ? 1.3 : 1.0);
        hubAngle = (hubAngle + hubSpeed) % 360;

        // 2. Wave parameters (amplitude & jitter driven by noiseFloor; frequency & travel speed driven by bufferWindow)
        const waveAmp = (8 + noiseNorm * 22) * voiceMultiplier;
        const waveFreq = 0.55 + (1.0 - bufferNorm) * 0.75;
        const waveSpeed = 2.2 + (1.0 - bufferNorm) * 3.0;

        const leftPath = generateWavePath(61.2, 208.08, 153, waveAmp, waveFreq, animTime * waveSpeed, noiseNorm);
        const rightPath = generateWavePath(403.92, 550.8, 153, waveAmp * 0.9, waveFreq * 1.05, animTime * (waveSpeed * 1.05), noiseNorm);

        if (leftWavePath) leftWavePath.setAttribute("d", leftPath);
        if (rightWavePath) rightWavePath.setAttribute("d", rightPath);

        if (hubOuter) hubOuter.setAttribute("transform", `rotate(${hubAngle.toFixed(1)}, 306, 153)`);
        if (hubInner) hubInner.setAttribute("transform", `rotate(${(-hubAngle * 0.5).toFixed(1)}, 306, 153)`);

        // 3. Hub aura pulse (expands and pulses with noiseFloor)
        const auraRadius = 50 + noiseNorm * 12 + Math.sin(animTime * 3.5) * (2 + noiseNorm * 3);
        if (hubAura) hubAura.setAttribute("r", auraRadius.toFixed(1));

        // 4. Packets: speed & size driven by bufferWindow, vertical wobble driven by noiseFloor
        const packetSpeedMult = 2.2 - bufferNorm * 1.5;
        const packetStep = (isVoicePlaying ? 2.2 : 1.3) * packetSpeedMult;
        const packetSize = Math.round(7 + bufferNorm * 7); // 7px at 20ms to 14px at 100ms
        const wobble = 1.5 + noiseNorm * 7.5;              // 1.5px at 5dB to 9px at 50dB

        packets.forEach((p, index) => {
          p.x += packetStep;
          if (p.x > 477.36) p.x = 134.64;
          const y = 153 + Math.sin(p.x * 0.08 + p.seed) * wobble - (packetSize / 2);

          if (packetElements && packetElements[index]) {
            const el = packetElements[index];
            el.setAttribute("x", (p.x - packetSize / 2).toFixed(2));
            el.setAttribute("y", y.toFixed(2));
            el.setAttribute("width", packetSize);
            el.setAttribute("height", packetSize);
            el.setAttribute("fill", p.x < 306 ? "#eab308" : "#3b82f6");
          }
        });

        // 5. Dynamic Telemetry Metrics
        const liveLatency = (bufferWindow + noiseFloor * 0.18 + Math.sin(animTime * 2) * 1.2).toFixed(1);
        const liveAccuracy = Math.min(
          99.4,
          Math.max(82.0, 99.5 - noiseFloor * 0.16 + (bufferWindow > 50 ? 0.8 : -1.2) + Math.cos(animTime * 1.5) * 0.3)
        ).toFixed(1);
        const liveBitrate = Math.round(128 - noiseFloor * 0.4 + (bufferWindow / 100) * 8);

        if (metricLatency) metricLatency.textContent = `${liveLatency}ms`;
        if (metricAccuracy) metricAccuracy.textContent = `${liveAccuracy}%`;
        if (metricBitrate) metricBitrate.textContent = `${liveBitrate}kbps`;
      }
      requestAnimationFrame(tickPipeline);
    }

    function getBestVoiceForLang(langCode) {
      if (!('speechSynthesis' in window)) return null;
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return null;

      const code = langCode.toLowerCase();
      const prefix = code.split('-')[0];

      return voices.find(v => v.lang.toLowerCase() === code || v.lang.toLowerCase().replace('_', '-') === code) ||
        voices.find(v => v.lang.toLowerCase().startsWith(prefix + '-') || v.lang.toLowerCase().startsWith(prefix + '_')) ||
        voices.find(v => v.lang.toLowerCase().startsWith(prefix)) ||
        null;
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.getVoices();
      };
    }

    let translationDebounceTimer = null;
    let translationAbortController = null;

    function handleSourceInput() {
      clearTimeout(translationDebounceTimer);
      const callerEl = document.getElementById('caller-speech-text');
      const srcValEl = document.getElementById('srcTextVal');
      if (srcValEl && callerEl) {
        srcValEl.textContent = `“${callerEl.value.trim()}”`;
      }

      const statusBadge = document.getElementById('translation-status-badge');
      if (statusBadge) {
        statusBadge.textContent = 'TYPING...';
        statusBadge.className = 'bg-neo-yellow text-black px-1.5 py-0.2 border border-black font-bold text-[9px] font-mono';
      }
      translationDebounceTimer = setTimeout(() => {
        autoTranslate();
      }, 400);
    }

    async function autoTranslate() {
      const srcSelect = document.getElementById('source-lang-select');
      const trgSelect = document.getElementById('target-lang-select');
      const callerEl = document.getElementById('caller-speech-text');
      const targetEl = document.getElementById('target-speech-text');
      const statusBadge = document.getElementById('translation-status-badge');
      const outValEl = document.getElementById('outTextVal');

      if (!callerEl || !targetEl) return;

      const rawText = callerEl.value.trim();
      const srcLang = srcSelect ? srcSelect.value : 'fr';
      const trgLang = trgSelect ? trgSelect.value : 'de';

      if (!rawText) {
        targetEl.value = '';
        if (outValEl) outValEl.textContent = '—';
        if (statusBadge) {
          statusBadge.textContent = 'READY';
          statusBadge.className = 'bg-neo-lime text-black px-1.5 py-0.2 border border-black font-bold text-[9px] font-mono';
        }
        return;
      }

      if (srcLang === trgLang) {
        targetEl.value = rawText;
        if (outValEl) outValEl.textContent = `“${rawText}”`;
        if (statusBadge) {
          statusBadge.textContent = 'IDENTICAL';
          statusBadge.className = 'bg-neo-lime text-black px-1.5 py-0.2 border border-black font-bold text-[9px] font-mono';
        }
        return;
      }

      // Check known scenario presets for instant local match (forward & reverse)
      for (const key in SCENARIOS) {
        const sc = SCENARIOS[key];
        if (sc.sourceLang === srcLang && sc.targetLang === trgLang && sc.sourceText.trim() === rawText) {
          targetEl.value = sc.targetText;
          if (outValEl) outValEl.textContent = `“${sc.targetText}”`;
          if (statusBadge) {
            statusBadge.textContent = 'TRANSLATED';
            statusBadge.className = 'bg-neo-lime text-black px-1.5 py-0.2 border border-black font-bold text-[9px] font-mono';
          }
          return;
        }
        if (sc.targetLang === srcLang && sc.sourceLang === trgLang && sc.targetText.trim() === rawText) {
          targetEl.value = sc.sourceText;
          if (outValEl) outValEl.textContent = `“${sc.sourceText}”`;
          if (statusBadge) {
            statusBadge.textContent = 'TRANSLATED';
            statusBadge.className = 'bg-neo-lime text-black px-1.5 py-0.2 border border-black font-bold text-[9px] font-mono';
          }
          return;
        }
      }

      // Check channels presets (forward & reverse)
      for (const ch of CHANNELS) {
        if (ch.srcCode === srcLang && ch.outCode === trgLang && ch.srcText.trim() === rawText) {
          targetEl.value = ch.outText;
          if (outValEl) outValEl.textContent = `“${ch.outText}”`;
          if (statusBadge) {
            statusBadge.textContent = 'TRANSLATED';
            statusBadge.className = 'bg-neo-lime text-black px-1.5 py-0.2 border border-black font-bold text-[9px] font-mono';
          }
          return;
        }
        if (ch.outCode === srcLang && ch.srcCode === trgLang && ch.outText.trim() === rawText) {
          targetEl.value = ch.srcText;
          if (outValEl) outValEl.textContent = `“${ch.srcText}”`;
          if (statusBadge) {
            statusBadge.textContent = 'TRANSLATED';
            statusBadge.className = 'bg-neo-lime text-black px-1.5 py-0.2 border border-black font-bold text-[9px] font-mono';
          }
          return;
        }
      }

      if (translationAbortController) {
        translationAbortController.abort();
      }
      translationAbortController = new AbortController();

      if (statusBadge) {
        statusBadge.textContent = 'TRANSLATING...';
        statusBadge.className = 'bg-neo-yellow text-black px-1.5 py-0.2 border border-black font-bold text-[9px] font-mono animate-pulse';
      }

      try {
        const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(rawText)}&langpair=${srcLang}|${trgLang}`;
        const res = await fetch(url, { signal: translationAbortController.signal });
        if (!res.ok) throw new Error('Translation response error');
        const data = await res.json();

        if (data && data.responseData && data.responseData.translatedText) {
          const txt = document.createElement('textarea');
          txt.innerHTML = data.responseData.translatedText;
          targetEl.value = txt.value;
          if (outValEl) outValEl.textContent = `“${txt.value}”`;

          if (statusBadge) {
            statusBadge.textContent = 'TRANSLATED';
            statusBadge.className = 'bg-neo-lime text-black px-1.5 py-0.2 border border-black font-bold text-[9px] font-mono';
          }
        } else {
          throw new Error('No translated text');
        }
      } catch (err) {
        if (err.name === 'AbortError') return;
        console.warn('Auto-translation notice:', err);
        if (statusBadge) {
          statusBadge.textContent = 'AUTO-GENERATED';
          statusBadge.className = 'bg-neo-lime text-black px-1.5 py-0.2 border border-black font-bold text-[9px] font-mono';
        }
      }
    }

    function playSimulation(side = 'target') {
      if (isVoicePlaying) {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        stopVisualizer();
        return;
      }

      const isTarget = (side === 'target');
      const langEl = document.getElementById(isTarget ? 'target-lang-select' : 'source-lang-select');
      const textEl = document.getElementById(isTarget ? 'target-speech-text' : 'caller-speech-text');

      const selectedLang = langEl ? langEl.value : 'en';
      const rawText = textEl ? (textEl.value || textEl.textContent || '') : '';
      const textToSpeak = rawText.replace(/[「」«»„“"']/g, '').trim();

      if (!textToSpeak) {
        alert('No translated text found to speak. Please type a sentence in Column A.');
        return;
      }

      startVisualizer(isTarget ? 'target' : 'caller');
      isVoicePlaying = true;
      const playIcon = document.getElementById('play-icon');
      const playLabel = document.getElementById('play-label');
      if (playIcon) playIcon.textContent = '⏹';
      if (playLabel) playLabel.textContent = isTarget ? 'Speaking Translated Audio (Column B)...' : 'Speaking Original Audio...';

      if (!isMuted && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = selectedLang;
        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        const matchedVoice = getBestVoiceForLang(selectedLang);
        if (matchedVoice) utterance.voice = matchedVoice;

        utterance.onend = stopVisualizer;
        utterance.onerror = (e) => {
          console.warn('TTS playback issue:', e);
          stopVisualizer();
        };

        window.speechSynthesis.speak(utterance);
      } else {
        setTimeout(stopVisualizer, 3500);
      }
    }

    function startVisualizer(which = 'both') {
      isVoicePlaying = true;
      const playIcon = document.getElementById('play-icon');
      const playLabel = document.getElementById('play-label');
      if (playIcon) playIcon.textContent = '⏹';
      if (playLabel) playLabel.textContent = (which === 'target') ? 'Speaking Translated Audio (Column B)...' : 'Speaking Original Audio...';
    }

    function stopVisualizer() {
      isVoicePlaying = false;
      const playIcon = document.getElementById('play-icon');
      const playLabel = document.getElementById('play-label');
      if (playIcon) playIcon.textContent = '▶';
      if (playLabel) playLabel.textContent = 'Simulate Voice Call & Listen (Column B)';
    }

    function swapLanguages() {
      const srcEl = document.getElementById('source-lang-select');
      const trgEl = document.getElementById('target-lang-select');
      const callerTextEl = document.getElementById('caller-speech-text');
      const targetTextEl = document.getElementById('target-speech-text');

      if (!srcEl || !trgEl || !callerTextEl || !targetTextEl) return;

      // Stop ongoing voice synthesis or visualizers
      if (isVoicePlaying) {
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        stopVisualizer();
      }

      // Cancel pending auto-translate timers / HTTP requests
      clearTimeout(translationDebounceTimer);
      if (translationAbortController) {
        translationAbortController.abort();
      }

      // 1. Swap languages
      const tempLang = srcEl.value;
      srcEl.value = trgEl.value;
      trgEl.value = tempLang;

      // 2. Swap text contents between Column A and Column B
      const tempText = callerTextEl.value;
      callerTextEl.value = targetTextEl.value;
      targetTextEl.value = tempText;

      // 3. Update badges, SVGs, and transcript pills
      updatePipelineBadgesAndTranscripts();

      // 4. Update channel/scenario button highlights to match new direction
      syncActivePresetState();

      // 5. Update status badge
      const statusBadge = document.getElementById('translation-status-badge');
      if (statusBadge) {
        statusBadge.textContent = 'SWAPPED';
        statusBadge.className = 'bg-neo-lime text-black px-1.5 py-0.2 border border-black font-bold text-[8px] font-mono';
        setTimeout(() => {
          if (statusBadge && statusBadge.textContent === 'SWAPPED') {
            statusBadge.textContent = 'READY';
          }
        }, 1200);
      }

      // 6. If target became empty but caller has text, auto-translate
      if (!targetTextEl.value.trim() && callerTextEl.value.trim()) {
        autoTranslate();
      }
    }

    function initScrollAnimations() {
      if (!('IntersectionObserver' in window)) {
        document.querySelectorAll('.reveal-item').forEach(el => el.classList.add('in-view'));
        return;
      }
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

      document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
    }

    window.addEventListener('DOMContentLoaded', () => {
      initPipelineDOM();
      tickPipeline();
      stopVisualizer();
      renderLanguages();
      initScrollAnimations();
    });

    function toggleMute() {
      isMuted = !isMuted;
      const btn = document.getElementById('mute-btn');
      if (isMuted) {
        btn.textContent = 'MUTE: ON';
        btn.classList.replace('bg-neo-black', 'bg-neo-coral');
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
      } else {
        btn.textContent = 'MUTE: OFF';
        btn.classList.replace('bg-neo-coral', 'bg-neo-black');
      }
    }

    function toggleFaq(num) {
      const body = document.getElementById(`faq-body-${num}`);
      const icon = document.getElementById(`faq-icon-${num}`);
      if (body.classList.contains('hidden')) {
        body.classList.remove('hidden');
        icon.textContent = '−';
      } else {
        body.classList.add('hidden');
        icon.textContent = '+';
      }
    }

    // -------------------------------------------------------------------
    // Checkout via Render middleware. Free creates a $0 mandate-only checkout;
    // paid tiers open a full-price Dodo checkout. The server resolves every
    // amount and grants credits only from a verified Dodo webhook.
    // -------------------------------------------------------------------
    const TG_API_BASE = 'https://translatigo-middleware.onrender.com/api/payments';

    async function tgCheckout(btn, planTier, isTrial = false) {
      btn.disabled = true;
      const original = btn.textContent;
      btn.textContent = 'Loading…';
      try {
        const isFreeTrial = (planTier === 'FREE' || isTrial);
        const payload = isFreeTrial
          ? { planTier: 'STARTER', isTrial: true }
          : { planTier };
        const res = await fetch(`${TG_API_BASE}/link-mandate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (!res.ok || !data.checkoutUrl) throw new Error(data.error || 'checkout unavailable');
        window.location.href = data.checkoutUrl;
      } catch (e) {
        alert(`Could not start checkout: ${e.message}. Please try again.`);
        btn.disabled = false;
        btn.textContent = original;
      }
    }