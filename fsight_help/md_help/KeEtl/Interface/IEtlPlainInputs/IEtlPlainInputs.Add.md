# IEtlPlainInputs.Add

IEtlPlainInputs.Add
-


# IEtlPlainInputs.Add


## Синтаксис


Add;


## Описание


Метод Add добавляет вход объекта
 задачи ETL.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    EtlTask: IEtlTask;

	    Join: IEtlPlainDataJoin;

	    Inputs: IEtlPlainInputs;

	Begin

	    MB := MetabaseClass.Active;

	    Object := MB.ItemById("ETL").Edit;

	    EtlTask := Object As IEtlTask;

	    Join := EtlTask.Item(0) As IEtlPlainDataJoin;

	    Inputs := Join.PlainInputs;

	    Inputs.Add;

	    Object.Save;

	End Sub UserProc;


После выполнения примера будет создан один вход у первого объекта задачи
 ETL. Тип объекта задачи ETL - Соединение. Объект репозитория имеет идентификатор
 ETL.


См. также:


[IEtlPlainInputs](IEtlPlainInputs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
