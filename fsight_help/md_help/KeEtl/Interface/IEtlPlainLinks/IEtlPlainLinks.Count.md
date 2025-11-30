# IEtlPlainLinks.Count

IEtlPlainLinks.Count
-


# IEtlPlainLinks.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 связей объектов задачи ETL.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Links: IEtlPlainLinks;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Links := EtlTask.Links;

	    i := Links.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 связей объектов задачи ETL. Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainLinks](IEtlPlainLinks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
