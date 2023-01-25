<template>
    <div class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <div class="sidebar-icon group">
            <font-awesome-icon icon="fa-solid fa-fire-flame-curved" />
            <span class="sidebar-tooltip group-hover:scale-100">
                Tooltip <font-awesome-icon icon="fa-solid fa-lightbulb" />
            </span>
        </div>
        <div class="sidebar-icon group">
            <font-awesome-icon icon="fa-solid fa-plus" />
            <span class="sidebar-tooltip group-hover:scale-100">
                Tooltip <font-awesome-icon icon="fa-solid fa-lightbulb" />
            </span>
        </div>
        <div class="sidebar-icon group">
            <font-awesome-icon icon="fa-solid fa-bolt-lightning" />
            <span class="sidebar-tooltip group-hover:scale-100">
                Tooltip <font-awesome-icon icon="fa-solid fa-lightbulb" />
            </span>
        </div>
        <div class="sidebar-icon group">
            <font-awesome-icon icon="fa-solid fa-poo" />
            <span class="sidebar-tooltip group-hover:scale-100">
                Tooltip <font-awesome-icon icon="fa-solid fa-lightbulb" />
            </span>
        </div>        
    </div>
</template>

<script>
    export default {
        name: 'SideBar',
    }
</script>

<style lang="scss" scoped>

</style>