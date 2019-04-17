<template>
    <div
        class="ilv-button"
        @click="handleClick"
    >
        <slot>{{ t('ui.button.ok') }}</slot>
    </div>
</template>

<script>
import localeMixin from '@sdx/utils/src/mixins/locale';
export default {
    name: 'IlvButton',
    mixins: [localeMixin],
    data() {
        return {};
    },
    methods: {
        handleClick() {
            this.$emit('click');
        }
    }
};
</script>
