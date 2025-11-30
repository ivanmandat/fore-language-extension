# IMatrixAggregatorModelHierarchies.AddValue

IMatrixAggregatorModelHierarchies.AddValue
-


# IMatrixAggregatorModelHierarchies.AddValue


## Синтаксис


AddValue(HierarchyKey: Integer, Value: [IMatrixAggregatorModel](../IMatrixAggregatorModel/IMatrixAggregatorModel.htm));


## Параметры


HierarchyKey. Ключ справочника
 в коллекции [альтернативных
 иерархий](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_7.htm#alt_agr).


Value. Параметры механизма/метода
 агрегации по уровням альтернативной иерархии.


## Описание


Метод AddValue осуществляет
 добавление существующих параметров агрегации альтернативной иерархии справочника
 по ключу.


## Комментарии


Добавленные параметры альтернативной иерархии справочника не отображаются
 в интерфейсе.


## Пример


Для выполнения примера предполагается наличие в репозитории стандартного
 куба с идентификатором «CUBE». Измерение с индексом «1» использует справочник,
 у которого настроена альтернативная иерархия.


Добавьте ссылки на системные сборки: Metabase, Cubes, Dimensions, Matrix.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    Cub: IStandardCube;

		    Hiers: IMatrixAggregatorModelHierarchies;

		    Dim: IStandardCubeDimension;

		    Dest: IStandardCubeDestination;

		    HierKey: Integer;

		    Model: IMatrixAggregatorModel;

		    Man: IMatrixAggregatorManager;

		    BasicAggr: IBasicMatrixAggregator;

		Begin

		    MB := MetabaseClass.Active;

		    // Получим куб для редактирования

		    Cub := MB.ItemById("CUBE").Edit As IStandardCube;

		    // Получим первое измерение куба

		    Dim := Cub.Dimensions.Item(1);

		    // Получим параметры варианта отображения куба

		    Dest := Cub.Destinations.Item(0);

		    // Получим список альтернативных иерархий

		    Hiers := Dim.AggregatorHierarchies(1, Dest);

		    // Создадим и настроим агрегатор данных

		    Man := New MatrixAggregatorManager.Create As IMatrixAggregatorManager;

		    BasicAggr := Man.CreateAggregator("BasicMatrixAggregator") As IBasicMatrixAggregator;

		    BasicAggr.UseSelection := True;

		    BasicAggr.DefaultLevelAggregation.Operation := BasicAggregatorOperation.Sum;

		    Model := BasicAggr As IMatrixAggregatorModel;

		    // Ключ
		 справочника в параметрах агрегации первой альтернативной иерархии

		    HierKey := Dim.Dimension.Hierarchies.Item(0).Key;

		    // Изменим параметры агрегации

		    Hiers.AddValue(HierKey, Model);

		    // Сохраним изменения в кубе

		    (Cub As IMetabaseObject).Save;

		End Sub UserProc;


После выполнения примера в стандартном кубе с идентификатором «CUBE»
 будут добавлены параметры агрегации первой альтернативной иерархии указанного
 измерения:


	- включена агрегация отмеченных элементов в измерении;


	- изменен метод агрегации на сумму.


См. также:


[IMatrixAggregatorModelHierarchies](IMatrixAggregatorModelHierarchies.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
