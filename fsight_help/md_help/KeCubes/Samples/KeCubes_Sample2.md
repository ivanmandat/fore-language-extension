# Настройка агрегации в стандартном кубе

Настройка агрегации в стандартном кубе
-


# Настройка агрегации в стандартном кубе


## Пример №1


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 «Std_Cube». В кубе имеется календарное измерение с идентификатором «CALENDAR».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    StandCub: IStandardCube;

	    Man: IMatrixAggregatorManager;

	    Dim: IStandardCubeDimension;

	    Lvl: IDimLevels;

	    ChronAggr: IChronologicalMatrixAggregator;

	    LevAggr: IChronologicalMatrixLevelAggregator;

	    Dest: IStandardCubeDestination;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Std_Cube").Edit;

	    StandCub := MObj As IStandardCube;

	    //Создаем новый агрегатор

	    Man := New MatrixAggregatorManager.Create As IMatrixAggregatorManager;

	    //Хронологический механизм агрегации

	    ChronAggr := Man.CreateAggregator("ChronologicalMatrixAggregator") As IChronologicalMatrixAggregator;

	    //Для измерения - календарь

	    Dim := StandCub.Dimensions.FindById("CALENDAR");

	    Lvl := Dim.Dimension.Levels;

	    ChronAggr.Dimension := Dim.Dimension;

	    //Уровень-источник

	    LevAggr := ChronAggr.LevelAggregation(Lvl.Item(0));

	    //Метод - равномерная дезагрегация

	    LevAggr.Operation := ChronologicalAggregatorOperation.UniformDisaggregation;

	    //Уровень-приёмник

	    LevAggr.SourceLevel := Lvl.Item(1);

	    //Установка агрегации по первому элементу измерения фактов

	    Dest := StandCub.Destinations.Item(0);

	    Dim.Aggregator(1, Dest) := ChronAggr;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет настроена агрегация данных для календарного
 измерения куба. С первого уровня, имеющегося в календарном измерении,
 будет осуществляться равномерная дезагрегация данных на второй уровень
 календаря. Данный метод агрегации будет установлен для первого элемента
 измерения фактов.


## Пример №2


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 «Std_Cube». В кубе имеется измерение с идентификатором «D_TO», содержащее
 несколько уровней.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    StandCub: IStandardCube;

	    Man: IMatrixAggregatorManager;

	    Dim: IStandardCubeDimension;

	    Lvl: IDimLevels;

	    BasicAggr: IBasicMatrixAggregator;

	    LevAggr: IBasicMatrixLevelAggregator;

	    Dest: IStandardCubeDestination;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("Std_Cube").Edit;

	    StandCub := MObj As IStandardCube;

	    //Создаем новый агрегатор

	    Man := New MatrixAggregatorManager.Create As IMatrixAggregatorManager;

	    //Основной механизм агрегации

	    BasicAggr := Man.CreateAggregator("BasicMatrixAggregator") As IBasicMatrixAggregator;

	    //Для измерения D_TO

	    Dim := StandCub.Dimensions.FindById("D_TO");

	    Lvl := Dim.Dimension.Levels;

	    BasicAggr.Dimension := Dim.Dimension;

	    //Уровень-приёмник

	    LevAggr := BasicAggr.LevelAggregation(Lvl.Item(Lvl.Count - 2));

	    //Метод - Фактическое среднее

	    LevAggr.Operation := BasicAggregatorOperation.ActualMean;

	    //Уровень-источник

	    LevAggr.Include(Lvl.Item(Lvl.Count - 1)) := True;

	    //Установка агрегации по первому элементу измерения фактов

	    Dest := StandCub.Destinations.Item(0);

	    Dim.Aggregator(1, Dest) := BasicAggr;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера будет настроена агрегация данных для измерения
 куба «D_TO». С последнего уровня измерения данные будут агрегироваться
 на предпоследний уровень. Метод агрегации - фактическое среднее. Данный
 метод агрегации будет установлен для первого элемента измерения фактов.


См. также:


[Примеры](KeCubes_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
