<template>
    <div class="form-selects" :class="{'on': menuShowed}" ref="dropdown">
      <div class="form-selects__head" @click.stop="toggleMenu()">
        {{ selectedItem }}
      </div>
      <ul
        class="form-selects__dropdown"
        :class="{'show': menuShowed}"
        v-if="dropdownType === 'Object'"
        >
        <li
          class="selected"
          @click="selectItemObject(item.name, item[objectDropdownValue])"
          v-for="(item, index) in list"
          :key="index"
        >
            <span v-for="(name, index) in objectDropdownShow" :key="index">
                {{ item[name] + ' ' }}
            </span>
        </li>
      </ul>
      <ul class="form-selects__dropdown" :class="{'show': menuShowed}" v-else>
        <li
          class="selected"
          @click="selectItem(item)"
          v-for="(item, index) in list"
          :key="index"> {{ item }} </li>
      </ul>
    </div>
  </template>

<script>
import { onClickOutside } from '@vueuse/core';
import { ref, onMounted, watch } from 'vue';

export default {
    props: {
        modelValue: {
            type: null,
            required: true,
        },
        initialValue: String,
        list: {
            type: [Object, Array],
            required: true,
        },
        dropdownType: {
            type: String,
            default: 'Array',
        },
        objectDropdownValue: {
            type: String,
        },
        objectDropdownShow: {
            type: Array,
            default: ['name']
        },
    },
    emits: ['update:modelValue'],
    
    setup(props, { emit }) {
        const selectedItem = ref(props.initialValue || '');
        const menuShowed = ref(false);
        const dropdown = ref(null);
        
        const selectItem = (value) => {
            selectedItem.value = value;
            menuShowed.value = false;
            emit('update:modelValue', value);
        };
        
        const selectItemObject = (name, value) => {
            selectedItem.value = name;
            menuShowed.value = false;
            emit('update:modelValue', value);
        };

        const toggleMenu = () => {
            menuShowed.value = !menuShowed.value;
        }
        
        onMounted(() => {
            onClickOutside(dropdown, () => {
                if(menuShowed.value)
                menuShowed.value = false;
            });
            if (props.dropdownType) {
                if (props.dropdownType === 'Object' && props.objectDropdownValue) {
                    selectItemObject(props.list[0].name, props.list[0][props.objectDropdownValue]);
                }
            }
        });

        watch(() => props.initialValue, (newVal) => {
            selectedItem.value = newVal;
            if (props.dropdownType && props.list) {
                if (props.dropdownType === 'Array') {
                    selectItem(props.list[0]);
                } else if (props.dropdownType === 'Object' && props.objectDropdownValue) {
                    selectItemObject(props.list[0].name, props.list[0][props.objectDropdownValue]);
                }
            }
        });
        
        return {
            selectedItem,
            menuShowed,
            dropdown,
            selectItem,
            selectItemObject,
            toggleMenu,
        };
    },
};
</script>

<style lang="scss">
.form-selects
{
    position: relative;
    height: fit-content;
    cursor: pointer;
    width: 100%;
    &::before
    {
        content: '';
        position: absolute;
        top: 50%;
        right: 1.8rem;
        transform: translateY(-50%) rotate(180deg);
        display: block;
        width: 2.4rem;
        height: 2.4rem;
        background-image: url('../../assets/img/svg/chevron-down.svg');
        background-position: center;
        background-size: contain;
        z-index: 100;
        transition: .3s;
        pointer-events: none;
    }
    &__head
    {
        padding: 1.1rem 2.1rem;
        color: #677480;
        font-size: 2rem;
        border-radius: 10px;
        transition: .3s;
        border: 1px solid #677480;
        
    }
    &.on
    {
        .form-selects__head
        {
            box-shadow: 0px 0px 0px 3px rgba(132, 163, 196, 0.25);
        }
    }
    &__dropdown
    {
        margin-top: .8rem;
        padding: 4px;
        display:none;
        position: absolute;
        left: 0;
        max-height: calc(3.4rem * 6);
        overflow-y: scroll;
        width: 100%;
        background-color: #FFF;
        box-shadow: 0px 24px 48px 0px rgba(0, 0, 0, 0.06);
        transition: .3s;
        list-style: none;
        scrollbar-color: #3f3f3f transparen;
        scrollbar-width: thin;
        z-index: 900;
        &.show
        {
            display: block;
        }
        li
        {
            padding: 1rem 1.4rem;
            color: #677480;
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 1.4em;
            transition: .3s;
            cursor: pointer;
            &:hover
            {
                border-radius: 4px;
                background: rgba(142, 142, 169, 0.08);
            }
        }
    }
}
.form-selects.on::before
{
    transform: translateY(-50%) rotate(0deg);
}
@media (max-width: 991px) {
    .form-selects
    {
        &::before
        {
            width: 20px;
            height: 20px;
        }
        &__head
        {
            padding: 14px;
            font-size: 14px;
        }
        &__dropdown
        {
            margin-top: 8px;
            padding: 4px;
            li
            {
                padding: 10px 14px;
                font-size: 14px;
            }
        }
    }
}
@media (max-width: 576px) {
    .form-selects
    {
        width: 100%;
    }
}
</style>