# IChronologicalMatrixAggregator.LevelAggregationByKey

IChronologicalMatrixAggregator.LevelAggregationByKey
-


# IChronologicalMatrixAggregator.LevelAggregationByKey


## Синтаксис


LevelAggregation(kLevel: Integer): [IChronologicalMatrixLevelAggregator](../IChronologicalMatrixLevelAggregator/IChronologicalMatrixLevelAggregator.htm);


## Параметры


kLevel - ключ уровня измерения, для которого необходимо настроить параметры агрегации. Если необходимо настроить параметры агрегации для уровней по умолчанию, то данному параметру следует присвоить значение «-1».


## Описание


Свойство доступно только для чтения.


Свойство LevelAggregationByKey возвращает параметры агрегации для уровня измерения заданного по ключу.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором «Cube_1». В кубе имеется календарное измерение «CALENDAR», содержащее несколько уровней.


Sub Main;


Var


MB: IMetabase;


MObj: IMetabaseObject;


StandCub: IStandardCube;


Man: IMatrixAggregatorManager;


Dim: IStandardCubeDimension;


Lvls: IDimLevels;


LvlsCount: Integer;


LvlsKey: Integer;


ChronAggr: IChronologicalMatrixAggregator;


LevAggr: IChronologicalMatrixLevelAggregator;


Dest: IStandardCubeDestination;


Begin


MB := MetabaseClass.Active;


MObj := MB.ItemById("CUBE_1").Edit;


StandCub := MObj As IStandardCube;


//Создаем новый агрегатор


Man := New MatrixAggregatorManager.Create As IMatrixAggregatorManager;


//Основной механизм агрегации


ChronAggr := Man.CreateAggregator("ChronologicalMatrixAggregator") As IChronologicalMatrixAggregator;


//Для измерения CALENDAR


Dim := StandCub.Dimensions.FindById("CALENDAR");


Lvls := Dim.Dimension.Levels;


LvlsCount := Lvls.Count;


ChronAggr.Dimension := Dim.Dimension;


//Для уровней по умолчанию


LevAggr := ChronAggr.LevelAggregationByKey(-1);


LevAggr.Operation := ChronologicalAggregatorOperation.Mean;


//Для предпоследнего уровня


LvlsKey := Lvls.Item(LvlsCount - 2).Key;


LevAggr := ChronAggr.LevelAggregationByKey(LvlsKey);


LevAggr.UseDefaultLevelAggregation := False;


LevAggr.Operation := ChronologicalAggregatorOperation.UniformDisaggregation;


LevAggr.SourceLevel := Lvls.Item(LvlsCount - 1);


//Установка агрегации по первому элементу измерения фактов


Dest := StandCub.Destinations.Item(0);


Dim.Aggregator(1, Dest) := ChronAggr;


MObj.Save;


End Sub Main;


После выполнения примера, в кубе будет настроена агрегация для измерения «CALENDAR». Будет использоваться хронологический механизм агрегации. Для уровней по умолчанию будет осуществляться агрегация с использованием метода среднего хронологического. Для предпоследнего уровня будут установлены собственные настройки. Будет осуществляться равномерная дезагрегация на последний уровень.


См.также:


[IChronologicalMatrixAggregator](IChronologicalMatrixAggregator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
