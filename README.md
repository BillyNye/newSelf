## pnSelf

With pnSelf you can use features typically reserved for bots (sending embeds, 
spam filling channels etc). It is nowhere near complete at this point. I plan on adding many more features to it in the future but for now it allows users to
create custom embeds, spam channels, send disappearing messages, and send
clickable text that directs users to a user-specified url.

To log into your user account with pnSelf, you will need to provide your account
token. If you dont know how to get your token, [here's a helpful guide](https://discordhelp.net/discord-token).  
  
<img src="https://cdn.discordapp.com/attachments/758509574709444658/829505644054315038/Screen_Shot_2021-04-07_at_4.57.07_PM.png" alt="pnSelf on OSX" width="600"/>

Once you have successfully logged in with your account token, type !!help in any
channel and pnSelf will send an embed with a list of commands and how to use
them.  

## Downloads

[Download for windoes!](https://github.com/BillyNye/newSelf/raw/aeb1a564a771e94ab3262f2bc7cf4ceb1b5981d1/deploy/pnSelf.zip)  
[Download for OSX!](https://github.com/BillyNye/newSelf/blob/main/deploy/pnSelf-OSX.zip?raw=true)

## Features/Instructions

### help 

Sends embed with information on how to use pnSelf. Usage: `!!help`  

<img src="https://cdn.discordapp.com/attachments/758509574709444658/829870545066524672/Screen_Shot_2021-04-08_at_5.07.54_PM.png" alt="Help function" width="500">

### embed

Sends message as an embed. Usage: `!!embed___` (Use !!desc for messages longer than 256 characters)  

### link

Sends message as embed link. Usage: `!!link___?___` (Text after `!!link` is the title. Text after `?` is the url)  

### spam

Spams message set in config.json. Usage: `!!spam___?___` (The filler content is set by the characters before the `?`, and the number of messages to spam is set by the number after the `?`. For best results use without VPN and wait until each spam has finished coming through before starting a new one)  

### dembed

Sends custom embed. Usage: `!!dembed___}?desc___}?url___}?img___}?color___` (Text between `!!dembed` and the final `}` before the next argument is the title. `?desc` = description. `?url` = url. `?img` = image cover for embed)  

<img src="https://cdn.discordapp.com/attachments/758509574709444658/830272499102646302/Screen_Shot_2021-04-09_at_7.46.19_PM.png" alt="Example usage of dembed" width="200">
                            
### dmsg

Sends disappearing message. Usage: `!!dmsg___?____` (Text before the `?` sets the content of the message, and the number after the `?` sets the amount of time in seconds that the message lasts)  
                            
### reply

Sends a fancy reply embed. Usage: `https://discord.com/channels/523212096641564685/758509574709444658/824911238667829288_______` (Any text after the message link will be posted below the reply embed)  

### info

Sends an embed with info about a specified user such as creation and join date. Usage: `!!info @randomuser`  
