# Размещение карты на HTML странице

Размещение карты на HTML странице
-


# Размещение карты на HTML странице


Для размещения карты на HTML странице понадобится следующий набор файлов:


-
файл с топоосновой в формате SVG (напимер, Russia.svg);


-
[xml-файл](xml_specification/xml-specification.htm) с настройками для карты (данные для настроек должны быть представлены в формате [JSON](xml_and_json.htm));


-
библиотека DHTML-компонентов PP.js;


-
Библиотека для работы с базовыми классами графических компонентов PP.GraphicsBase.js;


-
библиотека для работы с картой PP.MapChart;


-
файл со стилями PP.css.


В теге HEAD добавьте ссылки на js- и css-файлы (PP.js, MapChart.js, PP.css).


В теге BODY добавьте атрибут onresize:


<body onresize="onresize()">


<div id="map"></div>


</body>


В теге SCRIPT добавьте следующий код:


    //Создаем переменную, которая будет содержать карту
    var map;
    function createMap(mapData)
    {
        if (map) map.dispose();
        var mapContent = document.getElementById("map-content");
        //получаем JSON-настройки карты
        var settings = JSON.parse(mapData);
        //определяем топооснову
        settings.MapChart.Topobase = "MapData/topobase/SVG/Russia.svg";
        settings.MapChart.ParentNode = "map";
        //путь к папке с картинками
        settings.MapChart.ImagePath = "PP_img/";
        //создаем карту
        map = new PP.MapChart(settings.MapChart ? settings.MapChart : settings);
        window.onresize();
    }
    //запрос для получения файла с JSON-настройками карты
    var Request = new PP.Ajax(
    {
        Url: "MapData/MapData_russia.xml?d=" + (new Date).toTimeString(),
        Success: function (sender, args)
        {
            createMap(args.ResponseText);
            Request.dispose();
        }
    });
    Request.send();
    //Функция для обновления размеров карты
    function updateSize()
    {
        if (map)
        {
            map.setHeight(document.documentElement.clientHeight - 60);
            map.setWidth(document.documentElement.clientWidth);
        }
    }
    var idTime;
    //функция для установки размеров карты в соответствии с размерами окна
    window.onresize = function ()
    {
        if (idTime) clearTimeout(idTime);
        idTime = setTimeout(updateSize, 100);
    }

После выполнения примера на html-странице будет размещена карта с топоосновой Russia.svg. Внешний вид карты зависит от настроек, указанных в [xml-файле](xml_specification/xml-specification.htm):


![](chartmap18.gif)


См. также:


[Создание DHTML-карты](MapChart_creation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
