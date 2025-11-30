# ICalcAlgorithm.DebugAsync

ICalcAlgorithm.DebugAsync
-


# ICalcAlgorithm.DebugAsync


## Синтаксис


DebugAsync(Objs: [ICalcObjectsList](../ICalcObjectsList/ICalcObjectsList.htm)):
 [IAlgorithmCalculationAsyncDebug](../IAlgorithmCalculationAsyncDebug/IAlgorithmCalculationAsyncDebug.htm);


## Параметры


Objs. Список объектов алгоритма
 расчёта.


Примечание.
 Список объектов алгоритма расчёта должен быть скопированным. Для копирования
 объектов используйте метод [ICalcObjectsList.Clone](../ICalcObjectsList/ICalcObjectsList.Clone.htm).


## Описание


Метод DebugAsync выполняет асинхронную
 [отладку
 расчёта алгоритма](CalculationAlgorithm.chm::/Desktop/Work/Debug.htm).


## Комментарии


В процессе выполнения асинхронной отладки расчёта алгоритма должен использоваться
 режим ожидания для выполнения последовательных шагов расчёта: инициализации,
 расчёта первого объекта, расчёта второго объекта и так далее. Также режим
 ожидания используется для выявления ошибок, возникших при расчёте, и проверки
 завершения расчёта.


Режим ожидания реализован функцией GetState:


	Function GetState(CalcDebug: IAlgorithmCalculationAsyncDebug): CalculateState;

	Var

	    State: CalculateState;

	    i: Integer = 1000;

	Begin

	    // Проверим состояние расчёта

	    If CalcDebug <> Null Then

	        State := CalcDebug.State;

	        While

	            (State <> CalculateState.PausedOnDebug) And

	            (State <> CalculateState.PausedOnError) And

	            (State <> CalculateState.Aborted) And

	            (State <> CalculateState.Stoped) Do

	            State := CalcDebug.State;

	        End While;

	    End If;

	    While i > 0 Do

	        i := i - 1;

	    End While;

	    Return State;

	End Function GetState;


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM и регламентного отчёта с идентификатором
 REGULAR_REPORT. В алгоритме расчёта должны содержаться хотя бы два объекта
 для расчёта.


Добавьте ссылки на системные сборки: Algo, Metabase, Report. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObjectDescriptor;

    Algo: ICalcObject;

    ObjList, CloneList: ICalcObjectsList;

    CalcAlgo: ICalcAlgorithm;

    CalcDebug:  IAlgorithmCalculationAsyncDebug;

    i: Integer;

    Report, ReportCalc: IPrxReport;

Begin

    MB := MetabaseClass.Active;

    // Получим алгоритм расчёта

    MObj := MB.ItemById("ALGORITHM");

    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

    CalcAlgo := Algo As ICalcAlgorithm;

    // Зададим регламентный отчёт для построения промежуточных результатов расчёта

    Report := MB.ItemByID("REGULAR_REPORT").Edit As IPrxReport;

    // Получим список объектов алгоритма расчёта

    ObjList := CalcAlgo.Items;

    // Скопируем список объектов алгоритма расчёта

    CloneList := ObjList.Clone;

    // Удалим исключенные из расчёта объекты перед отладкой

    For i := CloneList.Count - 1 To 0 Step - 1 Do

        If Not CalcAlgo.Included(CloneList.Item(i)) Then

            CloneList.Remove(CloneList.Item(i));

        End If;

    End For;

    // Выведем в консоль количество включенных объектов в расчёт алгоритма

    Debug.WriteLine("Количество объектов: " + CloneList.Count.ToString);

    // Выполним асинхронную отладку расчёта алгоритма

    CalcDebug := CalcAlgo.DebugAsync(CloneList);

    // Запустим режим ожидания для выполнения инициализации

    If GetState(CalcDebug) <> CalculateState.PausedOnDebug Then

        ErrorCheck(CalcDebug);

        Return;

    End If;

    For i := 0 To CloneList.Count - 1 Do

        // Перейдем к расчёту следующего объекта

        CalcDebug.NextStep;

        // Запустим режим ожидания для выполнения расчёта объекта

        If GetState(CalcDebug) <> CalculateState.PausedOnDebug Then

            ErrorCheck(CalcDebug);

            Return;

        End If;

        // Выведем в консоль ключ последнего расcчитанного объекта

        Debug.WriteLine("Ключ объекта: " + CalcDebug.LastObjectKey.ToString);

        // Проверим, что первый объект включён
 в расчёт, и сохраним в регламентный отчёт

        // промежуточный результат алгоритма расчёта после расчёта первого объекта

        If CalcAlgo.Included(ObjList.Item(0)) Then

            ReportCalc := CalcDebug.PrxReport(CalcAlgo, ObjList.Item(0));

            Report.CopyFrom(ReportCalc);

            (Report As IMetabaseObject).Save;

        End If;

    End For;

    CalcDebug.Stop;

    CalcDebug.Dispose_;

End Sub UserProc;


Sub ErrorCheck(Var CalcDebug: IAlgorithmCalculationAsyncDebug);

Var

    Error: IAlgorithmCalculateErrorEvent;

Begin

    // Получим ошибки при расчёте

    Error := CalcDebug.ErrorEvent;

    // При возникновении ошибки выведем в консоль информацию о ней

    Debug.WriteLine(Error.Message);

    // Пропустим возникшую ошибку и продолжим расчёт

    Error.ErrorState := SkipErrorState.IgnoreAll;

End Sub ErrorCheck;


Function GetState(CalcDebug:  IAlgorithmCalculationAsyncDebug): CalculateState;

Var

    State: CalculateState;

    i: Integer = 1000;

Begin

    // Проверим состояние расчёта

    If CalcDebug <> Null Then

        State := CalcDebug.State;

        While

            (State <> CalculateState.PausedOnDebug) And

            (State <> CalculateState.PausedOnError) And

            (State <> CalculateState.Aborted) And

            (State <> CalculateState.Stoped) Do

            State := CalcDebug.State;

        End While;

    End If;

    While i > 0 Do

        i := i - 1;

    End While;

    Return State;

End Function GetState;


В результате выполнения примера будет произведена асинхронная отладка
 расчёта алгоритма. После расчёта первого объекта в регламентный отчёт
 будет загружен промежуточный результат расчёта. В консоль будет выведено
 количество рассчитанных объектов и их ключи, например:


Количество блоков: 2


Ключ объекта: 117966


Ключ объекта: 117970


См. также:


[ICalcAlgorithm](ICalcAlgorithm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
