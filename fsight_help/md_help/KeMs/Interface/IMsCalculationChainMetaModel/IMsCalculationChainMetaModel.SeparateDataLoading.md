# IMsCalculationChainMetaModel.SeparateDataLoading

IMsCalculationChainMetaModel.SeparateDataLoading
-


# IMsCalculationChainMetaModel.SeparateDataLoading


## Синтаксис


		SeparateDataLoading: Boolean;


## Описание


Свойство SeparateDataLoading
 определяет признак загрузки данных отдельно от остальной задачи.


## Комментарии


Свойство актуально при работе с различными блоками в алгоритме расчёта,
 если в них используется разная отметка одного и того же источника данных.


Допустимые значения:


	- True. Флажок «Загружать данные отдельно от остальных»
	 в контекстном меню блока расчёта будет установлен. Раздельная загрузка
	 данных в таком случае выполняется быстрее и сокращает общее время
	 расчёта алгоритма. Флажок доступен для всех видов блоков;


	- False. Флажок «Загружать данные отдельно от остальных»
	 в контекстном меню блока расчёта будет снят. Все данные будут загружаться
	 в начале выполнения расчёта алгоритма.


## Пример


Для выполнения примера в репозитории предполагается наличие алгоритма
 расчёта показателей с идентификатором ALGORITHM. В алгоритме имеются два
 блока расчёта, которые построены на одном источнике данных.


Добавьте ссылки на системные сборки: Algo, Metabase, Ms, а также пользовательскую
 сборку «[Ядро
 алгоритма расчёта](KeAlgo.chm::/Intro/KeAlgo_Programming.htm)».


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObjectDescriptor;

		    Algo: ICalcObject;

		    CalcAlgo: ICalcAlgorithm;

		    MetaModel: IMsMetaModel;

		    MetaModelChain: IMsCalculationChainMetaModel;

		Begin

		    MB := MetabaseClass.Active;

		    MObj := MB.ItemById("ALGORITHM");

		    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

		    CalcAlgo := Algo As ICalcAlgorithm;

		    MetaModel := CalcAlgo.MetaModel;

		    MetaModelChain := MetaModel.CalculationChain.Item(0) As IMsCalculationChainMetaModel;

		    MetaModelChain.SeparateDataLoading := True;

		    MetaModelChain := MetaModel.CalculationChain.Item(1) As IMsCalculationChainMetaModel;

		    MetaModelChain.SeparateDataLoading := True;

		    CalcAlgo.Save;

		End Sub UserProc;


В результате выполнения примера для блоков расчёта будет включена раздельная
 загрузка данных.


См. также:


[IMsCalculationChainMetaModel](IMsCalculationChainMetaModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
