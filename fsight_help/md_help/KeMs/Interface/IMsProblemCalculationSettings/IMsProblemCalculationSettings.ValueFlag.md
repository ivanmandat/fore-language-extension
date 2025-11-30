# IMsProblemCalculationSettings.ValueFlag

IMsProblemCalculationSettings.ValueFlag
-


# IMsProblemCalculationSettings.ValueFlag


## Синтаксис


ValueFlag: Integer;


## Описание


Свойство ValueFlag определяет
 значение флага, используемого для отметки изменившихся значений.


## Комментарии


По умолчанию в качестве значения свойства подставляется значение, заданное
 в [IMsProblem.ValueFlag](../IMsProblem/IMsProblem.ValueFlag.htm).
 При этом используется алгоритм сохранения, определённый для [IMsProblem.ValueFlag](../IMsProblem/IMsProblem.ValueFlag.htm).


Если для текущего свойства ValueFlag
 задано собственное значение больше нуля, то сохраняются те данные, для
 которых установлен передаваемый флаг изменившихся значений. Допустимое
 значение свойства находится в диапазоне [0, 255].


Значение флага будет доступно в событиях [IMsProblemCalculationCallback.OnBeforeSaveData](../IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnBeforeSaveData.htm)
 и [IMsProblemCalculationCallback.OnSaveData](../IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnSaveData.htm).


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором «TSDB». В контейнере моделирования, который является
 дочерним объектом базы, создана задача моделирования с идентификатором
 «TSDB_PROBLEM».


Добавьте ссылки на системные сборки: Cubes, Matrix, Metabase, Ms.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Rub: IRubricator;

	    Problem: IMsProblem;

	    Calculation: IMsProblemCalculation;

	    CalcSettings: IMsProblemCalculationSettings;

	Begin

	    Mb := MetabaseClass.Active;

	    Rub := MB.ItemById("TSDB").Bind As IRubricator;

	    // Получаем задачу в контейнере моделирования БДВР

	    Problem := Mb.ItemByIdNamespace("TSDB_PROBLEM", Rub.ModelSpace.Key).Edit As IMsProblem;

	    // Флаг, который будет присвоен изменившимся данным

	    // Задаем параметры расчёта задачи

	    CalcSettings := Problem.CreateCalculationSettings;

	    CalcSettings.FactIncluded := True;

	    CalcSettings.BreakOnError := True;

	    // Выполнение задачи с ValueFlag=2

	    //...

	    //Указание в CalcSettings первого набора параметров для расчёта

	    //...

	    CalcSettings.ValueFlag := 2;

	    Calculation := Problem.Calculate(CalcSettings);

	    Calculation.Callback := New MCallback.Create;

	    Calculation.Run;

	    // Выполнение задачи с ValueFlag=3

	    //...

	    //Указание в CalcSettings второго набора параметров для расчёта

	    //...

	    CalcSettings.ValueFlag := 3;

	    Calculation := Problem.Calculate(CalcSettings);

	    Calculation.Callback := New MCallback.Create;

	    Calculation.Run;

	End Sub UserProc;

	Public Class MCallback: ProblemCalculationCallback

	    Public Sub OnBeforeSaveData(Stub: IVariableStub; Matrix: IMatrix; Var ValueFlag: Integer; Var Cancel: Boolean);

	    Begin

	        Debug.WriteLine(ValueFlag);

	        Select Case ValueFlag

	            Case 2:

	                //...

	                //Обработка данных, которые должны быть сохранены при ValueFlag = 2

	                //...

	            Case 3:

	                //...

	                //Обработка данных, которые должны быть сохранены при ValueFlag = 3

	                //...

	        End Select;

	    End Sub OnBeforeSaveData;


	    Public Sub OnSaveData(Stub: IVariableStub; Matrix: IMatrix; ValueFlag: Integer; AuditRecordKey: Variant);

	    Var

	        Iter: IMatrixIterator;

	        RecordCount: Integer;

	    Begin

	        Iter := Matrix.CreateIterator;

	        Iter.Move(IteratorDirection.First);

	        While Iter.Valid Do

	            If Iter.ValueFlag = ValueFlag Then

	                RecordCount := RecordCount + 1;

	            End If;

	            Iter.Move(IteratorDirection.Next);

	        End While;

	        Debug.WriteLine("Данные сохранены на ValueFlag: " + ValueFlag.ToString + #13 + #10 +

	            "Количество сохранённых значений: " + RecordCount.ToString + #13 + #10 +

	            "Ключ записи в протоколе доступа: " + AuditRecordKey);

	    End Sub OnSaveData;

	End Class MCallback;


В результате выполнения примера будет осуществлён расчёт задачи моделирования
 с двумя различными наборами параметров. Для расчётных данных при этом
 будут выставлены различные флаги изменённых данных. В событии OnBeforeSaveData
 по флагу может быть произведена дополнительная обработка данных. После
 сохранения в консоль среды разработки будет выведена информация о количестве
 сохранённых значений и ключе записи в протоколе доступа, соответствующей
 сохранению данных.


См. также:


[IMsProblemCalculationSettings](IMsProblemCalculationSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
