# PrxDocument.refresh

PrxDocument.refresh
-


# PrxDocument.refresh


## Синтаксис


refresh (args);


## Параметры


args. Параметр обновления текстового листа отчета, один из следующих элементов перечисления [PP.Prx.Property](../../../Enums/PP.Prx.Property.htm):


-
Recalc. Полное обновление отчета (по умолчанию);


-
ControlValue. Обновление значений элементов управления;


-
DimSelection. Обновление отметки измерений;


-
ActiveSheet. Обновление активного листа.


## Описание


Метод refresh осуществляет полное или частичное обновление текстового листа регламентного отчета.


## Комментарии


При вызове метода генерируется событие [PrxDocument.MetadataChanged](PrxDocument.MetadataChanged.htm), в аргументах которого - значение установленного параметра args.


## Пример


Пример использования метода приведен в описании события [PrxDocument.MetadataChanged](PrxDocument.MetadataChanged.htm).


См. также:


[PrxDocument](PrxDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
