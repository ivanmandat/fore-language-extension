# IMsBranchConditionInSelection.ParameterAsSelection

IMsBranchConditionInSelection.ParameterAsSelection
-


# IMsBranchConditionInSelection.ParameterAsSelection


## Синтаксис


		ParameterAsSelection: [IMsModelParam](../IMsModelParam/IMsModelParam.htm);


## Описание


Свойство ParameterAsSelection
 определяет параметр, задающий отметку.


## Комментарии


Если одновременно заданы свойства ParameterAsSelection
 и [IMsBranchConditionInSelection.Selection](IMsBranchConditionInSelection.Selection.htm),
 то будет учитываться значение того свойства, которое задано последним.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащим метамодель с идентификатором
 METAMODEL_BRANCH_PARAM и модели с идентификаторами MODEL_BRANCH_PARAM_SEL,
 MODEL_BRANCH_PARAM_DEFAULT. Источником данных для контейнера моделирования
 должна быть база данных временных рядов, содержащая атрибут временных
 рядов с идентификатором CITY. Данный атрибут должен являться ссылкой на
 справочник.


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Metabase,
 Ms, Rds, Transform.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsObj, Dict: IMetabaseObjectDescriptor;

		    pMetaModel: IMsMetaModel;

		    Chain, pDefaultContents: IMsCalculationChainEntries;

		    MetaParams: IMsModelParams;

		    param1, param2: IMsModelParam;

		    TSDB: IRubricator;

		    Atrs: IMetaAttributes;

		    pBranch: IMsCalculationChainBranch;

		    Case_1, Case_default: IMsModel;

		    pCase: IMsBranchCase;

		    pCaseList: IMsBranchCaseList;

		    pBranchConditions: IMsBranchConditions;

		    pCondSel: IMsBranchConditionInSelection;

		    pDimInstance: IDimInstance;

		    pSelection: IDimSelection;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    MsObj := mb.ItemById("MS");

		    // Получаем метамодель

		    pMetaModel := mb.ItemByIdNamespace("METAMODEL_BRANCH_PARAM", MsObj.Key).Edit As IMsMetaModel;

		    // Получаем базу данных временных рядов, используемую для хранения

		    // данных контейнера моделирования

		    TSDB := (MsObj.Bind As IMsModelSpace).Rubricator As IRubricator;

		    // Получаем атрибуты временных рядов

		    Atrs := TSDB.Facts.Attributes;

		    // Получаем справочник, на который ссылается атрибут CITY

		    Dict := Atrs.FindById("CITY").ValuesObject;

		    pDimInstance := Dict.Open(Null) As IDimInstance;

		    // Получаем и очищаем цепочку расчета метамодели

		    Chain := pMetaModel.CalculationChain;

		    Chain.Clear;

		    // Получаем и очищаем параметры метамодели

		    MetaParams := pMetaModel.Params;

		    MetaParams.Clear;

		    // Добавляем первый параметр, ссылающийся на справочник

		    param1 := MetaParams.Add;

		    param1.DataType := DbDataType.Integer;

		    param1.Hidden := True;

		    param1.Id := "P_CITY";

		    param1.Name := "Город";

		    param1.ParamType := TsParamType.Selection;

		    // Указываем, что справочник, который будет определять значения параметра

		    param1.LinkedObject := Dict;

		    // Задаем отметку параметра

		    pSelection := pDimInstance.CreateSelection;

		    pSelection.SelectElement(1, False);

		    Param1.DefaultValue := pSelection;

		    // Добавляем второй параметр, ссылающийся на справочник

		    param2 := MetaParams.Add;

		    param2.DataType := DbDataType.Integer;

		    param2.Hidden := True;

		    param2.Id := "P_CITY_SEL";

		    param2.Name := "Город (отметка)";

		    param2.ParamType := TsParamType.Selection;

		    // Указываем, что справочник, который будет определять значения параметра

		    param2.LinkedObject := Dict;

		    // Задаем отметку параметра

		    pSelection.DeselectAll;

		    pSelection.SelectElement(2, False);

		    param2.DefaultValue := pSelection;

		    // Создаем вершину условия

		    pBranch := Chain.AddBranch("Условие");

		    pBranch.Parameter := param1;

		    // Создаем ветку, которая выполняется, если не выполнится ни одна другая ветка

		    pDefaultContents := pBranch.DefaultContents;

		    // Указываем модель, которая будет рассчитана в данной ветке

		    Case_default := mb.ItemByIdNamespace("MODEL_BRANCH_PARAM_DEFAULT", MsObj.Key).Bind As IMsModel;

		    pDefaultContents.AddModel(Case_default);

		    // Создаем первую ветку условия

		    pCaseList := pBranch.CaseList;

		    pCase := pCaseList.Add;

		    // Указываем модель, которая будет рассчитана в данной ветке

		    Case_1 := mb.ItemByIdNamespace("MODEL_BRANCH_PARAM_SEL", MsObj.Key).Bind As IMsModel;

		    pCase.Contents.AddModel(Case_1);

		    // Создаем условие расчета ветки

		    pBranchConditions := pCase.Conditions;

		    // Задаем тип условия расчета ветки: вхождение в отметку элементов

		    pCondSel := pBranchConditions.Add(MsBranchConditionType.InSelection) As IMsBranchConditionInSelection;

		    // Указываем, что условие управляется параметром, являющимся отметкой

		    pCondSel.ParameterAsSelection := Param2;

		    // Указываем, что условие учитывается

		    pCondSel.Negation:= False;

		    // Сохраняем метамодель

		    (pMetaModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в метамодель будут добавлены условие
 и два параметра. Оба параметра ссылаются на справочник. Условие состоит
 из двух веток. Первая ветка параметрическая и рассчитывается, если значение
 параметра входит в заданную отметку. Вторая ветка рассчитывается, если
 предыдущая ветка не была рассчитана.


См. также:


[IMsBranchConditionInSelection](IMsBranchConditionInSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
