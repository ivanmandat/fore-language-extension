# IEtlPlainFields.FindById

IEtlPlainFields.FindById
-


# IEtlPlainFields.FindById


## Синтаксис


FindById(Id: String): [IEtlPlainField](../IEtlPlainField/IEtlPlainField.htm);


## Параметры


Id. Идентификатор
 поля.


## Описание


Метод FindById осуществляет
 поиск по идентификатору и возвращает объект, содержащий поле входа/выхода
 объекта задачи ETL.


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

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    Object := MB.ItemById("ETL").Edit;

	    EtlTask := Object As IEtlTask;

	    Join := EtlTask.Item(0) As IEtlPlainDataJoin;

	    Input := Join.PlainInputs.Item(0);

	    Fields := Input.Fields;

	    Field := Fields.FindById("FIELD00");

	    s := Field.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 поля с идентификатором «FIELD00». Тип объекта задачи ETL - Соединение.
 Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainFields](IEtlPlainFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
