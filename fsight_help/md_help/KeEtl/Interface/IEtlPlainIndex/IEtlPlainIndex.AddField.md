# IEtlPlainIndex.AddField

IEtlPlainIndex.AddField
-


# IEtlPlainIndex.AddField


## Синтаксис


AddField;


## Описание


Метод AddField добавляет поле
 индекса.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Object: IMetabaseObject;

	    EtlTask: IEtlTask;

	    Join: IEtlPlainDataJoin;

	    Index: IEtlPlainIndex;

	Begin

	    MB := MetabaseClass.Active;

	    Object := MB.ItemById("ETL").Edit;

	    EtlTask := Object As IEtlTask;

	    Join := EtlTask.Item(0) As IEtlPlainDataJoin;

	    Index := Join.Index;

	    Index.AddField;

	    Index.PlainInputField(0,0):=Join.PlainInputs.Item(0).Fields.Item(0);

	    Index.PlainInputField(0,1):=Join.PlainInputs.Item(1).Fields.Item(0);

	    Object.Save;

	End Sub UserProc;


После выполнения примера будет создано поле индекса и в него добавлены
 два поля: первое поле первого входа и первое поле второго входа объекта
 задачи ETL. Объект репозитория имеет идентификатор ETL.


См. также:


[IEtlPlainIndex](IEtlPlainIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
