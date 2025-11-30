# IStandardDimLevels.FindByKey

IStandardDimLevels.FindByKey
-


# IStandardDimLevels.FindByKey


## Синтаксис


FindByKey(IndexKey: Integer): [IStandardDimLevel](../IStandardDimLevel/IStandardDimLevel.htm);


## Параметры


IndexKey.Ключ уровня, по которому осуществляется
 поиск.


## Описание


Метод FindByKey осуществляет
 поиск и возвращает объект, содержащий уровень табличного справочника.
 Поиск осуществляется по ключу, передаваемому посредством параметра IndexKey.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dim: IStandardDimension;

	    DimLevels: IStandardDimLevels;

	    DimLevel: IStandardDimLevel;

	    s: String;

	Begin

	    MB:=MetabaseClass.Active;

	    Dim:=MB.ItemById("TAB_DIM").Bind As IStandardDimension;

	    DimLevels:=Dim.Levels;

	    If DimLevels.Count<>0 Then

	        DimLevel:=DimLevels.FindByKey(4896);

	        If DimLevel<>Null Then

	            s:=DimLevel.Name;

	        Else

	            s:="It is not found";

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск уровня с ключом «4896»
 и в случае удачного поиска в переменной «s» будет содержаться наименование
 найденного уровня. Идентификатор табличного справочника - «TAB_DIM».


См. также:


[IStandardDimLevels](IStandardDimLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
