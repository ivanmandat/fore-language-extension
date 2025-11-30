# SetupAggregations

SetupAggregations
-


# Команда SetupAggregations


## Назначение


Вызов диалога настройки основного механизма агрегации.


## Параметры использования


Параметры команды передаются в свойстве [IUiCommandExecutionContext.Data](../../IUiCommandExecutionContext/IUiCommandExecutionContext.Data.htm).
 Для работы команды в данном свойстве необходимо указать массив типа Variant, элементы которого содержат
 следующие значения:


		 Тип значения
		 Описание


		 Элемент 1: [IMatrixAggregatorModel](KeMatrix.chm::/Interface/IMatrixAggregatorModel/IMatrixAggregatorModel.htm)
		 Настройки основного механизма агрегации.


		 Элемент 2: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm)
		 Структура справочника - измерения куба.


		 Элемент 3: [IStandardCubeDestination](KeCubes.chm::/Interface/IStandardCubeDestination/IStandardCubeDestination.htm)
		 Вариант отображения куба.


		 Элемент 4: [IDimLevel](KeDims.chm::/interface/IDimLevel/IDimLevel.htm)
		 Уровень справочника.


## Пример


Для выполнения примера разместите на форме компонент [Button](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Button.htm)
 с наименованием «Button1». В репозитории должен содержаться стандартный
 куб с идентификатором STD_CUBE.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Forms, Matrix,
 Metabase, Ui.


Пример является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Cube: IStandardCube;

	    DimModel: IDimensionModel;

	    Dim: IStandardCubeDimension;

	    Destination: IStandardCubeDestination;

	    Model: IMatrixAggregatorModel;

	    Data: Array;

	    Target: IUiCommandTarget;

	    Context: IUiCommandExecutionContext;

	Begin

	    // Получим текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получим стандартный куб

	    Cube := MB.ItemById("STD_CUBE").Edit As IStandardCube;

	    // Получим первый вариант отображения куба

	    Destination := Cube.Destinations.Item(0);

	    // Получим первое измерение куба и его структуру

	    Dim := Destination.Dimensions.Item(1);

	    DimModel := Dim.Dimension;

	    // Зададим параметры агрегации измерения по факту куба

	    Model:= Dim.Aggregator(1, Destination);

	    Data := New Variant[4];

	    Data[0]:= Model;

	    Data[1]:= DimModel;

	    Data[2]:= Destination;

	    Data[3]:= DimModel.Levels.Item(1);

	    // Вызовем диалог настройки основного механизма агрегации

	    Target := WinApplication.Instance.GetPluginTarget("Cubes");

	    Context := Target.CreateExecutionContext;

	    Context.Data := Data;

	    // Выполним команду над объектом

	    Target.Execute("SetupAggregations", Context);

	    // Сохраним изменения

	    (Cube As IMetabaseObject).Save;

	End Sub Button1OnClick;


В результате выполнения примера при нажатии на кнопку будет открыто
 окно «[<наименование
 измерения> - Основной механизм
 агрегации](UiNavObj.chm::/Cube/Work_Cube/Tuning_agr/UiMd_Cube_Work_Cube_Tuning_agr_Basic.htm)» для настройки основного механизма
 агрегации. Если в окне будут внесены какие-либо изменения и нажата кнопка
 «ОК», то все изменения будут сохранены.


См. также:


[IUiCommandTarget.Execute](../IUiCommandTarget.Execute.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
