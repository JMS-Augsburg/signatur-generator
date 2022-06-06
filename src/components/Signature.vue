<script>
export default {
    props: {
        name: String,
        email: String,
        cell: String,
        position: String
    }
}
</script>

<template>

    <p>{{ name }} | {{ email }} | {{ cell }} | {{ position }} </p>

</template>
