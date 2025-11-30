# IPrxDataIslandTotals.UseMethodFromDataSource

IPrxDataIslandTotals.UseMethodFromDataSource
-


# IPrxDataIslandTotals.UseMethodFromDataSource


## Синтаксис


UseMethodFromDataSource: Boolean;


## Описание


Свойство UseMethodFromDataSource
 возвращает признак расчета итогов используется методом, установленным
 для агрегации в источнике.


## Комментарии


Имеется в виду агрегация, настроенная непосредственно факту куба (серверная
 агрегация). Если свойство возвращает True,
 то итоги будут вычисляться по методу, установленному в [IStandardCubeFactBinding.AggregationType](KeCubes.chm::/Interface/IStandardCubeFactBinding/IStandardCubeFactBinding.AggregationType.htm)
 ;
 если нет привязки элемента к стандартному факту или если метод не установлен,
 то итоги вычисляются по методу, установленному [IPrxDataIslandTotals.MethodValue](IPrxDataIslandTotals.MethodValue.htm)
 (по умолчанию сумма).


См. также:


[IPrxDataIslandTotals](IPrxDataIslandTotals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
