# IEtlPlainInputs.Item

IEtlPlainInputs.Item
-


# IEtlPlainInputs.Item


## Синтаксис


Item(Index: Integer): [IEtlPlainInput](../IEtlPlainInput/IEtlPlainInput.htm);


## Параметры


Index.
 Индекс входа.


## Описание


Свойство Item возвращает объект,
 содержащий в себе связь между входящим и текущим объектом.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    Join: IEtlPlainDataJoin;

	    Inputs: IEtlPlainInputs;

	    Input: IEtlPlainInput;

	Begin

	    MB := MetabaseClass.Active;

	    EtlTask := MB.ItemById("ETL").Bind As IEtlTask;

	    Join := EtlTask.Item(3) As IEtlPlainDataJoin;

	    Inputs := Join.PlainInputs;

	    Input := Inputs.Item(0);

	End Sub UserProc;


После выполнения примера в переменной «Input» будет содержаться первый
 вход четвертого объекта задачи ETL. Тип объекта задачи ETL - Соединение.
 Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainInputs](IEtlPlainInputs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
