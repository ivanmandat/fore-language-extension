# IDalCommandParam.Value

IDalCommandParam.Value
-


# IDalCommandParam.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value определяет значение
 параметра SQL-запроса, используемое при выполнении команды на сервере
 БД.


## Комментарии


Значение, указываемое в данном свойстве, должно иметь такой же тип данных,
 какой [установлен для параметра](IDalCommandParam.DataType.htm).
 Если параметр имеет пользовательский тип, то в качестве значения указывается
 ссылка на поток данных. Более подробно работа с полями пользовательского
 типа описана в базе знаний в статье «[Работа
 с полями, имеющими пользовательский тип данных](KnowledgeBase.chm::/01_Fore/KnowledgeBase_KB000031.htm)».


## Пример


Для выполнения примера предполагается наличие в репозитории базы данных
 с идентификатором «BD».


Добавьте ссылки на системные сборки: Dal, Db, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Com: IDalCommand;

	    Params: IDalCommandParams;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

	    Com := DB.Connection.CreateCommand("");

	    Com.SQL := "Select * From Table_1 Where Num1 > :Param And Num2 < :Param1";

	    Com.Parse;

	    Params := Com.Params;

	    For i := 0 To Params.Count - 1 Do

	        Params.Item(i).Value := (i + 2) * 10;

	    End For;

	    Com.Execute;

	    Com.Close;

	End Sub UserProc;


После выполнения примера произойдет подключение к базе данных «BD»,
 после чего произойдёт выполнение SQL-запроса, который выбирает все записи
 из таблицы «Table_1», для которых значения полей «Num1» и «Num2» удовлетворяют
 введенным параметрам. Значения параметров вычисляются в цикле.


См. также:


[IDalCommandParam](IDalCommandParam.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
