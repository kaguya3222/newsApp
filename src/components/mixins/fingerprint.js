import Fingerprint2 from "fingerprintjs2";

export default {
  methods: {
    getFingerPrint() {
      return new Promise(resolve => {
        setTimeout(function() {
          Fingerprint2.get(function(components) {
            var values = components.map(function(component) {
              return component.value;
            });
            resolve(Fingerprint2.x64hash128(values.join(""), 31));
          });
        }, 500);
      });
    }
  }
};
