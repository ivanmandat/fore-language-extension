# IEtlPlainInputs.Remove

IEtlPlainInputs.Remove
-


# IEtlPlainInputs.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index.
 Индекс входа объекта задачи ETL.


## Описание


Метод Remove осуществляет удаление
 входа объекта задачи ETL, индекс которого передается посредством параметра
 Index.


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

	    Inputs.Remove(Inputs.Count-1);

	    Object.Save;

	End Sub UserProc;


После выполнения примера будет удален последний вход первого объекта
 задачи ETL. Тип объекта задачи ETL - Соединение. Объект репозитория имеет
 идентификатор ETL.


См. также:


[IEtlPlainInputs](IEtlPlainInputs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
