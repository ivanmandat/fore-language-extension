# IEtlPlainInput.Id

IEtlPlainInput.Id
-


# IEtlPlainInput.Id


## Синтаксис


Id: String;


## Описание


Свойство Id определяет идентификатор
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

	    s := Input.Id;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться идентификатор
 входа объекта-приёмника первой связи задачи ETL. Объект репозитория имеет
 идентификатор ETL.


См. также:


[IEtlPlainInput](IEtlPlainInput.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
