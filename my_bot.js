const Discord = require('discord.js')
const client = new Discord.Client()
client.on('ready', () =>{
    console.log("connected as "+ client.user.tag)
    client.user.setActivity("YouTube",{type:"watching"})
    client.guilds.forEach((guild) =>{
        console.log(guild.name)
        guild.channels.forEach((channel) =>{
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })//text id:623025434799636482
    let general = client.channels.get("623025434799636482")
    //const a=new Discord.Attachment("https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiz0NLd4NTkAhWGBIgKHWj-CyoQjRx6BAgBEAU&url=https%3A%2F%2Fwww.buzzfeed.com%2Fjuliapugachevsky%2Fimportant-love-lessons-master-of-none-taught-us&psig=AOvVaw1Lz3TUF7f0JOE7TItLZUWu&ust=1568703117509831")
    general.send("yoyo")
    //general.send(a)
})
client.on('message',(receivedMessage) => {
    if(receivedMessage.author == client.user)
    {return}
    else if(receivedMessage.content.startsWith("@"))
    {
        receivedMessage.channel.send("got your query "+receivedMessage.author.toString()+" ,we'll get back to you soon")
    }
    //receivedMessage.channel.send("message received" + receivedMessage.author.toString())
    else if(receivedMessage.content.startsWith("!")){
        helpBuddy(receivedMessage)
    }
})
function helpBuddy(receivedMessage)
{
    let fullCommand= receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let mainCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)
    if(mainCommand == "help"){
        helpCommand(arguments,receivedMessage)
    }
}
function helpCommand(arguments,receivedMessage){
    if(arguments.length==0){
        receivedMessage.channel.send("try !help (TOPIC)")
    }
    else{
        receivedMessage.channel.send("ohhh!!! you need help with "+ arguments)
    }
}

client.login("NjIzMDI1OTcxMjAwNjU1MzYx.XX8nrg.5hqFERNLLVm5_O7FyJ-eJGWnPC4")