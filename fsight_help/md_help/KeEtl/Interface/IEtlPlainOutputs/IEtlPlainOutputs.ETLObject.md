# IEtlPlainOutputs.EtlObject

IEtlPlainOutputs.EtlObject
-


# IEtlPlainOutputs.EtlObject


## Синтаксис


EtlObject: [IEtlObject](../IEtlObject/IEtlObject.htm);


## Описание


Свойство EtlObject возвращает
 объект ETL.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Join: IEtlPlainDataSplit;

	    Outputs: IEtlPlainOutputs;

	    Object: IEtlObject;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Join := EtlTask.Item(0) As IEtlPlainDataSplit;

	    Outputs := Join.PlainOutputs;

	    Object := Outputs.EtlObject;

	    s := Object.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 объекта которому соответствует список выходов. Тип объекта задачи ETL
 - Разделение. Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainOutputs](IEtlPlainOutputs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
