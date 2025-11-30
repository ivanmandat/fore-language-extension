# IEtlPlainOutput.Link

IEtlPlainOutput.Link
-


# IEtlPlainOutput.Link


## Синтаксис


Link: [IEtlPlainLink](../IEtlPlainLink/IEtlPlainLink.htm);


## Описание


Свойство Link возвращает ссылку
 на объект-связку между объектами ETL.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Provider: IEtlPlainDataProvider;

	    Link: IEtlPlainLink;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Provider := EtlTask.Item(0) As IEtlPlainDataProvider;

	    Link := Provider.PlainOutput.Link;

	End Sub UserProc;


После выполнения примера в переменной «Link» будет содержаться объект-связка
 объекта-источника задачи ETL. Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainOutput](IEtlPlainOutput.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
