let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*@ventas.bots.gerixryu* ${pesan}`
let teks = `*GeriPium los invoca plantitas🌱💖*\n\n ${oi}\n\n *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `💤 @${mem.id.split('@')[0]}\n`}
teks += `*👑GeriPium*\n\n*<3*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|todas|todos|todes)$/i
handler.admin = true
handler.group = true
export default handler
