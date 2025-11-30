# IDalCommand.MaxParamsRows

IDalCommand.MaxParamsRows
-


# IDalCommand.MaxParamsRows


## Синтаксис


MaxParamsRows: Integer;


## Описание


Свойство MaxParamsRows определяет
 максимальное количество обрабатываемых наборов значений параметров.


## Комментарии


Данное свойство определяет максимальное количество наборов, которые
 могут быть заданы и обработаны при вызове метода [Execute](IDalCommand.Execute.htm).
 Значения параметров задаются в коллекции [Params](IDalCommand.Params.htm).
 Переход к следующему набору осуществляется при вызове метода [NextParamsRow](IDalCommand.NextParamsRow.htm).


Примечание.
 Перед указанием значения свойства [MaxParamsRows](IDalCommand.MaxParamsRows.htm)
 для каждого параметра должен быть указан [тип
 данных](../IDalCommandParam/IDalCommandParam.DataType.htm).


Изначально курсор установлен на первом наборе параметров, поэтому количество
 переходов с помощью метода [NextParamsRow](IDalCommand.NextParamsRow.htm)
 должно быть на один меньше, чем количество заполняемых наборов.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «DB». В СУБД, на которую настроена база данных, имеется
 таблица «T_Table». В таблице созданы два поля: строковое и вещественное.


Добавьте ссылки на системные сборки: Dal, Db, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    DB: IDatabaseInstance;

	    Command: IDalCommand;

	    Params: IDalCommandParams;

	    Sql: String;

	    ParamRows, i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("DB").Open(Null) As IDatabaseInstance;

	    Sql := "Insert Into T_Table (Field, Field1) Values(:1,:2)";

	    Command := DB.Connection.CreateCommand(Sql);

	    Command.Type := DalCommandType.Text;

	    Command.Parse;

	    Command.Prepare;

	    Params := Command.Params;

	    //Указание типов параметров

	    Params.Item(0).DataType := DbDataType.String;

	    Params.Item(1).DataType := DbDataType.Float;

	    //Количество наборов параметров

	    ParamRows := 5;

	    Command.MaxParamsRows := ParamRows;

	    i := 1;

	    While i <= ParamRows Do

	        Params.Item(0).Value := "№ " + i.ToString;

	        Params.Item(1).Value := Math.RandBetween(0, i);

	        If i <> ParamRows Then

	            Command.NextParamsRow;

	        End If;

	        i := i + 1;

	    End While;

	    Command.Execute;

	End Sub UserProc;


При выполнении примера в таблицу будут вставлены пять записей. Для вставки
 предварительно формируются пять наборов параметров.


См. также:


[IDalCommand](IDalCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
