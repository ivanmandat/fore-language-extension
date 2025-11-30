# IEtlPlainField.Description

IEtlPlainField.Description
-


# IEtlPlainField.Description


## Синтаксис


Description: String;


## Описание


Свойство Description определяет
 описание (примечание) поля плоского источника/приёмника данных.


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

	    s := Field.Description;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться описание
 первого поля первого входа объекта задачи ETL. Объект репозитория имеет
 идентификатор ETL.


См. также:


[IEtlPlainField](IEtlPlainField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
