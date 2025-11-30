# ICalcObject.RefreshMetaModel

ICalcObject.RefreshMetaModel
-


# ICalcObject.RefreshMetaModel


## Синтаксис


RefreshMetaModel;


## Описание


Метод RefreshMetaModel обновляет
 метамодель.


## Комментарии


Во время обновления в структуре метамодели создаётся папка, необходимая
 для хранения моделей, которые будут использоваться блоком расчёта.


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM. В алгоритме создан блок расчёта с
 одним параметром.


Добавьте ссылки на системные сборки: Algo, Metabase, Ms, Transform.
 Также добавьте ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Algo, CalcBlock: ICalcObject;

	    List: ICalcObjectsList;

	    CalcAlgo: ICalcAlgorithm;

	    Block: ICalcBlock;

	    MModel: IMsMetaModel;

	    backupMetamodel: IMetabaseObject;

	Begin

	    MB := MetabaseClass.Active;

	    // Получим алгоритм расчёта

	    MObj := MB.ItemById("ALGORITHM");

	    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

	    CalcAlgo := Algo As ICalcAlgorithm;

	    // Получим блока расчёта

	    Block := CalcAlgo.Items.Item(0) As ICalcBlock;

	    MModel := Block.MetaModel;

	    // Сохраним изначальные настройки метамодели

	    backupMetamodel := CreateCloneMetamodel(Block);

	    // Попробуем изменить отдельные настройки метамодели

	    Try

	        MModel.Id := "New_Metamodel_Id";

	        MModel.Name := "Changed Metamodel";

	        // В строке ниже допущена ошибка присвоения значения по умолчанию

	        MModel.Params.Item(0).DefaultValue := "Error value";

	        MModel.CalculationChain.Item(0).Name := "New Calculation Chain Entry Name"

	    Except On E: Exception Do

	        // Если произошла ошибка при изменении настроек, то очистим всю метамодель

	        // и вернём исходное её состояние

	        RecursiveCleanUpModels(Block.Folder.Contents);

	        Block.MetaModel.MetabaseObject.Assign(backupMetamodel);

	        // Обновим метамодель для корректной работы блока расчёта

	        Block.RefreshMetaModel;

	    End Try;

	    If Block.IsNeedConvert Then

	        Block.Convert;

	    End If;

	    // Сохраним изменения

	    Block.SaveObject;

	End Sub UserProc;


	Private Function CreateCloneMetaModel(calcObj: ICalcObject): IMetabaseObject;

	Var

	    crInfo : IMetabaseObjectCreateInfo;

	    obj : IMetabaseObject;

	Begin

	    crInfo := MetabaseClass.Active.CreateCreateInfo;

	    crInfo.Name := calcObj.Name;

	    crInfo.ClassId := MetabaseObjectClass.KE_CLASS_MSMETAMODEL;

	    crInfo.IsTemporary := True;

	    crInfo.Parent := calcObj.MetaModel.MetabaseObject.Parent;

	    crInfo.Permanent := False;

	    obj := MetabaseClass.Active.CreateObject(crInfo).Edit;

	    obj.Assign(calcObj.MetaModel.MetabaseObject);

	    Return obj;

	End Function CreateCloneMetaModel;


	Private Sub RecursiveCleanUpModels(entries: IMsCalculationChainEntries);

	Var

	    Entry: IMsCalculationChainEntry;

	    Model: IMsModel;

	    Formula: IMsFormula;

	    Determ: IMsDeterministicTransform;

	    DetermExprList: IMsDeterministicExpressionList;

	    DetermExpr: IMsDeterministicExpression;

	    Transform: IMsFormulaTransform;

	Begin

	    For Each Entry In entries Do

	        If Entry Is IMsCalculationChainFolder Then

	            RecursiveCleanUpModels((Entry As IMsCalculationChainFolder).Contents);

	        Elseif Entry Is IMsCalculationChainModel Then

	            Model := (Entry As IMsCalculationChainModel).EditModel;

	            Transform := Model.Transform;

	            If Transform.FormulaCount = 0 Then

	                Continue;

	            End If;

	            Formula := Transform.FormulaItem(0);

	            Determ := Formula.Method As IMsDeterministicTransform;

	            DetermExprList := Determ.ExpressionList;

	            For Each DetermExpr In DetermExprList Do

	                DetermExpr.Operands.Cleanup(True);

	            End For;

	        End If;

	    End For;

	End Sub RecursiveCleanUpModels;


При выполнении примера будет произведена попытка изменения настроек
 метамодели блока расчёта. При возникновении ошибки метамодель будет восстановлена
 из предварительно созданной копии. Для корректной работы блока расчёта
 метамодель будет обновлена.


См. также:


[ICalcObject](ICalcObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
