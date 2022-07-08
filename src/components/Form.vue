<script>
export default {
    props: {
        privateFormData: Object,
    },
    emits: ['change'],
    data() {
        return {
            positions: [
                'Ressort Öffentlichkeitsarbeit',
                'Ressort Unternehmenskontakte',
                'Ressort Netzwerk',
                'Stabsstelle Eventmanagement',
                'Stabsstelle IT',
                'Ressort Qualitätsmanagement',
                'Ressort Finanzen & Recht',
            ],
        };
    },
    methods: {
        emitChange() {
            console.log('change emitted: %o', this.privateFormData)
            this.$emit('change', this.privateFormData)
        }
    }
}
</script>

<template>
        <table>
            <tr>
                <td><label>Vollständiger Name</label></td>
                <td><input v-model="privateFormData.name" @change="emitChange" /></td>
            </tr>
            <tr>
                <td><label>E-Mail-Adresse (Verein)</label></td>
                <td><input v-model="privateFormData.email" @change="emitChange" /></td>
            </tr>
            <tr>
                <td><label>Telefonnummer</label></td>
                <td><input v-model="privateFormData.cell" @change="emitChange" /></td>
            </tr>
            <tr>
                <td><label>Position (Ressort/Stabsstelle/...)</label></td>
                <!-- <td><input v-model="privateFormData.position" @change="emitChange" /></td> -->
                <td>
                    <select v-model="privateFormData.position" @change="emitChange">
                        <option disabled value="">Bitte wählen</option>
                        <option v-for="position in positions" :value="position">{{ position }}</option>
                    </select>
                </td>
            </tr>
        </table>
</template>

<style scoped>

div.form {
    display: flex;
    justify-content: space-around;
}

input, select {
    min-width: 50vh;
    border: 1px solid #AAA;
    border-radius: 10px;
    padding: 5px 15px;
}

select {
    background-color: #BBFFDD;
}

tr>td:first-child {
    padding: 0.5rem 5rem 0.5rem 0;
}

</style>