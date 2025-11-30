# IUserDimLevels.Item

IUserDimLevels.Item
-


# IUserDimLevels.Item


## Синтаксис


Item(Index: Variant): [IUserDimLevel](../IUserDimLevel/IUserDimLevel.htm);


## Параметры


Index. Индекс
 уровня.


## Описание


Свойство Item возвращает объект,
 содержащий уровень вычисляемого справочника.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    UsDim: IUserDimension;

	    UsDimLevs: IUserDimLevels;

	    UsDimLevel: IUserDimLevel;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    UsDim:=MB.ItemById("USER_DIM").Bind As IUserDimension;

	    UsDimLevs:=UsDim.Levels;

	    If UsDimLevs.Count<>0 Then

	        UsDimLevel:=UsDimLevs.Item(0);

	        s:=UsDimLevel.Name;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 первого уровня вычисляемого справочника, если он создан. Идентификатор
 вычисляемого справочника - USER_DIM.


См. также:


[IUserDimLevels](IUserDimLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
