  const { getBuffer } = require('../response/function.js')
  const groupResponse = async (sock, update) => {
   const metadata = await sock.groupMetadata(update.id)   
   for (let participant of update.participants) {
    try{
       let metadata = await sock.groupMetadata(update.id)
       let participants = update.participants
       for (let num of participants) {
         try {
           ppuser = await sock.profilePictureUrl(num, 'image')
         } catch {
           ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
         }
         if (update.action == 'add') {
          var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `Welcome👋` 
               }, type: 1 
              }
             ]
        sock.sendMessage(
         update.id, 
         { 
         caption: `Welcome @${num.split("@")[0]}, \n*member baru jangan lupa intro*\n\nUtamakan baca description !!!`, 
         location: { 
          jpegThumbnail: await getBuffer(ppuser) 
         }, 
         buttons: button, 
         footer: `Name Group ${metadata.subject}`, 
         mentions: [num] })
         } 
        else 
        if (update.action == 'remove') {
          var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `Bye👋` 
               }, type: 1 
              }
             ]
        sock.sendMessage(
           update.id, 
          { 
           caption: `*@${num.split("@")[0]} leave the group*\n\n *jangan lupa nitip nasbung 5 buat di group*\n`, 
           location: { jpegThumbnail: await getBuffer(ppuser) 
          }, 
           buttons: button, 
           footer: 'Regards : Rintis ID', 
           mentions: [num] 
             }
             )
             }
            }
        } catch (err) {
        console.log(err)
      }
    }   
  }
module.exports = { groupResponse }  
