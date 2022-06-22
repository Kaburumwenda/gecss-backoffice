<template>
    <div>
        <div class="dmk-rows-counts">
        <form @submit.prevent="rowsPerPage()" method="get" name="rowsperpageForm">
            <div class="dmk-selectt">
                <span style="font-size:13px; margin-right:0px"> </span>
                <slot>
                    <b-form-select  v-on:change="rowsPerPage()" id="rowsperPage" plain>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </b-form-select>
                    <!-- <select v-on:change="rowsPerPage()" id="rowsperPage" style="text-align:center;">									
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select> -->
                </slot>
            </div>							
        </form>
    </div>
    </div>
</template>
<script>
export default {
    name:'RowsFilter',
    props:{
        rowsPerPage:{
            type:Function,
            default:null,
        }
    }
}
</script>