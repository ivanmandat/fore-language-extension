# IStandardCubeDimension.QueryStrategy

IStandardCubeDimension.QueryStrategy
-


# IStandardCubeDimension.QueryStrategy


## Синтаксис


QueryStrategy: [ICubeDimensionQueryStrategy](../ICubeDimensionQueryStrategy/ICubeDimensionQueryStrategy.htm);


## Описание


Свойство QueryStrategy возвращает
 параметры стратегии фильтрации по данному измерению куба.


## Комментарии


Стратегия фильтрации определяет,
 каким образом будет формироваться запрос на извлечение данных в зависимости
 от отметки измерения. Более подробное описание о формировании запроса
 на выборку данных в зависимости от выбранной стратегии фильтрации представлено
 в подразделе «[Измерения
 куба: Свойства измерения](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_3.htm#dim_properties)».


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 "STD_CUBE". Подключите системные сборки: Cubes, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: IStandardCube;

    Dims: IStandardCubeDimensions;

    Dim: IStandardCubeDimension;

    Strategy: ICubeDimensionQueryStrategy;

Begin

    Mb := MetabaseClass.Active;

    Cube := MB.ItemById("STD_CUBE").Edit As IStandardCube;

    //Не использовать подзапросы при извлечении данных из первого источника данных

    Cube.Datasets.Item(0).UseSubqueryOptimization := False;

    //Настройка стратегий фильтрации для всех измерений

    Dims := Cube.Dimensions;

    For Each Dim In Dims Do

        Strategy := Dim.QueryStrategy;

        //Фильтровать в зависимости от количества отмеченных элементов и использовать временную таблицу

        Strategy.FilterMethod := CubeDimensionFilterMethod.QuantityBasedUseTempTable;

        //Количество элементов, в зависимости от которого изменяется запрос

        Strategy.RatioOrQuantity := 5;

    End For;

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в кубе будет изменена стратегия фильтрации
 по всем измерениям. Способ фильтрации элементов будет изменяться в зависимости
 от количества элементов в отметке, порог изменения способа фильтрации
 - 5 элементов. Также при формировании запроса к первому источнику данных
 не будут использоваться подзапросы.


См. также:


[IStandardCubeDimension](IStandardCubeDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
