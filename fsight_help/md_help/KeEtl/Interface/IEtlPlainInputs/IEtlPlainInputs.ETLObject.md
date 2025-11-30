# IEtlPlainInputs.EtlObject

IEtlPlainInputs.EtlObject
-


# IEtlPlainInputs.EtlObject


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

	    Join: IEtlPlainDataJoin;

	    Inputs: IEtlPlainInputs;

	    Object: IEtlObject;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Join := EtlTask.Item(0) As IEtlPlainDataJoin;

	    Inputs := Join.PlainInputs;

	    Object := Inputs.EtlObject;

	    s := Object.Name;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 объекта которому соответствует список входов. Тип объекта задачи ETL -
 Соединение. Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainInputs](IEtlPlainInputs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
