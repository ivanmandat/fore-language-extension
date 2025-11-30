# IEtlTask.FindWxLink

IEtlTask.FindWxLink
-


# IEtlTask.FindWxLink


## Синтаксис


FindWxLink(Value: [IEtlPlainLink](../IEtlPlainLink/IEtlPlainLink.htm)):
 [IWxLink](Andy.chm::/Interface/IWxLink/IWxLink.htm);


## Параметры


Value.
 Связь между объектами задачи ETL.


## Описание


Метод FindWxLink осуществляет
 поиск и возвращает объект содержащий визуальную связь между объектами
 задачи ETL.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    WxLink: IWxLink;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    WxLink := EtlTask.FindWxLink(EtlTask.Links.Item(0));

	End Sub UserProc;


После выполнения примера в переменной «WxLink» будет содержаться визуальная
 связь которая соответствует первой связи объектов задачи ETL. Объект репозитория
 имеет идентификатор ETL.


См. также:


[IEtlTask](IEtlTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
