# WbkRibbon.MetadataChanged

WbkRibbon.MetadataChanged
-


# WbkRibbon.MetadataChanged


## Синтаксис


MetadataChanged: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие MetadataChanged наступает
 при изменении метаданных компонента.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [WbkRibbon](../../../Components/TimeSeries/WbkRibbon/WbkRibbon.htm)
 с наименованием «ribbon » (см. «[Пример
 создания компонента WbkRibbon](../../../Components/TimeSeries/WbkRibbon/Example_WbkRibbon.htm)»).


// Зададим событие
ribbon.MetadataChanged.add(function()
{
  console.log("Метаданные изменены");
});

После выполнения примера при изменении метаданных в консоль будет выведено
 сообщение.


См. также:


[WbkRibbon](WbkRibbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
