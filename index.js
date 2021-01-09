const { Client } = require("discord-rpc");
const { green, red, yellow } = require("chalk");
const RPC = new Client({ transport: "ipc" });
const CFG = require("./config.json");

RPC.on("ready", () => {
    
    console.log(yellow('[RPC]: ') + 'RPC is Starting...');

    let timestamp = null;
    if(CFG.RPC.timestamp) timestamp = new Date();
    const Inputs = 
    {
        details: CFG.RPC.details,
        state: CFG.RPC.state,
        startTimestamp: timestamp,
        largeImageKey: CFG.RPC.largeImageKey,
        largeImageText: CFG.RPC.largeImageText,
        smallImageKey: CFG.RPC.smallImageKey,
        smallImageText: CFG.RPC.smallImageText,
    };
    RPC.setActivity(Inputs)
    .catch(e => {
        console.log(red('[RPC]:') + ' an Error showed up in the script!\nMake Sure you configured your RPC inputs!\nMore Information: ');
        console.error(e);
    });

    console.log(green('RPC is Now Activated For You!'));
});

RPC.login({
    clientId: CFG.clientId
})
.catch(e => {
    console.log(red('[RPC]:') + ' an Error showed up in the script!\nMake sure you inputed your clientId !\nMore Information: ');
    console.error(e);
});