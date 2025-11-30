# Конструктор MapFiguredArrow

Конструктор MapFiguredArrow
-


# Конструктор MapFiguredArrow


## Синтаксис


PP.MapFiguredArrow (settings);


## Параметры


settings. JSON-объект со значениями
 свойств компонента.


## Описание


Конструктор MapFiguredArrow
 создает экземпляр класса [MapFiguredArrow](MapFiguredArrow.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [MapChart](../../../Components/MapChart/MapChart.htm) (см.
 «[Размещение карты
 на HTML странице](../../../Components/MapChart/HTML_layout.htm)») с наименованием «map», [xml-файла](../../../Components/MapChart/xml_specification/xml-specification.htm)
 с настройками карты и топоосновы Russia.svg.


Создадим функцию addFiguredArrow(), при выполнении которой на карту
 будет добавлена фигурная стрелка. Данная функция добавляется после строки
 map.addToNode(document.getElementById("map-content")).


function addFiguredArrow()


{


  var figuredArrowSettings = {


   //[полная
 настройка стрелки в формате JSON](../../../Components/MapChart/xml_specification/MapChart/MapArrows/Arrow_exmpl.htm)


  }


//определяем карту


  figuredArrowSettings.Chart = map;


//определяем словарь элементов


  figuredArrowSettings.Dictionary = map.getItemsDictionary();


//создаем фигурную стрелку


  var figuredArrow = new PP.MapFiguredArrow(figuredArrowSettings);


//размещаем стрелку на карте


  figuredArrow.draw(document.getElementById("ar1"));


}


//функция выполняется при
 загрузке карты


map.Loaded.add(addFiguredArrow);


После выполнения примера на карте будет размещена фигурная стрелка,
 внешний вид которой определяется JSON-настройками.


См. также:


[MapFiguredArrow](MapFiguredArrow.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
