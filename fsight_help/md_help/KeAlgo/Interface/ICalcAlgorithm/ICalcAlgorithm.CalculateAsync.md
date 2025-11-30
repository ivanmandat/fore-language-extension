# ICalcAlgorithm.CalculateAsync

ICalcAlgorithm.CalculateAsync
-


# ICalcAlgorithm.CalculateAsync


## Синтаксис


CalculateAsync([Objs: [ICalcObjectsList](../ICalcObjectsList/ICalcObjectsList.htm)
 = Null]): [IAlgorithmCalculationAsyncResult](../IAlgorithmCalculationAsyncResult/IAlgorithmCalculationAsyncResult.htm);


## Параметры


Objs. Список объектов алгоритма
 расчёта.


Примечание.
 Список объектов алгоритма расчёта должен быть скопированным. Для копирования
 объектов используйте метод [ICalcObjectsList.Clone](../ICalcObjectsList/ICalcObjectsList.Clone.htm).


## Описание


Метод CalculateAsync выполняет
 асинхронный расчёт алгоритма.


## Комментарии


При расчёте учитываются значения параметров, которые заданы в свойстве
 [ICalcAlgorithm.ParamValues](ICalcAlgorithm.ParamValues.htm).
 Если параметр Objs не указан,
 то рассчитываются все объекты в алгоритме расчёта.


В процессе выполнения асинхронного расчёта алгоритма должен использоваться
 режим ожидания для выявления ошибок, возникших при расчёте, и проверки
 завершения расчёта.


Режим ожидания реализован функцией GetState:


	Function GetState(CalcResult: IAlgorithmCalculationAsyncResult): CalculateState;

	Var

	    State: CalculateState;

	    i: Integer = 1000;

	Begin

	    // Проверим состояние расчёта

	    If CalcResult <> Null Then

	        State := CalcResult.State;

	        While

	            (State <> CalculateState.PausedOnDebug) And

	            (State <> CalculateState.PausedOnError) And

	            (State <> CalculateState.Aborted) And

	            (State <> CalculateState.Stoped) Do

	            State := CalcResult.State;

	        End While;

	    End If;

	    While i > 0 Do

	        i := i - 1;

	    End While;

	    Return State;

	End Function GetState;


## Пример


Для выполнения примера предполагается наличие в репозитории алгоритма
 расчёта с идентификатором ALGORITHM, в котором содержатся хотя бы два
 объекта для расчёта.


Добавьте ссылки на системные сборки: Algo, Metabase. Также добавьте
 ссылки на сборки, которые [необходимы](../../Intro/KeAlgo_Programming.htm)
 для работы с алгоритмами расчёта.


Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObjectDescriptor;

    Algo: ICalcObject;

    ObjList, CloneList: ICalcObjectsList;

    CalcAlgo: ICalcAlgorithm;

    CalcResult: IAlgorithmCalculationAsyncResult;

    Result: IAlgorithmCalculationResult;

    Load: IAlgorithmTimeResults;

    TimeResult: IAlgorithmTimeResult;

    ErrEvent: IAlgorithmCalculateErrorEvent;

    State: CalculateState;

    i: Integer;

    Sec: Double;

Begin

    MB := MetabaseClass.Active;

    // Получим алгоритм расчёта

    MObj := MB.ItemById("ALGORITHM");

    Algo := CalcObjectFactory.CreateCalcObject(MObj, True);

    CalcAlgo := Algo As ICalcAlgorithm;

    // Получим список объектов алгоритма расчёта

    ObjList := CalcAlgo.Items;

    // Скопируем список объектов алгоритма расчёта

    CloneList := ObjList.Clone;

    // Удалим исключенные объекты перед расчётом

    For i := CloneList.Count - 1 To 0 Step - 1 Do

        If Not CalcAlgo.Included(CloneList.Item(i)) Then

            CloneList.Remove(CloneList.Item(i));

        End If;

    End For;

    // Выведем в консоль количество включенных объектов в расчёт алгоритма

    Debug.WriteLine("Количество объектов: " + CloneList.Count.ToString);

    // Выполним асинхронный расчёт алгоритма

    CalcResult := CalcAlgo.CalculateAsync(CloneList);

    State := GetState(CalcResult);

    // Проверим возникновение ошибки при расчёте

    If State = CalculateState.PausedOnError Then

        ErrEvent := CalcResult.ErrorEvent;

        If ErrEvent <> Null Then

            // При возникновении ошибки выведем в консоль информацию о ней и об объекте, на котором она возникла

            Debug.WriteLine(ErrEvent.Message);

            Debug.WriteLine("Объект с ошибокий: " + CalcResult.CurrentObject.Name);

            // Пропустим возникшую ошибку и продолжим расчёт

            ErrEvent.ErrorState := SkipErrorState.IgnoreAll;

        End If;

    Elseif State = CalculateState.Stoped Then // Проверим завершение расчёта алгоритма

        // Выведем в консоль сообщение о завершении расчёта алгоритма

        Debug.WriteLine("Расчёт алгоритма завершен");

        // Данные по результатам расчёта

        Result := CalcResult.Result;

        Load := Result.Load;

        Debug.WriteLine("Результат загрузки источников данных:");

        For i := 0 To Load.Count - 1 Do

            TimeResult := Load.Item(i);

            Debug.WriteLine(" Наименование: " + TimeResult.Name);

            Debug.WriteLine(" Идентификатор: " + TimeResult.Id);

            Sec := TimeResult.ExecuteMilisecods / 1000;

            Debug.WriteLine(" Время загрузки: " + Sec.ToString + " сек.");

            Debug.WriteLine("");

        End For;

    End If;

End Sub UserProc;


Function GetState(CalcResult: IAlgorithmCalculationAsyncResult): CalculateState;

Var

    State: CalculateState;

    i: Integer = 1000;

Begin

    // Проверим состояние расчёта

    If CalcResult <> Null Then

        State := CalcResult.State;

        While

            (State <> CalculateState.PausedOnDebug) And

            (State <> CalculateState.PausedOnError) And

            (State <> CalculateState.Aborted) And

            (State <> CalculateState.Stoped) Do

            State := CalcResult.State;

        End While;

    End If;

    While i > 0 Do

        i := i - 1;

    End While;

    Return State;

End Function GetState;


В результате выполнения примера будет произведен асинхронный расчёт
 алгоритма. В консоль будет выведено количество рассчитанных объектов и
 сообщение о завершении расчёта, например:


Количество объектов: 3


Расчёт алгоритма завершен


См. также:


[ICalcAlgorithm](ICalcAlgorithm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
