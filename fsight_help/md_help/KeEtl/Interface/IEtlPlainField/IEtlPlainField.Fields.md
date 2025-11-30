# IEtlPlainField.Fields

IEtlPlainField.Fields
-


# IEtlPlainField.Fields


## Синтаксис


Fields: [IEtlPlainFields](../IEtlPlainFields/IEtlPlainFields.htm);


## Описание


Свойство Fields возвращает объект,
 содержащий родительский список полей.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Sort: IEtlPlainDataSort;

	    Index: IEtlPlainIndex;

	    Fields: IEtlPlainFields;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Sort := EtlTask.Item(0) As IEtlPlainDataSort;

	    Index := Sort.Index;

	    Fields := Index.PlainInputField(0,0).Fields;

	    i := Fields.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 полей входа объекта задачи ETL. Тип объекта задачи ETL - Сортировка. Объект
 репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainField](IEtlPlainField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
