# IScheduledTaskResult.ReadDataStream

IScheduledTaskResult.ReadDataStream
-


# IScheduledTaskResult.ReadDataStream


## Синтаксис


ReadDataStream([Value: [IIOStreamSys](ForeSys.chm::/Interface/IIOStreamSys/IIOStreamSys.htm)
 = Null]): [IIOStreamSys](ForeSys.chm::/Interface/IIOStreamSys/IIOStreamSys.htm);


## Параметры


Value - поток, в который будут
 помещены считанные данные. По умолчанию передается значение Null,
 при этом будет создан новый поток.


## Описание


Метод ReadDataStream осуществляет
 чтение результата выполнения задачи и помещает этот результат в поток.


## Комментарии


Данный метод допустимо использовать для задач, осуществляющих вычисление
 регламентных отчетов. Результатом выполнения таких задач является рассчитанный
 регламентный отчет, либо файл, в который экспортируется отчет после расчета.
 Формат файла задается в свойстве [FormatTag](KeReport.chm::/Interface/ICalculateReportScheduledTask/ICalculateReportScheduledTask.FormatTag.htm)
 задачи.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 запланированных задач с идентификатором "TASK_CONTAINTER". Первая
 задача контейнера осуществляет расчет регламентного отчета. Уведомление
 об окончании выполнения приходит по электронной почте, в качестве приложения
 высылается рассчитанный отчет, экспортированный в формат MHT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    CrInfo: IMetabaseObjectCreateInfo;

	    MObj: IMetabaseObject;

	    Doc: IDocument;

	    Cont: IScheduledTasksContainer;

	    Tasks: IMetabaseObjectDescriptors;

	    Task: ICalculateReportScheduledTask;

	    Results: IScheduledTaskResults;

	    Result: IScheduledTaskResult;

	Begin

	    MB := MetabaseClass.Active;

	    Cont := MB.ItemById("TASK_CONTAINTER").Bind As IScheduledTasksContainer;

	    Tasks := Cont.Tasks;

	    Task := Tasks.Item(0).Bind As ICalculateReportScheduledTask;

	    Results := Task.GetResults;

	    Result := Results.Item(Results.Count - 1);

	    If Result.Succeeded Then

	        CrInfo := MB.CreateCreateInfo;

	        CrInfo.ClassID := MetabaseObjectClass.KE_CLASS_DOCUMENT;

	        CrInfo.Id := "Result_ReportCalc";

	        CrInfo.Name := "Result_ReportCalc";

	        CrInfo.Parent := MB.Root;

	        MObj := MB.CreateObject(CrInfo).Edit;

	        Doc := MObj As IDocument;

	        Doc.LoadFromStream(Result.ReadDataStream As IIOStream);

	        Doc.FileName := "Result_ReportCalc.mht";

	        MObj.Save;

	    End If;

	End Sub UserProc;


После выполнения примера будет получена история выполнения первой задачи
 контейнера запланированных задач. Если последнее выполнение прошло успешно,
 то в корневом каталоге репозитория будет создан новый документ. В данный
 документ будет загружен файл, содержащий экспортированный отчет, полученный
 после выполнения задачи.


См. также:


[IScheduledTaskResult](IScheduledTaskResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
