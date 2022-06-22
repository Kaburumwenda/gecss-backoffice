<template>
   <div>
	   <div class="table-con">
		<table  id="myTable" class="table table-hover dmk-table dt-responsive nowrap">
			<thead>
				<tr id="dmk-td-headers">
					<slot name="theader"></slot>
				</tr>
			</thead>
			<tbody id="tbody">
				<slot name="tbody"></slot>
			</tbody>
		</table >
	</div>
   </div>
</template>

<script>
// import DcPagination from './dcpagination.vue'
// import RowsFilter from './rowsFilter.vue'
// import contentOverlay from '~/components/common/Overlay'
export default {
    name:'DcTable',
	// components:{ DcPagination, RowsFilter, contentOverlay },
	data(){
		return{
			contentOverlayActive: true,
		    progressActive: true,
		}
	},
 
	mounted(){
		this.initializeDatatable();
	},

	methods:{
		initializeDatatable(){
			$(document).ready( function () {
				$('#myTable').DataTable({
					responsive: true,
					searching: false, 
					paging: false, 
					info: false,
					"ordering": false,
					columnDefs: [
						// { responsivePriority: 3, targets: 1 },
						{ responsivePriority: 2, targets: -2 },
						{ responsivePriority: 1, targets: -1 },
					],

					}
				);
			} );


		}
	},

	props:{
		td_items:{
			type:Array,
			default:null
		},
		
	}
}
</script>

<style lang="scss">
#popover-button-variant{
	cursor: pointer;
}
.table-con{
	overflow-y: hidden;
	overflow-x: hidden;
}
#myTable{
	width: 100% !important;
}
.dmk-table{
	background:white;
	width: 100% !important;
	/* position: fixed; */
}
#dmk-td-con{
	/* overflow-y: auto;
	overflow-x: auto;
	height:76vh !important; */
	margin-bottom: 0px;
	padding-bottom: 0px;
}
#dmk-td-headers{
	background:#f2f2f2;
	opacity: 0.6;
	position: inherit;
}
#dmk-td-headers th{
	padding: 3px !important;
	font-family: 'Roboto', sans-serif;
}
#dmk-td-items td{
	padding: 3px !important;
	font-size: 14px;
	font-family: 'Roboto', sans-serif;
}

button:focus{
	/* outline: 0 !important; */
	outline-color: transparent;
}
button:active {
    /* outline: 0;
    border: none; */
	outline-color: transparent;
}
.dmk-td-spinner{
	position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.dmk-reset-btn{
	height: 30px;
	border: none;
	color: orange;
}
#status-btn{
	border-radius: 0px !important;
	padding: 0px 2px 0px 2px !important;
	font-size: 12px !important;
	width: 70px !important;
}
#tbody td{
	max-width: 400px !important;
}
</style>