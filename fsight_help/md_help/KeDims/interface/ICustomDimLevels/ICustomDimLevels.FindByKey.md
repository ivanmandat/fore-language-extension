# ICustomDimLevels.FindByKey

ICustomDimLevels.FindByKey
-


# ICustomDimLevels.FindByKey


## Синтаксис


FindByKey(IndexKey: Integer): [ICustomDimLevel](../ICustomDimLevel/ICustomDimLevel.htm);


## Параметры


IndexKey. Ключ
 уровня, по которому осуществляется поиск.


## Описание


Метод FindByKey осуществляет
 поиск уровня по ключу.


## Комментарии


Метод возвращает параметры уровня в случае удачного поиска и Null,
 если уровень не найден.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором "CUBE_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Cube: IStandardCube;

	    CustDim: ICustomDimension;

	    CustLevs: ICustomDimLevels;

	    CustLevel: ICustomDimLevel;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    Cube := MB.ItemById("CUBE_1").Bind As IStandardCube;

	    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

	    CustLevs := CustDim.Levels;

	    If CustLevs.Count <> 0 Then

	        CustLevel := CustLevs.FindByKey(5834);

	        If CustLevel <> Null Then

	            s := CustLevel.Name;

	        End If;

	    End If;

	End Sub UserProc;


После выполнения примера будет осуществлен поиск уровня измерения фактов
 с ключом «5834» и в случае удачного поиска в переменной «s» будет содержаться
 наименование найденного уровня.


См. также:


[ICustomDimLevels](ICustomDimLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
