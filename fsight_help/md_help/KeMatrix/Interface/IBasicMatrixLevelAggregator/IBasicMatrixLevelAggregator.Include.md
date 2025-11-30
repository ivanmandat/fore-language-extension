# IBasicMatrixLevelAggregator.Include

IBasicMatrixLevelAggregator.Include
-


# IBasicMatrixLevelAggregator.Include


## Синтаксис


Include(SourceLevel: [IDimLevel](KeDims.chm::/interface/IDimLevel/IDimLevel.htm)):
 Boolean;


## Параметры


SourceLevel. Уровень-источник,
 данные с которого необходимо использовать при агрегации.


## Описание


Свойство Include определяет
 признак использования данных указанного уровня при агрегации.


## Комментарии


Допустимые значения:


	- True. При агрегации
	 будут использоваться данные уровня SourceLevel;


	- False. При агрегации
	 данные уровня SourceLevel
	 использоваться не будут.


Свойство актуально, если свойствам [IBasicMatrixLevelAggregator.UseDefaultLevelAggregation](IBasicMatrixLevelAggregator.UseDefaultLevelAggregation.htm)
 и [IBasicMatrixLevelAggregator.IncludeChildren](IBasicMatrixLevelAggregator.IncludeChildren.htm)
 установлено значение False.


## Пример


Для выполнения примера в репозитории предполагается наличие куба с идентификатором
 CUBE. В кубе имеется измерение с идентификатором D_TO, содержащее более
 двух уровней.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    StdCube: IStandardCube;

    Man: IMatrixAggregatorManager;

    Dim: IStandardCubeDimension;

    Lvl: IDimLevels;

    BasicAggr: IBasicMatrixAggregator;

    LevAggr: IBasicMatrixLevelAggregator;

    Dest: IStandardCubeDestination;

Begin

    // Открываем куб на редактирование

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("CUBE").Edit;

    StdCube := MObj As IStandardCube;

    // Создаём новый агрегатор

    Man := New MatrixAggregatorManager.Create As IMatrixAggregatorManager;

    // Указываем основной механизм агрегации

    BasicAggr := Man.CreateAggregator("BasicMatrixAggregator") As IBasicMatrixAggregator;

    // Устанавливаем настройки для измерения D_TO

    Dim := StdCube.Destinations.Item(0).Dimensions.FindById("D_TO");

    Lvl := Dim.Dimension.Levels;

    BasicAggr.Dimension := Dim.Dimension;

    // Устанавливаем настройки для уровня по умолчанию

    LevAggr := BasicAggr.DefaultLevelAggregation;

    LevAggr.Operation := BasicAggregatorOperation.ArithmeticalMean;

    LevAggr.PreserveExistingData := True;

    LevAggr.PreserveMethod := ExistingDataPreserveMethod.OnNull;

    // Устанавливаем настройки для уровня-приёмника

    LevAggr := BasicAggr.LevelAggregation(Lvl.Item(Lvl.Count - 2));

    LevAggr.UseDefaultLevelAggregation := False;

    // Устанавливаем агрегацию методом «Фактическое среднее»

    LevAggr.Operation := BasicAggregatorOperation.ActualMean;

    // Устанавливаем настройки для уровня-источника

    LevAggr.Include(Lvl.Item(Lvl.Count - 1)) := True;

    LevAggr.IncludeChildren := False;

    // Устанавливаем агрегацию по первому элементу измерения фактов

    Dest := StdCube.Destinations.Item(0);

    Dim.Aggregator(1, Dest) := BasicAggr;

    // Сохраняем куб

    MObj.Save;

End Sub UserProc;


В результате выполнения примера в кубе будет настроена агрегация для
 измерения D_TO. При агрегации будут использоваться значения из уровня-источника.
 Для уровней по умолчанию будет осуществляться агрегация с использованием
 арифметического среднего. Неагрегированные данные будут сохраняться, если
 результат не пустое значение. Для предпоследнего уровня будут установлены
 собственные настройки. Будет осуществляться агрегация данных с последнего
 уровня, с использованием метода фактического среднего.


См.также:


[IBasicMatrixLevelAggregator](IBasicMatrixLevelAggregator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
