<script>
export default {
    props: {
        name: String,
        email: String,
        cell: String,
        role: String,
        position: String
    },
    styles: [
        `:host {
            all: initial;
            display: block;
            font-family: Tahoma, sans-serif;
            font-size: 9pt;
        }

        p {
            margin-block: 1em;
            padding-inline-end: 1rem;
        }

        hr {
            max-width: 20rem;
            margin: 0.5rem 0;
        }

        .name {
            font-size: 11pt;
            margin-bottom: 1rem;
        }`
    ],
    expose: ['select'],
    methods: {
        select() {
            const range = new Range();
            range.selectNodeContents(this.$refs.container);

            const selection = document.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        },
    },
}


</script>

<template>
    <div ref="container" @click="select">
        <p class="name">
            <!--
            Signature delimiter following RFC 3673
            https://datatracker.ietf.org/doc/html/rfc3676#section-4.3
            -->
            --&nbsp;<br>

            <strong>{{ name }}</strong>
        </p>

        <p v-if="position || role">
            <template v-if="position">{{ position }}</template>
            <br v-if="position && role">
            <template v-if="role">{{ role }}</template>
            <br>
        </p>

        <hr>

        <p>
            <template v-if="cell">
                Mobil: <a :href="'tel:' + cell.replace(/\s/g, '')">{{ cell }}</a>
                <br>
            </template>

            <template v-if="email">
                E-Mail: <a :href="'mailto:' + email">{{ email }}</a>
                <br>
            </template>

            JMS Augsburg e. V. Studentische Unternehmensberatung
        </p>
    </div>
</template>
