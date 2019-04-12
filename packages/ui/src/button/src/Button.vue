<template>
    <div
        class="ilv-button"
        @click="handleClick"
    >
        <slot />
    </div>
</template>

<script>
export default {
    name: 'IlvButton',
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
