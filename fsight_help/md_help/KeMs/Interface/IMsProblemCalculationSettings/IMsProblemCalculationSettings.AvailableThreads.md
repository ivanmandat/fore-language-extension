# IMsProblemCalculationSettings.AvailableThreads

IMsProblemCalculationSettings.AvailableThreads
-


# IMsProblemCalculationSettings.AvailableThreads


## Синтаксис


AvailableThreads: Integer;


## Описание


Свойство AvailableThreads определяет
 количество потоков при расчете задачи моделирования.


## Комментарии


Особенности использования свойства:


	- если свойство принимает значение «0», то для расчета задачи
	 моделирования используется число ядер процессора;


	- если свойство принимает значение «1», то используется однопоточный
	 расчет задачи моделирования.


Значение свойства влияет на свойство [IMsCalculationChainMultiDimIterator.MultiThreaded](../IMsCalculationChainMultiDimIterator/IMsCalculationChainMultiDimIterator.MultiThreaded.htm)
 при использовании многопоточного расчета многомерных итераторов.


## Пример


Для выполнения примера в репозитории предполагается наличие задачи моделирования
 с идентификатором PROBLEM и метамодели с идентификатором METAMODEL, которая
 используется при расчете задачи моделирования.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    Problem: IMsProblem;

    Settings: IMsProblemCalculationSettings;

    Calc: IMsProblemCalculation;

    Start, Stop, Temp: Integer;

    MetaModel: IMsMetaModel;

    Chain: IMsCalculationChainEntries;

    i: Integer;

    Iter: IMsCalculationChainMultiDimIterator;

Begin

    MB := MetabaseClass.Active;

    // Получим задачу моделирования

    Problem := MB.ItemById("PROBLEM").EditTemporary As IMsProblem;

    // Получим метамодель и цепочку расчета метамодели

    MetaModel := MB.ItemById("METAMODEL").Edit As IMsMetaModel;

    Chain := MetaModel.CalculationChain;

    // Включим многомерный расчет для элементов цепочки расчета

    For i := 0 To Chain.Count - 1 Do

        If Chain.Item(i).Type = MsCalculationChainEntryType.MultiDimIterator Then

            Iter := Chain.Item(i) As IMsCalculationChainMultiDimIterator;

            Iter.MultiThreaded := True;

        End If;

    End For;

    (MetaModel As IMetabaseObject).Save;

    // Получим настройки, используемые при расчете задачи моделирования

    Settings := Problem.CreateCalculationSettings;

    // Зададим количество потоков для расчета

    Settings.AvailableThreads := 4;

    // Создадим объект, осуществляющий расчет задачи

    Calc := Problem.Calculate(Settings);

    Calc.SaveData := False;

    Calc.OverwriteSameValues := False;

    Start := DateTime.Ticks;

    // Выполним расчет задачи моделирования

    Calc.Run;

    // Рассчитаем затраченное время на выполнение и выведем в консоль

    Stop := DateTime.Ticks;

    Temp := Stop - Start;

    Debug.WriteLine("Время, затраченое на выполнение: " + (Temp / 1000).ToString + " сек.");

End Sub UserProc;


В результате выполнения примера будет рассчитана задача моделирования
 с использованием многопоточного расчета многомерного итератора для увеличения
 скорости расчета задачи моделирования. В консоль будет выведено время
 выполнения расчета задачи моделирования.


См. также:


[IMsProblemCalculationSettings](IMsProblemCalculationSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
