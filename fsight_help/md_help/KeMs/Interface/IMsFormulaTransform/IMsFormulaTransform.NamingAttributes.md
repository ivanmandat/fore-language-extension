# IMsFormulaTransform.NamingAttributes

IMsFormulaTransform.NamingAttributes
-


# IMsFormulaTransform.NamingAttributes


## Синтаксис


NamingAttributes(Dimension: [IDimensionModel](KeDims.chm::/interface/IDimensionModel/IDimensionModel.htm)):
 [IDimAttributesList](KeDims.chm::/interface/IDimAttributesList/IDimAttributesList.htm);


## Параметры


Dimension. Измерения, для которого
 задаются настройки отображения элементов в формуле.


## Описание


Свойство NamingAttributes определяет
 список атрибутов, значения которых будут использоваться для отображения
 элементов измерения в формуле.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме создан блок расчёта,
 для которого создана хотя бы одна формула.


Добавьте ссылки на системные сборки: Algo, Cubes, Dimensions, Metabase,
 Ms. Также добавьте ссылки на сборки, которые [необходимы](KeAlgo.chm::/Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo, CalcBlock: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    Block: ICalcBlock;

	    Model: IMsModel;

	    Transform: IMsFormulaTransform;

	    InputCube: IVariableStub;

	    Dim: IDimensionModel;

	    Attrs: IDimAttributesList;

	    i, c: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим блок расчёта

	    CalcBlock := CalcAlgo.Items.Item(0);

	    Block := CalcBlock As ICalcBlock;

	    // Модель блока расчёта

	    Model := (Block.Folder.Contents.Item(0) As IMsCalculationChainModel).EditModel;

	    Transform := Model.Transform;

	    // Куб-источник

	    InputCube := Transform.Inputs.Item(0).VariableStub;

	    // Настройка отображения элементов измерений куба-источника в формуле блока расчёта

	    c := InputCube.DimensionCount;

	    For i := 0 To c - 1 Do

	        Dim := InputCube.Dimension(i);

	        Attrs := New DimAttributesList.Create(Dim, Dim.Attributes.Id.Id);

	        Transform.NamingAttributes(Dim) := Attrs;

	    End For;

	    // Сохраним изменения в блоке расчёта

	    Block.SaveObject;

	End Sub UserProc;


При выполнении примера будут изменены настройки отображения элементов
 измерений куба-источника в формуле блока расчёта. В формуле в качестве
 наименований будут отображаться идентификаторы элементов измерений.


См. также:


[IMsFormulaTransform](IMsFormulaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
