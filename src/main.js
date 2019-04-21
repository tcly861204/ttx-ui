import Button from './components/button';
const components = {
  Button
};

const ttx = {
    ...components
};

const install = function(Vue, opts = {}) {
    if (install.installed) return;
    Object.keys(ttx).forEach(key => {
        Vue.component(key, ttx[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    ...components
};


// module.exports.default = module.exports = API;   // eslint-disable-line no-undef

export default API