<script>
export default {
    props: {
        privateFormData: Object,
    },
    emits: ['change'],
    data() {
        return {
            roles: [
                'Junior Consultant',
                'Consultant',
                'Expert Consultant',
                'Senior Consultant',
            ],
            positions: {
                Mitglied: '',
                Vorstand: 'Vorstand für',
                Beirat: 'Beirat',
                Mentor: 'Mentor',
                Teamleitung: 'Head of',
                'KC-Leitung': 'KC-Leitung',
            },
            departments: {
                Allgemein: '',
                Ressorts: {
                    ÖA: 'Öffentlichkeitsarbeit',
                    KuKo: 'Kundenkontakte',
                    HR: 'Human Resources',
                    'F&C': 'Finanzen und Controlling',
                    'QWM': 'Qualitäts- und Wissensmanagement',
                },
                Teams: {
                    'Public Marketing': 'Public Marketing',
                    Sales: 'Sales',
                    HRO: 'Human Resource Organization',
                    IT: 'IT',
                    'R&D': 'Research & Development',
                    Finance: 'Finance',
                    Legal: 'Legal',
                    QMC: 'Quality Management & Controlling',
                },
                KCs: {
                    'Process Management': 'Process Management',
                    Strategy: 'Strategy',
                    'Tech&BI': 'Technology & BI',
                },
            },
            position: '',
            department: '',
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
            this.privateFormData.position = [this.position, this.department].join(' ').trim()
            console.log('change emitted: %o', this.privateFormData)
            this.$emit('change', this.privateFormData)
        }
    }
}
</script>

<template>
    <form action="#" ref="form" @submit.prevent="validate">
        <label for="name-input">Vollständiger Name</label>
        <div class="form-control">
            <input id="name-input" name="name" v-validate v-model.trim="privateFormData.name" @change="emitChange" required placeholder="Max Mustermann"/>
            <span class="error" v-if="errors.name">{{ errors.name }}</span>
        </div>

        <label for="email-input">E-Mail-Adresse (Verein)</label>
        <div class="form-control">
            <input id="email-input" name="email" v-validate v-model.trim="privateFormData.email" @change="emitChange" type="email" required placeholder="max.mustermann@jms-augsburg.de"/>
            <span class="error" v-if="errors.email">{{ errors.email }}</span>
        </div>

        <label for="phone-input">Telefonnummer</label>
        <div class="form-control">
            <input id="phone-input" name="phone" v-validate v-model.trim="privateFormData.cell" @change="emitChange" type="tel" placeholder="+49 151 1234567890" pattern="^\+[ 0-9]+$" title="Handynummer inkl. internationaler Vorwahl"/>
            <span class="error" v-if="errors.phone">
                Handynummer inkl. internationaler Vorwahl, Format: +49 151 1234567890
            </span>
        </div>

        <label for="position-input">Position</label>
        <div class="form-control d-flex">
            <select id="position-input" v-model.trim="position" @change="emitChange">
                <option v-for="(value, position) in positions" :value="value">{{ position }}</option>
            </select>

            <select v-model.trim="department" @change="emitChange">
                <template v-for="(group, groupName) in departments" >
                    <optgroup v-if="typeof group === 'object'" :label="groupName">
                        <option v-for="(value, department) in group" :value="value">{{ department }}</option>
                    </optgroup>
                    <option v-else :value="group">{{ groupName }}</option>
                </template>
            </select>
        </div>

        <label for="role-input">Karrierestufe</label>
        <div class="form-control">
            <select id="role-input" v-model.trim="privateFormData.role" @change="emitChange">
                <option disabled value="">Bitte wählen</option>
                <option v-for="role in roles" :value="role">{{ role }}</option>
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

.d-flex {
    display: flex;
    gap: 0.5rem;
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
