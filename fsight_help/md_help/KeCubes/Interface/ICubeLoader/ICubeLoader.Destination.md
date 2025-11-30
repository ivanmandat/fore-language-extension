# ICubeLoader.Destination

ICubeLoader.Destination
-


# ICubeLoader.Destination


## Синтаксис


Destination: [ICubeModelDestination](../ICubeModelDestination/ICubeModelDestination.htm);


## Описание


Свойство Destination определяет
 куб-приёмник данных для загрузки.


## Пример


Для выполнения примера в репозитории предполагается наличие двух кубов.
 Первый куб будет использоваться в качестве источника, второй - в качестве
 приёмника данных. Идентификаторы кубов Cube_1 и Cube_2.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInf: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    Cube: ICubeModel;

    CubeDist: ICubeModelDestination;

    CubLoad: ICubeLoader;

    FixInfo: ICubeLoaderFixInfo;

    DimFix: ICubeLoaderDimensionFix;

    DimsSource: ICubeModelDimensions;

    Dim, Dim1: IDimensionModel;

    MapInfo: ICubeLoaderMapInfo;

    MapItem: ICubeLoaderMapItem;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    // Создание загрузчика данных

    CrInf := Mb.CreateCreateInfo;

    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_CUBELOADER;

    CrInf.Id := "Cube_Load";

    CrInf.Name := "Cube_Load";

    CrInf.Permanent := False;

    MObj := Mb.CreateObject(CrInf).Edit;

    CubLoad := MObj As ICubeLoader;

    // Куб-источник

    Cube := MB.ItemById("Cube_1").Bind As ICubeModel;

    CubeDist := Cube.Destinations.DefaultDestination;

    CubLoad.Source := CubeDist;

    // Измерения куба-источника, среди которых будут искаться измерения куба-приёмника для связи

    DimsSource := CubeDist.Dimensions;

    // Куб-приёмник

    Cube := MB.ItemById("Cube_2").Bind As ICubeModel;

    CubeDist := Cube.Destinations.DefaultDestination;

    CubLoad.Destination := CubeDist;

    // Привязка измерений

    MapInfo := CubLoad.MapInfo;

    For i := 0 To MapInfo.Count - 1 Do

        MapItem := MapInfo.Item(i);

        Dim := MapItem.Dimension;

        Dim1 := DimsSource.FindById((Dim As IMetabaseObject).Id);

        If Dim1 <> Null Then

            MapItem.MapDimension := Dim1;

            MapItem.MapIndex := Dim1.Indexes.PrimaryIndex;

            MapItem.DimIndex := Dim.Indexes.PrimaryIndex;

            MapItem.Method := CubeLoaderMapMethod.ByIndex;

        End If;

    End For;

    // Фиксация измерений

    FixInfo := CubLoad.FixInfo;

    For Each DimFix In CubLoad.FixInfo Do

        DimFix.Operation := BasicAggregatorOperation.ActualMean;

        DimFix.Selection.SelectAll;

    End For;

    MObj.Save;

End Sub UserProc;


После выполнения примера в корневом каталоге репозитория будет создан
 объект - Загрузчик данных. В качестве куба-источника используется куб
 с идентификатором Cube_1, в качестве куба-приёмника - куб с идентификатором
 Cube_2. Одинаковые измерения, имеющиеся в каждом кубе, будут связаны по
 индексу. Измерения, имеющиеся в кубе-источнике, но отсутствующие в кубе-приёмнике
 будут зафиксированы.


См. также:


[ICubeLoader](ICubeLoader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
