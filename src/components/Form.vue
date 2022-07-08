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
        <label>Vollständiger Name</label>
        <div class="form-control">
            <input name="name" v-validate v-model.trim="privateFormData.name" @change="emitChange" required placeholder="Max Mustermann"/>
            <span class="error" v-if="errors.name">{{ errors.name }}</span>
        </div>

        <label>E-Mail-Adresse (Verein)</label>
        <div class="form-control">
            <input name="email" v-validate v-model.trim="privateFormData.email" @change="emitChange" type="email" required placeholder="max.mustermann@bdsu.de"/>
            <span class="error" v-if="errors.email">{{ errors.email }}</span>
        </div>

        <label>Telefonnummer</label>
        <div class="form-control">
            <input name="phone" v-validate v-model.trim="privateFormData.cell" @change="emitChange" type="tel" placeholder="+49 151 1234567890" pattern="^\+[ 0-9]+$" title="Handynummer inkl. internationaler Vorwahl"/>
            <span class="error" v-if="errors.phone">
                Handynummer inkl. internationaler Vorwahl, Format: +49 151 1234567890
            </span>
        </div>

        <label>Position (Ressort/Stabsstelle/...)</label>
        <div class="form-control">
            <select v-model.trim="privateFormData.position" @change="emitChange">
                <option disabled value="">Bitte wählen</option>
                <option v-for="position in positions" :value="position">{{ position }}</option>
            </select>
        </div>
    </form>
</template>

<style scoped>

form {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
}

@media (max-width: 700px) {
    form {
        grid-template-columns: 1fr;
        gap: 0.25rem;
    }

    .form-control {
        margin-bottom: 0.5rem;
    }
}

input, select {
    width: 100%;
    border: 1px solid #AAA;
    border-radius: 10px;
    padding: 5px 15px;
}

select {
    background-color: #BBFFDD;
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
