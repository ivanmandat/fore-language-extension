# IMsProblemCalculationSettings.EntriesFilter

IMsProblemCalculationSettings.EntriesFilter
-


# IMsProblemCalculationSettings.EntriesFilter


## Синтаксис


EntriesFilter: [IMsCalculationChainFilter](../IMsCalculationChainFilter/IMsCalculationChainFilter.htm);


## Описание


Свойство EntriesFilter возвращает
 коллекцию элементов, рассчитываемых задачей.


## Комментарии


Данное свойство позволяет рассчитывать только часть цепочки расчета
 без сохранения метамодели.


Если в коллекцию добавлен:


	- родительский элемент.
	 Все его дочерние элементы будут добавлены в коллекцию;


	- дочерний элемент. Все
	 его родительские элементы будут добавлены в коллекцию без дополнительных
	 дочерних элементов. Например, в цепочке расчета метамодели есть папка
	 «Циклы», содержащая модели
	 «Страны», «Города»
	 и «Показатели». Если в коллекцию
	 рассчитываемых элементов будет добавлена модель «Показатели»,
	 то в коллекцию также будет добавлена папка «Циклы».
	 Модели «Страны» и «Города» не будут рассчитаны задачей.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащим задачу моделирования
 с идентификатором «PROBLEM_FILTER». Метамодель, рассчитываемая данной
 задачей, должна содержать несколько элементов в цепочке расчета.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    MsKey: Integer;

    Problem: IMsProblem;

    CalcChain: IMsCalculationChainEntries;

    CalcSettings: IMsProblemCalculationSettings;

    ChainFilter: IMsCalculationChainFilter;

    Calculation: IMsProblemCalculation;

    i: Integer;

Begin

    mb := MetabaseClass.Active;

    // Получаем ключ контейнера моделирования

    MsKey := mb.GetObjectKeyById("MS");

    // Получаем задачу моделирования

    Problem := mb.ItemByIdNamespace("PROBLEM_FILTER", MsKey).Edit As IMsProblem;

    // Получаем параметры расчета задачи

    CalcSettings := Problem.CreateCalculationSettings;

    // Получаем коллекцию рассчитываемых элементов

    ChainFilter := CalcSettings.EntriesFilter;

    // Очищаем коллекцию

    ChainFilter.Clear;

    // Получаем цепочку расчета

    CalcChain := Problem.EditMetaModel.CalculationChain;

    // Добавляем в коллекцию рассчитываемых элементов только нечетные элементы из цепочки расчета

    For i := 1 To CalcChain.Count Do

        If (i Mod 2) <> 0 Then

            ChainFilter.Add(CalcChain.Item(i - 1));

        End If;

    End For;

    // Выводим в окно консоли наименования рассчитываемых элементов

    Debug.WriteLine("Наименования рассчитываемых элементов:");

    For i := 0 To ChainFilter.Count - 1 Do

        Debug.WriteLine(ChainFilter.Item(i).Name);

    End For;

    // Выполняем расчет задачи

    Calculation := Problem.Calculate(CalcSettings);

    Calculation.Run;

End Sub UserProc;


В результате выполнения примера в расчете задачи будут участвовать только
 нечетные элементы из цепочки расчета.


См. также:


[IMsProblemCalculationSettings](IMsProblemCalculationSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
