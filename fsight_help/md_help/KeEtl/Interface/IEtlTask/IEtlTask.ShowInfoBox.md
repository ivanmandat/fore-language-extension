# IEtlTask.ShowInfoBox

IEtlTask.ShowInfoBox
-


# IEtlTask.ShowInfoBox


## Синтаксис


ShowInfoBox: Boolean;


## Описание


Свойство ShowInfoBox определяет,
 будет ли выводиться информационное окно с результатом выполнения задачи
 ETL.


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Окно с результатами выполнения будет выводиться;


	- False. Окно с результатами
	 выполнения выводиться не будет.


## Пример


Для выполнения примера в репозитории необходимо наличие задачи ETL с
 идентификатором ETL_TASK. Задача ETL содержит источник репозитория, приёмник
 репозитория и преобразователь между ними.


Добавьте ссылки на системные сборки: Etl, Metabase.


	// Обработчик событий для установки результата выполнения задачи ETL

	Public Class MyClass: Object, IEtlExecutionCallback

	    Sub OnObject(Object: IEtlObject);

	    Begin

	        Debug.WriteLine("Выполняется объект: " + Object.Id);

	    End Sub OnObject;


	    Sub OnProgress(Progress: Integer);

	    Begin

	        Debug.WriteLine("Выполнено: " + Progress.ToString + "%");

	    End Sub OnProgress;


	    Sub OnSetResult(nTotalRec: Integer; nErrorRec: Integer);

	    Begin

	        Debug.WriteLine("Всего записей обработано: " + nTotalRec.ToString);

	        Debug.WriteLine("Записей пропущено: " + nErrorRec.ToString);

	    End Sub OnSetResult;

	End Class MyClass;


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Etltask: IEtlTask;

	    C: MyClass;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим задачу ETL

	    Etltask := MB.ItemById("ETL_TASK").Edit As IEtlTask;

	    // Запустим задачу ETL

	    C := New MyClass.Create;

	    Etltask.Execute(C);

	    // Остановим задачу

	    Etltask.StopExecute;

	    // Информационное окно с результатом выводиться не будет

	    Etltask.ShowInfoBox := False;

	    // Сохраним изменения

	    (Etltask As IMetabaseObject).Save

	End Sub UserProc;


После выполнения примера информационное окно с результатом выполнения
 задачи ETL выводиться не будет.


См. также:


[IEtlTask](IEtlTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
