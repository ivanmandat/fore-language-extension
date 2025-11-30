# ISQLCallback.AfterConstruction

ISQLCallback.AfterConstruction
-


# ISQLCallback.AfterConstruction


## Синтаксис


AfterConstruction(Var SQL: String);


## Параметры


SQL. Сформированный SQL-запрос
 с учётом тех изменений, которые могли быть произведены в [BeforeConstruction](ISQLCallback.BeforeConstruction.htm).


## Описание


Метод AfterConstruction вызывается
 после формирования запроса на выборку данных куба.


## Комментарии


Метод должен быть переопределён в пользовательском классе. В параметре
 SQL будет доступен полный сформированный запрос на выборку данных куба.
 При необходимости в него могут быть внесены последние изменения. После
 завершения процедуры AfterConstruction
 запрос будет выполнен.


## Пример


Пример использования приведён в описании метода [ISQLCallback.BeforeConstruction](ISQLCallback.BeforeConstruction.htm).


См. также:


[ISQLCallback](ISQLCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
