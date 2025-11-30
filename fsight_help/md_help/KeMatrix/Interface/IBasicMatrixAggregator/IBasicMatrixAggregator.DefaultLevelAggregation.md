# IBasicMatrixAggregator.DefaultLevelAggregation

IBasicMatrixAggregator.DefaultLevelAggregation
-


# IBasicMatrixAggregator.DefaultLevelAggregation


## Синтаксис


DefaultLevelAggregation: [IBasicMatrixLevelAggregator](../IBasicMatrixLevelAggregator/IBasicMatrixLevelAggregator.htm);


## Описание


Свойство DefaultLevelAggregation
 определяет параметры агрегации для уровней измерения по умолчанию.


## Комментарии


Данные настройки будут использоваться на всех уровнях, для которых свойству
 [UseDefaultLevelAggregation](../IChronologicalMatrixLevelAggregator/IChronologicalMatrixLevelAggregator.UseDefaultLevelAggregation.htm)
 установлено значение True.


## Пример


Для выполнения примера предполагается наличие в репозитории куба с идентификатором
 «STD_CUBE». В кубе имеется измерение «D_TO», содержащее более двух уровней.
 Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


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

    StandCub := MB.ItemById("CUBE_1").Edit As IStandardCube;

    //Создаем новый агрегатор

    Man := New MatrixAggregatorManager.Create As IMatrixAggregatorManager;

    //Основной механизм агрегации

    BasicAggr := Man.CreateAggregator("BasicMatrixAggregator") As IBasicMatrixAggregator;

    //Для измерения D_TO

    Dim := StandCub.Dimensions.FindById("D_TO");

    Lvl := Dim.Dimension.Levels;

    BasicAggr.Dimension := Dim.Dimension;

    BasicAggr.IgnoreNulls := IgnoreNullsState.None;

    BasicAggr.UseSelection := True;

    //Для уровня по умолчанию

    LevAggr := BasicAggr.DefaultLevelAggregation;

    LevAggr.Operation := BasicAggregatorOperation.ArithmeticalMean;

    LevAggr.PreserveExistingData := True;

    LevAggr.PreserveMethod := ExistingDataPreserveMethod.OnNull;

    //Для второго уровня

    //Уровень-приёмник

    LevAggr := BasicAggr.LevelAggregation(Lvl.Item(Lvl.Count - 2));

    LevAggr.UseDefaultLevelAggregation := False;

    //Метод - Фактическое среднее

    LevAggr.Operation := BasicAggregatorOperation.ActualMean;

    //Уровень-источник

    LevAggr.Include(Lvl.Item(Lvl.Count - 1)) := True;

    //Установка агрегации по первому элементу измерения фактов

    Dest := StandCub.Destinations.Item(0);

    Dim.Aggregator(1, Dest) := BasicAggr;

    (StandCub As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в кубе будет настроена агрегация для измерения
 "D_TO". Для уровней по умолчанию будет осуществляться агрегация
 с использованием арифметического среднего. Неагрегированные данные будут
 сохраняться, если результат не пустое значение. Для предпоследнего уровня
 будут установлены собственные настройки. Будет осуществляться агрегация
 данных с последнего уровня, с использованием метода фактического среднего.
 Агрегация будет осуществляться по выделенным элементам измерения.


См. также:


[IBasicMatrixAggregator](IBasicMatrixAggregator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
