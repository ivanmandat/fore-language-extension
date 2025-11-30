# Использование алгоритма расчёта для вычислений в отчётах

Использование алгоритма расчёта для вычислений в отчётах
-


# Использование алгоритма расчёта для вычислений в отчётах


Рассмотрим пример подключения алгоритма расчёта для каких-либо вычислений
 в регламентных отчётах и экспресс-отчётах. Для корректной работы в блоках
 расчёта алгоритма и в отчёте должен использоваться один и тот же источник
 данных репозитория.


В отчётах все расчёты производятся на уровне аналитической области данных.
 В аналитической области данных содержатся настройки построения отдельных
 срезов на базе источников данных, которые могут быть подключены к отчёту.
 Получить аналитическую область данных можно, используя свойство [IPrxReport.DataArea](KeReport.chm::/Interface/IPrxReport/IPrxReport.DataArea.htm)
 у регламентных отчётов и [IEaxAnalyzer.DataArea](../Interface/IEaxAnalyzer/IEaxAnalyzer.DataArea.htm)
 у экспресс-отчётов. В коллекции [IEaxDataArea.Slices](../Interface/IEaxDataArea/IEaxDataArea.Slices.htm)
 требуемый срез данных приведите к интерфейсу [IEaxDataAreaPivotSlice](../Interface/IEaxDataAreaPivotSlice/IEaxDataAreaPivotSlice.htm).
 У полученного среза имеется свойство [IEaxDataAreaPivotSlice.ExternalTransformations](../Interface/IEaxDataAreaPivotSlice/IEaxDataAreaPivotSlice.ExternalTransformations.htm),
 возвращающее коллекцию задач моделирования для преобразования данных.
 Именно в этой коллекции и будет подключаться алгоритм расчёта.


Алгоритм расчёта в своей структуре имеет ряд дочерних скрытых объектов,
 которые используются для организации работы алгоритма. Среди этих объектов
 имеется задача моделирования, хранящая в себе формулы блоков расчёта из
 алгоритма. Для получения задачи моделирования получите коллекцию дочерних
 объектов алгоритма, используя свойство [IMetabaseObjectDescriptor.Children](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Children.htm),
 и найдите среди них объект класса [MetabaseObjectClass.KE_CLASS_MSPROBLEM](KeSom.chm::/Enums/MetabaseObjectClass.htm).
 Пример функции для поиска задачи моделирования:


	Public Function GetAlgProblem(ObjDesc: IMetabaseObjectDescriptor): IMsProblem;

	Var

	    ChildDescs: IMetabaseObjectDescriptors;

	    ChildDesc: IMetabaseObjectDescriptor;

	    Problem: IMsProblem;

	Begin

	    ChildDescs := ObjDesc.Children;

	    For Each ChildDesc In ChildDescs Do

	        If ChildDesc.ClassId = MetabaseObjectClass.KE_CLASS_MSPROBLEM Then

	            Problem := ChildDesc.Edit As IMsProblem;

	            If Problem.Details Is IMsRtProblem Then

	                Return Problem;

	            End If;

	        Else

	            Problem := GetAlgProblem(ChildDesc);

	            If Problem <> Null Then

	                Return Problem;

	            End If;

	        End If;

	    End For;

	End Function GetAlgProblem;


В коллекции [IEaxDataAreaPivotSlice.ExternalTransformations](../Interface/IEaxDataAreaPivotSlice/IEaxDataAreaPivotSlice.ExternalTransformations.htm)
 создайте новую трансформацию, укажите в свойстве [IEaxDataAreaExternalTransformation.Problem](../Interface/IEaxDataAreaExternalTransformation/IEaxDataAreaExternalTransformation.Problem.htm)
 задачу моделирования, полученную среди дочерних объектов алгоритма расчёта,
 а также установите свойству [IEaxDataAreaExternalTransformation.Enabled](../Interface/IEaxDataAreaExternalTransformation/IEaxDataAreaExternalTransformation.Enabled.htm)
 значение True, После этого при
 вычислении аналитической области данных алгоритм расчёта будет применяться
 для преобразования данных. При необходимости у созданной трансформации
 определите дополнительные настройки в соответствии с выполняемой задачей.
 У среза данных рекомендуется включить подсветку ячеек с вычисляемыми значениям,
 для этого свойству [IEaxGrid.HighlightEvaluatedCells](../Interface/IEaxGrid/IEaxGrid.HighlightEvaluatedCells.htm)
 установите значение True. Код
 выполняющий описанные действия выглядит следующим образом:


	Sub ConnectAlgoInReport(ReportId: String; AlgoId: String);

	Var

	    Mb: IMetabase;

	    MObj: IMetabaseObject;

	    Slice: IEaxDataAreaPivotSlice;

	    Grid: IEaxGrid;

	    Transform: IEaxDataAreaExternalTransformation;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открытие отчёта на редактирование

	    MObj := Mb.ItemById(ReportId).Edit;

	    // Получение среза в зависимости от типа отчёта

	    If MObj.ClassId = MetabaseObjectClass.KE_CLASS_EXPRESSREPORT Then

	        Slice := (MObj As IEaxAnalyzer).DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice;

	    Elseif MObj.ClassId = MetabaseObjectClass.KE_CLASS_PROCEDURALREPORT Then

	        Slice := (MObj As IPrxReport).DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice;

	    Else

	        Return;

	    End If;

	    // Добавление трансформации

	    Transform := Slice.ExternalTransformations.Add;

	    // Подключение задачи моделирования из алгоритма расчёта

	    Transform.Problem := GetAlgProblem(Mb.ItemById(AlgoId));

	    Transform.Enabled := True;

	    // Параметры расчёта алгоритма

	    Transform.CalculationMode := AlgorithmCalculationMode.OnChange;

	    Transform.CalculationPeriodMode := AlgorithmCalculationPeriodMode.FromAlgorithm;

	    Transform.SaveDataOption := False;

	    // Включение подсветки ячеек с вычисляемыми значениями в таблице среза

	    Grid := (Slice As IEaxDataAreaSlice).Views.Item(0) As IEaxGrid;

	    Grid.HighlightEvaluatedCells := True;

	    // Сохранение изменений

	    MObj.Save;

	End Sub ConnectAlgoInReport;


Для отключения алгоритма расчёта удалите соответствующую трансформацию
 из коллекции [IEaxDataAreaPivotSlice.ExternalTransformations](../Interface/IEaxDataAreaPivotSlice/IEaxDataAreaPivotSlice.ExternalTransformations.htm)
 или очистите коллекцию полностью:


	Public Sub ClearTransformations(ReportId: String);

	Var

	    Mb: IMetabase;

	    MObj: IMetabaseObject;

	    Slice: IEaxDataAreaPivotSlice;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открытие отчёта на редактирование

	    MObj := Mb.ItemById(ReportId).Edit;

	    // Получение среза в зависимости от типа отчёта

	    If MObj.ClassId = MetabaseObjectClass.KE_CLASS_EXPRESSREPORT Then

	        Slice := (MObj As IEaxAnalyzer).DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice;

	    Elseif MObj.ClassId = MetabaseObjectClass.KE_CLASS_PROCEDURALREPORT Then

	        Slice := (MObj As IPrxReport).DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice;

	    Else

	        Return;

	    End If;

	    // Очистка коллекции

	    Slice.ExternalTransformations.Clear;

	    // Сохранение изменений

	    MObj.Save;

	End Sub ClearTransformations;


См. также:


[Примеры](Example_main.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
