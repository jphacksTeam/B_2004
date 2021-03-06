// import DomProcess from './DomProcess.js'

import DomProcess from './DomProcess'
import ScriptProcess from './ScriptProcess'
export default function (text) {
  const templateLength = '<template>'.length
  const scriptLength = '<script>'.length
  const styleLength = '<style scoped>'.length
  const templates = text.substr(text.indexOf('<template>') + templateLength, text.indexOf('</template>') - templateLength)
  const script = text.substr(text.indexOf('<script>') + scriptLength, text.indexOf('</script>') - scriptLength)
  const style = text.substr(text.indexOf('<style scoped>') + styleLength, text.indexOf('</style>') - styleLength)
  // let domTree = DomProcess(templates)
  // let scriptTree = ScriptProcess(templates)
}
