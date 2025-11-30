# IScheduledTaskResult.FileExtension

IScheduledTaskResult.FileExtension
-


# IScheduledTaskResult.FileExtension


## Синтаксис


FileExtension: String;


## Описание


Свойство FileExtension возвращает расширение файла, прилагаемого к результату выполнения задачи.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера запланированных задач с идентификатором «OBJ30776» и задачи вычисления регламентного отчета.


			Sub Main;

Var

    MB: IMetabase;

    Cont: IScheduledTasksContainer;

    Tasks: IMetabaseObjectDescriptors;

    Task: IScheduledTask;

    Result: IScheduledTaskResult;

Begin

    MB := MetabaseClass.Active;

    Cont := MB.ItemById("OBJ30776").Bind As IScheduledTasksContainer;

    Tasks := Cont.Tasks;

    Task := Tasks.Item(0).Edit As IScheduledTask;

    Result := Task.ExecuteImmediate(True);

    If Result.HasDataStream Then

    Result.ReadDataStream(new FileStream.Create("c:\" + (Task As IMetabaseObject).Name + "." + Result.FileExtension, FileOpenMode.Create, FileShare.Exclusive) As IIOStreamSys);

    End If;

End Sub Main;


После выполнения примера происходит выполнение задачи, а затем полученный результат сохраняется локально.


См. также:


[IScheduledTaskResult](IScheduledTaskResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
