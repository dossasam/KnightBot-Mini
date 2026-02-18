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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGLmLRnTEKiggrY2i2LixDyVVXFooLlUgOOG/b2BPT8/D7mzvW90iT57MPPUdkDyh2MYdmH4HRZU0kOF+yboCgymY12GIKzAECDIIpqCbM8GD9dm+4rJKc+donxCvrAYINrm4eF7RQ3P1ysmZcYcncB+Coj6nSfAbwKgMtvBI0iaqTmptB8JpOR7tnHDJ02uNXpfc+lhqRqB6ovQE7j0iTKqERIsixhmuYGrjzoFJ9TX67mq84Gpr6fIzdTDLNW0zMbhWSdbKgns7uMfXcsRJmrTQjcXX6FvLuTdAE2OVquPksjL1pS1StxzDje3JSrYXJDtPz9JCN3/Qp0lEMLIQJixh3Zd1N54bY/tsTuaSXWYsyLFeqNtdG7zdBruNvrYca+8aUc272fprxBve8atCv659y9PKFunLGdrC5SnnUg0qePky2O4oZWR8DH4l7lQfWbn8H923pnS7VS+TZ/V0zKA22kbu4CXc+d1MV5uZ0TTcebFC9mVMpK/RV5C4HFjlxugE3Oa22sIbcvYuIfQ4OSOrEF7lW1GdZ/vZ9ZM+ZHX1W5F1Szbs8c0O3Fg/K47Z7jp/U9DRISKhHb6Ip91bYFYT048XM4/l14nszRiHzO4ycTejGF2TXeuHq32QKI2npkvzcNW2T4+OLrizEJjy9yGocJRQVkGW5KQ/U/khgKhxcVBh9lAX6HszGnttY/khYavxMmzLNQ68nKsHgoLDJE4Ex+DWcVpHT2AIiioPMKUYmQlledWtMaUwwhRM//xrCAhu2btvfTWRH4IwqSg7kLpIc4g+TP24hEGQ14S5HQm0foErMOU+jzFjCYloL2NNYBXESYO1GDIKpiFMKf7ZIK4wAlNW1fjn0Go56nV3xLG8kGUNDEH28CNBYAoEQZ2okirIkjgVxT/ot2uPCoviG8EMDEH6eMVPVEFR5YnACxIvcf3L/uL+k2CPhzCDSUrBFGhrvS5oYCxs1+PVq2HMt9FMi2bgs6GPYLwrj262G8pWsMt2CG3iRlGQHh4LEWNzkz5L+sXweN1T3i48ffoHEDAFgZ5TyzuZJH0+Z6tJ0xg35aYY88O2mwdH8e1Z1Kgf3W6apI52FF+dF2tc7s4pWWXstilXPqr3nM53B+5oV3ZWZpYn69envhrCTRLgX4sdFTgS5+d27rTbtmwUJ2xz+ejuVJET26A9iT7OyiJNmzQmPhXNRdc5ZVyg89p728bCSBzBU+DXnp8l7oaGe6Kc8EdkHyOT/viqkkeaeqv6bZjgx+QT2Bv4n9a98+4Dxt2Hv0D8+Er+ZRznr0F3IQPXXJwur697/zyoyVbkSySS+HZyBzN5nqItj3N5cwb3+19DUKSQhXmVgSmABFV5gsAQVHndJ9YiYf6bYtosshZRpPWNp5Cy2ecU7JMMUwazAkz58ZiXBEkS5PdXTpUXJqRxr4HD+3EI7n8Dv3InDVIHAAA=',
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
  
