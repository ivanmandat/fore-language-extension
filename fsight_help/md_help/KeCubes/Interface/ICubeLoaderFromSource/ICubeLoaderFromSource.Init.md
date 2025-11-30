# ICubeLoaderFromSource.Init

ICubeLoaderFromSource.Init
-


# ICubeLoaderFromSource.Init


## Синтаксис


Init(Source: Object);


## Параметры


Source. Источник данных, описываемый интерфейсом [IDtProvider](kedt.chm::/interface/idtprovider/idtprovider.htm).


## Описание


Метод Init настраивает параметры привязок измерений и фактов на основании полей источника данных.


## Комментарии


При выполнении метода будут заполнены коллекции [DimensionBindings](ICubeLoaderFromSource.DimensionBindings.htm) и [FactBindings](ICubeLoaderFromSource.FactBindings.htm). Коллекции будут заполняться на основании типов полей источника данных по следующему алгоритму:


-
Поле в источнике имеет тип Float. Будет создана привязка для факта в коллекции [FactBindings](ICubeLoaderFromSource.FactBindings.htm);


-
Поле в источнике имеет тип DateTime. Будет создана привязка для календарного измерения с дневной динамикой в коллекции [DimensionBindings](ICubeLoaderFromSource.DimensionBindings.htm);


-
Поле в источнике имеет тип отличный от Float и DateTime. Будет создана привязка для измерения в коллекции [DimensionBindings](ICubeLoaderFromSource.DimensionBindings.htm).


## Пример


Пример использования приведен в описании метода [Load](ICubeLoaderFromSource.Load.htm).


См. также:


[ICubeLoaderFromSource](ICubeLoaderFromSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
