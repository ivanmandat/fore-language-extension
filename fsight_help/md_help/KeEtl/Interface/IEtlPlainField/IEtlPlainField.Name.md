# IEtlPlainField.Name

IEtlPlainField.Name
-


# IEtlPlainField.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование
 поля плоского источника/приёмника данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Link: IEtlPlainLink;

	    Input: IEtlPlainInput;

	    Fields: IEtlPlainFields;

	    Field: IEtlPlainField;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Link := EtlTask.Links.Item(0);

	    Input := Link.DestinationObjectInput;

	    Fields := Input.Fields;

	    Field := Fields.Item(0);

	    s := Field.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 первого поля первого входа объекта задачи ETL. Объект репозитория имеет
 идентификатор ETL.


См. также:


[IEtlPlainField](IEtlPlainField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
