export { default as BaseBackground } from '../../components/BaseBackground.vue'
export { default as BaseBlock } from '../../components/BaseBlock.vue'
export { default as BaseLayoutModifier } from '../../components/BaseLayoutModifier.vue'
export { default as BaseNavigation } from '../../components/BaseNavigation.vue'
export { default as BasePageHeading } from '../../components/BasePageHeading.vue'
export { default as TopNavigation } from '../../components/TopNavigation.vue'
export { default as ChartjsBar } from '../../components/Chartjs/Bar.vue'
export { default as ChartjsDoughnut } from '../../components/Chartjs/Doughnut.vue'
export { default as ChartjsLine } from '../../components/Chartjs/Line.vue'
export { default as ChartjsPie } from '../../components/Chartjs/Pie.vue'
export { default as ChartjsPolarArea } from '../../components/Chartjs/PolarArea.vue'
export { default as ChartjsRadar } from '../../components/Chartjs/Radar.vue'
export { default as CommonButton } from '../../components/common/Button.vue'
export { default as CommonModal } from '../../components/common/Modal.vue'
export { default as CommonTable } from '../../components/common/Table.vue'
export { default as CommonEDropdown } from '../../components/common/eDropdown.vue'
export { default as CommonPagination } from '../../components/common/pagination.vue'
export { default as CommonResetBtn } from '../../components/common/reset_btn.vue'
export { default as CommonRowsFilter } from '../../components/common/rowsFilter.vue'
export { default as CommonStatusButton } from '../../components/common/status_button.vue'
export { default as CommonSubmitButton } from '../../components/common/submit_button.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
