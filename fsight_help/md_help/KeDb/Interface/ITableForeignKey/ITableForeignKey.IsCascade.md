# ITableForeignKey.IsCascade

ITableForeignKey.IsCascade
-


# ITableForeignKey.IsCascade


## Синтаксис


IsCascade: Boolean;


## Описание


Свойство IsCascade определяет,
 удалять ли записи в текущей таблице при их удалении в связанной.


## Комментарии


Допустимые значения:


	- True. При удалении записи
	 в таблице, на которую ссылается внешний ключ, будут удалены все связанные
	 записи в таблице, содержащей внешний ключ;


	- False. Связанные записи
	 не удаляются.


## Пример


Использование свойства приведено в примере для [ITable.ForeignKeys](../ITable/ITable.ForeignKeys.htm).


См. также:


[ITableForeignKey](ITableForeignKey.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
