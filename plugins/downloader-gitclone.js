import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `*╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *@clan.yakuza.yk_* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ola, Usuario⁩*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Owner:* Sutra
║➤ *Numero:* wa.me/56981550698
║➤ *Bot ofc:* wa.me/56981550698
║➤ *Yape:* 933 348 947
║➤ *Fecha:* Nose
║➤ *Tiempo activo:* 24/7
║➤ *Usuarios:* 1000
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔻𝔼𝕃 𝕌𝕊𝕌𝔸ℝ𝕀𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *🎖️ Nivel:* 0
┣ *🧰 Experiencia:* 0
┣ *⚓ Rango:* Novato
┣ *💎 Diamantes:* 20
┣ *👾 GeriCoins:* 500
┣ *🪙 Tokens:* 2
┣ *🎟️ Premium:* ❌
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕆𝕋 𝕆𝔽ℂ 𝕆 𝕊𝕌𝔹 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *Este es el Bot oficial*
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💟 _.terminosycondiciones_
┣ ඬ⃟ 💟 _.grupos_
┣ ඬ⃟ 💟 _.estado_
┣ ඬ⃟ 💟 _.infobot_
┣ ඬ⃟ 💟 _.speedtest_
┣ ඬ⃟ 💟 _.donar_
┣ ඬ⃟ 💟 _.grouplist_
┣ ඬ⃟ 💟 _.owner_
┣ ඬ⃟ 💟 _.script_
┣ ඬ⃟ 💟 _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕌ℕ𝔼 𝕌ℕ 𝔹𝕆𝕋 𝔸 𝕋𝕌 𝔾ℝ𝕌ℙ𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 _.join *<enlace / link / url>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝔼ℝ𝔹𝕆𝕋 - 𝕁𝔸𝔻𝕀𝔹𝕆𝕋 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🤖 _.serbot_
┣ ඬ⃟ 🤖 _.stop_
┣ ඬ⃟ 🤖 _.bots_
┗━━━━━━━━━━━━━━━━┛  

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕁𝕌𝔼𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🎖️ _.mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣ ඬ⃟ 🎖️ _.ppt *<papel / tijera /piedra>*_
┣ ඬ⃟ 🎖️ _.prostituto *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _.prostituta *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _.gay2 *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _.lesbiana *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _.pajero *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _.pajera *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _.puto *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _.puta *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _.manco *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _.manca *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _.rata *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _.love *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _.doxear *<nombre / @tag>*_
┣ ඬ⃟ 🎖️ _.pregunta *<texto>*_
┣ ඬ⃟ 🎖️ _.suitpvp *<@tag>*_
┣ ඬ⃟ 🎖️ _.slot *<apuesta>*_
┣ ඬ⃟ 🎖️ _.ttt *<nombre sala>*_
┣ ඬ⃟ 🎖️ _.delttt_
┣ ඬ⃟ 🎖️ _.acertijo_
┣ ඬ⃟ 🎖️ _.simi *<texto>*_
┣ ඬ⃟ 🎖️ _.top *<texto>*_
┣ ඬ⃟ 🎖️ _.topgays_
┣ ඬ⃟ 🎖️ _.topotakus_
┣ ඬ⃟ 🎖️ _.formarpareja_
┣ ඬ⃟ 🎖️ _.verdad_
┣ ඬ⃟ 🎖️ _.reto_
┣ ඬ⃟ 🎖️ _.cancion_
┣ ඬ⃟ 🎖️ _.pista_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ ☑️ _.enable *welcome*_
┣ ඬ⃟ ☑️ _.disable *welcome*_
┣ ඬ⃟ ☑️ _.enable *modohorny*_
┣ ඬ⃟ ☑️ _.disable *modohorny*_
┣ ඬ⃟ ☑️ _.enable *antilink*_
┣ ඬ⃟ ☑️ _.disable *antilink*_
┣ ඬ⃟ ☑️ _.enable *antilink2*_
┣ ඬ⃟ ☑️ _.disable *antilink2*_
┣ ඬ⃟ ☑️ _.enable *detect*_
┣ ඬ⃟ ☑️ _.disable *detect*_
┣ ඬ⃟ ☑️ _.enable *audios*_
┣ ඬ⃟ ☑️ _.disable *audios*_
┣ ඬ⃟ ☑️ _.enable *autosticker*_
┣ ඬ⃟ ☑️ _.disable *autosticker*_
┣ ඬ⃟ ☑️ _.enable *antiviewonce*_
┣ ඬ⃟ ☑️ _.disable *antiviewonce*_
┣ ඬ⃟ ☑️ _.enable *antitoxic*_
┣ ඬ⃟ ☑️ _.disable *antitoxic*_
┣ ඬ⃟ ☑️ _.enable *antitraba*_
┣ ඬ⃟ ☑️ _.disable *antitraba*_
┣ ඬ⃟ ☑️ _.enable *antiarabes*_
┣ ඬ⃟ ☑️ _.disable *antiarabes*_
┣ ඬ⃟ ☑️ _.enable *modoadmin*_
┣ ඬ⃟ ☑️ _.disable *modoadmin*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┣ *< ℝ𝔼ℙ𝕆ℝ𝕋𝔸ℝ 𝔼ℝℝ𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔰 _.reporte *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📥 _.instagram *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.instagram2 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.instagram3 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.mediafire *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.instagram *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.gitclone *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.gdrive *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.tiktok *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.xnxxdl *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.xvideosdl *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.twitter *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.fb *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.fb2 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.fb3 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.fb4 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.fb5 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.ytmp3 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.ytmp4 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.ytmp3doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.ytmp4doc *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.dapk2 *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.stickerpack *<enlace / link / url>*_
┣ ඬ⃟ 📥 _.play *<texto>*_
┣ ඬ⃟ 📥 _.play.1 *<texto>*_
┣ ඬ⃟ 📥 _.play.2 *<texto>*_
┣ ඬ⃟ 📥 _.playdoc *<texto>*_
┣ ඬ⃟ 📥 _.playlist *<texto>*_
┣ ඬ⃟ 📥 _.playlist2 *<texto>*_
┣ ඬ⃟ 📥 _.spotify *<texto>*_
┣ ඬ⃟ 📥 _.stickerly *<texto>*_
┣ ඬ⃟ 📥 _.ringtone *<texto>*_
┣ ඬ⃟ 📥 _.soundcloud *<texto>*_
┣ ඬ⃟ 📥 _.imagen *<texto>*_
┣ ඬ⃟ 📥 _.pinterest *<texto>*_
┣ ඬ⃟ 📥 _.wallpaper *<texto>*_
┣ ඬ⃟ 📥 _.wallpaper2 *<texto>*_
┣ ඬ⃟ 📥 _.pptiktok *<nombre de usuario>*_
┣ ඬ⃟ 📥 _.igstalk *<nombre de usuario>*_
┣ ඬ⃟ 📥 _.igstory *<nombre de usuario>*_
┣ ඬ⃟ 📥 _.tiktokstalk *<username>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔾ℝ𝕌ℙ𝕆𝕊 />* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💎 _.add *<numero>*_
┣ ඬ⃟ 💎 _.kick *<@tag>*_
┣ ඬ⃟ 💎 _.kick2 *<@tag>*_
┣ ඬ⃟ 💎 _.listanum *<texto>*_
┣ ඬ⃟ 💎 _.kicknum *<texto>*_
┣ ඬ⃟ 💎 _.grupo *<abrir / cerrar>*_
┣ ඬ⃟ 💎 _.grouptime *<opcion> <tiempo>*_
┣ ඬ⃟ 💎 _.promote *<@tag>*_
┣ ඬ⃟ 💎 _.demote *<@tag>*_
┣ ඬ⃟ 💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣ ඬ⃟ 💎 _.demote *<@tag>*_
┣ ඬ⃟ 💎 _.infogroup_
┣ ඬ⃟ 💎 _.resetlink_
┣ ඬ⃟ 💎 _.link_
┣ ඬ⃟ 💎 _.setname *<texto>*_
┣ ඬ⃟ 💎 _.setdesc *<texto>*_
┣ ඬ⃟ 💎 _.invocar *<texto>*_
┣ ඬ⃟ 💎 _.setwelcome *<texto>*_
┣ ඬ⃟ 💎 _.setbye *<texto>*_
┣ ඬ⃟ 💎 _.hidetag *<texto>*_
┣ ඬ⃟ 💎 _.hidetag *<audio>*_
┣ ඬ⃟ 💎 _.hidetag *<video>*_
┣ ඬ⃟ 💎 _.hidetag *<imagen>*_
┣ ඬ⃟ 💎 _.warn *<@tag>*_
┣ ඬ⃟ 💎 _.unwarn *<@tag>*_
┣ ඬ⃟ 💎 _.listwarn_
┣ ඬ⃟ 💎 _.fantasmas_
┣ ඬ⃟ 💎 _.destraba_
┣ ඬ⃟ 💎 _.setpp *<imagen>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🧧 _.togifaud *<video>*_
┣ ඬ⃟ 🧧 _.toimg *<sticker>*_
┣ ඬ⃟ 🧧 _.tomp3 *<video>*_
┣ ඬ⃟ 🧧 _.tomp3 *<nota de voz>*_
┣ ඬ⃟ 🧧 _.toptt *<video / audio>*_
┣ ඬ⃟ 🧧 _.tovideo *<sticker>*_
┣ ඬ⃟ 🧧 _.tourl *<video / imagen / audio>*_
┣ ඬ⃟ 🧧 _.tts es *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🖍️ _.phmaker *<opcion> <imagen>*_
┣ ඬ⃟ 🖍️ _.logos *<efecto> <texto>*_
┣ ඬ⃟ 🖍️ _.logochristmas *<texto>*_
┣ ඬ⃟ 🖍️ _.logocorazon *<texto>*_
┣ ඬ⃟ 🖍️ _.ytcomment *<texto>*_
┣ ඬ⃟ 🖍️ _.hornycard *<@tag>*_
┣ ඬ⃟ 🖍️ _.simpcard *<@tag>*_
┣ ඬ⃟ 🖍️ _.lolice *<@tag>*_
┣ ඬ⃟ 🖍️ _.itssostupid_
┣ ඬ⃟ 🖍️ _.pixelar_
┣ ඬ⃟ 🖍️ _.blur_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔽ℝ𝔸𝕊𝔼𝕊 𝕐 𝕋𝔼𝕏𝕋𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🥀 _.piropo_
┣ ඬ⃟ 🥀 _.consejo_
┣ ඬ⃟ 🥀 _.fraseromantica_
┣ ඬ⃟ 🥀 _.historiaromantica_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℝ𝔸ℕ𝔻𝕆𝕄 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👾 _.kpop *<blackpink / exo / bts>*_
┣ ඬ⃟ 👾 _.cristianoronaldo_
┣ ඬ⃟ 👾 _.messi_
┣ ඬ⃟ 👾 _.meme_
┣ ඬ⃟ 👾 _.itzy_
┣ ඬ⃟ 👾 _.blackpink_
┣ ඬ⃟ 👾 _.lolivid_
┣ ඬ⃟ 👾 _.loli_
┣ ඬ⃟ 👾 _.navidad_
┣ ඬ⃟ 👾 _.ppcouple_
┣ ඬ⃟ 👾 _.wpmontaña_
┣ ඬ⃟ 👾 _.pubg_
┣ ඬ⃟ 👾 _.wpgaming_
┣ ඬ⃟ 👾 _.wpaesthetic_
┣ ඬ⃟ 👾 _.wpaesthetic2_
┣ ඬ⃟ 👾 _.wprandom_
┣ ඬ⃟ 👾 _.wallhp_
┣ ඬ⃟ 👾 _.wpvehiculo_
┣ ඬ⃟ 👾 _.wpmoto_
┣ ඬ⃟ 👾 _.coffee_
┣ ඬ⃟ 👾 _.pentol_
┣ ඬ⃟ 👾 _.caricatura_
┣ ඬ⃟ 👾 _.ciberespacio_
┣ ඬ⃟ 👾 _.technology_
┣ ඬ⃟ 👾 _.doraemon_
┣ ඬ⃟ 👾 _.hacker_
┣ ඬ⃟ 👾 _.planeta_
┣ ඬ⃟ 👾 _.randomprofile_
┣ ඬ⃟ 👾 _.neko_
┣ ඬ⃟ 👾 _.waifu_
┣ ඬ⃟ 👾 _.akira_
┣ ඬ⃟ 👾 _.akiyama_
┣ ඬ⃟ 👾 _.anna_
┣ ඬ⃟ 👾 _.asuna_
┣ ඬ⃟ 👾 _.ayuzawa_
┣ ඬ⃟ 👾 _.boruto_
┣ ඬ⃟ 👾 _.chiho_
┣ ඬ⃟ 👾 _.chitoge_
┣ ඬ⃟ 👾 _.deidara_
┣ ඬ⃟ 👾 _.erza_
┣ ඬ⃟ 👾 _.elaina_
┣ ඬ⃟ 👾 _.eba_
┣ ඬ⃟ 👾 _.emilia_
┣ ඬ⃟ 👾 _.hestia_
┣ ඬ⃟ 👾 _.hinata_
┣ ඬ⃟ 👾 _.inori_
┣ ඬ⃟ 👾 _.isuzu_
┣ ඬ⃟ 👾 _.itachi_
┣ ඬ⃟ 👾 _.itori_
┣ ඬ⃟ 👾 _.kaga_
┣ ඬ⃟ 👾 _.kagura_
┣ ඬ⃟ 👾 _.kaori_
┣ ඬ⃟ 👾 _.keneki_
┣ ඬ⃟ 👾 _.kotori_
┣ ඬ⃟ 👾 _.kurumi_
┣ ඬ⃟ 👾 _.madara_
┣ ඬ⃟ 👾 _.mikasa_
┣ ඬ⃟ 👾 _.miku_
┣ ඬ⃟ 👾 _.minato_
┣ ඬ⃟ 👾 _.naruto_
┣ ඬ⃟ 👾 _.nezuko_
┣ ඬ⃟ 👾 _.sagiri_
┣ ඬ⃟ 👾 _.sasuke_
┣ ඬ⃟ 👾 _.sakura_
┣ ඬ⃟ 👾 _.cosplay_
┗━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━┓
┃ *< ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙𝟠 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔞 _.pack_
┣ ඬ⃟ 🔞 _.pack2_
┣ ඬ⃟ 🔞 _.pack3_
┣ ඬ⃟ 🔞 _.videoxxx_
┣ ඬ⃟ 🔞 _.videolesbixxx_
┣ ඬ⃟ 🔞 _.tetas_
┣ ඬ⃟ 🔞 _.booty_
┣ ඬ⃟ 🔞 _.ecchi_
┣ ඬ⃟ 🔞 _.furro_
┣ ඬ⃟ 🔞 _.imagenlesbians_
┣ ඬ⃟ 🔞 _.panties_
┣ ඬ⃟ 🔞 _.pene_
┣ ඬ⃟ 🔞 _.porno_
┣ ඬ⃟ 🔞 _.randomxxx_
┣ ඬ⃟ 🔞 _.pechos_
┣ ඬ⃟ 🔞 _.yaoi_
┣ ඬ⃟ 🔞 _.yaoi2_
┣ ඬ⃟ 🔞 _.yuri_
┣ ඬ⃟ 🔞 _.yuri2_
┣ ඬ⃟ 🔞 _.trapito_
┣ ඬ⃟ 🔞 _.hentai_
┣ ඬ⃟ 🔞 _.nsfwloli_
┣ ඬ⃟ 🔞 _.nsfworgy_
┣ ඬ⃟ 🔞 _.nsfwfoot_
┣ ඬ⃟ 🔞 _.nsfwass_
┣ ඬ⃟ 🔞 _.nsfwbdsm_
┣ ඬ⃟ 🔞 _.nsfwcum_
┣ ඬ⃟ 🔞 _.nsfwero_
┣ ඬ⃟ 🔞 _.nsfwfemdom_
┣ ඬ⃟ 🔞 _.nsfwglass_
┣ ඬ⃟ 🔞 _.hentaipdf *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
┣ ඬ⃟ 🎤 _.bass_
┣ ඬ⃟ 🎤 _.blown_
┣ ඬ⃟ 🎤 _.deep_
┣ ඬ⃟ 🎤 _.earrape_
┣ ඬ⃟ 🎤 _.fast_
┣ ඬ⃟ 🎤 _.fat_
┣ ඬ⃟ 🎤 _.nightcore_
┣ ඬ⃟ 🎤 _.reverse_
┣ ඬ⃟ 🎤 _.robot_
┣ ඬ⃟ 🎤 _.slow_
┣ ඬ⃟ 🎤 _.smooth_
┣ ඬ⃟ 🎤 _.tupai_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 📳 _.start_
┣ ඬ⃟ 📳 _.next_
┣ ඬ⃟ 📳 _.leave_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔍 _.modapk *<texto>*_
┣ ඬ⃟ 🔍 _.stickersearch *<texto>*_
┣ ඬ⃟ 🔍 _.stickersearch2 *<texto>*_
┣ ඬ⃟ 🔍 _.xnxxsearch *<texto>*_
┣ ඬ⃟ 🔍 _.animeinfo *<texto>*_
┣ ඬ⃟ 🔍 _.google *<texto>*_
┣ ඬ⃟ 🔍 _.letra *<texto>*_
┣ ඬ⃟ 🔍 _.wikipedia *<texto>*_
┣ ඬ⃟ 🔍 _.ytsearch *<texto>*_
┣ ඬ⃟ 🔍 _.playstore *<texto>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝔸𝕌𝔻𝕀𝕆𝕊 />*   
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┃ *- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
┃ _- (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🔊 _Quien es tu sempai botsito 7w7_
┣ ඬ⃟ 🔊 _Te diagnostico con gay_
┣ ඬ⃟ 🔊 _A nadie le importa_
┣ ඬ⃟ 🔊 _Fiesta del admin_
┣ ඬ⃟ 🔊 _Fiesta del administrador_ 
┣ ඬ⃟ 🔊 _Vivan los novios_
┣ ඬ⃟ 🔊 _Feliz cumpleaños_
┣ ඬ⃟ 🔊 _Noche de paz_
┣ ඬ⃟ 🔊 _Buenos dias_
┣ ඬ⃟ 🔊 _Buenos tardes_
┣ ඬ⃟ 🔊 _Buenos noches_
┣ ඬ⃟ 🔊 _Audio hentai_
┣ ඬ⃟ 🔊 _Chica lgante_
┣ ඬ⃟ 🔊 _Feliz navidad_
┣ ඬ⃟ 🔊 _Vete a la vrg_
┣ ඬ⃟ 🔊 _Pasa pack Bot_
┣ ඬ⃟ 🔊 _Atencion grupo_
┣ ඬ⃟ 🔊 _Marica quien_
┣ ඬ⃟ 🔊 _Murio el grupo_
┣ ඬ⃟ 🔊 _Oh me vengo_
┣ ඬ⃟ 🔊 _tio que rico_
┣ ඬ⃟ 🔊 _Viernes_
┣ ඬ⃟ 🔊 _Baneado_
┣ ඬ⃟ 🔊 _Sexo_
┣ ඬ⃟ 🔊 _Hola_
┣ ඬ⃟ 🔊 _Un pato_
┣ ඬ⃟ 🔊 _Nyanpasu_
┣ ඬ⃟ 🔊 _Te amo_
┣ ඬ⃟ 🔊 _Yamete_
┣ ඬ⃟ 🔊 _Bañate_
┣ ඬ⃟ 🔊 _Es puto_
┣ ඬ⃟ 🔊 _La biblia_
┣ ඬ⃟ 🔊 _Onichan_
┣ ඬ⃟ 🔊 _Mierda de Bot_
┣ ඬ⃟ 🔊 _Siuuu_
┣ ඬ⃟ 🔊 _Epico_
┣ ඬ⃟ 🔊 _Shitpost_
┣ ඬ⃟ 🔊 _Rawr_
┣ ඬ⃟ 🔊 _UwU_
┣ ඬ⃟ 🔊 _:c_
┣ ඬ⃟ 🔊 _a_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🛠️ _.chatgpt *<texto>*_
┣ ඬ⃟ 🛠️ _.dall-e *<texto>*_
┣ ඬ⃟ 🛠️ _.spamwa *<numero|texto|cantidad>*_
┣ ඬ⃟ 🛠️ _.tamaño *<cantidad> <imagen / video>*_
┣ ඬ⃟ 🛠️ _.clima *<país> <ciudad>*_
┣ ඬ⃟ 🛠️ _.encuesta *<texto1|texto2...>*_
┣ ඬ⃟ 🛠️ _.afk *<motivo>*_
┣ ඬ⃟ 🛠️ _.ocr *<responde a imagen>*_
┣ ඬ⃟ 🛠️ _.acortar *<enlace / link / url>*_
┣ ඬ⃟ 🛠️ _.calc *<operacion math>*_
┣ ඬ⃟ 🛠️ _.del *<mensaje>*_
┣ ඬ⃟ 🛠️ _.whatmusic *<audio>*_
┣ ඬ⃟ 🛠️ _.readqr *<imagen (QR)>*_
┣ ඬ⃟ 🛠️ _.qrcode *<texto>*_
┣ ඬ⃟ 🛠️ _.readmore *<texto1| texto2>*_
┣ ඬ⃟ 🛠️ _.styletext *<texto>*_
┣ ඬ⃟ 🛠️ _.traducir *<texto>*_
┣ ඬ⃟ 🛠️ _.nowa *<numero>*_
┣ ඬ⃟ 🛠️ _.covid *<pais>*_
┣ ඬ⃟ 🛠️ _.horario_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💵 _.adventure_
┣ ඬ⃟ 💵 _.cazar_
┣ ඬ⃟ 💵 _.cofre_
┣ ඬ⃟ 💵 _.balance_
┣ ඬ⃟ 💵 _.claim_
┣ ඬ⃟ 💵 _.heal_
┣ ඬ⃟ 💵 _.lb_
┣ ඬ⃟ 💵 _.levelup_
┣ ඬ⃟ 💵 _.myns_
┣ ඬ⃟ 💵 _.perfil_
┣ ඬ⃟ 💵 _.work_
┣ ඬ⃟ 💵 _.minar_
┣ ඬ⃟ 💵 _.minar2_
┣ ඬ⃟ 💵 _.buy_
┣ ඬ⃟ 💵 _.buyall_
┣ ඬ⃟ 💵 _.verificar_
┣ ඬ⃟ 💵 _.robar *<cantidad> <@tag>*_
┣ ඬ⃟ 💵 _.transfer *<tipo> <cantidad> <@tag>*_
┣ ඬ⃟ 💵 _.unreg *<numero de serie>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 _.sticker *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _.sticker *<enlace / link / url>*_
┣ ඬ⃟ 👽 _.s *<responder a imagen o video>*_
┣ ඬ⃟ 👽 _.s *<enlace / link / url>*_
┣ ඬ⃟ 👽 _.sfull *<imagen o video>*_
┣ ඬ⃟ 👽 _.emojimix *<emoji 1>&<emoji 2>*_
┣ ඬ⃟ 👽 _.scircle *<imagen>*_
┣ ඬ⃟ 👽 _.sremovebg *<imagen>*_
┣ ඬ⃟ 👽 _.semoji *<tipo> <emoji>*_
┣ ඬ⃟ 👽 _.attp *<texto>*_
┣ ඬ⃟ 👽 _.attp2 *<texto>*_
┣ ඬ⃟ 👽 _.attp3 *<texto>*_
┣ ඬ⃟ 👽 _.ttp *<texto>*_
┣ ඬ⃟ 👽 _.ttp2 *<texto>*_
┣ ඬ⃟ 👽 _.ttp3 *<texto>*_
┣ ඬ⃟ 👽 _.ttp4 *<texto>*_
┣ ඬ⃟ 👽 _.ttp5 *<texto>*_
┣ ඬ⃟ 👽 _.pat *<@tag>*_
┣ ඬ⃟ 👽 _.slap *<@tag>*_
┣ ඬ⃟ 👽 _.kiss *<@tag>*_
┣ ඬ⃟ 👽 _.dado_
┣ ඬ⃟ 👽 _.wm *<packname> <author>*_
┣ ඬ⃟ 👽 _.stickermarker *<efecto> <imagen>*_
┣ ඬ⃟ 👽 _.stickerfilter *<efecto> <imagen>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👑 > *<funcion>*
┣ ඬ⃟ 👑 => *<funcion>*
┣ ඬ⃟ 👑 $ *<funcion>*
┣ ඬ⃟ 👑 _.setprefix *<prefijo>*_
┣ ඬ⃟ 👑 _.resetprefix_
┣ ඬ⃟ 👑 _.autoadmin_
┣ ඬ⃟ 👑 _.leavegc_
┣ ඬ⃟ 👑 _.cajafuerte_
┣ ඬ⃟ 👑 _.blocklist_
┣ ඬ⃟ 👑 _.block *<@tag / numero>*_
┣ ඬ⃟ 👑 _.unblock *<@tag / numero>*_
┣ ඬ⃟ 👑 _.enable *restrict*_
┣ ඬ⃟ 👑 _.disable *restrict*_
┣ ඬ⃟ 👑 _.enable *autoread*_
┣ ඬ⃟ 👑 _.disable *autoread*_
┣ ඬ⃟ 👑 _.enable *public*_
┣ ඬ⃟ 👑 _.disable *public*_
┣ ඬ⃟ 👑 _.enable *pconly*_
┣ ඬ⃟ 👑 _.disable *pconly*_
┣ ඬ⃟ 👑 _.enable *gconly*_
┣ ඬ⃟ 👑 _.disable *gconly*_
┣ ඬ⃟ 👑 _.enable *anticall*_
┣ ඬ⃟ 👑 _.disable *anticall*_
┣ ඬ⃟ 👑 _.enable *antiprivado*_
┣ ඬ⃟ 👑 _.disable *antiprivado*_
┣ ඬ⃟ 👑 _.enable *modejadibot*_
┣ ඬ⃟ 👑 _.disable *modejadibot*_
┣ ඬ⃟ 👑 _.msg *<texto>*_
┣ ඬ⃟ 👑 _.banchat_
┣ ඬ⃟ 👑 _.unbanchat_
┣ ඬ⃟ 👑 _.banuser *<@tag>*_
┣ ඬ⃟ 👑 _.unbanuser *<@tag>*_
┣ ඬ⃟ 👑 _.dardiamantes *<@tag>*_
┣ ඬ⃟ 👑 _.añadirxp *<@tag>*_
┣ ඬ⃟ 👑 _.banuser *<@tag>*_
┣ ඬ⃟ 👑 _.bc *<texto>*_
┣ ඬ⃟ 👑 _.bcchats *<texto>*_
┣ ඬ⃟ 👑 _.bcgc *<texto>*_
┣ ඬ⃟ 👑 _.bcgc2 *<audio>*_
┣ ඬ⃟ 👑 _.bcgc2 *<video>*_
┣ ඬ⃟ 👑 _.bcgc2 *<imagen>*_
┣ ඬ⃟ 👑 _.bcbot *<texto>*_
┣ ඬ⃟ 👑 _.cleartpm_
┣ ඬ⃟ 👑 _.restart_
┣ ඬ⃟ 👑 _.update_
┣ ඬ⃟ 👑 _.banlist_
┣ ඬ⃟ 👑 _.addprem *<@tag>*_
┣ ඬ⃟ 👑 _.delprem *<@tag>*_
┣ ඬ⃟ 👑 _.listprem_
┣ ඬ⃟ 👑 _.listcmd_
┣ ඬ⃟ 👑 _.setppbot *<responder a imagen>*_
┣ ඬ⃟ 👑 _.addcmd *<texto> <responder a sticker/imagen>*_
┣ ඬ⃟ 👑 _.delcmd *<responder a sticker/imagen con comando o texto asignado>*_
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕄𝔸𝕋𝔸 𝕎ℍ𝔸𝕋𝕊𝔸ℙℙ - 𝕍𝕀ℝ𝕌𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💀 _.crash𝟷_
┣ ඬ⃟ 💀 _.crash2_
┣ ඬ⃟ 💀 _.crash3_
┣ ඬ⃟ 💀 _.crash4_
┣ ඬ⃟ 💀 _.crash5_
┣ ඬ⃟ 💀 _.crash6_
┣ ඬ⃟ 💀 _.crash7_
┣ ඬ⃟ 💀 _.crash8_
┗━━━━━━━━━━━━━━━━┛
*GeriPium*`
if (!regex.test(args[0])) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙸𝙽𝙺 𝙸𝙽𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾!*'
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙴𝙽 𝙻𝙾 𝚀𝚄𝙴 𝙴𝙽𝚅𝙸𝙾 𝚂𝚄 𝙰𝚁𝙲𝙷𝙸𝚅𝙾, 𝚂𝙸 𝙴𝚂𝚃𝙴 𝙽𝙾 𝙴𝚂 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙿𝚄𝙴𝙳𝙴 𝙳𝙴𝙱𝙴𝚁𝚂𝙴 𝙰 𝚀𝚄𝙴 𝙴𝙻 𝚁𝙴𝙿𝙾𝚂𝙸𝚃𝙾𝚁𝙸𝙾 𝙴𝚂 𝙼𝚄𝚈 𝙿𝙴𝚂𝙰𝙳𝙾*`)
conn.sendFile(m.chat, url, filename, null, m)
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd/i
export default handler
