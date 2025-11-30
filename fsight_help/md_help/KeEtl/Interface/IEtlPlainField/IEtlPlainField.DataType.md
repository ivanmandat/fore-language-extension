# IEtlPlainField.DataType

IEtlPlainField.DataType
-


# IEtlPlainField.DataType


## Синтаксис


DataType: [DbDataType](Dal.chm::/Enums/DbDataType.htm);


## Описание


Свойство DataType определяет
 тип поля плоского источника/приёмника данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Link: IEtlPlainLink;

	    Input: IEtlPlainInput;

	    Fields: IEtlPlainFields;

	    Field: IEtlPlainField;

	    Type: DbDataType;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Link := EtlTask.Links.Item(0);

	    Input := Link.DestinationObjectInput;

	    Fields := Input.Fields;

	    Field := Fields.Item(0);

	    Type := Field.DataType;

	End Sub UserProc;


После выполнения примера в переменной «Type» будет содержаться тип первого
 поля первого входа объекта задачи ETL. Объект репозитория имеет идентификатор
 ETL.


См. также:


[IEtlPlainField](IEtlPlainField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
