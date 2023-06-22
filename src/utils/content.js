const mainPage = {
  id: {
    title: "Aplikasi Catatan",
    nav: {
      archives: "Arsip",
      home: "Beranda",
    },
    message: {
      loading: "Memuat data...",
      confirm: "Apakah anda yakin?",
    },
    pageNotFound: "Halaman Tidak Ditemukan.",
  },
  en: {
    title: "Notes App",
    nav: {
      archives: "Archives",
      home: "Home",
    },
    message: {
      loading: "Loading...",
      confirm: "Are you sure?",
    },
    pageNotFound: "Page Not Found",
  },
};

const loginPage = {
  id: {
    welcomeText: "Yuk, login untuk menggunakan aplikasi",
    registerQuestion: "Belum punya akun?",
    registerLink: "Daftar disini",
  },
  en: {
    welcomeText: "Login to use the app, please",
    registerQuestion: "Don't have account?",
    registerLink: "Register here",
  },
};

const registerPage = {
  id: {
    registerFormTitle: "Isi for  untuk mendaftar akun.",
    loginQuestion: "Sudah punya akun?",
    loginLink: "Login disini",
  },
  en: {
    registerFormTitle: "Fill the form to register account",
    loginQuestion: "Already have an account?",
    loginLink: "Login here",
  },
};

const activeNotePage = {
  id: {
    title: "Catatan Aktif",
    empty: "Tidak ada catatan",
    search: "Cari berdasarkan judul...",
  },
  en: {
    title: "Active Notes",
    empty: "Empty",
    search: "Search by title...",
  },
};

const archivedNotePage = {
  id: {
    title: "Catatan Arsip",
  },
  en: {
    title: "Archived Notes",
  },
};

const newNotePage = {
  id: {
    titlePlaceholder: "Judul Catatan",
    contentPlaceholder: "Isi Catatan",
  },
  en: {
    titlePlaceholder: "Note Title",
    contentPlaceholder: "Note Content",
  },
};

const detailNotePage = {
  id: {
    message: "Catatan tidak ditemukan...",
  },
  en: {
    message: "Not Found",
  },
};

export {
  mainPage,
  registerPage,
  loginPage,
  activeNotePage,
  archivedNotePage,
  newNotePage,
  detailNotePage,
};
