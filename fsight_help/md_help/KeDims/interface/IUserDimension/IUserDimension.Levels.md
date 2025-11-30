# IUserDimension.Levels

IUserDimension.Levels
-


# IUserDimension.Levels


## Синтаксис


Levels: [IUserDimLevels](../IUserDimLevels/IUserDimLevels.htm);


## Описание


Свойство Levels возвращает объект,
 содержащий коллекцию уровней справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    UsDim: IUserDimension;

	Begin

	    MB:=MetabaseClass.Active;

	    MObj:=MB.ItemById("USER_DIM").Edit;

	    UsDim:=MObj As IUserDimension;

	    UsDim.Levels.Add;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в вычисляемом справочнике будет добавлен один
 уровень. Идентификатор справочника - USER_DIM.


См. также:


[IUserDimension](IUserDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
