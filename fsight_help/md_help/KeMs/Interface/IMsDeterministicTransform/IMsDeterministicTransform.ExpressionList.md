# IMsDeterministicTransform.ExpressionList

IMsDeterministicTransform.ExpressionList
-


# IMsDeterministicTransform.ExpressionList


## Синтаксис


ExpressionList: [IMsDeterministicExpressionList](../IMsDeterministicExpressionList/IMsDeterministicExpressionList.htm);


## Описание


Свойство ExpressionList возвращает
 коллекцию формул, которые имеют период действия.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL. В контейнере создана задача
 моделирования с идентификатором, метамодель и модель с идентификатором
 PROBLEM. Модель использует для расчёта метод детерминированного уравнения.


Добавьте ссылки на системные сборки: Metabase, Ms.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Problem: IMsProblem;

	    MetaModel: IMsMetaModel;

	    Model: IMsModel;

	    Determ: IMsDeterministicTransform;

	    Slice: IMsFormulaTransformSlice;

	    DetermExprList: IMsDeterministicExpressionList;

	Begin

	    Mb := MetabaseClass.Active;

	    Problem := Mb.ItemByIdNamespace("PROBLEM", Mb.GetObjectKeyById("CONT_MODEL")).Edit As IMsProblem;

	    MetaModel := Problem.MetaModel;

	    Model := (MetaModel.CalculationChain.Item(0) As IMsCalculationChainModel).EditModel;

	    Determ := (Model.Transform.FormulaItem(0).Method As IMsDeterministicTransform);

	    // Срез, на базе которого будет создан фактор для формулы

	    Slice := Model.Transform.Outputs.Item(0).Slices.Item(0);

	    // Настройка формул, которые имеют период действия

	    DetermExprList := Determ.ExpressionList;

	    DetermExprList.Clear;

	    // Добавление формул на различные даты

	    AddDetermExpr("01.01.2020", "2", Slice, DetermExprList);

	    AddDetermExpr("01.01.2015", "3", Slice, DetermExprList);

	    AddDetermExpr("01.01.2010", "4", Slice, DetermExprList);

	    // Сортировка списка

	    DetermExprList.SortByDate;

	    // Сохранение модели

	    Model.MetabaseObject.Save;

	End Sub UserProc;

	Sub AddDetermExpr(DateStr: String; ExpressionStr: String; Slice: IMsFormulaTransformSlice; Var DetermExprList: IMsDeterministicExpressionList);

	Var

	    DetermExpr: IMsDeterministicExpression;

	    Term: IMsFormulaTerm;

	Begin

	    DetermExpr := DetermExprList.Add;

	    Term := DetermExpr.Operands.Add(Slice);

	    DetermExpr.EndDate := DateTime.Parse(DateStr);

	    DetermExpr.Expression.AsString := Term.TermToInnerText + '*' + expressionStr + "/3.14";

	End Sub AddDetermExpr;


В результате выполнения примера будет произведена настройка модели:
 будут созданы три различные формулы, имеющие разный период действия.


См. также:


[IMsDeterministicTransform](IMsDeterministicTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
