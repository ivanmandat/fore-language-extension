# ICalcBlockIteratorModel.IsDirty

ICalcBlockIteratorModel.IsDirty
-


# ICalcBlockIteratorModel.IsDirty


## Синтаксис


IsDirty: Boolean;


## Описание


Свойство IsDirty возвращает
 признак наличия изменений в настройках [источников
 данных](CalculationAlgorithm.chm::/Desktop/Calculation_block/Page_Sources.htm).


## Комментарии


Допустимые значения:


	- True. Настройки источников
	 данных изменены;


	- False. Настройки источников
	 данных не изменены.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме создан и настроен блок
 расчёта.


Добавьте ссылки на системные сборки: Algo, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcAlgo: ICalcAlgorithm;

	    CalcBlock: ICalcBlock;

	    CalcBlockIteratorModel: ICalcBlockIteratorModel;

	    CalcBlockIteratorStub: ICalcBlockIteratorStub;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Блок расчёта

	    CalcBlock := CalcAlgo.Items(0) As ICalcBlock;

	    CalcBlockIteratorModel := CalcBlock.EditIteratorModel;

	    CalcBlockIteratorStub := CalcBlockIteratorModel.Stubs.Item(0);

	    // Связь измерений источника и приёмника по идентификаторам атрибутов

	    CalcBlockIteratorStub.LinkById;

	    // При наличии изменений в настройках сохраняем блок расчёта

	    If CalcBlockIteratorModel.IsDirty Then

	        CalcBlockIteratorModel.Save;

	        CalcBlockIteratorModel.Dispose_;

	        CalcBlock.SaveObject;

	    End If;

	End Sub UserProc;


При выполнении примера в блоке расчёта будет настроена связь измерений
 источника и приёмника по идентификаторам. При наличии изменений блок расчёта
 будет сохранён.


См. также:


[ICalcBlockIteratorModel](ICalcBlockIteratorModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
