# AMP Discord Webhook
Checks the status of your AMP server and posts updates to a Discord webhook

![image](https://user-images.githubusercontent.com/88901901/147172828-0f51c665-7e5c-47b2-9dd9-bb664943f8b6.png)

Support for application states: Running, Stopped, Stopping, Starting, Updating, Sleeping

# Setup
Clone the repo and edit the variables in DiscordWebhook.js

```
// Settings
var instanceid = "83e9181" // Right click instance and open in new tab, copy the ID in the URL
var server = "ARK" // Server Name
var corsproxy = "https://cors.proxy.com/?" // Proxy you're using for CORS (if applicable)
var panelurl = "https://my.panel.url/" // Panel URL
var apiusername = "USERNAME" // Username for API user
var apipassword = "PASSWORD" // Password for API user
var webhook = "https://discord.com/api/webhooks/12345/12345" // Discord Webhook URL
```

# Usage
```
$ cd AMP-Discord-Webhook
$ node DiscordWebhook.js
```
