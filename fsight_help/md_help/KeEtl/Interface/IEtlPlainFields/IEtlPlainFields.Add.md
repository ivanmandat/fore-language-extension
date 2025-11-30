# IEtlPlainFields.Add

IEtlPlainFields.Add
-


# IEtlPlainFields.Add


## Синтаксис


Add: [IEtlPlainField](../IEtlPlainField/IEtlPlainField.htm);


## Описание


Метод Add добавляет новое поле
 входа/выхода объекта задачи ETL.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    EtlTask: IEtlTask;

	    Join: IEtlPlainDataJoin;

	    Input: IEtlPlainInput;

	    Fields: IEtlPlainFields;

	    Field: IEtlPlainField;

	Begin

	    MB := MetabaseClass.Active;

	    Object := MB.ItemById("ETL").Edit;

	    EtlTask := Object As IEtlTask;

	    Join := EtlTask.Item(0) As IEtlPlainDataJoin;

	    Input := Join.PlainInputs.Item(0);

	    Fields := Input.Fields;

	    Field := Fields.Add;

	    Object.Save;

	End Sub UserProc;


После выполнения примера в переменной «Field» будет содержаться новое
 поле первого входа объекта задачи ETL. Тип объекта задачи ETL - Соединение.
 Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainFields](IEtlPlainFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
