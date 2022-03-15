<template>
  <div class="auto">
    <read-card></read-card>
    <init-card></init-card>
    <sell-gas></sell-gas>
  </div>
</template>

<script>
import ReadCard from '../../src/components/CardServer/ReadCard'
import SellGas from '../../src/components/CardServer/SellGas'
import InitCard from '../../src/components/CardServer/InitCard'
export default {
  data () {
    return {
      // test: '',
      // test2:'',
      // t: 2
    }
  },
  components: { ReadCard, SellGas, InitCard }
}
</script>
