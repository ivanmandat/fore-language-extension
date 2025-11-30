# IUserDimIndexes.Clear

IUserDimIndexes.Clear
-


# IUserDimIndexes.Clear


## Синтаксис


Clear;


## Описание


Метод Clear удаляет все индексы
 вычисляемого справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    UsDim: IUserDimension;

	    UsDimInds: IUserDimIndexes;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("USER_DIM").Edit;

	    UsDim:=MObj As IUserDimension;

	    UsDimInds:=UsDim.Indexes;

	    UsDimInds.Clear;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будут удалены все индексы справочника. Идентификатор
 вычисляемого справочника - USER_DIM.


См. также:


[IUserDimIndexes](IUserDimIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
