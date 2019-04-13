import { t } from '../locale';
export default {
    methods: {
        t(key) {
            return t.call(this, key);
        }
    }
};
