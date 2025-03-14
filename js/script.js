const HEX = '0123456789ABCDEF';
let btnConfirmarHex;
let btnConfirmarRGB;
let edtCor;
let edtCorVermelho;
let edtCorVerde;
let edtCorAzul;
let divRegionRGB;
let divRegionHex;
let pHexPascalCodeRegionHex;
let pHexPascalCodeRegionRGB;
let pHexHtmlCode;
let pRGBCode;

function getCode(value)
{
    return '0'.repeat(6 - value.length) + value;
}

function getRGBColor(value)
{
    let rgbR = (HEX.indexOf(value[0]) * Math.pow(16, 1)) + (HEX.indexOf(value[1]) * Math.pow(16, 0));
    let rgbG = (HEX.indexOf(value[2]) * Math.pow(16, 1)) + (HEX.indexOf(value[3]) * Math.pow(16, 0));
    let rgbB = (HEX.indexOf(value[4]) * Math.pow(16, 1)) + (HEX.indexOf(value[5]) * Math.pow(16, 0));

    return `rgb(${rgbR}, ${rgbG}, ${rgbB})`;
}

function getHexColor(value)
{
    let hexR = value.slice(0, 2);
    let hexG = value.slice(2, 4);
    let hexB = value.slice(4, 6);

    return '$00' + `${hexB}${hexG}${hexR}`;
}

function btnConfirmarHexClick(e)
{
    let cor = edtCor.value.toString();
    cor = getCode(cor.toUpperCase().trim().replace('#', ''));
    
    let rgbColor = getRGBColor(cor);
    let hexColor = getHexColor(cor);    

    divRegionHex.style.backgroundColor = `#${cor}`;
    divRegionHex.innerHTML = `<p style="color:white">${cor}</p>`;

    pHexPascalCodeRegionHex.innerHTML = hexColor;
    pRGBCode.innerHTML = rgbColor;
}

function btnConfirmarRGBClick(e)
{
    let corVermelho = parseInt(edtCorVermelho.value).toString(16).toUpperCase();
    let corVerde = parseInt(edtCorVerde.value).toString(16).toUpperCase();
    let corAzul = parseInt(edtCorAzul.value).toString(16).toUpperCase();

    let cor = `rgb(${edtCorVermelho.value.toString()}, ${edtCorVerde.value.toString()}, ${edtCorAzul.value.toString()})`;

    divRegionRGB.style.backgroundColor = `${cor}`;
    divRegionRGB.innerHTML = `<p style="color:white">${cor}</p>`;

    pHexPascalCodeRegionRGB.innerHTML = '$00' + corAzul + corVerde + corVermelho;
    pHexHtmlCode.innerHTML = '#' + corVermelho + corVerde + corAzul;
}

function initializeColorHexRegion()
{
    btnConfirmarHex = document.querySelector('#btnConfirmarHex');
    edtCor = document.querySelector('#edtCor');
    divRegionHex = document.querySelector('#divRegionHex');            
    
    pRGBCode = document.querySelector('#pRgbCodeValueToHtmlRegionHex');                        
    pHexPascalCodeRegionHex = document.querySelector('#pHtmlHexValueToPascalRegionHex');                        
    
    btnConfirmarHex.onclick = btnConfirmarHexClick;    
}

function initializeColorRGBRegion()
{
    btnConfirmarRGB = document.querySelector('#btnConfirmarRGB');
    edtCorVermelho = document.querySelector('#edtCorVermelho');
    edtCorVerde = document.querySelector('#edtCorVerde');
    edtCorAzul = document.querySelector('#edtCorAzul');
    divRegionRGB = document.querySelector('#divRegionRGB');            

    pHexPascalCodeRegionRGB = document.querySelector('#pHtmlHexValueToPascalRegionRGB');                            
    pHexHtmlCode = document.querySelector('#pHtmlHexValueToHtmlRegionRGB');                                

    btnConfirmarRGB.onclick = btnConfirmarRGBClick;    
}

function initialize()
{
    initializeColorHexRegion();
    initializeColorRGBRegion();    
}


window.onload = initialize;

