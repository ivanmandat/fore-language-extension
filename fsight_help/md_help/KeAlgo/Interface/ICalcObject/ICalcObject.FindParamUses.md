# ICalcObject.FindParamUses

ICalcObject.FindParamUses
-


# ICalcObject.FindParamUses


## Синтаксис


FindParamUses(Param: [IMsModelParam](KeMs.chm::/Interface/IMsModelParam/IMsModelParam.htm)):
 String;


## Параметры


Param. Параметр объекта алгоритма
 расчёта.


## Описание


Метод FindParamUses проверяет
 использование указанного параметра в объекте алгоритма расчёта.


## Комментарии


Для получения коллекции параметров используйте свойство [ICalcObject.Params](ICalcObject.Params.htm).
 Если указываемый параметр используется в каком-либо объекте алгоритма
 расчёта, то метод вернёт текст, содержащий информацию о месте использования.


## Пример


Использование метода приведено в примере для [ICalcObject.FillSelSetFromParams](ICalcObject.FillSelSetFromParams.htm).


См. также:


[ICalcObject](ICalcObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
