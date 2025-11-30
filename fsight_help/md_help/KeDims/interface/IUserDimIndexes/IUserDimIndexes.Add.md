# IUserDimIndexes.Add

IUserDimIndexes.Add
-


# IUserDimIndexes.Add


## Синтаксис


Add: [IUserDimIndex](../IUserDimIndex/IUserDimIndex.htm);


## Описание


Метод Add осуществляет добавление
 индекса в вычисляемый справочник.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    UsDim: IUserDimension;

	    UsDimInds: IUserDimIndexes;

	    UsDimIndex: IUserDimIndex;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("USER_DIM").Edit;

	    UsDim:=MObj As IUserDimension;

	    UsDimInds:=UsDim.Indexes;

	    UsDimIndex:=UsDimInds.Add;

	    UsDimIndex.Name:="Индекс по идентификаторам";

	    UsDimIndex.Id:="Index_Id";

	    UsDimIndex.Attributes.Add(UsDim.Attributes.Id);

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в вычисляемом справочнике будет создан индекс
 по атрибуту, назначение которого - идентификатор. Идентификатор вычисляемого
 справочника - USER_DIM.


См. также:


[IUserDimIndexes](IUserDimIndexes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
