# Создание переменной моделирования: Наполнение данными из источника

Создание переменной моделирования: Наполнение данными из источника
-


# Создание переменной моделирования: Наполнение данными из источника


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором KONT_MODEL, а так же куба с идентификатором
 CUBE_1. Данный куб основан на календарном справочнике CALEN_1 и каких
 либо других справочниках. В кубе содержатся данные по уровню «Полугодия».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase,
 Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    MObj: IMetabaseObject;

    MsVar: IMsVariable;

    Sampling: IMsVariableSampling;

    Cube: IAutoCube;

    CubeSource: IAutoCubeSource;

    //Для настройки агрегации по календарю

    AggrManager: MatrixAggregatorManager;

    IAggrManager: IMatrixAggregatorManager;

    AggrModel: IMatrixAggregatorModel;

    BasicAggregator: IBasicMatrixAggregator;

    LevelBasicAggregator: IBasicMatrixLevelAggregator;

    Dim: IAutoCubeDimension;

    DimModel: IDimensionModel;

    DimLvl: IDimLevels;

    //Для загрузки данных

    CubeInst: ICubeInstance;

    Dest: ICubeInstanceDestination;

    DimSS: IDimSelectionSet;

    DimS: IDimSelection;

    Elem: IDimElementArray;

    FixInfo: IAutoCubeSourceFixInfo;

    DimFix: IAutoCubeSourceDimensionFix;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_MSVARIABLE;

    CrInfo.Id := "VAR_3";

    CrInfo.Name := "Переменная №3";

    CrInfo.Parent := MB.ItemById("KONT_MODEL");

    MObj := MB.CreateObject(CrInfo).Edit;

    MsVar := MObj As IMsVariable;

    //Способ наполнения данными

    MsVar.DataFillType := MsVariableDataFillType.DataSource;

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

    //Добавляем куб-источник к переменной

    CubeSource := Cube.Source;

    CubeSource.Cube := (MB.ItemById("CUBE_1").Bind As ICubeModel).Destinations.DefaultDestination;

    //Указываем календарь;

    CubeSource.Calendar := CubeSource.Cube.Dimensions.FindById("CALEN_1");

    FixInfo := CubeSource.FixInfo;

    //Фиксируем измерения

    For Each DimFix In FixInfo Do

        DimFix.Operation := BasicAggregatorOperation.Sum;

        DimFix.Selection.SelectAll;

    End For;

    //Получаем экземпляр куба переменной

    CubeInst := (Cube As IMetabaseObject).Open(Null) As ICubeInstance;

    Dest := CubeInst.Destinations.DefaultDestination;

    //Формируем SelectionSet у куба

    DimSS := Dest.CreateDimSelectionSet;

    //Отмечаем весь уровень - Полугодия

    DimS := DimSS.Item(0);

    Elem := DimS.Dimension.Levels.Item(1).Elements;

    For Each i In Elem Do

        DimS.SelectElement(i, False);

    End For;

    //Отмечаем все в измерении фактов

    DimSS.Item(1).SelectAll;

    //Загружаем данные;

    ((Cube As IMetabaseObject).Open(Null) As IAutoCubeInstance).UpdateFromSource(DimSS);

    MObj.Save;

End Sub UserProc;


После выполнения примера в контейнере моделирования будет создана переменная
 моделирования. Способ наполнения данными - Из источника. В динамике переменной
 будут присутствовать два уровня - Годы и Полугодия. Для уровня Годы календаря
 будет настроена агрегация: данные уровня Полугодия будут суммироваться.
 Далее будет получен куб, на котором построена переменная и в него будут
 загружены данные из куба-источника.


См. также:


[Примеры](KeMs_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
