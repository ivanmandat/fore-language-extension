# ITableField.Size

ITableField.Size
-


# ITableField.Size


## Синтаксис


Size: Integer;


## Описание


Свойство Size определяет общую
 длину поля.


## Пример


Для выполнения примера в репозитории предполагается наличие таблицы
 с идентификатором TABLE_S.


Добавьте ссылки на системные сборки: Dal, DB, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Table: ITable;

	    Field: ITableField;

	Begin

	    MB := MetabaseClass.Active;

	    // Получаем таблицу

	    Table := MB.ItemById("TABLE_S").Edit As ITable;

	    // Добавляем поле

	    Field := Table.Fields.Add;

	    // Задаем настройки

	    Field.DataType := DbDataType.Float;

	    Field.Id := "NewFloat";

	    Field.Name := "Новое вещественное поле";

	    Field.Size := 10;

	    Field.Precision := 3;

	    (Table As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в таблице будет создано новое вещественное
 поле. Общая длина поля - 10 символов, количество десятичных знаков - 3.


См. также:


[ITableField](ITableField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
