<script>
export default {
    data() {
        return {
            privateFormData: {
                name: ''
            }
        }
    },
    emits: ['change'],
    methods: {
        emitChange() {
            console.log('change emitted: %o', this.privateFormData)
            this.$emit('change', this.privateFormData)
        }
    }
}
</script>

<template>
    <div>
        <label>Name:</label>
        <input v-model="privateFormData.name" @change="emitChange" />
    </div>
    <div>
        <label>Email:</label>
        <input v-model="privateFormData.email" @change="emitChange" />
    </div>
    <div>
        <label>Cell:</label>
        <input v-model="privateFormData.cell" @change="emitChange" />
    </div>
    <div>
        <label>Position:</label>
        <input v-model="privateFormData.position" @change="emitChange" />
    </div>
</template>
