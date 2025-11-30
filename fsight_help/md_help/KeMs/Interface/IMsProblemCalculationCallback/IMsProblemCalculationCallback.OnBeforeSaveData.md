# IMsProblemCalculationCallback.OnBeforeSaveData

IMsProblemCalculationCallback.OnBeforeSaveData
-


# IMsProblemCalculationCallback.OnBeforeSaveData


## Синтаксис


OnBeforeSaveData(Stub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm);
 Matrix: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);
 Var ValueFlag: Integer; Var Cancel: Boolean);


## Параметры


Stub. Источник, в который сохраняются
 данные.


Matrix. Матрица с сохраняемыми
 значениями.


ValueFlag. Флаг, который имеют
 изменившиеся значения в матрице Matrix.


Cancel. Признак отмены сохранения
 данных.


## Описание


Метод OnBeforeSaveData реализует
 событие, происходящее перед сохранением данных.


## Комментарии


В переменной Matrix будут доступны
 исходные и расчётные данные. Исходные данные будут иметь флаг изменившихся
 значений 0. Расчётные данные будут иметь флаг, равный значению параметра
 ValueFlag. ValueFlag
 будет соответствовать значению, заданному в свойстве [IMsProblem.ValueFlag](../IMsProblem/IMsProblem.ValueFlag.htm)
 или [IMsProblemCalculationSettings.ValueFlag](../IMsProblemCalculationSettings/IMsProblemCalculationSettings.ValueFlag.htm).
 При необходимости можно изменить данные в матрице, а также изменить флаг
 в параметре ValueFlag. Сохранены
 будут только те значения, у которых флаг изменившихся значений совпадает
 со значением параметра ValueFlag.


После сохранения данных будет сгенерировано событие [OnSaveData](IMsProblemCalculationCallback.OnSaveData.htm).


Если необходимо отменить сохранение данных, то задайте в параметре Cancel значение True
 или в параметре ValueFlag значение
 0.


## Пример


Для выполнения примера предполагается наличие базы данных временных
 рядов с идентификатором «TSDB». В контейнере моделирования, который является
 дочерним объектом базы, создана задача моделирования с идентификатором
 «TSDB_PROBLEM».


Добавьте ссылки на системные сборки: Cubes, Matrix, Metabase, Ms, Ui.


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

	    Problem.ValueFlag := 2;

	    // Задаем параметры расчёта задачи

	    CalcSettings := Problem.CreateCalculationSettings;

	    CalcSettings.FactIncluded := True;

	    CalcSettings.BreakOnError := True;

	    Calculation := Problem.Calculate(CalcSettings);

	    // Задаем обработчик событий

	    Calculation.Callback := New MCallback.Create;

	    // Выполняем расчёт

	    Calculation.Run;

	End Sub UserProc;

	Public Class MCallback: ProblemCalculationCallback

	    Public Sub OnBeforeSaveData(Stub: IVariableStub; Matrix: IMatrix; Var ValueFlag: Integer; Var Cancel: Boolean);

	    Var

	        Iter: IMatrixIterator;

	    Begin

	        If Not WinApplication.ConfirmationBox("Сохранить данные?", Null) Then

	            Cancel := True;

	        End If;

	        Iter := Matrix.CreateIterator;

	        Iter.Move(IteratorDirection.First);

	        While Iter.Valid Do

	            If Iter.ValueFlag <> 0 Then

	                If Iter.Value < 100 Then

	                    Iter.ValueFlag := ValueFlag + 1;

	                End If;

	            End If;

	            Iter.Move(IteratorDirection.Next);

	        End While;

	        // Увеличим значение флага изменённых данных, которые будут сохранены, на 1

	        ValueFlag := ValueFlag + 1;

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


В результате выполнения примера будет осуществлён расчёт задачи моделирования.
 Рассчитанные значения будут иметь флаг 2 (ValueFlag = 2).


В событии, которое отслеживает сохранение данных, будет выдан запрос
 на сохранение. При утвердительном ответе для рассчитанных значений меньше
 100 будет установлен флаг 3. После этого все значения, имеющие флаг 3,
 будут сохранены в базу данных временных рядов. После сохранения в консоль
 среды разработки будет выведена информация о количестве сохранённых значений
 и ключе записи в протоколе доступа, соответствующей сохранению данных.


См. также:


[IMsProblemCalculationCallback](IMsProblemCalculationCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
