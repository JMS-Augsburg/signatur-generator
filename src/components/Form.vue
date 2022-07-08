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
            errors: {},
        };
    },
    directives: {
        validate(el, binding) {
            el.addEventListener('blur', () => {
                binding.instance.errors[el.name] = el.validationMessage
            })
        },
    },
    methods: {
        validate() {
            Array.from(this.$refs.form.elements).forEach(input => {
                this.errors[input.name] = input.validationMessage
            })
            return this.$refs.form.reportValidity()
        },
        emitChange() {
            console.log('change emitted: %o', this.privateFormData)
            this.$emit('change', this.privateFormData)
        }
    }
}
</script>

<template>
    <form action="#" ref="form" @submit.prevent="validate">
        <table>
            <tr>
                <td><label>Vollständiger Name</label></td>
                <td>
                    <input name="name" v-validate v-model="privateFormData.name" @change="emitChange" required placeholder="Max Mustermann"/>
                    <span class="error" v-if="errors.name">{{ errors.name }}</span>
                </td>
            </tr>
            <tr>
                <td><label>E-Mail-Adresse (Verein)</label></td>
                <td>
                    <input name="email" v-validate v-model="privateFormData.email" @change="emitChange" type="email" required placeholder="max.mustermann@bdsu.de"/>
                    <span class="error" v-if="errors.email">{{ errors.email }}</span>
                </td>
            </tr>
            <tr>
                <td><label>Telefonnummer</label></td>
                <td>
                    <input name="phone" v-validate v-model="privateFormData.cell" @change="emitChange" type="tel" placeholder="+49 151 1234567890" pattern="^\+[ 0-9]+$" title="Handynummer inkl. internationaler Vorwahl"/>
                    <span class="error" v-if="errors.phone">
                        Handynummer inkl. internationaler Vorwahl, Format: +49 151 1234567890
                    </span>
                </td>
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
    </form>
</template>

<style scoped>

form {
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

input:invalid, select:invalid {
    border: 0.05rem red solid;
}

.error {
    display: block;
    color: red;
    margin: 0.25rem;
}

</style>
