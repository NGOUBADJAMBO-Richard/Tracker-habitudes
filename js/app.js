const STORAGE_KEY = window.APP_CONFIG?.STORAGE_KEY ?? "mgn-tackers.habits";
const THEME_KEY = window.APP_CONFIG?.THEME_KEY ?? "mgn-tackers.theme";
const LANGUAGE_KEY = window.APP_CONFIG?.LANGUAGE_KEY ?? "mgn-tackers.language";
const INSTALL_DISMISSED_KEY =
  window.APP_CONFIG?.INSTALL_DISMISSED_KEY ?? "mgn-tackers.install-dismissed";

const translations = {
  fr: {
    pageTitle: "MGN Tackers",
    metaDescription:
      "MGN Tackers est un tracker d'habitudes minimaliste avec stockage local.",
    heroTitle: "Tracker d'habitudes minimaliste",
    heroCopy:
      "Créez des routines simples, cochez-les comme faites et retrouvez vos données au prochain lancement.",
    themeLabel: "Thème",
    themeSystem: "Système",
    themeLight: "Clair",
    themeDark: "Sombre",
    languageLabel: "Langue",
    localPersistence: "Persistance locale",
    heroCardBody:
      "Les habitudes sont enregistrées dans le navigateur via localStorage.",
    newHabit: "Nouvelle habitude",
    createRoutine: "Créer une routine",
    nameLabel: "Nom",
    namePlaceholder: "Ex. Boire de l'eau",
    frequencyLabel: "Fréquence",
    frequencyDaily: "Quotidienne",
    frequencyWeekly: "Hebdomadaire",
    frequencyMonthly: "Mensuelle",
    iconLabel: "Icône",
    iconWater: "💧 Eau",
    iconRun: "🏃 Sport",
    iconRead: "📚 Lecture",
    iconMeditate: "🧘 Méditation",
    iconSleep: "🛌 Sommeil",
    iconCheck: "✅ Objectif",
    addHabit: "Ajouter l'habitude",
    updateHabit: "Enregistrer",
    cancelEdit: "Annuler l'édition",
    listLabel: "Liste",
    savedHabits: "Habitudes enregistrées",
    viewLabel: "Vue",
    trackTitle: "Suivi des habitudes",
    viewDay: "Jour",
    viewWeek: "Semaine",
    viewMonth: "Mois",
    dateLabel: "Date",
    lateOnly: "Afficher les habitudes en retard aujourd'hui",
    lateSummary: "Habitudes en retard aujourd'hui: {count}",
    exportData: "Export JSON",
    importData: "Import JSON",
    exportFilename: "habitudes-export",
    importSuccess: "Import reussi.",
    importError: "Fichier JSON invalide.",
    weeklyChartTitle: "Progression hebdomadaire",
    delete: "Supprimer",
    edit: "Modifier",
    done: "Fait",
    notDone: "Non fait",
    markDone: "Marquer fait",
    markNotDone: "Marquer non fait",
    frequencyPrefix: "Fréquence",
    statScope: "Portée",
    statRate: "Taux de réussite",
    statCompletions: "Validations",
    scopeDay: "Jour",
    scopeWeek: "Semaine",
    scopeMonth: "Mois",
    dailySummary: "Etat du jour: {done}/{total} habitudes faites.",
    emptyState:
      "Aucune habitude pour le moment. Ajoutez votre première routine pour commencer.",
    countSingular: "habitude",
    countPlural: "habitudes",
    deleteAriaPrefix: "Supprimer l'habitude",
    editAriaPrefix: "Modifier l'habitude",
    toggleAriaPrefix: "Marquer l'habitude",
    themeAria: "Thème",
    languageAria: "Langue",
    installBannerBadge: "Installable",
    installApp: "Installer l'app",
    installing: "Installation en cours...",
    installed: "App installée avec succès.",
    installHint: "L'installation est disponible selon votre navigateur.",
    installNotAvailable: "L'installation n'est pas disponible pour le moment.",
  },
  en: {
    pageTitle: "MGN Tackers",
    metaDescription:
      "MGN Tackers is a minimalist habit tracker with local storage.",
    heroTitle: "Minimal habit tracker",
    heroCopy:
      "Create simple routines, check them off, and keep your data between sessions.",
    themeLabel: "Theme",
    themeSystem: "System",
    themeLight: "Light",
    themeDark: "Dark",
    languageLabel: "Language",
    localPersistence: "Local persistence",
    heroCardBody: "Habits are stored in your browser using localStorage.",
    newHabit: "New habit",
    createRoutine: "Create a routine",
    nameLabel: "Name",
    namePlaceholder: "Example: Drink water",
    frequencyLabel: "Frequency",
    frequencyDaily: "Daily",
    frequencyWeekly: "Weekly",
    frequencyMonthly: "Monthly",
    iconLabel: "Icon",
    iconWater: "💧 Water",
    iconRun: "🏃 Exercise",
    iconRead: "📚 Reading",
    iconMeditate: "🧘 Meditation",
    iconSleep: "🛌 Sleep",
    iconCheck: "✅ Goal",
    addHabit: "Add habit",
    updateHabit: "Save",
    cancelEdit: "Cancel edit",
    listLabel: "List",
    savedHabits: "Saved habits",
    viewLabel: "View",
    trackTitle: "Habit tracking",
    viewDay: "Day",
    viewWeek: "Week",
    viewMonth: "Month",
    dateLabel: "Date",
    lateOnly: "Show habits overdue today",
    lateSummary: "Habits overdue today: {count}",
    exportData: "Export JSON",
    importData: "Import JSON",
    exportFilename: "habits-export",
    importSuccess: "Import successful.",
    importError: "Invalid JSON file.",
    weeklyChartTitle: "Weekly progress",
    delete: "Delete",
    edit: "Edit",
    done: "Done",
    notDone: "Not done",
    markDone: "Mark done",
    markNotDone: "Mark not done",
    frequencyPrefix: "Frequency",
    statScope: "Scope",
    statRate: "Success rate",
    statCompletions: "Completions",
    scopeDay: "Day",
    scopeWeek: "Week",
    scopeMonth: "Month",
    dailySummary: "Today status: {done}/{total} habits completed.",
    emptyState: "No habits yet. Add your first routine to get started.",
    countSingular: "habit",
    countPlural: "habits",
    deleteAriaPrefix: "Delete habit",
    editAriaPrefix: "Edit habit",
    toggleAriaPrefix: "Toggle habit",
    themeAria: "Theme",
    languageAria: "Language",
    installBannerBadge: "Installable",
    installApp: "Install app",
    installing: "Installing...",
    installed: "App installed successfully.",
    installHint: "Install availability depends on your browser.",
    installNotAvailable: "Installation is not available right now.",
  },
};

const form = document.getElementById("habit-form");
const habitIdInput = document.getElementById("habit-id");
const nameInput = document.getElementById("habit-name");
const frequencyInput = document.getElementById("habit-frequency");
const iconInput = document.getElementById("habit-icon");
const submitButton = document.getElementById("submit-habit");
const cancelEditButton = document.getElementById("cancel-edit");

const listElement = document.getElementById("habit-list");
const countElement = document.getElementById("habit-count");
const template = document.getElementById("habit-item-template");

const viewButtons = Array.from(document.querySelectorAll(".view-button"));
const dateInput = document.getElementById("selected-date");
const lateOnlyToggle = document.getElementById("late-only-toggle");
const exportButton = document.getElementById("export-json");
const importButton = document.getElementById("import-json");
const importFileInput = document.getElementById("import-file");
const todaySummaryElement = document.getElementById("today-summary");
const lateSummaryElement = document.getElementById("late-summary");
const statScopeElement = document.getElementById("stat-scope");
const statRateElement = document.getElementById("stat-rate");
const statCompletionsElement = document.getElementById("stat-completions");
const weeklyChart = document.getElementById("weekly-chart");

const themeToggle = document.getElementById("theme-toggle");
const langToggle = document.getElementById("lang-toggle");
const installButton = document.getElementById("install-app-button");
const installStatus = document.getElementById("install-status");
const installBanner = document.getElementById("install-banner");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const descriptionMeta = document.querySelector('meta[name="description"]');

const themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

let deferredInstallPrompt = null;
let installDismissed = loadInstallDismissed();
let currentLanguage = loadLanguage();
let currentTheme = loadTheme();
let currentView = "day";
let selectedDate = toDateKey(new Date());
let showLateOnly = false;
let habits = loadHabits();

applyLanguage(currentLanguage);
applyTheme(currentTheme);
langToggle.value = currentLanguage;
themeToggle.value = currentTheme;
dateInput.value = selectedDate;

renderHabits();
registerServiceWorker();
setupInstallPrompt();

themeMediaQuery.addEventListener("change", () => {
  if (currentTheme === "system") {
    applyTheme("system");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  const frequency = normalizeFrequency(frequencyInput.value);
  const icon = normalizeIcon(iconInput.value);
  const habitId = habitIdInput.value;

  if (!name) {
    nameInput.focus();
    return;
  }

  if (habitId) {
    habits = habits.map((habit) =>
      habit.id === habitId
        ? {
            ...habit,
            name,
            frequency,
            icon,
            updatedAt: new Date().toISOString(),
          }
        : habit,
    );
  } else {
    habits = [
      {
        id: createHabitId(),
        name,
        frequency,
        icon,
        completions: {},
        createdAt: new Date().toISOString(),
      },
      ...habits,
    ];
  }

  saveHabits();
  resetFormState();
  renderHabits();
  nameInput.focus();
});

cancelEditButton.addEventListener("click", () => {
  resetFormState();
});

listElement.addEventListener("click", (event) => {
  const target = event.target;
  const item = target.closest("[data-id]");

  if (!item) {
    return;
  }

  const habitId = item.dataset.id;

  if (target.matches(".toggle-button")) {
    toggleCompletion(habitId, selectedDate);
    return;
  }

  if (target.matches(".calendar-cell")) {
    const date = target.dataset.date;
    if (date) {
      toggleCompletion(habitId, date);
    }
    return;
  }

  if (target.matches(".edit-button")) {
    startEditHabit(habitId);
    return;
  }

  if (target.matches(".delete-button")) {
    habits = habits.filter((habit) => habit.id !== habitId);
    saveHabits();
    renderHabits();

    if (habitIdInput.value === habitId) {
      resetFormState();
    }
  }
});

viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.view;
    if (view === "day" || view === "week" || view === "month") {
      currentView = view;
      renderHabits();
    }
  });
});

dateInput.addEventListener("change", () => {
  if (dateInput.value) {
    selectedDate = dateInput.value;
    renderHabits();
  }
});

lateOnlyToggle.addEventListener("change", () => {
  showLateOnly = lateOnlyToggle.checked;
  renderHabits();
});

exportButton.addEventListener("click", () => {
  exportHabitsAsJson();
});

importButton.addEventListener("click", () => {
  importFileInput.click();
});

importFileInput.addEventListener("change", async () => {
  const file = importFileInput.files?.[0];
  if (!file) {
    return;
  }

  try {
    await importHabitsFromFile(file);
    renderHabits();
  } catch {
    window.alert(t("importError"));
  } finally {
    importFileInput.value = "";
  }
});

themeToggle.addEventListener("change", () => {
  const selectedTheme = themeToggle.value;
  currentTheme =
    selectedTheme === "dark" || selectedTheme === "light"
      ? selectedTheme
      : "system";
  applyTheme(currentTheme);
  saveTheme(currentTheme);
});

langToggle.addEventListener("change", () => {
  currentLanguage = langToggle.value === "en" ? "en" : "fr";
  applyLanguage(currentLanguage);
  saveLanguage(currentLanguage);
  renderHabits();
});

function loadHabits() {
  try {
    const storedHabits = window.localStorage.getItem(STORAGE_KEY);
    const parsedHabits = storedHabits ? JSON.parse(storedHabits) : [];

    if (!Array.isArray(parsedHabits)) {
      return [];
    }

    return normalizeHabitArray(parsedHabits);
  } catch {
    return [];
  }
}

function normalizeHabitArray(rawHabits) {
  return rawHabits
    .map((habit) => normalizeHabit(habit))
    .filter((habit) => habit !== null);
}

function normalizeHabit(habit) {
  const normalizedFrequency = normalizeFrequency(habit?.frequency);

  if (
    !habit ||
    typeof habit.id !== "string" ||
    typeof habit.name !== "string" ||
    typeof normalizedFrequency !== "string"
  ) {
    return null;
  }

  const fallbackToday = toDateKey(new Date());
  const completions =
    habit.completions && typeof habit.completions === "object"
      ? sanitizeCompletions(habit.completions)
      : {};

  if (typeof habit.done === "boolean") {
    completions[fallbackToday] = habit.done;
  }

  return {
    id: habit.id,
    name: habit.name,
    frequency: normalizeFrequency(habit.frequency),
    icon: normalizeIcon(habit.icon),
    completions,
    createdAt:
      typeof habit.createdAt === "string"
        ? habit.createdAt
        : new Date().toISOString(),
    updatedAt:
      typeof habit.updatedAt === "string" ? habit.updatedAt : undefined,
  };
}

function sanitizeCompletions(input) {
  const output = {};
  Object.keys(input).forEach((date) => {
    if (isDateKey(date) && input[date] === true) {
      output[date] = true;
    }
  });
  return output;
}

function loadTheme() {
  try {
    const theme = window.localStorage.getItem(THEME_KEY);
    if (theme === "dark" || theme === "light" || theme === "system") {
      return theme;
    }
    return "system";
  } catch {
    return "system";
  }
}

function loadLanguage() {
  try {
    const language = window.localStorage.getItem(LANGUAGE_KEY);
    return language === "en" ? "en" : "fr";
  } catch {
    return "fr";
  }
}

function loadInstallDismissed() {
  try {
    return window.localStorage.getItem(INSTALL_DISMISSED_KEY) === "1";
  } catch {
    return false;
  }
}

function saveHabits() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
  } catch (error) {
    console.warn("Unable to persist habits locally.", error);
  }
}

function saveTheme(theme) {
  try {
    window.localStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    console.warn("Unable to persist selected theme.", error);
  }
}

function saveLanguage(language) {
  try {
    window.localStorage.setItem(LANGUAGE_KEY, language);
  } catch (error) {
    console.warn("Unable to persist selected language.", error);
  }
}

function saveInstallDismissed(value) {
  try {
    window.localStorage.setItem(INSTALL_DISMISSED_KEY, value ? "1" : "0");
  } catch (error) {
    console.warn("Unable to persist install prompt preference.", error);
  }
}

function updateInstallBanner(state) {
  if (!installBanner) {
    return;
  }

  installBanner.dataset.state = state;
}

function renderHabits() {
  listElement.innerHTML = "";

  const lateHabits = getLateHabitsForDate(toDateKey(new Date()));
  const visibleHabits = showLateOnly ? lateHabits : habits;

  const countLabel =
    visibleHabits.length === 1 ? t("countSingular") : t("countPlural");
  countElement.textContent = `${visibleHabits.length} ${countLabel}`;

  updateViewButtons();
  updateSummaryAndStats();
  drawWeeklyChart();

  if (visibleHabits.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "empty-state";
    emptyState.textContent = t("emptyState");
    listElement.append(emptyState);
    return;
  }

  const fragment = document.createDocumentFragment();
  const scopeDates = getScopeDates(currentView, selectedDate);

  visibleHabits.forEach((habit) => {
    const habitNode = template.content.cloneNode(true);
    const item = habitNode.querySelector(".habit-item");
    const icon = habitNode.querySelector(".habit-icon");
    const name = habitNode.querySelector(".habit-name");
    const frequency = habitNode.querySelector(".habit-frequency");
    const statusPill = habitNode.querySelector(".status-pill");
    const toggleButton = habitNode.querySelector(".toggle-button");
    const editButton = habitNode.querySelector(".edit-button");
    const deleteButton = habitNode.querySelector(".delete-button");
    const calendarStrip = habitNode.querySelector(".calendar-strip");

    item.dataset.id = habit.id;
    icon.textContent = habit.icon;
    name.textContent = habit.name;
    frequency.textContent = `${t("frequencyPrefix")}: ${translateFrequency(habit.frequency)}`;

    const selectedDone = isCompleted(habit, selectedDate);

    if (currentView === "day") {
      const scheduled = isScheduledOnDate(habit, selectedDate);
      statusPill.textContent = selectedDone ? t("done") : t("notDone");
      statusPill.className = `status-pill ${selectedDone ? "done" : "not-done"}`;

      toggleButton.textContent = selectedDone
        ? t("markNotDone")
        : t("markDone");
      toggleButton.disabled = !scheduled;
      toggleButton.setAttribute(
        "aria-label",
        `${t("toggleAriaPrefix")} ${habit.name}`,
      );

      if (!scheduled) {
        toggleButton.textContent = "-";
      }

      calendarStrip.hidden = true;
    } else {
      const scheduledCount = scopeDates.filter((date) =>
        isScheduledOnDate(habit, date),
      ).length;
      const completedCount = scopeDates.filter(
        (date) => isScheduledOnDate(habit, date) && isCompleted(habit, date),
      ).length;

      statusPill.textContent = `${completedCount}/${scheduledCount}`;
      statusPill.className = `status-pill ${
        completedCount === scheduledCount && scheduledCount > 0
          ? "done"
          : "not-done"
      }`;

      toggleButton.textContent = t("markDone");
      toggleButton.disabled = true;
      calendarStrip.hidden = false;
      renderCalendarStrip(calendarStrip, habit, scopeDates);
    }

    editButton.textContent = t("edit");
    editButton.setAttribute(
      "aria-label",
      `${t("editAriaPrefix")} ${habit.name}`,
    );
    deleteButton.textContent = t("delete");
    deleteButton.setAttribute(
      "aria-label",
      `${t("deleteAriaPrefix")} ${habit.name}`,
    );

    fragment.append(habitNode);
  });

  listElement.append(fragment);
}

function renderCalendarStrip(container, habit, dates) {
  container.classList.toggle("month", currentView === "month");
  container.innerHTML = "";

  const formatter = new Intl.DateTimeFormat(currentLanguage, {
    day: "2-digit",
    month: "2-digit",
  });

  dates.forEach((date) => {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "calendar-cell";
    cell.dataset.date = date;

    const scheduled = isScheduledOnDate(habit, date);
    const done = isCompleted(habit, date);

    cell.textContent = formatter.format(parseDateKey(date));
    if (done) {
      cell.classList.add("is-completed");
    }

    if (!scheduled) {
      cell.disabled = true;
    }

    container.append(cell);
  });
}

function updateSummaryAndStats() {
  const todayDates = [selectedDate];
  const scopeDates = getScopeDates(currentView, selectedDate);

  const todayStats = getCompletionStats(habits, todayDates);
  const scopeStats = getCompletionStats(habits, scopeDates);

  todaySummaryElement.textContent = t("dailySummary")
    .replace("{done}", String(todayStats.completed))
    .replace("{total}", String(todayStats.total));

  lateSummaryElement.textContent = t("lateSummary").replace(
    "{count}",
    String(getLateHabitsForDate(toDateKey(new Date())).length),
  );

  statScopeElement.textContent = `${translateScope(currentView)} ${formatDate(selectedDate)}`;
  statCompletionsElement.textContent = `${scopeStats.completed} / ${scopeStats.total}`;

  const rate =
    scopeStats.total > 0
      ? Math.round((scopeStats.completed / scopeStats.total) * 100)
      : 0;
  statRateElement.textContent = `${rate}%`;
}

function getCompletionStats(habitItems, dates) {
  let total = 0;
  let completed = 0;

  habitItems.forEach((habit) => {
    dates.forEach((date) => {
      if (isScheduledOnDate(habit, date)) {
        total += 1;
        if (isCompleted(habit, date)) {
          completed += 1;
        }
      }
    });
  });

  return { total, completed };
}

function getLateHabitsForDate(dateKey) {
  return habits.filter(
    (habit) =>
      isScheduledOnDate(habit, dateKey) && !isCompleted(habit, dateKey),
  );
}

function toggleCompletion(habitId, dateKey) {
  habits = habits.map((habit) => {
    if (habit.id !== habitId || !isScheduledOnDate(habit, dateKey)) {
      return habit;
    }

    const completions = { ...habit.completions };

    if (completions[dateKey]) {
      delete completions[dateKey];
    } else {
      completions[dateKey] = true;
    }

    return {
      ...habit,
      completions,
      updatedAt: new Date().toISOString(),
    };
  });

  saveHabits();
  renderHabits();
}

function startEditHabit(habitId) {
  const habit = habits.find((item) => item.id === habitId);
  if (!habit) {
    return;
  }

  habitIdInput.value = habit.id;
  nameInput.value = habit.name;
  frequencyInput.value = habit.frequency;
  iconInput.value = normalizeIcon(habit.icon);
  submitButton.textContent = t("updateHabit");
  cancelEditButton.hidden = false;
  nameInput.focus();
}

function resetFormState() {
  habitIdInput.value = "";
  form.reset();
  frequencyInput.value = "daily";
  iconInput.value = "💧";
  submitButton.textContent = t("addHabit");
  cancelEditButton.hidden = true;
}

function updateViewButtons() {
  viewButtons.forEach((button) => {
    const isActive = button.dataset.view === currentView;
    button.classList.toggle("is-active", isActive);
  });
}

function exportHabitsAsJson() {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    habits,
    preferences: {
      theme: currentTheme,
      language: currentLanguage,
    },
  };

  const fileName = `${t("exportFilename")}-${toDateKey(new Date())}.json`;
  downloadTextFile(fileName, JSON.stringify(payload, null, 2));
}

async function importHabitsFromFile(file) {
  const text = await file.text();
  const parsed = JSON.parse(text);

  let importedHabits = [];
  if (Array.isArray(parsed)) {
    importedHabits = parsed;
  } else if (Array.isArray(parsed?.habits)) {
    importedHabits = parsed.habits;
  } else {
    throw new Error("invalid-import");
  }

  habits = normalizeHabitArray(importedHabits);
  saveHabits();

  if (parsed?.preferences?.theme) {
    const importedTheme =
      parsed.preferences.theme === "dark" ||
      parsed.preferences.theme === "light" ||
      parsed.preferences.theme === "system"
        ? parsed.preferences.theme
        : null;

    if (importedTheme) {
      currentTheme = importedTheme;
      themeToggle.value = importedTheme;
      applyTheme(importedTheme);
      saveTheme(importedTheme);
    }
  }

  if (parsed?.preferences?.language) {
    const importedLanguage = parsed.preferences.language === "en" ? "en" : "fr";
    currentLanguage = importedLanguage;
    langToggle.value = importedLanguage;
    applyLanguage(importedLanguage);
    saveLanguage(importedLanguage);
  }

  window.alert(t("importSuccess"));
}

function downloadTextFile(fileName, content) {
  const blob = new Blob([content], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

function drawWeeklyChart() {
  if (!(weeklyChart instanceof HTMLCanvasElement)) {
    return;
  }

  const context = weeklyChart.getContext("2d");
  if (!context) {
    return;
  }

  const pixelRatio = window.devicePixelRatio || 1;
  const width = weeklyChart.clientWidth || 760;
  const height = 180;

  weeklyChart.width = Math.floor(width * pixelRatio);
  weeklyChart.height = Math.floor(height * pixelRatio);
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.clearRect(0, 0, width, height);

  const series = getWeeklySeries(selectedDate);
  const barAreaHeight = 120;
  const baseline = 145;
  const gap = 8;
  const barWidth = Math.max(18, Math.floor((width - gap * 8) / 7));
  const textColor =
    getComputedStyle(document.body).getPropertyValue("--muted") || "#5d6b63";
  const accent =
    getComputedStyle(document.body).getPropertyValue("--accent") || "#246b4b";

  context.font = "12px Trebuchet MS";
  context.fillStyle = textColor.trim();
  context.strokeStyle = "rgba(20,32,24,0.2)";
  context.beginPath();
  context.moveTo(0, baseline + 0.5);
  context.lineTo(width, baseline + 0.5);
  context.stroke();

  series.forEach((item, index) => {
    const x = gap + index * (barWidth + gap);
    const ratio = item.total > 0 ? item.completed / item.total : 0;
    const barHeight = Math.round(ratio * barAreaHeight);
    const y = baseline - barHeight;

    context.fillStyle = accent.trim();
    context.fillRect(x, y, barWidth, barHeight);

    context.fillStyle = textColor.trim();
    context.fillText(item.label, x, baseline + 16);
    context.fillText(`${Math.round(ratio * 100)}%`, x, y - 6);
  });
}

function getWeeklySeries(referenceDateKey) {
  const dates = getLastNDates(parseDateKey(referenceDateKey), 7);

  return dates.map((dateKey) => {
    const stats = getCompletionStats(habits, [dateKey]);
    const label = new Intl.DateTimeFormat(currentLanguage, {
      weekday: "short",
    }).format(parseDateKey(dateKey));

    return {
      dateKey,
      label,
      total: stats.total,
      completed: stats.completed,
    };
  });
}

function createHabitId() {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }

  return `habit-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function normalizeFrequency(frequency) {
  if (
    frequency === "daily" ||
    frequency === "weekly" ||
    frequency === "monthly"
  ) {
    return frequency;
  }

  const legacy = {
    Quotidienne: "daily",
    Hebdomadaire: "weekly",
    Mensuelle: "monthly",
    Daily: "daily",
    Weekly: "weekly",
    Monthly: "monthly",
  };

  return legacy[frequency] ?? "daily";
}

function normalizeIcon(icon) {
  const available = ["💧", "🏃", "📚", "🧘", "🛌", "✅"];
  return available.includes(icon) ? icon : "✅";
}

function translateFrequency(frequencyKey) {
  if (frequencyKey === "weekly") {
    return t("frequencyWeekly");
  }

  if (frequencyKey === "monthly") {
    return t("frequencyMonthly");
  }

  return t("frequencyDaily");
}

function translateScope(scope) {
  if (scope === "week") {
    return t("scopeWeek");
  }

  if (scope === "month") {
    return t("scopeMonth");
  }

  return t("scopeDay");
}

function t(key) {
  return translations[currentLanguage][key] ?? key;
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = t("pageTitle");

  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", t("metaDescription"));
  }

  const i18nNodes = document.querySelectorAll("[data-i18n]");
  i18nNodes.forEach((node) => {
    const token = node.getAttribute("data-i18n");
    if (token) {
      node.textContent = t(token);
    }
  });

  const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
  placeholderNodes.forEach((node) => {
    const token = node.getAttribute("data-i18n-placeholder");
    if (token) {
      node.setAttribute("placeholder", t(token));
    }
  });

  themeToggle.setAttribute("aria-label", t("themeAria"));
  langToggle.setAttribute("aria-label", t("languageAria"));

  if (installBanner) {
    const badge = installBanner.querySelector(
      "[data-i18n='installBannerBadge']",
    );
    if (badge) {
      badge.textContent = t("installBannerBadge");
    }
  }

  if (installStatus) {
    if (deferredInstallPrompt && !installDismissed) {
      installStatus.textContent = t("installHint");
    } else if (installDismissed) {
      installStatus.textContent = t("installed");
    }
  }

  if (habitIdInput.value) {
    submitButton.textContent = t("updateHabit");
    cancelEditButton.hidden = false;
  } else {
    submitButton.textContent = t("addHabit");
    cancelEditButton.hidden = true;
  }
}

function applyTheme(theme) {
  currentTheme = theme;
  const effectiveTheme =
    theme === "system" ? (themeMediaQuery.matches ? "dark" : "light") : theme;

  document.body.setAttribute("data-theme", effectiveTheme);
  document.body.setAttribute("data-theme-source", theme);

  if (themeMeta) {
    themeMeta.setAttribute(
      "content",
      effectiveTheme === "dark" ? "#17201c" : "#f4efe7",
    );
  }
}

function setupInstallPrompt() {
  if (!installButton || !installStatus) {
    return;
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;

    if (!installDismissed) {
      installButton.hidden = false;
      installStatus.textContent = t("installHint");
      updateInstallBanner("installable");
    }
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    installButton.hidden = true;
    installStatus.textContent = t("installed");
    updateInstallBanner("installed");
    installDismissed = true;
    saveInstallDismissed(true);
  });

  installButton.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      installStatus.textContent = t("installNotAvailable");
      updateInstallBanner("unavailable");
      return;
    }

    installButton.disabled = true;
    installStatus.textContent = t("installing");

    deferredInstallPrompt.prompt();
    const choiceResult = await deferredInstallPrompt.userChoice;

    deferredInstallPrompt = null;
    installButton.disabled = false;
    installButton.hidden = true;

    if (choiceResult.outcome === "accepted") {
      installStatus.textContent = t("installed");
      updateInstallBanner("installed");
      installDismissed = true;
      saveInstallDismissed(true);
    } else {
      installStatus.textContent = t("installNotAvailable");
      updateInstallBanner("unavailable");
      installDismissed = true;
      saveInstallDismissed(true);
    }
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("js/sw.js");
    } catch (error) {
      console.warn("Service worker registration failed.", error);
    }
  });
}

function getScopeDates(view, date) {
  const referenceDate = parseDateKey(date);

  if (view === "week") {
    return getLastNDates(referenceDate, 7);
  }

  if (view === "month") {
    return getLastNDates(referenceDate, 30);
  }

  return [date];
}

function getLastNDates(referenceDate, count) {
  const dates = [];

  for (let index = count - 1; index >= 0; index -= 1) {
    const date = new Date(referenceDate);
    date.setDate(referenceDate.getDate() - index);
    dates.push(toDateKey(date));
  }

  return dates;
}

function isScheduledOnDate(habit, dateKey) {
  const date = parseDateKey(dateKey);
  const createdAt = new Date(habit.createdAt);

  if (habit.frequency === "weekly") {
    return date.getDay() === createdAt.getDay();
  }

  if (habit.frequency === "monthly") {
    return date.getDate() === createdAt.getDate();
  }

  return true;
}

function isCompleted(habit, dateKey) {
  return Boolean(habit.completions?.[dateKey]);
}

function formatDate(dateKey) {
  return new Intl.DateTimeFormat(currentLanguage, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(parseDateKey(dateKey));
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDateKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function isDateKey(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}
