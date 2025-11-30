# ICalcBlockIteratorStub.LinkByLink

ICalcBlockIteratorStub.LinkByLink
-


# ICalcBlockIteratorStub.LinkByLink


## Синтаксис


LinkByLink;


## Описание


Метод LinkByLink связывает измерений
 источника с измерениями приёмника данных по связанным атрибутам.


## Комментарии


Для проверки использования связей измерений источника с измерениями
 приёмника данных по связанным атрибутам в формулах используйте метод [ICalcBlockIteratorStub.HasUsedFormulesForLinkByLink](ICalcBlockIteratorStub.HasUsedFormulesForLinkByLink.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM и двух стандартных кубов с идентификаторами
 CUBE, SOURCE_CUBE. В алгоритме расчёта должен содержаться [блок
 расчёта](CalculationAlgorithm.chm::/Desktop/Calculation_block/Calculation_unit.htm).


Добавьте ссылки на системные сборки: Algo, Cubes, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo, CalcBlock: ICalcObject;

	    List: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    Block: ICalcBlock;

	    StandCube, SourceCube: IStandardCube;

	    Stub: IVariableStub;

	    IteratorModel: ICalcBlockIteratorModel;

	    IteratorStub: ICalcBlockIteratorStub;

	    CountStubs, i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим список объектов алгоритма расчёта

	    List := CalcAlgo.Items;

	    // Получим блок расчёта

	    CalcBlock := List.Item(0);

	    Block := CalcBlock As ICalcBlock;

	    // Получим первый куб

	    StandCube := MB.ItemById("CUBE").Edit As IStandardCube;

	    Stub := StandCube As IVariableStub;

	    // Зададим куб в качестве приёмника данных

	    Block.StubOut := Stub;

	    // Получим второй куб

	    SourceCube := MB.ItemById("SOURCE_CUBE").Edit As IStandardCube;

	    Stub := SourceCube As IVariableStub;

	    // Зададим куб в качестве источника данных

	    Block.StubsIn.Add(Stub);

	    // Настроим связи между измерениями источника и приёмника данных по связанным атрибутам

	    IteratorModel := Block.EditIteratorModel;

	    CountStubs := IteratorModel.Stubs.Count;

	    For i := 0 To CountStubs-1 Do

	        IteratorStub := IteratorModel.Stubs.Item(i);

	        // Проверим использование связей в формулах

	        If IteratorStub.HasUsedFormulesForLinkByLink = False  Then

	            // Зададим связь измерений по связанным атрибутам

	            IteratorStub.LinkByLink;

	        End If;

	    End For;

	    // Сохраним изменения в блоке расчёта

	    Block.SaveObject;

	End Sub UserProc;


В результате выполнения примера для блока расчёта будут заданы стандартные
 кубы в качестве приёмника и источника данных. Для всех измерений приёмника
 и источника данных будет настроена связь по связанным атрибутам, если
 она не используется в формулах.


См. также:


[ICalcBlockIteratorStub](ICalcBlockIteratorStub.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
