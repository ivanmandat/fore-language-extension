# IEtlObject.OutputType

IEtlObject.OutputType
-


# IEtlObject.OutputType


## Синтаксис


OutputType: [EtlInputOutputType](../../Enums/EtlInputOutputType.htm);


## Описание


Свойство OutputType возвращает
 тип выхода объекта задачи ETL.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Object: IEtlObject;

	    Type: EtlInputOutputType;

	Begin

	    MB:=MetabaseClass.Active;

	    EtlTask:=MB.ItemById("ETL").Bind As IEtlTask;

	    Object:=EtlTask.Item(0);

	    Type:=Object.OutputType;

	End Sub UserProc;


После выполнения примера в переменной «Type» будет содержаться тип выхода
 первого объекта задачи ETL. Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlObject](IEtlObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
