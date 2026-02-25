/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['22898482543','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2Y6rOBD9F78SXXYSIrU0BLKQhYRA1tF9INgQwmJimwRylX8f0ct0P8zc6Xmzy6VTx6dO1S9Q4ISiGWpA/xcoSXILGGqPrCkR6INBFUWIgA6AAQtAHxjWtu6O6ioyj7rFafx2IaNNYGvNAxXLeHzW11EjpqzHF8MX8OyAsjplSfgbwOUkOwz5fOVrenk3rt5Owqo8VgaHOrLxVbzQvDmyEVPV1H4BzxYxSEhSxMPyjHJEgmyGmlWQkO/RX4wmB1nPQ37Pr7qDkuZBgXplyMdB5kn8oEqraCu5zna8xd+j73o31iDR5j12s0/JJeSc2VRAvE1P0XK8C+eLLiKXlaOKyht9msQFgjZEBUtY823dw9VOW2Aj0rFGkdUcOTGy4rNvrzW4Q7l41LVas2Q580bp94g/HtxyOhAv0zV11yU6Yhc7aUMcj4NMHj6y+Wiur9JAiGL6lfiKfHgl/T+69xaRIdQ3p/brgTx3blGgnccLbRjldtfO+GhJyuGupqP9xvge/bW+NSeJtsPZZr/UBjOD+I99ZVrKBU3g2V5Nj66rdrF+Mw+f9ANWkd+xNEf7esDhizoQN+ptSa/+tYQ9ep6k8SjzyzgORSocLiI0JiwltsOTW3ZtCq+cHsw4WhbLcu65eGruZjdzLOjW6DTnjfjl9UcpamwI+uKzAwiKE8pIwBJctDFJljoggDcPhQSxV3kBGd+zfHWwev4s8eDqrlyvljO3GeInwlIcC14Tq+lM0KFrvIAOKAkOEaUIThLKMGkWiNIgRhT0//zZAQWq2Vvj2nKy2AFRQijbFFWZ4QB+dPXjMQhDXBXMa4rQbA+IgL7wGUaMJUVMWx2rIiDhObkh8xwwCvpRkFH09w8RQfA91gFZQNmK4HIS0DPoA2klHs4R6ACCqxbOLiL8u84YsT2MY7NV8p1Hmw0RC5KMtgkLqyppOB7anscv7uPxYBMbZmyAT94fBngTGD5mXqTa4TpfQ+icb5oGrWhXyghNnGyuWOl4K1pb7ZKK9OUfQEAfcJupx9UJ4uT4uhiIeW9IsGJ4dVYdjiaP5a52NoqDvBt5i67crZS1sn6w7qPKklK5r8u57OOHn5c1lSrsOF3X3PW2hvvSVoPoloToazFkI8LGemnhcCEa+l2UrMzbcduTe6pVuXcgGxMtFmvSnaL0dB9ycK3t/aVJzHmdCs2j3q0E5qrlOit2PixtwRcnI8t9s2b+OhMJbNsi9fSe0pNURe7Lyh/0x71tbFCWPwrEQAdkr1mi3pO0nqpLoqSIitBmtg8fU5a9b7fk1X8tcnuNEvS6LIqgrfefld4kaC0pPDtfIN63z7/4ZLAPm7TgvMnwmO73/uHEVYUri1coF+fH0eMMdZBBV0RYdU7g+fzZAWUWsAiTHPRBUECCEwjezGp8ToGf5IiyIC9BX+x2JUEWJFF//gXg5ZdLOwcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
