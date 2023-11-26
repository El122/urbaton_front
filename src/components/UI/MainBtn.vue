<template>
<button :class="'btn ' + 'btn-' + className">
    <slot></slot>
</button>
</template>
<script>
export default {
    props: {
        className: {
            type: String,
            default: 'primary'
        }
    }
}
</script>
<style lang="scss">
</style>