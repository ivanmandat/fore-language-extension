# Создание загрузчика данных

Создание загрузчика данных
-


# Создание загрузчика данных


Рассмотрим пример создания загрузчика данных с использованием языка
 Fore. Для выполнения примера необходимо
 наличие в репозитории двух кубов с идентификаторами "Cube_1"
 и "Cube_2". Кубы имеют в своей структуре какие-либо измерения,
 основанные на одних и тех же справочниках.


Указанный ниже пример создает в корневой папке репозитория новый объект
 - Загрузчик данных и производит настройку его параметров:


	- Задается куб-источник и куб-приёмник;


	- Связываются общие измерения и фиксируются измерения, которые
	 есть только в кубе-источнике.


Для выполнения примеров добавьте ссылки на системные сборки: Cubes,
 Dimensions, Matrix, Metabase.


## Пример


			Sub CreateCubeLoader;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    CubeDestination: ICubeModelDestination;

    CLoader: ICubeLoader;

    FixInfo: ICubeLoaderFixInfo;

    DimFix: ICubeLoaderDimensionFix;

    DimsSource: ICubeModelDimensions;

    Dim, Dim1: IDimensionModel;

    MapInfo: ICubeLoaderMapInfo;

    MapItem: ICubeLoaderMapItem;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    CrInfo := Mb.CreateCreateInfo;

    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_CUBELOADER;

    CrInfo.Id := "New_Cube_Loader";

    CrInfo.Name := "Загрузчик данных";

    CrInfo.Parent := MB.Root;

    MObj := Mb.CreateObject(CrInfo).Edit;

    CLoader := MObj As ICubeLoader;

    //Куб-источник

    CubeDestination := (MB.ItemById("Cube_1").Bind As ICubeModel).Destinations.DefaultDestination;

    CLoader.Source := CubeDestination;

    //Измерения куба-источника, среди которых будут искаться измерения куба-приёмника для связи

    DimsSource := CubeDestination.Dimensions;

    //Куб-приёмник

    CubeDestination := (MB.ItemById("Cube_2").Bind As ICubeModel).Destinations.DefaultDestination;

    CLoader.Destination := CubeDestination;

    //Привязка одинаковых
 измерений

    MapInfo := CLoader.MapInfo;

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

    //Фиксация оставшихся
 измерений куба-источника

    FixInfo := CLoader.FixInfo;

    For Each DimFix In CLoader.FixInfo Do

        DimFix.Operation := BasicAggregatorOperation.Sum;

        DimFix.Selection.SelectAll;

    End For;

    MObj.Save;

End Sub CreateCubeLoader;


См. также:


[Примеры](KeCubes_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
