# IMsBranchConditionNotEmpty.SetStub

IMsBranchConditionNotEmpty.SetStub
-


# IMsBranchConditionNotEmpty.SetStub


## Синтаксис


		SetStub(pStub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm));


## Параметры


pStub. Источник данных, содержащий
 ряд, проверяемый на пустоту.


## Описание


Метод SetStub устанавливает
 источник данных, который содержит ряд, проверяемый на пустоту.


## Комментарии


Для получения среза, соответствующего проверяемому ряду, используйте
 свойство [IMsBranchConditionNotEmpty.Slice](IMsBranchConditionNotEmpty.Slice.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. Данный контейнер должен содержать
 метамодель с идентификатором METAMODEL_BRANCH и модели с идентификаторами
 MODEL_LINEAR и MODEL_TSLS.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsKey: Integer;

		    MetaModel: IMsMetaModel;

		    Chain, DefaultContents: IMsCalculationChainEntries;

		    Branch: IMsCalculationChainBranch;

		    Case_1, Case_default: IMsModel;

		    CaseList: IMsBranchCaseList;

		    CaseItem: IMsBranchCase;

		    BranchConditions: IMsBranchConditions;

		    ConditionNotEmpty: IMsBranchConditionNotEmpty;

		    Transform: IMsFormulaTransform;

		    Output: IMsFormulaTransformVariable;

		    Slice: IMsFormulaTransformSlice;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    MsKey := mb.GetObjectKeyById("MS");

		    // Получаем метамодель

		    MetaModel := mb.ItemByIdNamespace("METAMODEL_BRANCH", MsKey).Edit As IMsMetaModel;

		    // Получаем цепочку расчета метамодели

		    Chain := MetaModel.CalculationChain;

		    // Очищаем цепочку расчета метамодели

		    Chain.Clear;

		    // Создаем вершину условия

		    Branch := Chain.AddBranch("Условие");

		    // Получаем цепочку расчета по умолчанию, которая рассчитывается,

		    // если не выполнилась ни одна ветка условия

		    DefaultContents := Branch.DefaultContents;

		    // Получаем модель «MODEL_LINEAR»

		    Case_default := mb.ItemByIdNamespace("MODEL_LINEAR", MsKey).Bind As IMsModel;

		    // Добавляем модель «MODEL_LINEAR» в цепочку расчета по умолчанию

		    DefaultContents.AddModel(Case_default);

		    // Получаем коллекцию веток условия

		    CaseList := Branch.CaseList;

		    // Добавляем ветку условия

		    CaseItem := CaseList.Add;

		    // Получаем модель «MODEL_TSLS»

		    Case_1 := mb.ItemByIdNamespace("MODEL_TSLS", MsKey).Bind As IMsModel;

		    // Указываем, что данная модель должна быть рассчитана, если выполняется данная ветка условия

		    CaseItem.Contents.AddModel(Case_1);

		    // Получаем коллекцию условий расчета ветки

		    BranchConditions := CaseItem.Conditions;

		    // Добавляем условие расчета ветки: указанный ряд должен содержать данные

		    ConditionNotEmpty := BranchConditions.Add(MsBranchConditionType.NotEmpty) As IMsBranchConditionNotEmpty;

		    // Получаем моделируемую переменную в модели «MODEL_TSLS»

		    Transform := Case_1.Transform;

		    Output := Transform.Outputs.Item(0);

		    // Указываем, что источник данных моделируемой переменной

		    // содержит ряд, проверяемый на наличие данных

		    ConditionNotEmpty.SetStub(Output.VariableStub);

		    // Получаем срез данных, соответствующий ряду, который будет проверяться на наличие данных

		    Slice := ConditionNotEmpty.Slice;

		    // Устанавливаем отметку, аналогичную отметке моделируемой переменной

		    Slice.Selection := Output.Slices.Item(0).Selection;

		    // Сохраняем изменения

		    (MetaModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в цепочке расчета метамодели будет создано
 условие: если моделируемая переменная модели MODEL_TSLS не является
 пустой, то будет рассчитана данная модель, иначе - модель MODEL_LINEAR.


См. также:


[IMsBranchConditionNotEmpty](IMsBranchConditionNotEmpty.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
