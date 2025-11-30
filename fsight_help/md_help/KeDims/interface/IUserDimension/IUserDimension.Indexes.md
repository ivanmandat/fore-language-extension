# IUserDimension.Indexes

IUserDimension.Indexes
-


# IUserDimension.Indexes


## Синтаксис


Indexes: [IUserDimIndexes](../IUserDimIndexes/IUserDimIndexes.htm);


## Описание


Свойство Indexes возвращает
 объект, содержащий коллекцию индексов справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    UsDim: IUserDimension;

	    UsDimIndex: IUserDimIndexes;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    UsDim:=MB.ItemById("USER_DIM").Bind As IUserDimension;

	    UsDimIndex:=UsDim.Indexes;

	    i:=UsDimIndex.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 индексов вычисляемого справочника. Идентификатор справочника - USER_DIM.


См. также:


[IUserDimension](IUserDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
