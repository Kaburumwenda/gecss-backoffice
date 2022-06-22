<template>
    <div>
        	<!-- Pagination start -->
	<div class="dmk-pagenation-con">

		<!-- MOBILE PAGINATION START -->
		<div class="mobile-pagination-con1">
			<div class="mobile-pg-items-con">
				<div>
					<span>Showing </span> 
					<span> <strong>{{ fromCount }}</strong></span>
					<span> - </span>
					<span> <strong>{{  toCount }}</strong> </span>
					<span> <span v-if="rows < 1000"> of <strong>{{ rows }}</strong> </span> <span v-else> of many</span> </span>
				</div>
				<div class="mobile-pg-subitems-con">
					<div> 
						<b-button v-if="currentPage > 1" @click.prevent="previousPage" variant="link" > <i class="fa fa-chevron-left" aria-hidden="true"></i> </b-button> 
						<b-button v-else disabled variant="link" > <i class="fa fa-chevron-left" aria-hidden="true"></i> </b-button> 
					</div>
					<div>| <span> {{ currentPage }} </span>/ <span>{{ totalPages }}</span> |</div>
					<div> 
						<b-button v-if="countOnPage >= rowperPage" @click.prevent="nextPage" variant="link" ><i class="fa fa-chevron-right" aria-hidden="true"></i></b-button> 
						<b-button v-else disabled variant="link" ><i class="fa fa-chevron-right" aria-hidden="true"></i></b-button> 
					</div>
				</div>
			</div>
		</div>
		<!-- MOBILE PAGINATION end -->
	
	</div>
	<!-- pagination end -->
	<!-- MOBILE PAGINATION START -->
	<div class="mobile-pagination-con">
		<div class="mobile-pg-items-con">
			<div>
				<span>Showing </span> 
				<span> <strong>{{ countOnPage }}</strong></span>
				<span>record of</span>
				<span> <strong>{{ rows }}</strong> </span>
			</div>
			<div class="mobile-pg-subitems-con">
				<div> 
					<b-button v-if="currentPage > 1" @click.prevent="previousPage" variant="link" > <i class="fa fa-chevron-left" aria-hidden="true"></i> </b-button> 
					<b-button v-else disabled variant="link" > <i class="fa fa-chevron-left" aria-hidden="true"></i> </b-button> 
				</div>
			    <div>| <span> {{ currentPage }} </span>/ <span>{{ totalPages }}</span> |</div>
		  	    <div> 
					<b-button v-if="countOnPage >= rowperPage" @click.prevent="nextPage" variant="link" ><i class="fa fa-chevron-right" aria-hidden="true"></i></b-button> 
					<b-button v-else disabled variant="link" ><i class="fa fa-chevron-right" aria-hidden="true"></i></b-button> 
				</div>
			</div>
		</div>
	</div>
	<!-- MOBILE PAGINATION end -->
    </div>
</template>

<script>
export default {
    name:'DcPagination',
    props:{
        countOnPage:{
            type:Number,
            default:null
        },
        pageValue:{
            type:Number,
            default:null
        },
        rows:{
            type:Number,
            default:null
        },
        fromCount:{
            type:Number,
            default:null
        },
        toCount:{
            type:Number,
            default:null
        },
        rowperPage:{
            type:Number,
            default:null
        }, 
        totalPages:{
            type:Number,
            default:null
        },
        currentPage:{
            type:Number,
            default:null
        },
        previousPage:{
            type:Function,
            default:null
        },
        nextPage:{
            type:Function,
            default:null
        },
        searchPageNo:{
            type:Function,
            default:null
        },
    }
}
</script>