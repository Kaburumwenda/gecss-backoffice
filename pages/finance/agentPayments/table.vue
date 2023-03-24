<template>
    <div>
		<!-- <div  v-if="$store.state.isLoading" style="height:50vh; margin-top:20vh">
			<center> <DcSpinner/> </center>
		</div> -->
        <DcTable>
			 <template v-slot:theader>
				<th style="padding-left: 10px !important;">#</th>
				<th>Agent Acc</th>
                <th>Amount (Ksh)</th>
				<th class="text-center">From</th>
				<th class="text-center">to</th>
                <th class="text-center">Date</th>
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