# IRdsImportSchema.IsQuery

IRdsImportSchema.IsQuery
-


# IRdsImportSchema.IsQuery


## Синтаксис


IsQuery: Boolean;


## Описание


Свойство IsQuery определяет,
 используется ли в качестве источника для импорта SQL-запрос.


## Комментарии


Допустимые значения:


	- True. Импорт данных
	 выполняется с помощью SQL-запроса;


	- False. Импорт данных
	 выполняется из указанной таблицы.


Для задания текста SQL-запроса/физического имени таблицы используйте
 свойство [IRdsImportSchema.TableName](IRdsImportSchema.TableName.htm).


См. также:


[IRdsImportSchema](IRdsImportSchema.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
