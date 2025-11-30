# IUserDimLevels.Count

IUserDimLevels.Count
-


# IUserDimLevels.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 уровней вычисляемого справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    UsDim: IUserDimension;

	    UsDimLevs: IUserDimLevels;

	    i: Integer;

	Begin

	    MB:=MetabaseClass.Active;

	    UsDim:=MB.ItemById("USER_DIM").Bind As IUserDimension;

	    UsDimLevs:=UsDim.Levels;

	    i:=UsDimLevs.Count;

	End Sub UserProc;


После выполнения примера в переменной «i» будет содержаться количество
 уровней вычисляемого справочника. Идентификатор вычисляемого справочника
 - USER_DIM.


См. также:


[IUserDimLevels](IUserDimLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
