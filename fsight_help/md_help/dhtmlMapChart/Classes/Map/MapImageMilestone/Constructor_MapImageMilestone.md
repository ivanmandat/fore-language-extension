# Конструктор MapImageMilestone

Конструктор MapImageMilestone
-


# Конструктор MapImageMilestone


## Синтаксис


PP.MapImageMilestone(settings);


## Параметры


settings. JSON-объект со значениями свойств компонента.


## Описание


Конструктор MapImageMilestone создает экземпляр класса [MapImageMilestone](MapImageMilestone.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) (см. «[Размещение карты на HTML странице](../../../Components/MapChart/HTML_layout.htm)») с наименованием «map», [xml-фала](../../../Components/MapChart/xml_specification/xml-specification.htm) с настройками карты и топоосновы Russia.svg.


Xml-файл должен содержать настройку [слоя](../../../Components/MapChart/xml_specification/MapChart/MapLayers/Layers_exmpl.htm) с идентификатором «Regions».


Создадим функцию addImageMilestone(), при выполнении которой на карту будет добавлен значок с изображением. Данная функция добавляется после строки map.addToNode(document.getElementById("map-content")).


function addImageMilestone() {


   var imageMilestoneSettings = {


//[полная настройка значка с изображением](../../../Components/MapChart/xml_specification/MapChart/MapLayers/MapLayer/Milestones/Milestones_exmpl.htm)


   }


//определяем карту для значка


   imageMilestoneSettings.Chart = map;


//создаем значок с изображением


   var imageMilestone = new PP.MapImageMilestone(imageMilestoneSettings);


//определяем слой для значка


   map.getLayer("Regions").Milestones = imageMilestone;


//отрисовка значка


   map.getLayer("Regions").Milestones.draw(map.getScale());


}


//функция выполняется при загрузке страницы


map.Loaded.add(addImageMilestone);


После выполнения примера на карте появится значок с изображением. Внешний вид и расположение значка зависит от JSON-настроек.


См. также:


[MapImageMilestone](MapImageMilestone.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
