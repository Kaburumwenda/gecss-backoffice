<template>
    <div>
		<!-- <div  v-if="$store.state.isLoading" style="height:50vh; margin-top:20vh">
			<center> <DcSpinner/> </center>
		</div> -->
        <DcTable>
			 <template v-slot:theader>
				<th style="padding-left: 10px !important;">#</th>
				<th>Mem No.</th>
                <th>Name</th>
                <th>ID</th>
                <th>Phone</th>
                <th>Sex</th>
                <th>Amount</th>
                <th>Balance</th>
				<th class="text-center">Action</th>
			</template>
			<template v-slot:tbody>
				<tr v-if="!records.length">
                    <td></td><td></td>
                    <td><span style="color:purple"> No records available </span></td>
                    <td></td> <td></td>
		    	</tr>
                <slot></slot>

		</template>
	</DcTable>
    </div>
</template>

<script>
export default {
    name:'RecordTable',
    props:{
        records:{
            type:Array,
            default:[]
        }
    }
}
</script>