const {app, BrowserWindow} = require('electron')

app.on('window-all-closed', () => {
    app.quit()
})

let win

app.on('ready', () => {
    win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadURL(`file://${__dirname}/renderer/index.html`)
    win.on('closed', () => {
        win = null
    })
})
