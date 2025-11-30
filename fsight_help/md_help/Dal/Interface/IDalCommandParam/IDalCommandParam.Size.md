# IDalCommandParam.Size

IDalCommandParam.Size
-


# IDalCommandParam.Size


## Синтаксис


Size: Integer;


## Описание


Свойство Size определяет максимальную
 длину значения, которое может принимать параметр.


## Комментарии


Данное свойство актуально для параметров, имеющих тип данных String,
 и при многоразовом выполнении команды с различными значениями параметров.


При выполнении команды, если встречается значение параметра больше предыдущего
 - происходит пересоздание параметра с длиной соответствующей текущему
 значению параметра. Для ускорения выполнения команды путем исключения
 ситуаций пересоздания параметров необходимо задавать свойство Size.


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «BD». В данной базе данных создана таблица с физическим
 именем «Table_1» и содержащая поля «Field1» и «Field2».


Добавьте ссылки на системные сборки: Dal, Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Com: IDalCommand;

	    Params: IDalCommandParams;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

	    Com := DB.Connection.CreateCommand("Insert Into Table_1 (Field1,Field2) Values(:1,:2)");

	    Com.Parse;

	    Params := Com.Params;

	    Params.Item(0).DataType := DbDataType.Integer;

	    Params.Item(1).DataType := DbDataType.String;

	    Params.Item(1).Size := 20;

	    Com.MaxParamsRows := 4;

	    //Первое значение

	    Params.Item(0).Value := 1;

	    Params.Item(1).Value := "Первый";

	    Com.NextParamsRow;

	    //Второе значение

	    Params.Item(0).Value := 2;

	    Params.Item(1).Value := "Второй";

	    Com.NextParamsRow;

	    //Третье значение

	    Params.Item(0).Value := 3;

	    Params.Item(1).Value := "Третий";

	    Com.NextParamsRow;

	    //Четвертое значение

	    Params.Item(0).Value := 4;

	    Params.Item(1).Value := "Четвертый";

	    Com.Execute;

	    Com.Close;

	End Sub UserProc;


После выполнения примера произойдет подключение к базе данных «BD» и
 выполнение SQL-запроса, осуществляющего вставку записей в таблицу «Table_1».
 Значения полей передаются в виде коллекции значений параметров команды,
 выполняемой на сервере БД.


См. также:


[IDalCommandParam](IDalCommandParam.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
