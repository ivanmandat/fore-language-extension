# IStandardCubeDimension.Aggregator

IStandardCubeDimension.Aggregator
-


# IStandardCubeDimension.Aggregator


## Синтаксис


Aggregator(FactKey: Variant; Destination: [IStandardCubeDestination](../IStandardCubeDestination/IStandardCubeDestination.htm)):
 [IMatrixAggregatorModel](KeMatrix.chm::/Interface/IMatrixAggregatorModel/IMatrixAggregatorModel.htm);


## Параметры


FactKey. Ключ элемента измерения
 фактов, для которого необходимо настроить агрегацию;


Destination. Вариант отображения
 куба, в рамках которого необходимо настроить агрегацию.


## Описание


Свойство Aggregator определяет
 настройки агрегации измерения по указанному факту куба.


## Пример


Для выполнения примера предполагается наличие стандартного куба с идентификатором
 «Stand_Cube». В кубе имеется календарное измерение с идентификатором «CALENDAR».
 В данном измерении имеется не менее двух уровней.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    StandCub: IStandardCube;

    Man: IMatrixAggregatorManager;

    Dest: IStandardCubeDestination;

    Dim: IStandardCubeDimension;

    DimModel: IDimensionModel;

    ChronAggr: IChronologicalMatrixAggregator;

    LevAggr: IChronologicalMatrixLevelAggregator;

    FactDim: IStandardCubeDimension;

    CustomElements: ICustomDimElements;

    DimInst: IDimInstance;

    DimElements: IDimElements;

    i: Integer;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("Stand_Cube").Edit;

    StandCub := MObj As IStandardCube;

    //Создаем новый агрегатор

    Man := New MatrixAggregatorManager.Create As IMatrixAggregatorManager;

    //Хронологический механизм агрегации

    ChronAggr := Man.CreateAggregator("ChronologicalMatrixAggregator") As IChronologicalMatrixAggregator;

    //Для измерения - календарь

    Dim := StandCub.Dimensions.FindById("CALENDAR");

    DimModel := Dim.Dimension;

    ChronAggr.Dimension := DimModel;

    //Уровень-источник

    LevAggr := ChronAggr.LevelAggregation(DimModel.Levels.Item(0));

    //Метод - равномерная дезагрегация

    LevAggr.Operation := ChronologicalAggregatorOperation.UniformDisaggregation;

    //Уровень-приёмник

    LevAggr.SourceLevel := DimModel.Levels.Item(1);

    //Получение элементов измерения фактов, для установки по ним агрегации

    Dest := StandCub.Destinations.Item(0);

    FactDim := StandCub.FactDimension;

    //Если измерение фактов локальное, то получаем список элементов через ICustomDimension.Elements,

    //иначе открываем справочник, используемый в качестве измерения фактов

    If StandCub.ExternalFactDimension = False Then

        //Элементы измерения фактов

        CustomElements := (FactDim.Dimension As ICustomDimension).Elements;

        //Устанавка выбранного механизма агрегации

        For i := 0 To CustomElements.RowCount - 1 Do

            //По умолчанию ключ элементов хранится в атрибуте с индексом 0

            //Устанавливаем агрегацию для элемента по его ключу

            Dim.Aggregator(CustomElements.AttributeValue(i, 0), Dest) := ChronAggr;

        End For;

    Else

        //Данные справочника

        DimInst := (FactDim.Dimension As IMetabaseObject).Open(Null) As IDimInstance;

        //Элементы справочника

        DimElements := DimInst.Elements;

        //Устанавка выбранного механизма агрегации

        For i := 0 To DimElements.Count - 1 Do

            //Первичным ключом в справочнике является атрибут с назначением Идентификатор

            //Устанавливаем агрегацию для элемента по значению этого атрибута

            Dim.Aggregator(DimElements.Id(i), Dest) := ChronAggr;

        End For;

    End If;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет настроена агрегация данных для календарного
 измерения куба. С первого уровня, имеющегося в календарном измерении,
 будет осуществляться равномерная дезагрегация данных на второй уровень
 календаря. Данный метод агрегации будет установлен для всех элементов
 измерения фактов.


См. также:


[IStandardCubeDimension](IStandardCubeDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
