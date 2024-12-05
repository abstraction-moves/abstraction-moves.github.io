let cmd = 'node my-program.js -a today'
let cmd_split = cmd.split(' ')
cmd_split[0] = `/usr/local/bin/${cmd_split[0]}`
