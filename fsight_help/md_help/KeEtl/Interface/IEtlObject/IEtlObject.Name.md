# IEtlObject.Name

IEtlObject.Name
-


# IEtlObject.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование
 объекта задачи ETL.


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

	    s:=Object.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 первого объекка задачи ETL. Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlObject](IEtlObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
