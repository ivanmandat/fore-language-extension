# Конструктор ScaleEffect

Конструктор ScaleEffect
-


# Конструктор ScaleEffect


## Синтаксис


PP.ScaleEffect(settings)


## Параметры


settings. JSON-объект со значениями
 свойств экземпляра класса.


## Описание


Конструктор ScaleEffect создает
 экземпляр класса [ScaleEffect](ScaleEffect.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [MapChart](dhtmlMapChart.chm::/components/mapchart/mapchart.htm)
 с наименованием «map» (см. «[Размещение
 карты на HTML странице](dhtmlMapChart.chm::/components/mapchart/html_layout.htm)»). Для создания карты используйте топооснову
 World.svg и файл с json-настройками карты MapData_World.xml. Добавим обработчик
 события [MapChart.Loaded](dhtmlMapChart.chm::/Classes/map/mapchart/mapchart.loaded.htm)
 - функцию для установки эффекта увеличения отдельной области карты:


	map.Loaded.add(function () {
	    map.getShape("AU").setEffect(new PP.ScaleEffect({ "Scale": "2" }))
	});

После выполнения примера при наведении курсора на область карты с идентификатором
 «AU» (Австралия) данная область будет увеличена в два раза.


См. также:


[ScaleEffect](ScaleEffect.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
