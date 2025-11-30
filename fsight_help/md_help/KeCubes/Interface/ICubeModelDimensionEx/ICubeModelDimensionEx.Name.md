# ICubeModelDimensionEx.Name

ICubeModelDimensionEx.Name
-


# ICubeModelDimensionEx.Name


## Синтаксис


Name: String;


## Описание


Свойство Name определяет наименование
 измерения в пределах данного куба.


## Комментарии


Данное наименование отображается во всех объектах, в которые входит
 данный куб.


## Пример


Для выполнения примера в репозитории предполагается наличие куба с идентификатором
 Test_Cube.


			Sub UserProc;

Var

    Mb: IMetabase;

    Cube: ICubeModel;

    Dims: ICubeModelDimensionsEx;

Begin

    Mb := MetabaseClass.Active;

    Cube := Mb.ItemById("Test_Cube").Edit As ICubeModel;

    Dims := Cube.Destinations.DefaultDestination.DimensionsEx;

    Dims.Item(0).Name := "New name " + Dims.Item(0).Name;

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для первого измерения, в рамках данного куба,
 будет изменено наименование.


См. также:


[ICubeModelDimensionEx](ICubeModelDimensionEx.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
