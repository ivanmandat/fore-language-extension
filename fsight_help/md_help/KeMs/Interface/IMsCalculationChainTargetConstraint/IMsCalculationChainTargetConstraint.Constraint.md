# IMsCalculationChainTargetConstraint.Constraint

IMsCalculationChainTargetConstraint.Constraint
-


# IMsCalculationChainTargetConstraint.Constraint


## Синтаксис


		Constraint: [IMsTargetConstraint](../IMsTargetConstraint/IMsTargetConstraint.htm);


## Описание


Свойство Constraint возвращает
 параметры ограничения целевой функции.


## Комментарии


Для получения из цепочки расчёта целевой функции, которой принадлежит
 ограничение, используйте свойство [IMsCalculationChainTargetConstraint.TargetEntry](IMsCalculationChainTargetConstraint.TargetEntry.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего задачу моделирования с
 идентификатором CHAIN_TARGET_CONSTRANT_D. Данная задача должна быть предназначена
 для веб-приложения и должна содержать целевую функцию.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsObj: IMetabaseObjectDescriptor;

		    Ms: IMsModelSpace;

		    Problem: IMsProblem;

		    CalcChain: IMsCalculationChainEntries;

		    I: Integer;

		    Constraint: IMsTargetConstraint;

		    MetaConstraint: IMsCalculationChainTargetConstraint;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    MsObj := mb.ItemById("MS");

		    Ms := MsObj.Bind As IMsModelSpace;

		    // Получаем задачу моделирования

		    Problem := mb.ItemByIdNamespace("CHAIN_TARGET_CONSTRANT_D", MsObj.Key).Edit As IMsProblem;

		    // Получаем цепочку расчета

		    CalcChain := Problem.MetaModel.CalculationChain;

		    // Ищем ограничения целевой функции

		    For i := 0 To CalcChain.Count - 1 Do

		        If CalcChain.Item(i).Type = MsCalculationChainEntryType.TargetConstraint Then

		            MetaConstraint := CalcChain.Item(i) As IMsCalculationChainTargetConstraint;

		            Debug.WriteLine("Ограничение '" + MetaConstraint.Name + "'");

		            // Ослабляем ограничение сверху и снизу

		            Constraint := MetaConstraint.Constraint;

		            Constraint.LowerBoundFixed := MsBoundFixType.NotFixed;

		            Constraint.UpperBoundFixed := MsBoundFixType.NotFixed;

		            // Выводим в окно консоли название целевой функции, которой принадлежит ограничение

		            Debug.Indent;

		                Debug.WriteLine("Принадлежит целевой функции '" + MetaConstraint.TargetEntry.Name + "'");

		            Debug.Unindent;

		        End If;

		    End For;

		    // Сохраняем изменения

		    (Problem As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в окно консоли будет выведена информация
 об ограничениях целевой функции. Все имеющиеся ограничения будут ослаблены.


См. также:


[IMsCalculationChainTargetConstraint](IMsCalculationChainTargetConstraint.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
