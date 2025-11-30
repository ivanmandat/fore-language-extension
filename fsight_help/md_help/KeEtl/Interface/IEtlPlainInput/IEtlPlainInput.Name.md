# IEtlPlainInput.Name

IEtlPlainInput.Name
-


# IEtlPlainInput.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование
 входа текущего объекта.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    ALLLinks: IEtlPlainLinks;

	    Link: IEtlPlainLink;

	    Input: IEtlPlainInput;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    ALLLinks := EtlTask.Links;

	    Link := ALLLinks.Item(0);

	    Input := Link.DestinationObjectInput;

	    s := Input.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 входа объекта-приёмника первой связи задачи ETL. Объект репозитория имеет
 идентификатор ETL.


См. также:


[IEtlPlainInput](IEtlPlainInput.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
