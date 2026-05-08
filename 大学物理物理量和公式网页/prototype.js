const embeddedSeedData = {
  modules: [
    {
      id: "mod_kinematics",
      title: "运动学",
      summary: "从位移和时间到速度、加速度"
    },
    {
      id: "mod_dynamics",
      title: "动力学",
      summary: "从动量变化率到受力关系"
    },
    {
      id: "mod_momentum",
      title: "动量与冲量",
      summary: "从质量和速度到动量变化与冲量"
    },
    {
      id: "mod_energy",
      title: "功和能",
      summary: "从力和位移到功与动能变化"
    }
  ],
  nodes: [
    { id: "q_t", label: "时间", symbol: "t", nodeType: "quantity", moduleId: "mod_kinematics", description: "描述过程持续时间的基础物理量" },
    { id: "q_s", label: "路程", symbol: "s", nodeType: "quantity", moduleId: "mod_kinematics", description: "物体运动路径长度" },
    { id: "q_r", label: "位移", symbol: "r⃗", nodeType: "quantity", moduleId: "mod_kinematics", description: "位置变化量，对应矢量位移。" },
    { id: "q_v", label: "瞬时速率", symbol: "v", nodeType: "quantity", moduleId: "mod_kinematics", description: "路程对时间的变化率，对应瞬时速率，是标量。" },
    { id: "q_v_vec", label: "瞬时速度", symbol: "v⃗", nodeType: "quantity", moduleId: "mod_kinematics", description: "位移对时间的变化率，对应瞬时速度，是矢量。" },
    { id: "q_a", label: "加速度", symbol: "a⃗", nodeType: "quantity", moduleId: "mod_kinematics", description: "矢量速度随时间变化的快慢和方向。" },
    { id: "q_m", label: "质量", symbol: "m", nodeType: "quantity", moduleId: "mod_dynamics", description: "表征物体惯性大小的物理量" },
    { id: "q_F", label: "合外力", symbol: "F⃗", nodeType: "quantity", moduleId: "mod_dynamics", description: "作用在物体上的合外力矢量。" },
    { id: "q_p", label: "动量", symbol: "p⃗", nodeType: "quantity", moduleId: "mod_momentum", description: "质量与瞬时速度共同决定的矢量状态量。" },
    { id: "q_dp", label: "动量变化", symbol: "Δp⃗", nodeType: "quantity", moduleId: "mod_momentum", description: "动量在过程中的变化量，是矢量。" },
    { id: "q_I", label: "冲量", symbol: "I⃗", nodeType: "quantity", moduleId: "mod_momentum", description: "力在时间上的累积效应，结果为矢量。" },
    { id: "q_A", label: "功", symbol: "A", nodeType: "quantity", moduleId: "mod_energy", description: "力在位移过程中的能量转移量度" },
    { id: "q_Ek", label: "动能", symbol: "E_k", nodeType: "quantity", moduleId: "mod_energy", description: "物体因运动而具有的能量" },
    { id: "q_dEk", label: "动能变化", symbol: "ΔE_k", nodeType: "quantity", moduleId: "mod_energy", description: "过程中动能的变化量" },
    { id: "f_v_ds_dt", label: "瞬时速率定义式", symbol: "v = ds/dt", nodeType: "formula", moduleId: "mod_kinematics", description: "路程对时间的变化率给出瞬时速率，结果是标量。" },
    { id: "f_v_dr_dt", label: "瞬时速度定义式", symbol: "v⃗ = dr⃗/dt", nodeType: "formula", moduleId: "mod_kinematics", description: "位移对时间的变化率给出瞬时速度，结果是矢量。" },
    { id: "f_a_dv_dt", label: "加速度定义式", symbol: "a⃗ = dv⃗/dt", nodeType: "formula", moduleId: "mod_kinematics", description: "矢量速度对时间的变化率定义加速度。" },
    { id: "f_F_ma", label: "牛顿第二定律", symbol: "F⃗ = dp⃗/dt", nodeType: "formula", moduleId: "mod_dynamics", description: "合外力等于动量对时间的变化率，这是广义形式的牛顿第二定律。" },
    { id: "f_p_mv", label: "动量定义式", symbol: "p⃗ = mv⃗", nodeType: "formula", moduleId: "mod_momentum", description: "质量与瞬时速度共同定义动量，动量是矢量。" },
    { id: "f_I_dp", label: "冲量定理", symbol: "I⃗ = Δp⃗", nodeType: "formula", moduleId: "mod_momentum", description: "冲量等于动量变化，二者都是矢量。" },
    { id: "f_I_int_Fdt", label: "冲量积分式", symbol: "I⃗ = ∫F⃗dt", nodeType: "formula", moduleId: "mod_momentum", description: "变力作用下，冲量等于力对时间的积分。" },
    { id: "f_A_int_Fdr", label: "功的定义式", symbol: "A = ∫F⃗·dr⃗", nodeType: "formula", moduleId: "mod_energy", description: "功等于力沿位移方向的线积分。" },
    { id: "f_Ek_half_mv2", label: "动能表达式", symbol: "E_k = 1/2 mv^2", nodeType: "formula", moduleId: "mod_energy", description: "由质量和瞬时速率给出动能。" },
    { id: "f_dEk_A", label: "动能定理", symbol: "ΔE_k = A", nodeType: "formula", moduleId: "mod_energy", description: "外力所做总功等于动能变化" }
  ],
  relations: [
    { id: "rel_01", source: "q_s", target: "f_v_ds_dt", relationType: "depends_on" },
    { id: "rel_02", source: "q_t", target: "f_v_ds_dt", relationType: "depends_on" },
    { id: "rel_03", source: "f_v_ds_dt", target: "q_v", relationType: "defines" },
    { id: "rel_04", source: "q_r", target: "f_v_dr_dt", relationType: "depends_on" },
    { id: "rel_05", source: "q_t", target: "f_v_dr_dt", relationType: "depends_on" },
    { id: "rel_06", source: "f_v_dr_dt", target: "q_v_vec", relationType: "defines" },
    { id: "rel_07", source: "q_v_vec", target: "f_a_dv_dt", relationType: "depends_on" },
    { id: "rel_08", source: "q_t", target: "f_a_dv_dt", relationType: "depends_on" },
    { id: "rel_09", source: "f_a_dv_dt", target: "q_a", relationType: "defines" },
    { id: "rel_10", source: "q_p", target: "f_F_ma", relationType: "bridge" },
    { id: "rel_11", source: "q_t", target: "f_F_ma", relationType: "depends_on" },
    { id: "rel_12", source: "f_F_ma", target: "q_F", relationType: "defines" },
    { id: "rel_13", source: "q_m", target: "f_p_mv", relationType: "depends_on" },
    { id: "rel_14", source: "q_v_vec", target: "f_p_mv", relationType: "bridge" },
    { id: "rel_15", source: "f_p_mv", target: "q_p", relationType: "defines" },
    { id: "rel_17", source: "q_dp", target: "f_I_dp", relationType: "depends_on" },
    { id: "rel_18", source: "f_I_dp", target: "q_I", relationType: "defines" },
    { id: "rel_19", source: "q_F", target: "f_I_int_Fdt", relationType: "bridge" },
    { id: "rel_20", source: "q_t", target: "f_I_int_Fdt", relationType: "depends_on" },
    { id: "rel_21", source: "f_I_int_Fdt", target: "q_I", relationType: "defines" },
    { id: "rel_22", source: "q_F", target: "f_A_int_Fdr", relationType: "bridge" },
    { id: "rel_23", source: "q_r", target: "f_A_int_Fdr", relationType: "depends_on" },
    { id: "rel_24", source: "f_A_int_Fdr", target: "q_A", relationType: "defines" },
    { id: "rel_25", source: "q_m", target: "f_Ek_half_mv2", relationType: "depends_on" },
    { id: "rel_26", source: "q_v", target: "f_Ek_half_mv2", relationType: "bridge" },
    { id: "rel_27", source: "f_Ek_half_mv2", target: "q_Ek", relationType: "defines" },
    { id: "rel_28", source: "q_A", target: "f_dEk_A", relationType: "depends_on" },
    { id: "rel_29", source: "f_dEk_A", target: "q_dEk", relationType: "defines" }
  ]
};

const state = {
  data: null,
  practiceDeck: [],
  currentCardIndex: 0,
  currentCard: null,
  currentBlankSelections: [],
  currentBlankSolved: false,
  currentWrongAttempts: 0,
  currentCategorySelection: null,
  hintVisible: false,
  answerTokenPool: []
};

const elements = {
  activeModuleTitle: document.getElementById("active-module-title"),
  categoryPanel: document.getElementById("category-panel"),
  moduleTabs: document.getElementById("module-tabs"),
  moduleSummaryText: document.getElementById("module-summary-text"),
  blankPrompt: document.getElementById("blank-prompt"),
  blankFormula: document.getElementById("blank-formula"),
  blankForm: document.getElementById("blank-form"),
  blankFeedback: document.getElementById("blank-feedback"),
  blankPrev: document.getElementById("blank-prev"),
  blankReset: document.getElementById("blank-reset"),
  blankRefresh: document.getElementById("blank-refresh"),
  blankHint: document.getElementById("blank-hint")
};

const tokenTexMap = {
  "s": "s",
  "ds": "ds",
  "t": "t",
  "dt": "dt",
  "r⃗": "\\vec{r}",
  "dr⃗": "d\\vec{r}",
  "v": "v",
  "dv": "dv",
  "v⃗": "\\vec{v}",
  "dv⃗": "d\\vec{v}",
  "a⃗": "\\vec{a}",
  "m": "m",
  "F⃗": "\\vec{F}",
  "p⃗": "\\vec{p}",
  "dp⃗": "d\\vec{p}",
  "Δp⃗": "\\Delta \\vec{p}",
  "I⃗": "\\vec{I}",
  "A": "A",
  "E_k": "E_k",
  "ΔE_k": "\\Delta E_k"
};

const formulaTexBuilders = {
  f_v_ds_dt: (slots) => `v = \\frac{${slots[0]}}{${slots[1]}}`,
  f_v_dr_dt: (slots) => `\\vec{v} = \\frac{${slots[0]}}{${slots[1]}}`,
  f_a_dv_dt: (slots) => `\\vec{a} = \\frac{${slots[0]}}{${slots[1]}}`,
  f_F_ma: (slots) => `\\vec{F} = \\frac{${slots[0]}}{${slots[1]}}`,
  f_p_mv: (slots) => `\\vec{p} = ${slots[0]}${slots[1]}`,
  f_I_dp: (slots) => `\\vec{I} = ${slots[0]}`,
  f_I_int_Fdt: (slots) => `\\vec{I} = \\int ${slots[0]}\\,${slots[1]}`,
  f_A_int_Fdr: (slots) => `A = \\int ${slots[0]} \\cdot ${slots[1]}`,
  f_Ek_half_mv2: (slots) => `E_k = \\frac{1}{2}${slots[0]}${slots[1]}^2`,
  f_dEk_A: (slots) => `\\Delta E_k = ${slots[0]}`
};

function createInitialProgress(slotCount) {
  return {
    blankSelections: new Array(slotCount).fill(""),
    blankSolved: false,
    wrongAttempts: 0,
    categorySelection: null,
    hintVisible: false
  };
}

function ensureCardProgress(card) {
  if (!card.progress) {
    card.progress = createInitialProgress(card.answerEntries.length);
  }

  return card.progress;
}

function loadCardProgress(card) {
  const progress = ensureCardProgress(card);
  state.currentBlankSelections = [...progress.blankSelections];
  state.currentBlankSolved = progress.blankSolved;
  state.currentWrongAttempts = progress.wrongAttempts;
  state.currentCategorySelection = progress.categorySelection;
  state.hintVisible = progress.hintVisible;
}

function syncCurrentCardProgress() {
  const progress = ensureCardProgress(state.currentCard);
  progress.blankSelections = [...state.currentBlankSelections];
  progress.blankSolved = state.currentBlankSolved;
  progress.wrongAttempts = state.currentWrongAttempts;
  progress.categorySelection = state.currentCategorySelection;
  progress.hintVisible = state.hintVisible;
}

async function loadData() {
  try {
    const response = await fetch("./physics-knowledge-seed.json");
    if (!response.ok) {
      throw new Error("fetch failed");
    }
    return await response.json();
  } catch (error) {
    return embeddedSeedData;
  }
}

function getNodeById(nodeId) {
  return state.data.nodes.find((node) => node.id === nodeId);
}

function getDisplayToken(formulaNode, node) {
  const derivativeToken = `d${node.symbol}`;
  if (formulaNode.symbol.includes(derivativeToken)) {
    return derivativeToken;
  }

  return node.symbol;
}

function getFormulaInputRelations(formulaNodeId) {
  return state.data.relations.filter((relation) => {
    return relation.target === formulaNodeId && ["depends_on", "bridge"].includes(relation.relationType);
  });
}

function getTokenLabel(token) {
  const exactNode = state.data.nodes.find((node) => node.symbol === token);
  if (exactNode) {
    return exactNode.label;
  }

  if (token.startsWith("d")) {
    const baseNode = state.data.nodes.find((node) => node.symbol === token.slice(1));
    if (baseNode) {
      return baseNode.label;
    }
  }

  return "相关量";
}

function getTokenTex(token) {
  return tokenTexMap[token] || token;
}

function renderMath(tex, fallbackText) {
  if (window.katex) {
    return window.katex.renderToString(tex, {
      throwOnError: false,
      displayMode: false,
      strict: "ignore"
    });
  }

  return `<span>${escapeHtml(fallbackText || tex)}</span>`;
}

function getTokenOrderInFormula(formulaSymbol, token) {
  return formulaSymbol.indexOf(token);
}

function buildMaskedSegments(formulaNode, answerEntries) {
  const orderedEntries = [...answerEntries]
    .map((entry) => ({
      ...entry,
      position: getTokenOrderInFormula(formulaNode.symbol, entry.token)
    }))
    .sort((left, right) => left.position - right.position);

  const segments = [];
  let cursor = 0;

  orderedEntries.forEach((entry, slotIndex) => {
    if (entry.position > cursor) {
      segments.push({ type: "text", value: formulaNode.symbol.slice(cursor, entry.position) });
    }

    segments.push({ type: "slot", slotIndex });
    cursor = entry.position + entry.token.length;
  });

  if (cursor < formulaNode.symbol.length) {
    segments.push({ type: "text", value: formulaNode.symbol.slice(cursor) });
  }

  return segments;
}

function buildAnswerTokenPool() {
  const tokenSet = new Set();
  state.data.nodes
    .filter((node) => node.nodeType === "formula")
    .forEach((formulaNode) => {
      getFormulaInputRelations(formulaNode.id).forEach((relation) => {
        const sourceNode = getNodeById(relation.source);
        if (sourceNode) {
          tokenSet.add(getDisplayToken(formulaNode, sourceNode));
        }
      });
    });

  return [...tokenSet];
}

function pickDistractors(correctToken, sameCardTokens) {
  const orderedPool = [
    ...sameCardTokens.filter((token) => token !== correctToken),
    ...state.answerTokenPool.filter((token) => token !== correctToken)
  ];
  const distractors = [];

  orderedPool.forEach((token) => {
    if (!distractors.includes(token) && distractors.length < 3) {
      distractors.push(token);
    }
  });

  return distractors;
}

function sortOptions(options) {
  return [...options].sort((left, right) => left.token.localeCompare(right.token, "zh-CN"));
}

function buildPracticeDeck() {
  return state.data.nodes
    .filter((node) => node.nodeType === "formula")
    .map((formulaNode) => {
      const inputRelations = getFormulaInputRelations(formulaNode.id);
      if (!inputRelations.length) {
        return null;
      }

      const answerEntries = inputRelations
        .map((relation) => {
          const node = getNodeById(relation.source);
          if (!node) {
            return null;
          }

          return {
            nodeId: node.id,
            token: getDisplayToken(formulaNode, node),
            label: node.label
          };
        })
        .filter(Boolean)
        .sort((left, right) => getTokenOrderInFormula(formulaNode.symbol, left.token) - getTokenOrderInFormula(formulaNode.symbol, right.token));

      if (!answerEntries.length) {
        return null;
      }

      const defineRelation = state.data.relations.find((relation) => {
        return relation.source === formulaNode.id && relation.relationType === "defines";
      });
      const resultNode = defineRelation ? getNodeById(defineRelation.target) : null;
      const sameCardTokens = answerEntries.map((entry) => entry.token);
      const optionSets = answerEntries.map((entry) => {
        const distractors = pickDistractors(entry.token, sameCardTokens);
        return sortOptions([
          { token: entry.token, label: entry.label },
          ...distractors.map((token) => ({ token, label: getTokenLabel(token) }))
        ]);
      });

      return {
        id: `card_${formulaNode.id}`,
        formulaId: formulaNode.id,
        moduleId: formulaNode.moduleId,
        answerEntries,
        optionSets,
        maskedSegments: buildMaskedSegments(formulaNode, answerEntries),
        hintText: formulaNode.description,
        resultNodeId: resultNode ? resultNode.id : null,
        progress: createInitialProgress(answerEntries.length)
      };
    })
    .filter(Boolean);
}

function renderProgress() {
  elements.activeModuleTitle.textContent = `${state.currentCardIndex + 1} / ${state.practiceDeck.length}`;
}

function renderCategoryPanel() {
  if (!state.currentBlankSolved) {
    elements.categoryPanel.hidden = true;
    elements.moduleTabs.innerHTML = "";
    elements.moduleSummaryText.textContent = "";
    elements.moduleSummaryText.className = "feedback";
    return;
  }

  elements.categoryPanel.hidden = false;
  elements.moduleTabs.innerHTML = "";

  state.data.modules.forEach((module) => {
    const button = document.createElement("button");
    const isSelected = state.currentCategorySelection === module.id;
    const isCorrect = isSelected && module.id === state.currentCard.moduleId;
    const isIncorrect = isSelected && module.id !== state.currentCard.moduleId;
    button.type = "button";
    button.className = `module-tab${isSelected ? " active" : ""}${isCorrect ? " correct" : ""}${isIncorrect ? " incorrect" : ""}`;
    button.innerHTML = `<strong>${module.title}</strong>`;
    button.addEventListener("click", () => selectCategoryOption(module.id));
    elements.moduleTabs.appendChild(button);
  });

  if (state.currentCategorySelection === null) {
    elements.moduleSummaryText.textContent = "";
    elements.moduleSummaryText.className = "feedback";
    return;
  }

  if (state.currentCategorySelection === state.currentCard.moduleId) {
    elements.moduleSummaryText.textContent = "正确";
    elements.moduleSummaryText.className = "feedback success";
    return;
  }

  elements.moduleSummaryText.textContent = "错误";
  elements.moduleSummaryText.className = "feedback error";
}

function selectCategoryOption(moduleId) {
  if (!state.currentBlankSolved) {
    return;
  }

  state.currentCategorySelection = moduleId;
  syncCurrentCardProgress();
  renderCategoryPanel();
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/ /g, "&nbsp;");
}

function buildPlainFormulaMarkup(card) {
  return card.maskedSegments.map((segment) => {
    if (segment.type === "text") {
      return `<span>${escapeHtml(segment.value)}</span>`;
    }

    const currentValue = state.currentBlankSelections[segment.slotIndex];
    return `<span class="formula-slot${currentValue ? " filled" : ""}">${currentValue || "?"}</span>`;
  }).join("");
}

function buildFormulaTex(card) {
  const builder = formulaTexBuilders[card.formulaId];
  if (!builder) {
    return null;
  }

  const slots = card.answerEntries.map((entry, index) => {
    const selectedToken = state.currentBlankSelections[index];
    if (!selectedToken) {
      return "\\boxed{?}";
    }

    return `\\boxed{${getTokenTex(selectedToken)}}`;
  });

  return builder(slots);
}

function buildFormulaMarkup(card) {
  const tex = buildFormulaTex(card);
  if (!tex) {
    return buildPlainFormulaMarkup(card);
  }

  return renderMath(tex, card.answerEntries.map((entry) => entry.token).join(" "));
}

function getCurrentCorrectCount() {
  const expectedTokens = state.currentCard.answerEntries.map((entry) => entry.token);
  return state.currentBlankSelections.reduce((count, token, index) => {
    return count + (token === expectedTokens[index] ? 1 : 0);
  }, 0);
}

function renderBlankFeedback() {
  const filledCount = state.currentBlankSelections.filter(Boolean).length;
  const total = state.currentCard.answerEntries.length;

  if (state.currentBlankSolved) {
    elements.blankFeedback.textContent = "正确";
    elements.blankFeedback.className = "feedback success";
    return;
  }

  if (filledCount === total && total > 0) {
    elements.blankFeedback.textContent = "错误";
    elements.blankFeedback.className = "feedback error";
    return;
  }

  elements.blankFeedback.textContent = "";
  elements.blankFeedback.className = "feedback";
}

function renderBlankTask(card) {
  const resultNode = card.resultNodeId ? getNodeById(card.resultNodeId) : null;
  elements.blankPrompt.textContent = resultNode ? resultNode.label : "";
  elements.blankFormula.innerHTML = buildFormulaMarkup(card);
  elements.blankHint.hidden = !state.hintVisible;
  elements.blankHint.textContent = state.hintVisible ? card.hintText : "";
  elements.blankForm.innerHTML = "";

  card.optionSets.forEach((options, slotIndex) => {
    const group = document.createElement("div");
    group.className = "option-group";

    const row = document.createElement("div");
    row.className = "option-row";

    options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `option-chip${state.currentBlankSelections[slotIndex] === option.token ? " selected" : ""}`;
      button.innerHTML = `<span class="option-math">${renderMath(getTokenTex(option.token), option.token)}</span><small>${option.label}</small>`;
      button.addEventListener("click", () => selectBlankOption(slotIndex, option.token));
      row.appendChild(button);
    });

    group.appendChild(row);
    elements.blankForm.appendChild(group);
  });

  renderBlankFeedback();
}

function selectBlankOption(slotIndex, token) {
  if (state.currentBlankSelections[slotIndex] === token) {
    return;
  }

  state.currentBlankSelections[slotIndex] = token;
  state.currentBlankSolved = false;
  state.currentCategorySelection = null;
  syncCurrentCardProgress();
  renderBlankTask(state.currentCard);
  renderCategoryPanel();

  if (state.currentBlankSelections.every(Boolean)) {
    evaluateBlankAnswers();
  }
}

function evaluateBlankAnswers() {
  const total = state.currentCard.answerEntries.length;
  const correctCount = getCurrentCorrectCount();

  if (correctCount === total) {
    state.currentBlankSolved = true;
    syncCurrentCardProgress();
    renderBlankTask(state.currentCard);
    renderCategoryPanel();
    return;
  }

  state.currentWrongAttempts += 1;
  if (state.currentWrongAttempts >= 2) {
    state.hintVisible = true;
  }
  syncCurrentCardProgress();
  renderBlankTask(state.currentCard);
  renderCategoryPanel();
}

function resetBlankTask() {
  state.currentBlankSelections = new Array(state.currentCard.answerEntries.length).fill("");
  state.currentBlankSolved = false;
  state.currentWrongAttempts = 0;
  state.currentCategorySelection = null;
  state.hintVisible = false;
  syncCurrentCardProgress();
  renderBlankTask(state.currentCard);
  renderCategoryPanel();
}

function goToCard(index) {
  state.currentCardIndex = index;
  state.currentCard = state.practiceDeck[index];
  loadCardProgress(state.currentCard);
  renderProgress();
  renderBlankTask(state.currentCard);
  renderCategoryPanel();
}

function goToPreviousCard() {
  const previousIndex = (state.currentCardIndex - 1 + state.practiceDeck.length) % state.practiceDeck.length;
  goToCard(previousIndex);
}

function goToNextCard() {
  const nextIndex = (state.currentCardIndex + 1) % state.practiceDeck.length;
  goToCard(nextIndex);
}

function bindEvents() {
  elements.blankPrev.addEventListener("click", goToPreviousCard);
  elements.blankReset.addEventListener("click", resetBlankTask);
  elements.blankRefresh.addEventListener("click", goToNextCard);
}

async function init() {
  state.data = await loadData();
  state.answerTokenPool = buildAnswerTokenPool();
  state.practiceDeck = buildPracticeDeck();
  bindEvents();
  goToCard(0);
}

init();