# Работа с данными открытого куба

Работа с данными открытого куба
-


# Работа с данными открытого куба


Для выполнения примера предполагается наличие в репозитории автоматического
 куба с идентификатором "Cube_1". В кубе имеется три измерения.
 Измерения основаны на следующих справочниках:


	- D_TO - справочник территориальных образований.


	- D_SEP - справочник социально-экономических показателей.


	- CALENDAR - календарный справочник.


			Sub GetCubeData;

Var

    MB: IMetabase;

    CubInst: ICubeInstance;

    DestInst: ICubeInstanceDestination;

    DestMod: ICubeModelDestination;

    DimsInst: ICubeInstanceDimensions;

    DimsMod: ICubeModelDimensions;

    Dim1, Dim2, Dim3: IDimensionModel;

    DimInst: IDimInstance;

    AttrInst: IDimAttributeInstance;

    DimSS: IDimSelectionSet;

    Mat: IMatrix;

    Coord: IMatrixCoord;

    Sto: ICubeInstanceStorage;

    AttrKey, Dim1Key, Dim2Key, Dim3Key, n1, n2, n3: Integer;

Begin

    MB := MetabaseClass.Active;

    //Открытие куба

    CubInst := MB.ItemById("Cube_1").Open(Null) As ICubeInstance;

    DestInst := CubInst.Destinations.DefaultDestination;

    //Получение информации об измерениях куба

    DestMod := DestInst.DestinationModel;

    DimsMod := DestMod.Dimensions;

    //Поиск справочников, являющихся измерениями куба

    Dim1 := DimsMod.FindById("D_TO");

    Dim2 := DimsMod.FindById("D_SEP");

    Dim3 := DimsMod.FindById("CALENDAR");

    //Получение ключей справочников

    Dim1Key := (Dim1 As IMetabaseObject).Key;

    Dim2Key := (Dim2 As IMetabaseObject).Key;

    Dim3Key := (Dim3 As IMetabaseObject).Key;

    //Получение данных по измерениям

    DimsInst := DestInst.Dimensions;

    //Поиск элементов по измерениям

    DimInst := DimsInst.FindByKey(Dim1Key);

    AttrKey := Dim1.Attributes.Name.Key; //Поиск по атрибуту - Наименование

    AttrInst := DimInst.Attributes.FindByKey(AttrKey);

    n1 := AttrInst.LookupValue("Российская Федерация");

    DimInst := DimsInst.FindByKey(Dim2Key);

    AttrKey := Dim2.Attributes.Name.Key; //Поиск по атрибуту - Наименование

    AttrInst := DimInst.Attributes.FindByKey(AttrKey);

    n2 := AttrInst.LookupValue("Число банков, единиц");

    DimInst := DimsInst.FindByKey(Dim3Key);

    AttrKey := Dim3.Attributes.Id.Key; //Поиск по атрибуту - Идентификатор

    AttrInst := DimInst.Attributes.FindByKey(AttrKey);

    n3 := AttrInst.LookupValue("YEARS:2010");

    If (n1 <> -1) And (n2 <> -1) And (n3 <> -1) Then

        //Создание отметки

        DimSS := DestInst.CreateDimSelectionSet;

        //Отметка элементов

        DimSS.FindByKey(Dim1Key).SelectElement(n1, False);

        DimSS.FindByKey(Dim2Key).SelectElement(n2, False);

        DimSS.FindByKey(Dim3Key).SelectElement(n3, False);

        //Извлечение матрицы данных по установленной отметке куба

        Mat := DestInst.Execute(DimSS);

        Mat.ValueFlag := Mat.ValueFlag + 1;

        //Создаем координату, по которой необходимо изменить значение

        //Измерения в матрице соответствуют измерениям куба

        Coord := Mat.CreateCoord;

        Coord.Item(DimSS.IndexOfKey(Dim1Key)) := n1;

        Coord.Item(DimSS.IndexOfKey(Dim2Key)) := n2;

        Coord.Item(DimSS.IndexOfKey(Dim3Key)) := n3;

        //Увеличиваем значение по указанной координате

        Mat.Item(Coord) := (Mat.Item(Coord) As Integer) + 10;

        //Создаем объект, используемый для сохранения матрицы в куб

        Sto := DestInst.CreateStorage;

        //Сохраняем данные обратно в куб

        Sto.SaveMatrix(Mat, Mat.ValueFlag);

    End If;

End Sub GetCubeData;


При выполнении примера будет произведено открытие куба. По измерениям
 куба будет осуществлен поиск указанных элементов. Если все элементы найдены,
 то будет создана отметка куба. На базе отметки будет получена матрица
 данных. В матрице будет изменено значение элемента, соответствующего найденным
 элементам измерений куба. После этого обновленная матрица сохраняется
 обратно в куб.


См. также:


[Примеры](KeCubes_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
