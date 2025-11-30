# ICubeSelectionControlItem.ControllingDim

ICubeSelectionControlItem.ControllingDim
-


# ICubeSelectionControlItem.ControllingDim


## Синтаксис


ControllingDim: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm);


## Описание


Свойство ControllingDim определяет
 управляющее измерение куба.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором CUBE_OBJ, который содержит в качестве измерения
 параметрический справочник и справочник с идентификатором UNITS в измерениях
 куба.


Добавьте ссылки на системные сборки: Cubes, Dimension, Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Cube: ICubeModel;

	    ControllingDim: IDimensionModel;

	    selItem: ICubeSelectionControlItem;

	Begin

	    Mb := MetabaseClass.Active;

	    Cube := Mb.ItemById("CUBE_OBJ").Edit As ICubeModel;

	    ControllingDim := Cube.Destinations.DefaultDestination.Dimensions.FindById("UNITS");

	    selItem := Cube.SelectionControl.Item(0);

	    selItem.ControllingDim := ControllingDim;

	    selItem.Expression.AsString := "FIRST.Key";

	    selItem.SelectionStrategy := CubeSelectionControlStrategy.SelectFirst;

	    (Cube As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для первого управляемого измерения будет определено
 управляющее измерение - справочник с идентификатором UNITS, выражение
 управления FIRST.Key и стратегия управления - Отметить первый элемент.


См. также:


[ICubeSelectionControlItem](ICubeSelectionControlItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
