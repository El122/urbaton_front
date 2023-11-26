<template >
    <div class="info-message" :class="{'active': status}" v-html="message">
    </div>
</template>
<script>
import { useSettingsStore } from '../../store/SettingStore'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        status() {
            return useSettingsStore().infoMessageStatus
        },
        message() {
            return useSettingsStore().infoMessage
        }

    },
}
</script>
<style lang="scss">
    .info-message
    {
        position: fixed;
        bottom: 4rem;
        left: 50%;
        transform: translateX(-50%);
        padding: 1.5rem 3rem;
        color: #FFF;
        background-color: #4c16ff;
        font-size: 1.8rem;
        border-radius: 10px;
        display: none;
    }
    .active
    {
        display: block;
    }
</style>