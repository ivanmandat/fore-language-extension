# IUserDimLevels.Add

IUserDimLevels.Add
-


# IUserDimLevels.Add


## Синтаксис


Add: [IUserDimLevel](../IUserDimLevel/IUserDimLevel.htm);


## Описание


Метод Add добавляет уровень
 в вычисляемый справочник.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    UsDim: IUserDimension;

	    UsDimLevs: IUserDimLevels;

	    UsDimLevel: IUserDimLevel;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("USER_DIM").Edit;

	    UsDim:=MObj As IUserDimension;

	    UsDimLevs:=UsDim.Levels;

	    UsDimLevel:=UsDimLevs.Add;

	    UsDimLevel.Id:="New_Level";

	    UsDimLevel.Name:="Дополнительный уровень";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в вычисляемом справочнике будет создан новый
 уровень. Идентификатор вычисляемого справочника - USER_DIM.


См. также:


[IUserDimLevels](IUserDimLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
