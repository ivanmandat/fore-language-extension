# IStandardCubeDimension.AggregatorHierarchies

IStandardCubeDimension.AggregatorHierarchies
-


# IStandardCubeDimension.AggregatorHierarchies


## Синтаксис


AggregatorHierarchies(FactKey: Variant; Destination:
 [IStandardCubeDestination](../IStandardCubeDestination/IStandardCubeDestination.htm)):
 [IMatrixAggregatorModelHierarchies](KeMatrix.chm::/Interface/IMatrixAggregatorModelHierarchies/IMatrixAggregatorModelHierarchies.htm);


## Параметры


FactKey. Ключ элемента измерения
 фактов, для которого необходимо настроить агрегацию по уровням [альтернативной иерархии](UiNavObj.chm::/Cube/Agregation.htm#alt);


Destination. [Вариант
 отображения куба](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_7.htm#agr), для которого необходимо настроить
 агрегацию.


## Описание


Свойство AggregatorHierarchies
 определяет настройки агрегации по уровням [альтернативной
 иерархии](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_7.htm#alt_agr) для указанного измерения фактов куба.


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

    AggHier: IBasicMatrixAggregator;

    Dim: IStandardCubeDimension;

    Dest: IStandardCubeDestination;

    HierKey: Integer;

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

    // Добавимнастройки агрегации для справочника альтернативной иерархии

    HierKey := Dim.Dimension.Hierarchies.Item(0).Key;

    AggHier := Hiers.Add(HierKey) As IBasicMatrixAggregator;

    // Изменим параметры агрегации

    AggHier.UseSelection := True;

    AggHier.DefaultLevelAggregation.Operation := BasicAggregatorOperation.Sum;

    // Сохраним изменения в кубе

    (Cub As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в кубе будут добавлены параметры агрегации
 первой альтернативной иерархии указанного измерения:


	- включена агрегация отмеченных элементов в измерении;


	- изменен метод агрегации на сумму.


См. также:


[IStandardCubeDimension](IStandardCubeDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
