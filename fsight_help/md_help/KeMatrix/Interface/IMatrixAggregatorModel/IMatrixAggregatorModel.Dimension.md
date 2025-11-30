# IMatrixAggregatorModel.Dimension

IMatrixAggregatorModel.Dimension
-


# IMatrixAggregatorModel.Dimension


## Синтаксис


Dimension: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm);


## Описание


Свойство Dimension определяет измерение, для которого необходимо настроить параметры агрегации.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором "Cube_1". В кубе имеется измерение "D_TO", содержащее более двух уровней.


Sub Main;


Var


MB: IMetabase;


MObj: IMetabaseObject;


StandCub: IStandardCube;


Man: IMatrixAggregatorManager;


Dim: IStandardCubeDimension;


Lvl: IDimLevels;


BasicAggr: IBasicMatrixAggregator;


LevAggr: IBasicMatrixLevelAggregator;


Dest: IStandardCubeDestination;


Begin


MB := MetabaseClass.Active;


MObj := MB.ItemById("CUBE_1").Edit;


StandCub := MObj As IStandardCube;


//Создаем новый агрегатор


Man := New MatrixAggregatorManager.Create As IMatrixAggregatorManager;


//Основной механизм агрегации


BasicAggr := Man.CreateAggregator("BasicMatrixAggregator") As IBasicMatrixAggregator;


//Для измерения D_TO


Dim := StandCub.Dimensions.FindById("D_TO");


Lvl := Dim.Dimension.Levels;


BasicAggr.Dimension := Dim.Dimension;


//Для уровня по умолчанию


LevAggr := BasicAggr.DefaultLevelAggregation;


LevAggr.Operation := BasicAggregatorOperation.ArithmeticalMean;


LevAggr.PreserveExistingData := True;


LevAggr.PreserveMethod := ExistingDataPreserveMethod.OnNull;


//Для второго уровня


//Уровень-приёмник


LevAggr := BasicAggr.LevelAggregation(Lvl.Item(Lvl.Count - 2));


LevAggr.UseDefaultLevelAggregation := False;


//Метод - Фактическое среднее


LevAggr.Operation := BasicAggregatorOperation.ActualMean;


//Уровень-источник


LevAggr.Include(Lvl.Item(Lvl.Count - 1)) := True;


//Установка агрегации по первому элементу измерения фактов


Dest := StandCub.Destinations.Item(0);


Dim.Aggregator(1, Dest) := BasicAggr;


MObj.Save;


End Sub Main;


После выполнения примера в кубе будет настроена агрегация для измерения "D_TO". Для уровней по умолчанию будет осуществляться агрегация с использованием арифметического среднего. Неагрегированные данные будут сохраняться, если результат не пустое значение. Для предпоследнего уровня будут настроены собственные настройки. Будет осуществляться агрегация данных с последнего уровня, с использованием метода фактического среднего.


См.также:


[IMatrixAggregatorModel](IMatrixAggregatorModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
