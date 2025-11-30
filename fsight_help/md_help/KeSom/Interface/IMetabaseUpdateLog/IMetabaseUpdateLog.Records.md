# IMetabaseUpdateLog.Records

IMetabaseUpdateLog.Records
-


# IMetabaseUpdateLog.Records


## Синтаксис


Records: [IMetabaseUpdateLogRecords](../IMetabaseUpdateLogRecords/IMetabaseUpdateLogRecords.htm);


## Описание


Свойство Records возвращает
 коллекцию записей журнала процесса обновления.


## Комментарии


Каждая запись содержит информацию об обновлении отдельного объекта,
 включённого в обновление.


## Пример


Для выполнения примера предполагается наличие файла обновления «D:\Work\update.pefx».


Добавьте ссылку на системную сборку Metabase.


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Update: IMetabaseUpdate;

	    Progress: CUpdateProgress;

	    Records: IMetabaseUpdateLogRecords;

	    Record: IMetabaseUpdateLogRecord;

	    Resolver: IMetabaseUpdateResolver;

	    Unresolved: IMetabaseUpdateUnresolved;

	Begin

	    Mb := MetabaseClass.Active;

	    // Загрузка обновления из файла

	    Update := Mb.CreateUpdate;

	    Update.LoadFromFileNF("D:\Work\update.pefx");

	    // Применение обновления

	    Progress := New CUpdateProgress.Create;

	    Update.Apply(Progress);

	    // Просмотр общей информации из журнала обновления

	    Records := Update.Log.Records;

	    For Each Record In Records Do

	        Debug.WriteLine("Обновляемый объект: " + Record.Node.Label);

	        Debug.Indent;

	        If Mb.Security.Policy.CheckObjectVerionOnUpdateFromPef Then

	            Debug.WriteLine("Локальная версия до обновления: " + Record.LocalObjectVersion.ToString);

	            Debug.WriteLine("Локальный репозиторий: " + Record.LocalOriginalMetabase);

	            Debug.WriteLine("Версия в обновлении: " + Record.UpdateObjectVersion.ToString);

	            Debug.WriteLine("Репозиторий в обновлении: " + Record.UpdateOriginalMetabase);

	        End If;

	        If Record.IsFinished Then

	            Debug.WriteLine("Обновление применено.")

	        Else

	            Debug.WriteLine("Во время обновления возникли ошибки.")

	            If Record.HasError Then

	                Debug.WriteLine("Ошибка обновления: " + Record.Error.Message);

	                Debug.WriteLine(Record.ErrorSkipped ? "Ошибка пропущена." : "Ошибка требует обработки.");

	            Elseif Record.HasConflicts Then

	                Debug.WriteLine("Тип объекта в обновлении не соответствует типу объекта в репозитории");

	            Elseif Record.HasOnResolve Then

	                Debug.WriteLine("Имеется конфликт, связанный с наличием зависимостей объекта.");

	                Resolver := Record.OnResolve;

	                Debug.WriteLine("Количество неразрешённых зависимостей: " + Resolver.Count.ToString);

	                For Each Unresolved In Resolver Do

	                    Debug.WriteLine("Зависимость с " + Unresolved.Name + '(' + Unresolved.Id + ')');

	                End For;

	            End If;

	        End If;

	        Debug.Unindent;

	    End For;

	End Sub UserProc;


	Class CUpdateProgress: UpdateProgress

	    Sub OnError(Data: IMetabaseUpdateProgressData; Var Ignore: Boolean);

	    Begin

	        Ignore := True;

	    End Sub OnError;

	End Class CUpdateProgress;


При выполнении примера будет загружено и установлено обновление из указанного
 файла. Информация о результатах установки отдельных элементов обновления
 будет выведена в консоль среды разработки.


См. также:


[IMetabaseUpdateLog](IMetabaseUpdateLog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
