# IEtlPlainInputs.MaxObjectCount

IEtlPlainInputs.MaxObjectCount
-


# IEtlPlainInputs.MaxObjectCount


## Синтаксис


MaxObjectCount: Integer;


## Описание


Свойство MaxObjectCount возвращает
 максимальное количество входов объекта задачи ETL.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Join: IEtlPlainDataJoin;

	    Inputs: IEtlPlainInputs;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Join := EtlTask.Item(0) As IEtlPlainDataJoin;

	    Inputs := Join.PlainInputs;

	    i := Inputs.MaxObjectCount;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться максимальное
 количество входов первого объекта задачи ETL. Тип объекта задачи ETL -
 Соединение. Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainInputs](IEtlPlainInputs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
