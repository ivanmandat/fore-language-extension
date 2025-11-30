# IEtlPlainFields.MoveDown

IEtlPlainFields.MoveDown
-


# IEtlPlainFields.MoveDown


## Синтаксис


MoveDown(Index: Integer);


## Параметры


Index. Индекс поля.


## Описание


Метод MoveDown осуществляет
 перемещение поля в списке на одну позицию вниз.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    Object: IEtlPlainDataProvider;

	    Output: IEtlPlainOutput;

	    Fields: IEtlPlainFields;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Etl").Edit;

	    EtlTask := MObj As IEtlTask;

	    Object := EtlTask.Item(0) As IEtlPlainDataProvider;

	    Output := Object.PlainOutput;

	    Fields := Output.Fields;

	    Fields.MoveDown(0);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера, первое в списке полей выхода поле, будет перемещено
 на одну позицию вниз. Объекта задачи ETL - Источник данных. Объект репозитория
 имеет идентификатор ETL.


См. также:


[IEtlPlainFields](IEtlPlainFields.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
