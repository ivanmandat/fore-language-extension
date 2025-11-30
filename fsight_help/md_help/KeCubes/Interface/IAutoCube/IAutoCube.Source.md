# IAutoCube.Source

IAutoCube.Source
-


# IAutoCube.Source


## Синтаксис


Source: [IAutoCubeSource](../IAutoCubeSource/IAutoCubeSource.htm);


## Описание


Свойство Source возвращает параметры
 куба-источника данных для автоматического куба.


## Пример


Для выполнения примера в репозитории предполагается наличие автоматического
 куба с идентификатором AUTO_CUBE и стандартного куба с идентификатором
 STD_CUBE. Оба куба в своей структуре имеют календарное измерение, построенное
 на базе одного календарного справочника. Также в кубах могут быть другие
 одинаковые измерения.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    AutoCube: IAutoCube;

    Source: IAutoCubeSource;

    CubeSource: ICubeModel;

    SourceDims: IStandardCubeDimensions;

    SourceDim: IStandardCubeDimension;

    Dims: IAutoCubeDimensions;

    Dim: IAutoCubeDimension;

    DimsFix: IAutoCubeSourceFixInfo;

    DimFix: IAutoCubeSourceDimensionFix;

Begin

    MB := MetabaseClass.Active;

    // Автокуб

    AutoCube := MB.ItemById("AUTO_CUBE").Edit As IAutoCube;

    // Куб, который будет источником данных для автокуба

    CubeSource := MB.ItemById("STD_CUBE").Bind As ICubeModel;

    // Указание и настройка источника данных

    Source := AutoCube.Source;

    Source.Cube := CubeSource.Destinations.DefaultDestination;

    SourceDims := Source.Cube.Dimensions As IStandardCubeDimensions;

    Source.Calendar := SourceDims.Calendar.Dimension;

    Source.Transparent := True;

    // Связь измерений автоматического куба и источника

    Dims := AutoCube.Dimensions;

    For Each Dim In Dims Do

        SourceDim := SourceDims.FindByKey((Dim.Dimension As IMetabaseObject).Key);

        Dim.Method := CubeLoaderMapMethod.ByIndex;

        Dim.MapDimension := SourceDim.Dimension;

        Dim.MapIndex := SourceDim.Dimension.Indexes.PrimaryIndex;

    End For;

    // Фиксация измерений источника, которых нет в автоматическом кубе

    DimsFix := Source.FixInfo;

    For Each DimFix In DimsFix Do

        DimFix.Selection.SelectElement(0, False);

    End For;

    // Сохранение изменений

    (AutoCube As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера для автоматического куба будет определён источник
 данных. Будут выбраны календарное измерение, вариант отображения и установлен
 признак извлечения данных из источника. Будет настроена связь общих измерений
 и зафиксирован первый элемент в тех измерениях источника, которых нет
 в автоматическом кубе.


См. также:


[IAutoCube](IAutoCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
