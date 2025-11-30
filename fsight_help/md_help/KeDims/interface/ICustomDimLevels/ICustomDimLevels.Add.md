# ICustomDimLevels.Add

ICustomDimLevels.Add
-


# ICustomDimLevels.Add


## Синтаксис


Add: [ICustomDimLevel](../ICustomDimLevel/ICustomDimLevel.htm);


## Описание


Метод Add осуществляет добавление
 нового уровня.


## Комментарии


После добавления уровня метод возвращает его параметры.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором "CUBE_1".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Cube: IStandardCube;

	    CustDim: ICustomDimension;

	    CustLevs: ICustomDimLevels;

	    CustLevel: ICustomDimLevel;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("CUBE_1").Edit;

	    Cube := MObj As IStandardCube;

	    CustDim := Cube.FactDimension.Dimension As ICustomDimension;

	    CustLevs := CustDim.Levels;

	    CustLevel := CustLevs.Add;

	    CustLevel.Id := "New_level";

	    CustLevel.Name := "New_level";

	    MObj.Save;

	End Sub UserProc;


После выполнения примера в измерении фактов куба будет создан новый
 уровень. Идентификатор куба - «CUBE_1».


См. также:


[ICustomDimLevels](ICustomDimLevels.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
