# ILanerSeries.MoveByKey

ILanerSeries.MoveByKey
-


# ILanerSeries.MoveByKey


## Синтаксис


MoveByKey(SourceKey: Integer; DestinationKey: Integer;
 [MoveAfter: Boolean = True]);


## Параметры


SourceKey. Ключ ряда перемещаемого
 ряда;


DestinationKey. Ключ ряда,
 относительно позиции которого необходимо переместить исходный ряд;


MoveAfter. Параметр, определяющий
 порядок перемещения ряда. Необязательный параметр. Значение по умолчанию
 - True.


## Описание


Метод MoveByKey осуществляет
 перемещение рядов в коллекции по ключам.


## Комментарии


Перемещение ряда зависит от параметра MoveAfter.
 Если значение данного параметра True,
 то ряд с ключом SourceKey будет
 помещен после ряда с ключом DestinationKey.
 Если значение параметра MoveAfter -
 False, то ряд с ключом SourceKey
 будет помещен перед рядом с ключом DestinationKey.


См. также:


[ILanerSeries](ILanerSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
