# IStandardCubeDestination.SelectionControl

IStandardCubeDestination.SelectionControl
-


# IStandardCubeDestination.SelectionControl


## Синтаксис


		SelectionControl: [ICubeSelectionControl](../ICubeSelectionControl/ICubeSelectionControl.htm);


## Описание


Свойство SelectionControl возвращает
 коллекцию управляющих измерений куба.


## Комментарии


Управляющие измерения используются, если в куб добавлены параметрические
 измерения. Настройка управляющих измерений позволяет в качестве значений
 параметров для измерений передавать значения каких-либо атрибутов других
 измерений.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «STD_CUBE», в структуре куба имеется измерение,
 основанное на справочнике с идентификатором «INDICATORS». Также в репозитории
 есть параметрический справочник с идентификатором «INDICATORS_INFO», в
 структуре справочника создан один целочисленный параметр. Значения параметров
 справочника соответствуют ключам элементов в справочнике «INDICATORS».


Добавьте ссылки на системные сборки: Cubes, Dimensions. Metabase.


					Sub UserProc;

		Var

		    Mb: IMetabase;

		    Cube: IStandardCube;

		    CubeDest: IStandardCubeDestination;

		    Dims: IStandardCubeDimensions;

		    SelControlItem: ICubeSelectionControlItem;

		Begin

		    Mb := MetabaseClass.Active;

		    Cube := Mb.ItemById("STD_CUBE").Edit As IStandardCube;

		    CubeDest := Cube.Destinations.Item(0);

		    Dims := CubeDest.Dimensions;

		    //Добавление параметрического измерения

		    Dims.Add(MB.ItemById("INDICATORS_INFO").Bind As IDimensionModel);

		    //Настройка управления

		    SelControlItem := CubeDest.SelectionControl.Item(0);

		    SelControlItem.ControllingDim := Dims.FindById("INDICATORS").Dimension;

		    SelControlItem.Expression.AsString := "FIRST.Key";

		    SelControlItem.SelectionStrategy := CubeSelectionControlStrategy.SelectFirst;

		    (Cube As IMetabaseObject).Save;

		End Sub UserProc


При выполнении примера в структуру куба будет добавлено новое измерение,
 основанное на параметрическом справочнике. Для измерения будет настроено
 управление - в качестве значения параметра будет передаваться ключ первого
 элемента, выделенного в измерении «INDICATORS».


См. также:


[IStandardCubeDestination](IStandardCubeDestination.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
