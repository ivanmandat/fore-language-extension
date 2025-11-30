# IMsBranchCondition.ConditionJoin

IMsBranchCondition.ConditionJoin
-


# IMsBranchCondition.ConditionJoin


## Синтаксис


		ConditionJoin: [OrmLogicalOperator](KeOrm.chm::/Enums/OrmLogicalOperator.htm);


## Описание


Свойство ConditionJoin определяет
 оператор объединения с предыдущим условием.


## Комментарии


Значение по умолчанию [OrmLogicalOperator.And](KeOrm.chm::/Enums/OrmLogicalOperator.htm)
 (логическое «И»).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащим метамодель с идентификатором
 METAMODEL_BRANCH_PARAM и модели с идентификаторами MODEL_BRANCH_PARAM_SEL,
 MODEL_BRANCH_PARAM_INT, MODEL_BRANCH_PARAM_DEFAULT. Источником данных
 для контейнера моделирования должна быть база данных временных рядов,
 содержащая атрибут временных рядов с идентификатором CITY. Данный атрибут
 должен являться ссылкой на справочник.


Добавьте ссылки на системные сборки: Cubes, Dal, Dimensions, Metabase, Ms, Orm, Rds.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsObj: IMetabaseObjectDescriptor;

		    pMetaModel: IMsMetaModel;

		    Chain, pDefaultContents: IMsCalculationChainEntries;

		    MetaParams: IMsModelParams;

		    param1, param2: IMsModelParam;

		    TSDB: IRubricator;

		    Atrs: IMetaAttributes;

		    pBranch: IMsCalculationChainBranch;

		    Case_1, Case_2, Case_default: IMsModel;

		    pCase: IMsBranchCase;

		    pCaseList: IMsBranchCaseList;

		    pBranchConditions: IMsBranchConditions;

		    pCondSel: IMsBranchConditionInSelection;

		    pDimInstance: IDimInstance;

		    pSelection: IDimSelection;

		    pCondExpr1, pCondExpr2: IMsBranchConditionExpression;

		    expr: IExpression;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    MsObj := mb.ItemById("MS");

		    // Получаем метамодель

		    pMetaModel := mb.ItemByIdNamespace("METAMODEL_BRANCH_PARAM", MsObj.Key).Edit As IMsMetaModel;

		    // Получаем и очищаем цепочку расчета метамодели

		    Chain := pMetaModel.CalculationChain;

		    Chain.Clear;

		    // Получаем и очищаем параметры метамодели

		    MetaParams := pMetaModel.Params;

		    MetaParams.Clear;

		    // Добавляем параметр, ссылающийся на справочник

		    param1 := MetaParams.Add;

		    param1.DataType := DbDataType.Integer;

		    param1.Hidden := True;

		    param1.Id := "P_CITY";

		    param1.Name := "Город";

		    // Получаем базу данных временных рядов, используемую для хранения

		    // данных контейнера моделирования

		    TSDB := (MsObj.Bind As IMsModelSpace).DefaultObject As IRubricator;

		    // Получаем атрибуты временных рядов

		    Atrs := TSDB.Facts.Attributes;

		    // Указываем, что справочник, на который ссылается атрибут CITY,

		    // будет определять значения параметра

		    param1.LinkedObject := Atrs.FindById("CITY").ValuesObject;

		    // Добавляем целочисленный параметр

		    param2 := MetaParams.Add;

		    param2.DefaultValue := 7;

		    param2.Id := "P_THRESHOLD";

		    param2.Name := "Порог";

		    // Создаем вершину условия

		    pBranch := Chain.AddBranch("");

		    // Указываем, что название генерируется автоматически

		    pBranch.AutoName := True;

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

		    // Указываем, что условие управляется параметром

		    pCondSel.ParamAttributes.Parameter := Param1;

		    // Указываем отметку элементов

		    pDimInstance := param1.LinkedObject.Open(Null) As IDimInstance;

		    pSelection := pDimInstance.CreateSelection;

		    pSelection.SelectElement(1, False);

		    pCondSel.Selection := pSelection;

		    // Создаем вторую ветку условия

		    pCase := pCaseList.Add;

		    // Указываем, что название ветки генерируется вручную

		    pCase.AutoName := False;

		    pCase.Name := "Рассчитывается, если значение параметра больше десяти или меньше пяти";

		    // Указываем модель, которая будет рассчитана в данной ветке

		    Case_2 := mb.ItemByIdNamespace("MODEL_BRANCH_PARAM_INT", MsObj.Key).Bind As IMsModel;

		    pCase.Contents.AddModel(Case_2);

		    // Создаем условие расчета ветки

		    pBranchConditions := pCase.Conditions;

		    // Задаем тип условия расчета ветки: соответствие выражению

		    pCondExpr1 := pBranchConditions.Add(MsBranchConditionType.Expression) As IMsBranchConditionExpression;

		    // Указываем, что условие управляется параметром

		    pCondExpr1.ParamAttributes.Parameter := Param2;

		    // Задаем выражение

		    expr := pCondExpr1.Expression;

		    expr.AsString := "{Порог}>10";

		    // Добавляем еще одно условие расчете ветки типа «соответствие выражению»

		    pCondExpr2 := pBranchConditions.Add(MsBranchConditionType.Expression) As IMsBranchConditionExpression;

		    // Задаем выражение

		    expr := pCondExpr2.Expression;

		    expr.AsString := "{Порог}<5";

		    // Указываем, что оба условия объединены логическим оператором И

		    pCondExpr2.ConditionJoin := OrmLogicalOperator.Or_;

		    // Сохраняем метамодель

		    (pMetaModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в метамодель будет добавлено условие
 и два параметра. Один параметр ссылается на справочник, второй параметр
 целочисленный. Условие состоит из трех веток. Первая ветка параметрическая
 и рассчитывается, если значение параметра входит в заданную отметку. Вторая
 ветка параметрическая и рассчитывается, если значение параметра меньше
 пяти или больше десяти. Третья ветка рассчитывается, если ни одна из двух
 предыдущих веток не была рассчитана.


См. также:


[IMsBranchCondition](IMsBranchCondition.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
