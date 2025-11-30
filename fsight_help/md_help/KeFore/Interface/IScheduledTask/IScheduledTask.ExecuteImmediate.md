# IScheduledTask.ExecuteImmediate

IScheduledTask.ExecuteImmediate
-


# IScheduledTask.ExecuteImmediate


## Синтаксис


ExecuteImmediate(SaveResult: Boolean): [IScheduledTaskResult](../IScheduledTaskResult/IScheduledTaskResult.htm);


## Параметры


SaveResult. Определяет, сохранять
 ли результат выполнения задачи в базу данных. Допустимые значения:


	- True. Сохранять результат
	 в базу данных;


	- False. Не сохранять
	 результат в базу данных.


## Описание


Метод ExecuteImmediate выполняет
 задачу в текущем репозитории.


## Комментарии


Метод ExecuteImmediate выполняет
 задачу в текущем процессе и текущем репозитории и не требуется наличие
 запущенного планировщика задач. Настройки отправки сообщений о выполнении
 задачи и сохранении результата на FTP-сервер игнорируются.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 запланированных задач с идентификатором SCHEDULEDTASKSCONTAINER. и задачи
 вычисления регламентного отчёта с идентификатором REPORT_TASK. Для данной
 задачи должно быть настроено какое-либо действие с результатом выполнения.


Добавьте ссылки на системные сборки: Fore, IO, Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    Cont: IScheduledTasksContainer;

    Tasks: IMetabaseObjectDescriptors;

    i: Integer;

    Task: IScheduledTask;

    Result: IScheduledTaskResult;

    FileName: string;

    Stream: IIOStreamSys;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    Cont := MB.ItemById("SCHEDULEDTASKSCONTAINER").Bind As IScheduledTasksContainer;

    // Получаем задачу с идентификатором REPORT_TASK

    Tasks := Cont.Tasks;

    For i := 0 To Tasks.Count - 1 Do

        If Tasks.Item(i).Id = "REPORT_TASK" Then

            Task := Tasks.Item(i).Edit As IScheduledTask;

        End If;

    End For;

    // Выполняем задачу

    Result := Task.ExecuteImmediate(True);

    // Сохраняем результаты выполнения в файл

    If Result.HasDataStream Then

        FileName := "c:\" + (Task As IMetabaseObject).Name + "." + Result.FileExtension;

        Stream := New FileStream.Create(FileName, FileOpenMode.Create, FileShare.Exclusive) As IIOStreamSys;

        Result.ReadDataStream(Stream);

        Debug.WriteLine("Результат сохранён в файл " + FileName);

    End If;

End Sub UserProc;


В результате выполнения задача будет выполнена, полученный результат
 будет сохранён в файл, название которого будет выведено в окно консоли.


См. также:


[IScheduledTask](IScheduledTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
