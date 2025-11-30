# IAutoCubeDimension.Aggregator

IAutoCubeDimension.Aggregator
-


# IAutoCubeDimension.Aggregator


## Синтаксис


Aggregator(Destination: [IAutoCubeDestination](../IAutoCubeDestination/IAutoCubeDestination.htm)):
 [IMatrixAggregatorModel](kematrix.chm::/interface/imatrixaggregatormodel/imatrixaggregatormodel.htm);


## Параметры


Destination. Вариант отображения
 куба, для которого необходимо настроить агрегацию по измерению.


## Описание


Свойство Aggregator определяет
 параметр агрегации по измерению для указанного варианта отображения куба.


## Пример


Для выполнения примера предполагается наличие в репозитории автоматического
 куба с идентификатором AUTO_CUBE. Первое измерения куба должно содержать
 более одного уровня.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Matrix, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    AutoCub: IAutoCube;

	    Dim: IAutoCubeDimension;

	    AggregatorManager: MatrixAggregatorManager;

	    IAggregatorManager: IMatrixAggregatorManager;

	    AggregatorModel: IMatrixAggregatorModel;

	    BasicAggregator: IBasicMatrixAggregator;

	    LevelBasicAggregator: IBasicMatrixLevelAggregator;

	    Dimension: IAutoCubeDimension;

	    DimensionModel: IDimensionModel;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем автоматический куб

	    MObj := MB.ItemById("AUTO_CUBE").Edit;

	    AutoCub := MObj As IAutoCube;

	    Dim := AutoCub.Dimensions.Item(0);

	    //Создаем новый объект

	    AggregatorManager := New MatrixAggregatorManager.Create;

	    IAggregatorManager := AggregatorManager As IMatrixAggregatorManager;

	    //Создаем идентификатор механизма агрегации

	    AggregatorModel := IAggregatorManager.CreateAggregator("BasicMatrixAggregator");

	    Dimension := AutoCub.Dimensions.Item(0);

	    DimensionModel := Dimension.Dimension;

	    //Указываем измерение, по которому настраивается агрегация

	    AggregatorModel.Dimension := DimensionModel;

	    BasicAggregator := AggregatorModel As IBasicMatrixAggregator;

	    //Указываем уровень-источник и уровень-приёмник

	    LevelBasicAggregator := BasicAggregator.LevelAggregation(DimensionModel.Levels.Item(0));

	    LevelBasicAggregator.Include(DimensionModel.Levels.Item(1)) := True;

	    //Указываем метод агрегации - «Фактическое среднее»

	    LevelBasicAggregator.Operation := BasicAggregatorOperation.ActualMean;

	    //Определяем,
	 будут ли сохраняться неагрегированные данные

	    LevelBasicAggregator.PreserveExistingData := False;

	    //Определяем,
	 будут ли при занесении агрегированных данных на уровень - приёмник
	 учитываться значения на этом уровне

	    LevelBasicAggregator.IncludeOwner := False;

	    //Устанавливаем параметры агрегации для измерения в автокубе

	    Dimension.Aggregator(AutoCub.Destinations.Item(0)) := AggregatorModel;

	    MObj.Save;

	End Sub UserProc;


После выполнения примера для первого измерения автоматического куба
 будет настроена агрегация данных. Агрегация будет осуществляться со второго
 уровня на первый, метод агрегации - фактическое среднее.


См. также:


[IAutoCubeDimension](IAutoCubeDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
