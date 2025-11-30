# ITimeSeries.CheckCompatible

ITimeSeries.CheckCompatible
-


# ITimeSeries.CheckCompatible


## Синтаксис


CheckCompatible(OtherSerie: [ITimeSeries](ITimeSeries.htm); [ThrowException: Boolean = True]): Boolean;


## Параметры


OtherSerie. Ряд, с которым проверяется совместимость;


ThrowException. Признак того, генерировать ли исключительную ситуацию, если ряды не совместимы. Необязательный параметр, значение по умолчанию True, т.е. исключительная ситуация генерируется.


## Описание


Метод CheckCompatible проверяет текущий и указанный ряды на совместимость.


## Комментарии


При вызове метода проверяется соответствие:


-
динамик рядов;


-
начальных дат рядов;


-
длин рядов;


-
дней начала недели (для недельной и дневной динамик);


-
выходных дней (для дневной динамики).


По результатам проверки CheckCompatible возвращает признак совместимости рядов:


-
True. Ряды совместимы;


-
False. Ряды несовместимы.


## Пример


Использование метода приведено в примере для [TimeSeries.CreateEx](../../Class/TimeSeries/TimeSeries.CreateEx.htm).


См. также:


[ITimeSeries](ITimeSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
