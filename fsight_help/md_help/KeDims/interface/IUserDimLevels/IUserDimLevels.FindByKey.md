# IUserDimLevels.FindByKey

IUserDimLevels.FindByKey
-


# IUserDimLevels.FindByKey


## Синтаксис


FindByKey(IndexKey: Integer): [IUserDimLevel](../IUserDimLevel/IUserDimLevel.htm);


## Параметры


IndexKey. Ключ
 уровня справочника, по которому осуществляется поиск.


## Описание


Метод FindByKey осуществляет
 поиск и возвращает объект, содержащий уровень вычисляемого справочника.


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

	    UsDimLevel:=UsDimLevs.FindByKey(5352);

	    If UsDimLevel<>Null Then

	        s:=UsDimLevel.Name;

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск уровня справочника
 с ключом «5352» и в случае удачного поиска в переменной «i» будет содержаться
 наименование найденного уровня. Идентификатор вычисляемого справочника
 - USER_DIM.


См. также:


[IUserDimLevels](IUserDimLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
