# IEtlPlainLink.DestinationObjectInput

IEtlPlainLink.DestinationObjectInput
-


# IEtlPlainLink.DestinationObjectInput


## Синтаксис


DestinationObjectInput: [IEtlPlainInput](../IEtlPlainInput/IEtlPlainInput.htm);


## Описание


Свойство DestinationObjectInput
 определяет вход объекта, в который поступает поток данных.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Links: IEtlPlainLinks;

	    Link: IEtlPlainLink;

	    Input: IEtlPlainInput;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Links := EtlTask.Links;

	    Link := Links.Item(0);

	    Input := Link.DestinationObjectInput;

	    s := Input.Id;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться идентификатор
 входа объекта, в который поступает поток данных. Объект репозитория имеет
 идентификатор ETL.


См. также:


[IEtlPlainLink](IEtlPlainLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
