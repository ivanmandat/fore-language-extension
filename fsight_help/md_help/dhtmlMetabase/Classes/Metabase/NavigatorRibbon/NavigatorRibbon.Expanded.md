# NavigatorRibbon.Expanded

NavigatorRibbon.Expanded
-


# NavigatorRibbon.Expanded


## Синтаксис


Expanded: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Expanded наступает при
 разворачивании ленты инструментов.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [Navigator](../../../Components/Metabase/Navigator/Navigator.htm)
 с наименованием «nav» (см. «[Пример
 создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Добавим обработчик события Expanded:


// Получим компонент NavigatorRibbon
navRib = nav.getRibbonView();
// Добавим обработчик события
navRib.Expanded.add(function () { alert("Лента инструментов развернута") });
После выполнения примера при разворачивании ленты инструментов на экран
 будет выведено сообщение «Лента инструментов развернута».


См. также:


[NavigatorRibbon](NavigatorRibbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
