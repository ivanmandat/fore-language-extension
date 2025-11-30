# NavigatorRibbon.Collapsed

NavigatorRibbon.Collapsed
-


# NavigatorRibbon.Collapsed


## Синтаксис


Collapsed: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие Collapsed наступает
 при сворачивании ленты инструментов.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [Navigator](../../../Components/Metabase/Navigator/Navigator.htm)
 с наименованием «nav» (см. «[Пример
 создания компонента Navigator](../../../Components/Metabase/Navigator/Navigator_Example.htm)»). Добавим обработчик события Collapsed:


// Получим компонент NavigatorRibbon
navRib = nav.getRibbonView();
// Добавим обработчик события
navRib.Collapsed.add(function () { alert("Лента инструментов свернута") });
После выполнения примера при сворачивании ленты инструментов на экран
 будет выведено сообщение «Лента инструментов свернута».


См. также:


[NavigatorRibbon](NavigatorRibbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
