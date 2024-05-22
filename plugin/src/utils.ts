import { ExtractData } from './types';

function detectDevice(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.match(/Android/i)) {
        return 'android';
    } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
        return 'ios';
    } else {
        return 'desktop';
    }
}

function getOS(): string {
    const userAgent = navigator.userAgent;

    if (userAgent.match(/Windows/i)) {
        return 'Windows';
    } else if (userAgent.match(/Mac/i)) {
        return 'Mac';
    } else if (userAgent.match(/Linux/i)) {
        return 'Linux';
    } else {
        return 'Mobile';
    }
}

function getOrigin(): string {
    return window.location.origin;
}


function getThemeChanges(): number {
    let themeChanges = localStorage.getItem('themeChanges');

    if(!themeChanges){
        themeChanges = '0';
    }

    return parseInt(themeChanges);
}

export async function extractData(): Promise<ExtractData> {
    return {
        device: detectDevice(),
        os: getOS(),
        origin: getOrigin(),
        themeChanges: getThemeChanges(),
    };
}