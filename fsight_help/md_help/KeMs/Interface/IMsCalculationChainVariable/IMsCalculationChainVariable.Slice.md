# IMsCalculationChainVariable.Slice

IMsCalculationChainVariable.Slice
-


# IMsCalculationChainVariable.Slice


## Синтаксис


		Slice: [IMsFormulaTransformSlice](../IMsFormulaTransformSlice/IMsFormulaTransformSlice.htm);


## Описание


Свойство Slice определяет
 срез переменной.


## Комментарии


Для получения признака внутренности переменной по отношению к цепочке
 расчёта используйте свойство [IMsCalculationChainVariable.IsInternal](IMsCalculationChainVariable.IsInternal.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE, содержащего задачу моделирования
 с идентификатором WEB_PROBLEM. Задача должна содержать внутреннюю метамодель.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub ChainEntry;

		Var

		    mb: IMetabase;

		    msKey: Integer;

		    Problem: IMsProblem;

		    Meta: IMsMetaModel;

		    MetaVisual: IMsMetaModelVisualController;

		    ChainEnts: IMsCalculationChainEntries;

		    i: Integer;

		    ChainEl: IMsCalculationChainEntry;

		    ChainVar: IMsCalculationChainVariable;

		Begin

		    mb := MetabaseClass.Active;

		    // Получаем ключ контейнера моделирования

		    msKey := mb.GetObjectKeyById("MODEL_SPACE");

		    // Получаем задачу моделирования

		    Problem := mb.ItemByIdNamespace("WEB_PROBLEM", msKey).Bind As IMsProblem;

		    // Получаем метамодель

		    Meta := Problem.MetaModel;

		    MetaVisual := Meta.VisualController;

		    // Получаем цепочку расчёта метамодели

		    ChainEnts := Meta.CalculationChain;

		    For i := 0 To ChainEnts.Count - 1 Do

		        ChainEl := ChainEnts.Item(i);

		        // Выводим информацию только о переменных

		        If ChainEl.Type = MsCalculationChainEntryType.Variable Then

		            ChainVar := ChainEl As IMsCalculationChainVariable;

		            Debug.WriteLine("Наименование: " + ChainVar.Slice.Name);

		            Debug.WriteLine("Внутренняя переменная: " + ChainVar.IsInternal.ToString);

		            Debug.WriteLine("");

		        End If;

		    End For;

		End Sub ChainEntry;


В результате выполнения примера в окно консоли будет выведена информация
 о переменных, содержащихся в цепочке расчёта метамодели.


См. также:


[IMsCalculationChainVariable](IMsCalculationChainVariable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
