# IMetabaseUpdateLog.IsFinished

IMetabaseUpdateLog.IsFinished
-


# IMetabaseUpdateLog.IsFinished


## Синтаксис


IsFinished: Boolean;


## Описание


Свойство IsFinished возвращает
 признак успешного применения обновления.


## Комментарии


Свойство возвращает значение True,
 если установка обновления завершилась успешно и False,
 если при установке возникли какие-либо ошибки.


## Пример


Для выполнения примера предполагается наличие файла обновления «D:\Work\update.pefx».


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Update: IMetabaseUpdate;

	    Log: IMetabaseUpdateLog;

	    Progress: CUpdateProgress;

	Begin

	    Mb := MetabaseClass.Active;

	    // Загрузка обновления из файла

	    Update := Mb.CreateUpdate;

	    Update.LoadFromFileNF("D:\Work\update.pefx");

	    // Применение обновления

	    Progress := New CUpdateProgress.Create;

	    Update.Apply(Progress);

	    // Просмотр общей информации из журнала обновления

	    Log := Update.Log;

	    If Log.IsFinished Then

	        Debug.WriteLine("---Обновление завершено успешно---");

	    Else

	        Debug.WriteLine("---Обновление завершено с ошибками---");

	        Debug.WriteLine("Конфликты соответствия объекта в обновлении и репозитории: " + Log.HasConflicts.ToString);

	        Debug.WriteLine("Ошибки при обновлении объектов: " + Log.HasErrors.ToString);

	        Debug.WriteLine("Имеются пропущенные ошибки: " + Log.HasErrorSkipped.ToString);

	        Debug.WriteLine("Несоответствие зависимостей объектов: " + Log.HasOnResolve.ToString);

	    End If;

	    Debug.WriteLine("Начало обновления: " + Log.UpdateStartTimestamp.ToString);

	    Debug.WriteLine("Окончание обновления: " + Log.UpdateFinishTimestamp.ToString);

	    Debug.WriteLine("Репозиторий, в котором применено обновления: " + Log.UpdateMetabase);

	    Debug.WriteLine("Пользователь: " + Log.UpdateUserName);

	    Debug.WriteLine("SID пользователя: " + Log.UpdateUserSID);

	    Debug.WriteLine("Рабочая станция, с которой производилась установка обновления: " + Log.UpdateWorkstation);

	End Sub UserProc;


	Class CUpdateProgress: UpdateProgress

	    Sub OnError(Data: IMetabaseUpdateProgressData; Var Ignore: Boolean);

	    Begin

	        Ignore := True;

	    End Sub OnError;

	End Class CUpdateProgress;


При выполнении примера будет загружено и установлено обновление из указанного
 файла. Общая информация о результатах установки будет выведена в консоль
 среды разработки.


См. также:


[IMetabaseUpdateLog](IMetabaseUpdateLog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
