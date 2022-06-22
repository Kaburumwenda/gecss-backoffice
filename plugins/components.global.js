import Vue from 'vue'

import OuModal from '~/components/common/Modal.vue'
import OuButton from '~/components/common/Button.vue'
import DcTable from '~/components/common/Table.vue'
import Sbutton from '~/components/common/status_button.vue'
import EDropdown from '~/components/common/eDropdown.vue'
import Resetbtn from '~/components/common/reset_btn.vue'
import RowsFilter from '~/components/common/rowsFilter.vue'
import DcPagination from '~/components/common/pagination.vue'
import SbButton from '~/components/common/submit_button.vue'

const components = {
	OuModal, OuButton, DcTable, Sbutton, EDropdown, Resetbtn, RowsFilter, DcPagination, SbButton
};

Object.entries(components).forEach(([name, component]) => {
	Vue.component(name, component)
});
