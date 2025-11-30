# IEaxDataAreaSources.Add

IEaxDataAreaSources.Add
-


# IEaxDataAreaSources.Add


## Синтаксис


		Add(CubeInstance: [ICubeInstance](KeCubes.chm::/Interface/ICubeInstance/ICubeInstance.htm),
		 [DestKey: Integer = -1]): [IEaxDataAreaSource](../IEaxDataAreaSource/IEaxDataAreaSource.htm);


## Параметры


CubeInstance. Открытый экземпляр
 куба;


DestKey. Ключ варианта отображения
 куба.


## Описание


Метод Add добавляет источник
 данных аналитической области в коллекцию.


Примечание.
 Если в коллекции уже содержится заданный экземпляр куба, то метод будет
 возвращать данный экземпляр куба из коллекции. Источники данных аналитической
 области в коллекции не дублируются.


См. также:


[IEaxDataAreaSources](IEaxDataAreaSources.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
