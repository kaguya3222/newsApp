export default {
  state: {
    regInfo: [
      {
        value: "",
        label: "Login",
        errorMessage:
          "Логин должен начинаться с буквы и состоять из латинских букв.",
        pattern: /^[a-zA-Z][a-zA-Z0-9-.]{1,20}$/,
        type: "text",
        errorStatus: true
      },
      {
        value: "",
        label: "Name",
        pattern: /^[a-zA-Z]+$/,
        errorMessage: "Имя должно состоять из латинских букв.",
        type: "text",
        errorStatus: true
      },
      {
        value: "",
        label: "Email",
        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        errorMessage: "Некорректная почта.",
        type: "email",
        errorStatus: true
      },
      {
        value: "",
        label: "Password",
        pattern: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        errorMessage:
          "Пароль должен иметь минимум 8 символов, 1 заглавную букву и состоять из латинских букв и знаков",
        type: "password",
        errorStatus: true
      },
      {
        value: "",
        label: "Confirm password",
        pattern: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        type: "password",
        errorStatus: true
      }
    ]
  },
  getters: {
    regInfo(state) {
      return state.regInfo;
    }
  },
  mutations: {
    mutateRegInfoValue(state, payLoad) {
      let index = payLoad.index;
      let value = payLoad.value;
      state.regInfo[index].value = value;
    },
    mutateErrorStatus(state, payLoad) {
      let status = payLoad.status;
      let index = payLoad.index;
      state.regInfo[index].errorStatus = status;
    }
  },
  actions: {
    changeRegInfoValue(store, payLoad) {
      store.commit("mutateRegInfoValue", payLoad);
    },
    changeErrorStatus(store, payLoad) {
      store.commit("mutateErrorStatus", payLoad);
    }
  }
};
