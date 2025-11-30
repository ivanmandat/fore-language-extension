# ICalcLinearOptimizationBlock.ExpressionDimension

ICalcLinearOptimizationBlock.ExpressionDimension
-


# ICalcLinearOptimizationBlock.ExpressionDimension


## Синтаксис


ExpressionDimension: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Описание


Свойство ExpressionDimension
 определяет измерение источника данных для хранения значений выражений
 при [сложных
 ограничениях управляющих переменных](CalculationAlgorithm.chm::/Desktop/Linear_optimization_block/ExpressionsRestriction_LinOpt.htm).


## Комментарии


Для хранения значений выражений при сложных ограничениях управляющих
 переменных используется внутреннее измерение, недоступное для редактирования
 в навигаторе объектов. Для работы с измерением используйте свойство [IDimInstance.Dimension](KeDims.chm::/interface/IDimInstance/IDimInstance.Dimension.htm)
 и приведите его к интерфейсу [IRdsDictionary](KeRds.chm::/Interface/IRdsDictionary/IRdsDictionary.htm).
 Значения нижней и верхней границ задавайте с помощью атрибутов измерения
 с идентификаторами:


	- BOTTOM_LIMIT. Нижняя
	 граница;


	- TOP_LIMIT. Верхняя граница.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме создан блок линейной
 оптимизации с какими-либо настройками.


Добавьте ссылки на системные сборки: Algo, Dimensions, Metabase, Rds.
 Также добавьте ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo, CalcBlock: ICalcObject;

	    List: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    LinearBlock: ICalcLinearOptimizationBlock;

	    Dict: IRdsDictionary;

	    DictInst: IRdsDictionaryInstance;

	    Data: IRdsDictionaryElementData;

	    Attr: IRdsAttributes;

	    AttrKey, AttrInd, ElemKey: Integer;

	    AttrBottom: IRdsAttribute;

	    Elements: IRdsDictionaryElements;

	    ParentElement: IRdsDictionaryElement;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим список объектов алгоритма расчёта

	    List := CalcAlgo.Items;

	    // Получим первый блок линейной оптимизации

	    CalcBlock := List.Item(0);

	    LinearBlock := CalcBlock As ICalcLinearOptimizationBlock;

	    // Получим измерение для хранения значений выражений

	    Dict := LinearBlock.ExpressionDimension.Dimension As IRdsDictionary;

	    DictInst := Dict.Open(Null);

	    // Создадим ограничение на выражение

	    Data := DictInst.CreateElementData;

	    Attr := Dict.Attributes;

	    Data.Attribute(Attr.Name.Key) := "Ограничение";

	    // Зададим значение нижней границы

	    AttrBottom := Attr.FindById("BOTTOM_LIMIT");

	    AttrKey := AttrBottom.Key;

	    AttrInd := Data.AttributeIndex(AttrKey);

	    Data.SetAttributeValue(AttrInd, 0);

	    // Зададим значение верхней границы

	    AttrBottom := Attr.FindById("TOP_LIMIT");

	    AttrKey := AttrBottom.Key;

	    AttrInd := Data.AttributeIndex(AttrKey);

	    Data.SetAttributeValue(AttrInd, 200);

	    // Получим ключ родительского элемента измерения

	    Elements := DictInst.Elements;

	    ParentElement := Elements.Item(0);

	    ElemKey := ParentElement.Key;

	    // Добавим заданные элементы в измерение

	    DictInst.Insert(ElemKey, Data);

	    // Сохраним изменения

	    LinearBlock.SaveObject;

	End Sub UserProc;


При выполнения примера в блоке линейной оптимизации будет добавлено
 ограничение для управляющих переменных.


См. также:


[ICalcLinearOptimizationBlock](ICalcLinearOptimizationBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
