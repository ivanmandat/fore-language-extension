# Конструктор BrushEffect

Конструктор BrushEffect
-


# Конструктор BrushEffect


## Синтаксис


PP.BlurEffect (settings)


## Параметры


settings. JSON-объект со значениями
 свойств экземпляра класса.


## Описание


Конструктор BrushEffect создает
 экземпляр класса [BrushEffect](BrushEffect.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm)
 с наименованием «map» (см. «[Размещение
 карты на HTML странице](dhtmlMapChart.chm::/Components/MapChart/HTML_layout.htm)»). Для создания карты используйте топооснову
 World.svg и файл с json-настройками карты MapData_World.xml. Добавим обработчик
 события [MapChart.Loaded](dhtmlMapChart.chm::/Classes/Map/MapChart/MapChart.Loaded.htm)
 - функцию для установки эффекта заливки к отдельной области карты:


map.Loaded.add(function
 (sender, args) {


    map.getShape("AU").setEffect(new PP.BrushEffect({ Brush: { SolidColorBrush:
 { Color: "#FFF0F5"}} }));


})


После выполнения примера при наведении курсора на область карты с идентификатором
 «AU» (Австралия) будет изменен цвет заливки данной области.


См. также:


[BrushEffect](BrushEffect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
