# ICalcBlock.AddModel

ICalcBlock.AddModel
-


# ICalcBlock.AddModel


## Синтаксис


AddModel(Parent: [IMsCalculationChainEntry](KeMs.chm::/Interface/IMsCalculationChainEntry/IMsCalculationChainEntry.htm)):
 [IMsCalculationChainModel](KeMs.chm::/Interface/IMsCalculationChainModel/IMsCalculationChainModel.htm);


## Параметры


Parent.
 Цепочка расчёта метамодели.


## Описание


Метод AddModel создает новую
 модель в цепочке расчёта метамодели.


## Пример


Для выполнения примера предполагается наличие в репозитории готового
 алгоритма расчёта с идентификатором ALGORITHM. В алгоритме расчёта добавлен
 блок расчёта.


Добавьте ссылки на системные сборки: Algo, Metabase, Ms. Также добавьте
 [ссылку на сборку](../../Intro/KeAlgo_Programming.htm), необходимую
 для работы с алгоритмом расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo: ICalcObject;

	    CalcList: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    CalcBlock: ICalcBlock;

	    Folder: IMsCalculationChainFolder;

	    Model: IMsCalculationChainModel;

	    CalcBlockEntry: IMsCalculationChainEntry;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Формирование списка объектов алгоритма

	    CalcList := CalcAlgo.Items.Clone;

	    CalcBlock := CalcList.Item(0) As ICalcBlock;

	    // Создадим новую папку в цепочке расчёта метамодели.

	    Folder := CalcBlock.AddFolder(CalcBlock.MetaModel.CalculationChain.Item(0));

	    Folder.Name := "Folder";

	    // Создадим модель в цепочке расчёта метамодели.

	    Model := CalcBlock.AddModel(Folder.Contents.ParentEntry);

	    Model.Name := "Model";

	    // Переместим все вложенные элементы цепочки расчёта в созданную папку

	    Debug.WriteLine(CalcBlock.Folder.Contents.Count);

	    For Each CalcBlockEntry In CalcBlock.Folder.Contents Do

	        CalcBlockEntry.MoveToParent(Folder.Contents, 0);

	    End For;

	    // Сохранение изменений

	    CalcBlock.SaveObject;

	End Sub UserProc;


При выполнении примера в цепочки расчёта метамодели у блока расчёта
 будет создана папка. В этой папке будет добавлена модель. Также в новую
 папку будут перемещены все уже имеющиеся элементы цепочки расчёта.


См. также:


[ICalcBlock](ICalcBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
