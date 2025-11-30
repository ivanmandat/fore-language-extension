# IEtlObject.ObjectTypeName

IEtlObject.ObjectTypeName
-


# IEtlObject.ObjectTypeName


## Синтаксис


ObjectTypeName: String;


## Описание


Свойство ObjectTypeName возвращает
 название типа объекта задачи ETL.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Object: IEtlObject;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    EtlTask:=MB.ItemById("ETL").Bind As IEtlTask;

	    Object:=EtlTask.Item(0);

	    s:=Object.ObjectTypeName;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться название
 типа первого объекта задачи ETL. Объект репозитория имеет идентификатор
 ETL.


См. также:


[IEtlObject](IEtlObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
