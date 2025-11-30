# Конструктор MapTerritoryTranscript

Конструктор MapTerritoryTranscript
-


# Конструктор MapTerritoryTranscript


## Синтаксис


PP.MapTerritoryTranscript (settings);


## Параметры


settings. JSON-объект со значениями свойств компонента.


## Описание


Конструктор MapTerritoryTranscript создает экземпляр класса [MapTerritoryTranscript](MapTerritoryTranscript.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) (см. «[Размещение карты на HTML странице](../../../Components/MapChart/HTML_layout.htm)») с наименованием «map», [xml-фала](../../../Components/MapChart/xml_specification/xml-specification.htm) с настройками карты и топоосновы Russia.svg.


Создадим функцию createTerritoryTranscript(), при выполнении которой на карту будет добавлена расшифровка территорий. Данная функция добавляется после строки map.addToNode(document.getElementById("map-content")).


function createTerritoryTranscript()


 {


   var territorySettings = {


  //[полная настройка расшифровки территорий в формате JSON](../../../Components/MapChart/xml_specification/MapChart/MapTerritoryTranscript/Territory_exmpl.htm)


   }


//определяем карту


   territorySettings.Chart = map;


//определяем словарь элементов


   territorySettings.Dictionary = map.getItemsDictionary();


//создаем расшифровку территорий


   var territoryTranscript = new PP.MapTerritoryTranscript(territorySettings);


//отрисовка расшифровки территорий


   territoryTranscript.draw();


 }


//функция выполняется при загрузке страницы


 map.Loaded.add(createTerritoryTranscript);


После выполнения примера на карту будет добавлена расшифровка территорий, внешний вид которой зависит от JSON-настроек.


См. также:


[MapTerritoryTranscript](MapTerritoryTranscript.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
