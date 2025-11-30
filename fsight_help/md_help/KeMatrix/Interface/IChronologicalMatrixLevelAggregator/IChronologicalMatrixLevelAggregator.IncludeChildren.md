# IChronologicalMatrixLevelAggregator.IncludeChildren

IChronologicalMatrixLevelAggregator.IncludeChildren
-


# IChronologicalMatrixLevelAggregator.IncludeChildren


## Синтаксис


IncludeChildren: Boolean;


## Описание


Свойство IncludeChildren определяет, будут ли при агрегации использоваться значения непосредственных дочерних элементов.


## Конструктор


Если свойству установлено значение True - при агрегации будут использоваться значения непосредственных дочерних элементов, иначе значения элементов уровня [SourceLevel](IChronologicalMatrixLevelAggregator.SourceLevel.htm). По умолчанию свойству установлено значение False.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором "Cube_1". В кубе имеется календарное измерение "CALENDAR", содержащее несколько уровней.


Sub Main;


Var


MB: IMetabase;


MObj: IMetabaseObject;


StandCub: IStandardCube;


Man: IMatrixAggregatorManager;


Dim: IStandardCubeDimension;


Lvls: IDimLevels;


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


ChronAggr.Dimension := Dim.Dimension;


//Для уровней по умолчанию


LevAggr := ChronAggr.LevelAggregation(Null);


LevAggr.Operation := ChronologicalAggregatorOperation.Mean;


//Для предпоследнего уровня


LevAggr := ChronAggr.LevelAggregation(Lvls.Item(Lvls.Count - 2));


LevAggr.UseDefaultLevelAggregation := False;


LevAggr.Operation := ChronologicalAggregatorOperation.UniformDisaggregation;


LevAggr.SourceLevel := Lvls.Item(Lvls.Count - 1);


//Установка агрегации по первому элементу измерения фактов


Dest := StandCub.Destinations.Item(0);


Dim.Aggregator(1, Dest) := ChronAggr;


MObj.Save;


End Sub Main;


После выполнения примера в кубе будет настроена агрегация для измерения "CALENDAR". Будет использоваться хронологический механизм агрегации. Для уровней по умолчанию будет осуществляться агрегация с использованием метода среднего хронологического. Для предпоследнего уровня будут установлены собственные настройки. Будет осуществляться равномерная дезагрегация на последний уровень.


См.также:


[IChronologicalMatrixLevelAggregator](IChronologicalMatrixLevelAggregator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
