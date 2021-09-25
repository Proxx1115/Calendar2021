// import { calendar2021, months, colors } from "./data";
let calendar2021 = {
  Jan: { 1: "Сайхан амарна" },
  Feb: {
    1: "Сагсны тэмцээнтэй",
    3: "Шагнал гардуулна даа",
    17: "Жавхлан багшийн лаб 2-ыг хийнэ",
  },
  Mar: {
    2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ",
    6: "Энд юу бичье дээ байз",
    8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ",
  },
  Apr: { 1: "Бүгдээрээ худлаа ярьцаагаагаарай" },
  May: { 10: "Энэ сард ч ёстой юу ч болдоггүй сар даа" },
  Jun: { 6: "Жавхлан багшийн төрсөн өдөр" },
  Jul: { 4: "Хичээл амарсаан ураа" },
  Aug: { 1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ" },
  Sept: { 1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа" },
  Oct: { 13: "Сур сур бас дахин сур" },
  Nov: { 2: "Сурсаар л бай" },
  Dec: {
    20: "Өвлийн семистер хаагдах нь дээ",
    30: "Дүн гаргаж дууслаа баярлалаа баяртай",
  },
};
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const colors = [
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];

const spDays = document.querySelector(".specialDays");
let renderSpecials = (number, day, color) => {
  let html = `
        <div class = "specialP">
            <div class = "front">
                <div class = "oval" style = "background-color : ${color}""></div>
                <div><p>${months[number]} - ${day}</p></div>
            </div>
            <div class = "back">
                <div><p>${calendar2021[months[number]][day]}</p></div>
            </div>
        </div>
    `;
  spDays.insertAdjacentHTML("beforeend", html);
};
var color = 0;
const render_month_cal = (number) => {
  const dt = new Date();
  dt.setMonth(number);
  const md = document.querySelector(".days" + number);
  const wd = document.querySelector(".weekdays" + number);
  const currentMonthld = new Date(
    dt.getFullYear(),
    dt.getMonth() + 1,
    0
  ).getDate();
  const lastMonthld = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
  dt.setDate(1);
  let start_index = dt.getDay();
  dt.setDate(currentMonthld);
  let last_index = dt.getDay();
  let html = "";
  for (let i = lastMonthld - start_index + 1; i <= lastMonthld; i++) {
    html += `<div class = "prev">${i}</div>`;
  }
  for (let i = number; i < number + 1; i++) {
    for (let j = 1; j <= currentMonthld; j++) {
      if (calendar2021[months[i]][j] != undefined) {
        html += `<div class = "active" style = "background : ${colors[color]}">${j}</div>`;
        renderSpecials(number, j, colors[color]);
        color++;
      } else {
        html += `<div>${j}</div>`;
      }
    }
  }
  if (last_index == 6) md.innerHTML = html;

  for (let i = 1; i < 7 - last_index; i++) {
    html += `<div class = "next">${i}</div>`;
    md.innerHTML = html;
  }
  wd.innerHTML = `<div class="wd">Sun</div>
                    <div class="wd">Mon</div>
                    <div class="wd">Tue</div>
                    <div class="wd">Wed</div>
                    <div class="wd">Thu</div>
                    <div class="wd">Fri</div>
                    <div class="wd">Sat</div>`;
};

const init = () => {
  console.log(colors);
  for (i = 0; i <= 12; i++) {
    render_month_cal(i);
  }
};
window.addEventListener("load", init);
