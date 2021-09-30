export default {
    methods: {
        getSrc(name) {
            const path = `../assets/${name}`;
            const modules = import.meta.globEager("../assets/*");
            return modules[path].default;
        }
    }
};