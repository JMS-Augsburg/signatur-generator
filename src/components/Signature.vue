<script>
export default {
    props: {
        name: String,
        email: String,
        cell: String,
        position: String
    },
    data() {
        return {
            mobile: false,
            icons: [
                {
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAMAAAArU9sbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcUExURQAAAAAAAFWqAGbMM222JICfIIDMM4C1QIq/NYW4M4CxMYC2QICzM4C3OIO2OoC2N4C4PYC4PYS5PoK0O4O3PIG6PIG4OoK6PYS4PYK2PoK5O4K6P4S4PYS4PYS4PoG6PYO5PoO3PYS5PYO5PXyvO32vO4O5Pn6xPIO4Pn+yPIO5Pn+zPYO4PYS4PYS4PoO4PoS5P4K3P4O4PoS5P8Y20oQAAAAzdFJOUwABAwUHCAoYGBkaHB4gIyoyNjo9QFFTaGx0dHqJl5eeqrW10vHx8vT09fb3+Pn7/f3+/od+RwIAAAAJcEhZcwAAIdUAACHVAQSctJ0AAAGBSURBVFhH7ZjHbsMwEAWZHqf33uP05vL//xbu40imgCBYmT74oLmI73E5MqSLoRBZG5ewaYoQhsRpGc5CIs0GyxJ6gUUZc2z5fn5n1YqGRS8+hBHRT25BEsIBhZvMgsI4o/IysSBI0Hmp50ecT+zSOqktJ5wHWif1OKcraJ3M2HLOcaB1Uo83n+4RrZPJTRcQCDov2TwC457KS35XFCFcUbhp/PZDORZJLWj7BP5mXi16KsZnyqfE6kldEkN4SEVNZmHCUH4kGDEusUxsa6TiH8sxwWjsJjQDXgvXHA0lnJY/0ZQosVxrzCixTM4WWb40Fymy1IfbWHb2WdRoLuK3qBtfkBKpa2FRFbkhi1dKr0WNoBC3Vcc1wo6hnFtW1Ig7KmOVzmlRAVSiqrhG2DCUO0uCDUO5syTYMJQ7S4INQ7mzJNgwlDtLgg1DOftPv6UClikje1T5XV76iSfyD7n/RgHVXP+DomGZnrmy9FiUsB7CgOX0DOx1lX7GkaT8u1QIv4v3g/AWiptpAAAAAElFTkSuQmCCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                    alt: "BDSU LinkedIn",
                    link: "https://www.linkedin.com/company/bdsu-ev/mycompany/"
                },
                {
                    src: "data:image/png;base64,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",
                    alt: "BDSU Instagram",
                    link: "https://www.instagram.com/bdsu_e.v/?hl=de"
                },
                {
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAMAAAArDjJDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG/UExURQAAAICAAFWqAG22JICzM4u5LmqqK222N4C2N4CvMIC/QIe0LYa2PYC5OoWxN4C1NYC1QIW4PYC6O3uzOYSzOYS9OYCtN4C2N4S9Qny5NoOyPoW9PYS4PYK5PIC7O4S2O4S5OYC3PIS3PIS7PIK4O4a8O4K2OYK2PYC3PIO3PIG4O4O5PoW6PYO4PIO2OoO2PoG3OYC4PH62O4G5O4C6PoO3PoO6O4G4OoW4PYO5PIS5PIG4PYO3O4G4OoG5PoC3PYK3QIK8PYW5PYS6P4S4P4K4PoG4PIO4P4O5PoK4PYO4PIW4PoG3PYO4PoW4PIK3PoO5P4K5PoO5PoO3PYW6PIC0PoS4PYO5PIS4PYK3PoK3P4O5PYK5PYS4PIK3PoS3PoS5PIO3PoK5PYO5PYO4PoG3PoO3PIO3PoO4PYO6PYO5PoO4PYO4PoO4PYO3P4S5PYS5P4K6PoS3PoS1O4K4PYK4PYK3PYS5PYO3PoO4PoO4PYS4PoK3PYK4PoO4PYO3PYO4PoK4PoO4PoO5PoO4PYO4PoS4PoS5PoO3PYO3PoO4PoO4PoO4PoO5PoS4PoO4P4O4PYO5PoO4PoO4P4S5PzRu2WIAAACUdFJOUwACAwcKCwwODhAQERUWFxgYGRobGxscHB8hITI2Nzg4Ojw8PD09Pz9AQEFCQ0RGRkdISUlKSkpLS0xNT1JTV1hYWFhZXV5hYWNkb3N1d3d4eYOEjpSdoqWmsrK1t7i5vL7ExsbIycnJysrNzs/R0tLS1dvf4ePn5+nq6+vs7O/w8PLy8vPz8/P09PT19/j5+vz8/v5JEFSWAAAACXBIWXMAACHVAAAh1QEEnLSdAAAC1klEQVRYR63Y9VsUURTG8UGxOxBbEcTu7sTuLtR1DVTsbkWxC5w/2BvfmZ24M3Pv6OcX7j3nPedZFh501svXUvVD1fkU3W1iRcx2mg6aGDVYRMTOTaYy3CFWrIOJHB1E8y0hXWAN8RwkLTCQpZGYlQaGjM4RstTOmMF7ItY+MZhC3wmjCTQdMRzzgZ6jL4xHtNNydp4FoQYaJYxlRYByKawAxZJYoiyjVtIq1kiUSmONYPFXJd81Fv37i6q9rE7uNe/WDqZXM2I/TZNOQlyV7rkUM0z7TDBBd2dy8/27ulCkjXjUDNXh4vsv1dXKPEZqVJlz/DetGEMBWdrG2XWV511gTtksChwFHXBxg0lJXDkJi3Vfm7j+1Fvqvv/6xIqh1BMICLGLP04265ZzMzjYRyZi6MhVczhpP/iarfcAO0DZ91u9S5xc7GaNdJ+aX4l+fw6esyj2ZvHV2R+9qZ6rYF7Vc32ITkZc7KEZEsUJHKX0qkN1etRk2GNCJslVOxnKdoxkSnIV+Xw/CcclVj0hXOQR+ahSr0oiH5EsjdfB/qdfUUD3mb66E9pBJ5Ta/mvXWU4G61ijUAt5kccFKwtZlFpV8WZzsvfdvKrV9P4VeiM3veASSC8PPN07pV5OCP0mH/lNNdCV/rdTBDlF7NMbkqY/o28mEls4BgboQbN7hNI2yjbngBrJ0UsuQfU4B1Qtz0CCcarVzAWqJkw6erlLFb5VD4+mhq2qHtOkO9wCswad5BTzsFGnpeQPNHwB6R9sluFMPOAeCv5TlPWrZXJcDaTeelWVrlKwssfzbnMMXWGRQKU01khLKZW0kjUKtZJYAoqlsCIwinIJY1gRcnxsrjE8QH+k5egr4zH0HDGcQNMJoynOHw50M2jw/z6y8LyRhKwkH5qTiFlgIIflh06rieezeGitPZYWKfiA7hYxO1OZMmgm4mADozFtNN21VFghVBZQNPK8v4ZG14bmfxubAAAAAElFTkSuQmCCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                    alt: "BDSU Spotify",
                    link: "https://open.spotify.com/show/51LGwGywHqK0cn2SJ8v8U5?si=YfC0fXMiSVmtzvwqs6gkWw"
                },
            ]
        }
    },
    styles: [
        `:host {
            all: initial;
            display: block;
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

    <div style="font-size: 9pt;" ref="container" @click="select">
        <p style="font-size: 11pt; font-weight: 600;">{{name}}</p>
        <p>{{position}}</p>
        <p>Bundesverband Deutscher Studentischer Unternehmensberatungen (BDSU) e.V.</p>
        <table style="font-size: 9pt" cellspacing="0" cellpadding="0">
            <tr>
                <td style="width: 125px; padding: 0; border: 0">Telefon:</td>
                <td>{{cell}}</td>
            </tr>
            <tr>
                <td>Mail:</td>
                <td><a :href="'mailto:' + email" style="color: inherit;">{{email}}</a></td>
            </tr>
            <tr>
                <td>Website:</td>
                <td><a href="https://bdsu.de" target="_blank" style="color: inherit;">www.bdsu.de</a></td>
            </tr>
            <tr>
                <td>
                    <div style="width: 100%; padding: 3px 12px;">
                    <img alt="BDSU Logo" style="width: 100%;" src="data:image/png;base64,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" />
                    </div>
                </td>
                <td>
                    <p style="font-weight: 600;">We are Junior Entrepreneurs</p>
                    <div style="display: flex; flex-direction: row;">
                        <a v-for="icon of icons" :href="icon.link" target="_blank">
                            <img
                                style="padding: 2px; max-width: 42px;"
                                :alt="icon.alt" :src="icon.src"
                            />
                        </a>
                    </div>
                </td>
            </tr>
        </table>
    </div>

</template>
