# ICalcBlockIteratorStubDimension.Links

ICalcBlockIteratorStubDimension.Links
-


# ICalcBlockIteratorStubDimension.Links


## Синтаксис


Links: [ICalcBlockIteratorStubDimensionLinks](../ICalcBlockIteratorStubDimensionLinks/ICalcBlockIteratorStubDimensionLinks.htm);


## Описание


Свойство Links возвращает коллекцию
 [связей](CalculationAlgorithm.chm::/Desktop/Calculation_block/Page_Sources.htm#link)
 измерения источника с приёмником данных.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM, в котором содержится [блок
 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Calculation_unit.htm). Для блока расчёта должны быть выбраны [приёмник](CalculationAlgorithm.chm::/Desktop/Calculation_block/Master_calculation_block_page_consumer.htm)
 и [источники
 данных](CalculationAlgorithm.chm::/Desktop/Calculation_block/Page_Sources.htm), в которых содержится хотя бы два измерения.


Добавьте ссылки на системные сборки: Algo, Cubes, Dimensions, Metabase.
 Также добавьте ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    List: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    CalcBlock: ICalcObject;

	    Block: ICalcBlock;

	    IteratorModel: ICalcBlockIteratorModel;

	    IteratorStub: ICalcBlockIteratorStub;

	    IteratorStubs: ICalcBlockIteratorStubs;

	    IteratorStubDimension: ICalcBlockIteratorStubDimension;

	    IteratorStubDimensions: ICalcBlockIteratorStubDimensions;

	    DimensionModel: IDimensionModel;

	    StubOut: IVariableStub;

	    StubDim: IDimensionModel;

	    Attr, StubOutAttr: IDimAttributes;

	    AddLink: ICalcBlockIteratorStubDimensionLink;

	    Links: ICalcBlockIteratorStubDimensionLinks;

	Begin

	    // Получим алгоритм расчёта

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим список объектов алгоритма расчёта

	    List := CalcAlgo.Items;

	    // Получим блок расчёта

	    CalcBlock := List.Item(0);

	    Block := CalcBlock As ICalcBlock;

	    // Настроим связи между измерениями источника и приёмника данных

	    IteratorModel := Block.EditIteratorModel;

	    // Получим коллекцию источников данных

	    IteratorStubs := IteratorModel.Stubs;

	    // Получим первый источник данных

	    IteratorStub := IteratorStubs.Item(0);

	    // Выведем в консоль наименование полученного источника данных

	    Debug.WriteLine("Наименование источника данных: " + IteratorStub.Stub.Name);

	    // Получим коллекцию измерений источника данных

	    IteratorStubDimensions := IteratorStub.Dimensions;

	    // Получим второе измерение источника данных, для которого будет создана связь

	    IteratorStubDimension := IteratorStubDimensions.Item(1);

	    // Получим приёмник данных

	    StubOut := Block.StubOut;

	    // Получим второе измерение приёмника данных, для которого будет создана связь

	    DimensionModel := StubOut.Dimension(1);

	    // Добавим новую связь

	    Links := IteratorStubDimension.Links;

	    AddLink := Links.Add;

	    // Зададим источник данных для связи

	    AddLink.Stub := IteratorStubDimension.Stub;

	    // Получим структуру измерения источника данных

	    StubDim := IteratorStubDimension.Dimension;

	    // Зададим структуру измерения источника данных

	    AddLink.Dimension := StubDim;

	    // Получим атрибуты измерения источника данных

	    Attr := StubDim.Attributes;

	    // Зададим первый атрибут измерения источника данных (ключ)

	    AddLink.DestinationAttribute := Attr.Item(0);

	    // Зададим связываемое измерение приёмника

	    AddLink.Owner := DimensionModel;

	    // Получим атрибуты измерения приёмника данных

	    StubOutAttr := DimensionModel.Attributes;

	    // Зададим первый атрибут измерения приёмника данных (ключ)

	    AddLink.SourceAttribute := StubOutAttr.Item(0);

	    // Проверим задание всех обязательных параметров связи

	    // При наличии изменений проверяем связь

	    If AddLink.IsDirty = True Then

	        // Проверка, что все обязательные поля заполнены

	        If AddLink.IsFullLink = False Then

	            // Удалить связь, если не все обязательные поля заполнены

	            IteratorStub.CleanNotFullLink;

	        End If;

	        // Чтобы изменения применились, нужно сохранить саму модель

	        IteratorModel.Save;

	        IteratorModel.Dispose_;

	    End If;

	    Block.SaveObject;

	End Sub UserProc;


В результате выполнения примера будет настроена связь между вторыми
 измерениями первого источника и приёмника данных по атрибуту «Ключ».
 В консоль будет выведено наименование источника данных, в котором настроена
 связь. Если во время настройки будут заполнены не все обязательные поля,
 то связь будет удалена.


См. также:


[ICalcBlockIteratorStubDimension](ICalcBlockIteratorStubDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
