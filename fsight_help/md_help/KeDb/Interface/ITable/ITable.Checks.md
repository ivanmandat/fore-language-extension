# ITable.Checks

ITable.Checks
-


# ITable.Checks


## Синтаксис


Checks: [ITableChecks](../ITableChecks/ITableChecks.htm);


## Описание


Свойство Checks возвращает ограничения таблицы.


## Пример


Для выполнения примера предполагается наличие в репозитории таблицы с идентификатором "TABLE_1". В таблице имеется числовое поле с идентификатором "NUM_FIELD".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    Table: ITable;

	    Checks: ITableChecks;

	    Check: ITableCheck;

	Begin

	    MB := MetabaseClass.Active;

	    Object := MB.ItemById("TABLE_1").Edit;

	    Table := Object As ITable;

	    Checks := Table.Checks;

	    Check := Checks.Add;

	    Check.Id := "CheckX";

	    Check.Name := "Ограничение значения цифрового поля";

	    Check.Text := "ABS(NUM_FIELD)<100";

	    Object.Save;

	End Sub UserProc;


После выполнения примера в таблице будет создано новое ограничение. Данное ограничение будет проверять абсолютное значение числового поля "NUM_FIELD".


См.также:


[ITable](ITable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
