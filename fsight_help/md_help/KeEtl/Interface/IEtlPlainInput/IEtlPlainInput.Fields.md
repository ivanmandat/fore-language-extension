# IEtlPlainInput.Fields

IEtlPlainInput.Fields
-


# IEtlPlainInput.Fields


## Синтаксис


Fields: [IEtlPlainFields](../IEtlPlainFields/IEtlPlainFields.htm);


## Описание


Свойство Fields возвращает объект,
 содержащий список полей входа текущего объекта.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    ALLLinks: IEtlPlainLinks;

	    Link: IEtlPlainLink;

	    Input: IEtlPlainInput;

	    Fields: IEtlPlainFields;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    ALLLinks := EtlTask.Links;

	    Link := ALLLinks.Item(7);

	    Input := Link.DestinationObjectInput;

	    Fields := Input.Fields;

	    i := Fields.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 полей входа объекта-приёмника. Объект репозитория имеет идентификатор
 ETL.


См. также:


[IEtlPlainInput](IEtlPlainInput.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
