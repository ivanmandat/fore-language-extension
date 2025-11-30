# IMsCalculationChainIterator.Expression

IMsCalculationChainIterator.Expression
-


# IMsCalculationChainIterator.Expression


## Синтаксис


		Expression: [IExpression](ForeSys.chm::/Interface/IExpression/IExpression.htm);


## Описание


Свойство Expression возвращает
 условие расчёта цикла.


## Комментарии


Для настройки параметров расчёта условия используйте свойство [IMsCalculationChainIterator.Transform](IMsCalculationChainIterator.Transform.htm).


Для ограничения количества итераций цикла используйте свойство [IMsCalculationChainIterator.MaxIterations](IMsCalculationChainIterator.MaxIterations.htm).


Для разрешения однократного выполнения цикла без проверки условия используйте
 свойство [IMsCalculationChainIterator.PostCondition](IMsCalculationChainIterator.PostCondition.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего метамодель с идентификатором
 METAMODEL_ITERATOR.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsKey: Integer;

		    MetaModel: IMsMetaModel;

		    Param: IMsModelParam;

		    CalcChain: IMsCalculationChainEntries;

		    Iterator: IMsCalculationChainIterator;

		    Model: IMsModel;

		    Trans, IterTrans: IMsFormulaTransform;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    TransformVar: IMsFormulaTransformVariable;

		    Determ: IMsDeterministicTransform;

		    Expr: IExpression;

		Begin

		    mb := MetabaseClass.Active;

		    // Получим ключ контейнера моделирования

		    MsKey := mb.GetObjectKeyById("MS");

		    // Получим метамодель

		    MetaModel := mb.ItemByIdNamespace("METAMODEL_ITERATOR", MsKey).Edit As IMsMetaModel;

		    // Очистим все параметры метамодели

		    MetaModel.Params.Clear;

		    // Добавим новый параметр

		    Param := MetaModel.Params.Add;

		    Param.DefaultValue := 0;

		    Param.Id := "THRESHOLD";

		    Param.Name := "THRESHOLD";

		    // Очистим цепочку расчета метамодели

		    CalcChain := MetaModel.CalculationChain;

		    CalcChain.Clear;

		    // Создадим цикл в цепочке расчета метамодели

		    Iterator := CalcChain.AddIterator("While/Repeat");

		    // Задаем условие выполнения цикла

		    Iterator.PostCondition := True;

		    Iterator.MaxIterations := 600;

		    Expr := Iterator.Expression;

		    Expr.AsString := "{THRESHOLD}<5";

		    If Expr.ErrorInfo <> Null Then

		        Debug.WriteLine(Expr.ErrorInfo.ErrorMessage);

		    End If;

		    // Задаем режим расчета условия

		    IterTrans := Iterator.Transform;

		    IterTrans.CalculationType := MsCalculationType.Pointwise;

		    IterTrans.CalculationDirection := MsCalculationDirection.Forward;

		    // Создаем внутреннюю модель в цепочке расчета метамодели

		    Model := Iterator.Contents.AddExclusiveModel.EditModel;

		    Model.AutoName := True;

		    // Задаем параметры расчета модели

		    Trans := Model.Transform;

		    Trans.CalculationType := MsCalculationType.Pointwise;

		    Trans.CalculationDirection := MsCalculationDirection.Forward;

		    // Указываем параметр «THRESHOLD» в качестве моделируемой переменной

		    TransformVar := Trans.Outputs.AddParamVariable("THRESHOLD");

		    Slice := TransformVar.Slices.Add(Null);

		    Selector := Trans.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Trans.Transform(Selector);

		    Formula.Kind := MsFormulaKind.Deterministic;

		    Determ := Formula.Method As IMsDeterministicTransform;

		    // Задаем формулу расчета модели

		    Expr := Determ.Expression;

		    Expr.AsString := "{THRESHOLD}+RandBetween(-2,3)";

		    If Expr.ErrorInfo <> Null Then

		        Debug.WriteLine(Expr.ErrorInfo.ErrorMessage);

		    End If;

		    // Сохраняем метамодель

		    (MetaModel As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в метамодели будет создан цикл, который
 будет выполняться до тех пор, пока значение параметра THRESHOLD меньше
 пяти. Если за шестьсот итераций условие не будет выполнено, то цикл завершится.


См. также:


[IMsCalculationChainIterator](IMsCalculationChainIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
