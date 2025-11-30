# IEtlPlainLinks.Item

IEtlPlainLinks.Item
-


# IEtlPlainLinks.Item


## Синтаксис


Item(Index: Integer): [IEtlPlainLink](../IEtlPlainLink/IEtlPlainLink.htm);


## Параметры


Index. Индекс
 связи объектов задачи ETL.


## Описание


Свойство Item возвращает объект-связку,
 индекс которого передается в качестве параметра Index.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Links: IEtlPlainLinks;

	    Link: IEtlPlainLink;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Links := EtlTask.Links;

	    Link := Links.Item(0);

	End Sub UserProc;


После выполнения примера в переменной «Link» будет содержаться первая
 связь объектов задачи ETL. Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainLinks](IEtlPlainLinks.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
