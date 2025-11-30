# Конструктор MapSimpleArrow

Конструктор MapSimpleArrow
-


# Конструктор MapSimpleArrow


## Синтаксис


PP.MapSimpleArrow (settings)


## Параметры


settings. JSON-объект со значениями свойств компонента.


## Описание


Конструктор MapSimpleArrow создает экземпляр класса [MapSimpleArrow](MapSimpleArrow.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) (см. «[Размещение карты на HTML странице](../../../Components/MapChart/HTML_layout.htm)») с наименованием «map», [xml-фала](../../../Components/MapChart/xml_specification/xml-specification.htm) с настройками карты и топоосновы Russia.svg.


Создадим функцию addSimpleArrow(), при выполнении которой на карту будет добавлена простая стрелка. Данная функция добавляется после строки map.addToNode(document.getElementById("map-content")).


  function addSimpleArrow()


  {


  var simpleArrowSettings = {


//[настройка стрелки в формате JSON](../../../Components/MapChart/xml_specification/MapChart/MapArrows/Arrow_exmpl.htm)


  }


//определяем карту


  simpleArrowSettings.Chart = map;


//определяем словарь элементов


  simpleArrowSettings.Dictionary = map.getItemsDictionary();


//создаем простую стрелку стрелку


  var simpleArrow = new PP.MapSimpleArrow(simpleArrowSettings);


//добавляем стрелку на страницу


  simpleArrow.draw(document.getElementById("ar1"));


  }


//функция выполняется при загрузке карты


  map.Loaded.add(addSimpleArrow);


После выполнения примера на карту будет добавлена простая стрелка, внешний вид которой зависит от JSON-настроек.


См. также:


[MapSimpleArrow](MapSimpleArrow.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
