# Создание переменной моделирования: Наполнение данными вручную

Создание переменной моделирования: Наполнение данными вручную
-


# Создание переменной моделирования: Наполнение данными вручную


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором KONT_MODEL.


Добавьте ссылки на системные сборки: Cubes, Dimensions, MathFin, Matrix,
 Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    MsVar: IMsVariable;

    Sampling: IMsVariableSampling;

    //Куб с данными переменной моделирования

    Cube: IAutoCube;

    //Для настройки агрегации по календарю

    AggrManager: MatrixAggregatorManager;

    IAggrManager: IMatrixAggregatorManager;

    AggrModel: IMatrixAggregatorModel;

    BasicAggregator: IBasicMatrixAggregator;

    LevelBasicAggregator: IBasicMatrixLevelAggregator;

    Dim: IAutoCubeDimension;

    DimModel: IDimensionModel;

    DimLvl: IDimLevels;

    //Для заполнения данными

    CubeInst: ICubeInstance;

    Des: ICubeInstanceDestination;

    DimSS: IDimSelectionSet;

    DimS: IDimSelection;

    Elem: IDimElementArray;

    Mat: IMatrix;

    Coord: IMatrixCoord;

    Sto: ICubeInstanceStorage;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MSVARIABLE;

    CrInfo.Id := "Var_1";

    CrInfo.Name := "Переменная №1";

    CrInfo.Parent := MB.ItemById("Kont_Model");

    MObj := MB.CreateObject(CrInfo).Edit;

    MsVar := MObj As IMsVariable;

    //Способ наполнения данными

    MsVar.DataFillType := MsVariableDataFillType.Manual;

    Sampling := MsVar.Sampling;

    //Шаг расчета для переменной: Годы и полугодия

    Sampling.Level(DimCalendarLevel.Year) := True;

    Sampling.Level(DimCalendarLevel.HalfYear) := True;

    Cube := MsVar.Cube;

    //Параметры агрегации по уровням календаря

    AggrManager := New MatrixAggregatorManager.Create;

    IAggrManager := AggrManager As IMatrixAggregatorManager;

    AggrModel := IAggrManager.CreateAggregator("BasicMatrixAggregator");

    Dim := Cube.Dimensions.Calendar;

    DimModel := Dim.Dimension;

    DimLvl := DimModel.Levels;

    //Агрегация для календарного измерения

    AggrModel.Dimension := DimModel;

    BasicAggregator := AggrModel As IBasicMatrixAggregator;

    //Уровень для которого настраивается агрегация - Годы

    LevelBasicAggregator := BasicAggregator.LevelAggregation(DimLvl.Item(0));

    //Уровень, значения которого используются при агрегации - Полугодия

    LevelBasicAggregator.Include(DimLvl.Item(1)) := True;

    //Метод агрегации - Сумма

    LevelBasicAggregator.Operation := BasicAggregatorOperation.Sum;

    Dim.Aggregator(Cube.Destinations.Item(0)) := AggrModel;

    //Заполнение данными

    CubeInst := (Cube As IMetabaseObject).Open(Null) As ICubeInstance;

    Des := CubeInst.Destinations.DefaultDestination;

    DimSS := Des.CreateDimSelectionSet;

    //Отмечаем уровень - Полугодия

    DimS := DimSS.Item(0);

    Elem := DimS.Dimension.Levels.Item(1).Elements;

    For Each i In Elem Do

        DimS.SelectElement(i, False);

    End For;

    //Отмечаем факт

    DimSS.Item(1).SelectAll;

    //Матрица данных

    Mat := Des.Execute(DimSS);

    Mat.ValueFlag := Mat.ValueFlag + 1;

    Coord := Mat.CreateCoord;

    Coord.Item(1) := 0;

    //Заполнение матрицы данными

    For Each i In Elem Do

        Coord.Item(0) := i;

        Mat.Item(Coord) := Math.RandBetween(0, 100);

    End For;

    Sto := Des.CreateStorage;

    //Сохраняем данные в куб

    Sto.SaveMatrix(Mat, Mat.ValueFlag);

    MObj.Save;

End Sub UserProc;


После выполнения примера в контейнере моделирования будет создана переменная
 моделирования. Способ наполнения данными - Вручную. В динамике переменной
 будут присутствовать два уровня - Годы и Полугодия. Для уровня Годы календаря
 будет настроена агрегация: данные уровня Полугодия будут суммироваться.
 Далее будет получен куб, на котором построена переменная, получена матрица
 данных куба. Элементы, расположенные на уровне полугодия, будут заполнены
 случайными данными.


См. также:


[Примеры](KeMs_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
