<template>
    <div>
		<!-- <div  v-if="$store.state.isLoading" style="height:50vh; margin-top:20vh">
			<center> <DcSpinner/> </center>
		</div> -->
        <DcTable>
			 <template v-slot:theader>
				<th style="padding-left: 10px !important;">#</th>
				<th>Username</th>
                <th>Firstname</th>
                <th>Lastname</th>
				<th class="text-center">Active</th>
                <th class="text-center">Staff Status</th>
                <!-- <th>Date Joined</th> -->
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