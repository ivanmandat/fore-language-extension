# IMsDiagnosticTestList.Item

IMsDiagnosticTestList.Item
-


# IMsDiagnosticTestList.Item


## Синтаксис


		Item(Index: Integer): [IMsDiagnosticTest](../IMsDiagnosticTest/IMsDiagnosticTest.htm);


## Параметры


Index. Индекс теста.


## Описание


Свойство Item возвращает тест
 с указанным индексом.


## Комментарии


Свойство обеспечивает возможность доступа к определённому тесту из коллекции.


Значение параметра Index
 должно быть неотрицательным числом, но меньше значения свойства [IMsDiagnosticTestList.Count](IMsDiagnosticTestList.Count.htm). Индекс
 первого теста в коллекции - «0», последнего - «[IMsDiagnosticTestList.Count](IMsDiagnosticTestList.Count.htm)
 - 1». Нумерация индексов - сквозная.


## Пример


Использование свойства приведено в примере для [IMsRamseyRessetTestSettings.Power](../IMsRamseyRessetTestSettings/IMsRamseyRessetTestSettings.Power.htm).


См. также:


[IMsDiagnosticTestList](IMsDiagnosticTestList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
