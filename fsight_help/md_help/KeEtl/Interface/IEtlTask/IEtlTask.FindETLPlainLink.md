# IEtlTask.FindETLPlainLink

IEtlTask.FindETLPlainLink
-


# IEtlTask.FindETLPlainLink


## Синтаксис


FindETLPlainLink(Value: [IWxLink](Andy.chm::/Interface/IWxLink/IWxLink.htm)):
 [IEtlPlainLink](../IEtlPlainLink/IEtlPlainLink.htm);


## Параметры


Value.
 Визуальная связь между объектами задачи ETL.


## Описание


Метод FindETLPlainLink осуществляет
 поиск и возвращает объект содержащий связь между объектами задачи ETL.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    WxLink: IWxLink;

	    Link: IEtlPlainLink;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    WxLink := EtlTask.Workspace.Shapes.Item(2) As IWxLink;

	    Link := EtlTask.FindEtlPlainLink(WxLink);

	End Sub UserProc;


После выполнения примера в переменной «Link» будет содержаться связь
 между объектами задачи ETL, которой соответствует визуальная связь. индекс
 фигуры визуальной связи равен «2». Объект репозитория имеет идентификатор
 ETL.


См. также:


[IEtlTask](IEtlTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
