<template>
    <VideoPlayer :channelList="channelList"/>
</template>

<script>
    import VideoPlayer from '../components/utils/videoPlayer';

    export default {
        components: {
            VideoPlayer
        },
        data() {
            return {
                channelList: []
            };
        },
        mounted() {
            this.getChannel();
        },
        methods: {
            getChannel() {
                this._services.getChannelLogic({
                    type: 'get',
                    nodeType: 2
                }).then((res) => {
                    if (parseInt(res.code, 10) !== 0) {
                        this.tools.message(res.message);
                    }
                    res.data.map(i => {
                        i.disabled = i.status === 'stopped';
                    });
                    console.log(res.data);
                    this.channelList = res.data;
                });
            }
        }

    };
</script>

<style scoped>

</style>
