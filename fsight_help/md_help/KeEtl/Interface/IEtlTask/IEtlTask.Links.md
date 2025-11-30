# IEtlTask.Links

IEtlTask.Links
-


# IEtlTask.Links


## Синтаксис


Links: [IEtlPlainLinks](../IEtlPlainLinks/IEtlPlainLinks.htm);


## Описание


Свойство Links возвращает объект,
 содержащий все связи между объектами задачи ETL.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Object: IEtlObject;

	    ETLLinks: IEtlPlainLinks;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    ETLLinks := EtlTask.Links;

	    i := ETLLinks.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 связей между объектами задачи ETL. Объект репозитория имеет идентификатор
 ETL.


См. также:


[IEtlTask](IEtlTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
