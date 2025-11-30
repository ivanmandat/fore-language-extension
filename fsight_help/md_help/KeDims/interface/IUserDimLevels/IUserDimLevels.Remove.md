# IUserDimLevels.Remove

IUserDimLevels.Remove
-


# IUserDimLevels.Remove


## Синтаксис


Remove(Index: Variant): Boolean;


## Параметры


Index. Индекс
 уровня.


## Описание


Метод Remove осуществляет удаление
 уровня и возвращает True в случае
 удачного удаления. Индекс уровня передается посредством параметра Index.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    UsDim: IUserDimension;

	    UsDimLevs: IUserDimLevels;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("USER_DIM").Edit;

	    UsDim:=MObj As IUserDimension;

	    UsDimLevs:=UsDim.Levels;

	    If UsDimLevs.Remove(UsDimLevs.Count-1) Then

	        s:="Removed";

	    Else

	        s:="Not removed";

	    End If;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться «Removed»
 если удаление последнего уровня справочника прошло удачно. Идентификатор
 вычисляемого справочника - USER_DIM.


См. также:


[IUserDimLevels](IUserDimLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
