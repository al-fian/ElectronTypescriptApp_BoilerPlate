import {app, ipcMain, BrowserWindow} from 'electron';
import * as path from "path";

let mainWindow: BrowserWindow;

app.on('ready', createWindow);

function createWindow():void {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 600,
        webPreferences: {  
            contextIsolation: true,
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js'),
        },
        show: false,
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html'));
    mainWindow.on('ready-to-show', () => mainWindow.show());
}