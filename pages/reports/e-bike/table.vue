<template>
    <div>
		<!-- <div  v-if="$store.state.isLoading" style="height:50vh; margin-top:20vh">
			<center> <DcSpinner/> </center>
		</div> -->
        <DcTable>
			 <template v-slot:theader>
				<th style="padding-left: 10px !important;">#</th>
				<th>Bike</th>
                <th>Swaps</th>
                <th>Units(kw)</th>
                <th>Mileage(KM)</th>
                <th>GHG (kg) Avoided</th>
                <th class="text-center">Status</th>
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