# IEtlPlainFields.Item

IEtlPlainFields.Item
-


# IEtlPlainFields.Item


## Синтаксис


Item(Index: Integer): [IEtlPlainField](../IEtlPlainField/IEtlPlainField.htm);


## Параметры


Index.
 Индекс поля.


## Описание


Свойство Item возвращает объект,
 содержащий поле входа/выхода объекта задачи ETL.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Join: IEtlPlainDataJoin;

	    Input: IEtlPlainInput;

	    Fields: IEtlPlainFields;

	    Field: IEtlPlainField;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Join := EtlTask.Item(0) As IEtlPlainDataJoin;

	    Input := Join.PlainInputs.Item(0);

	    Fields := Input.Fields;

	    Field := Fields.Item(0);

	    s := Field.Id;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться идентификатор
 первого поля первого объекта объекта задачи ETL. Тип объекта задачи ETL
 - Соединение. Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainFields](IEtlPlainFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
