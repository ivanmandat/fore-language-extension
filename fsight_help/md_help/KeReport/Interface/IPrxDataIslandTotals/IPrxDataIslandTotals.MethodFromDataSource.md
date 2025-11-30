# IPrxDataIslandTotals.MethodFromDataSource

IPrxDataIslandTotals.MethodFromDataSource
-


# IPrxDataIslandTotals.MethodFromDataSource


## Синтаксис


MethodFromDataSource: [TriState](ForeSys.chm::/Enums/TriState.htm);


## Описание


Свойство MethodFromDataSource
 определяет использование метода, установленного для агрегации в источнике,
 для расчета итогов.


## Комментарии


Имеется в виду агрегация, настроенная непосредственно факту куба (серверная
 агрегация). При установки данного свойства в [TriState.OnOption](ForeSys.chm::/Enums/TriState.htm)
 итоги будут вычисляться по методу, установленному в [IStandardCubeFactBinding.AggregationType](KeCubes.chm::/Interface/IStandardCubeFactBinding/IStandardCubeFactBinding.AggregationType.htm)

 ; если нет привязки элемента к стандартному факту или если метод не установлен,
 то итоги вычисляются по методу, установленному [IPrxDataIslandTotals.MethodValue](IPrxDataIslandTotals.MethodValue.htm)
 (по умолчанию сумма).


См. также:


[IPrxDataIslandTotals](IPrxDataIslandTotals.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
