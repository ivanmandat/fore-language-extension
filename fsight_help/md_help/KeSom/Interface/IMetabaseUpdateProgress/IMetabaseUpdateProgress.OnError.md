# IMetabaseUpdateProgress.OnError

IMetabaseUpdateProgress.OnError
-


# IMetabaseUpdateProgress.OnError


## Синтаксис


OnError(Data: [IMetabaseUpdateProgressData](../IMetabaseUpdateProgressData/IMetabaseUpdateProgressData.htm);
 Var Ignore: Boolean);


## Параметры


Data. Информация о ходе синхронизации
 объектов.


Ignore. Параметр, определяющий
 будет ли пропущен объект, для которого сгенерирована ошибка.


## Описание


Метод OnError реализует событие,
 происходящее при возникновении ошибки во время синхронизации объекта репозитория
 с объектом в обновлении.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 "С" файла обновления с наименованием «Update.pefx».


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Update: IMetabaseUpdate;

	    Progress: MyUpdateProgress;

	Begin

	    MB := MetabaseClass.Active;

	    Update := Mb.CreateUpdate;

	    Update.LoadFromFileNF("C:\Update.pefx");

	    Progress := New MyUpdateProgress.Create;

	    Update.Refresh(Progress);

	    Update.SaveToFileNF("C:\Update.pefx");

	End Sub UserProc;


	Class MyUpdateProgress: UpdateProgress

	    Sub OnProgress(Data: IMetabaseUpdateProgressData);

	    Begin

	        Select Case Data.Stage

	            Case MetabaseUpdateProgressStage.LoadPrepare: Debug.WriteLine("Подготовка к синхронизации");

	            Case MetabaseUpdateProgressStage.LoadApply: Debug.WriteLine("Синхронизация объектов...");

	            Case MetabaseUpdateProgressStage.LoadFinish: Debug.WriteLine("Синхронизация окончена");

	        End Select;

	    End Sub OnProgress;


	    Sub OnError(Data: IMetabaseUpdateProgressData; Var Ignore: Boolean);

	    Begin

	        Debug.WriteLine("Ошибка синхронизации объекта обновления '" + Data.Node.Label + "'");

	        Debug.WriteLine("Текст ошибки: " + Data.Error.Message);

	        If Data.Object <> Null Then

	            Debug.WriteLine("Источник ошибки: " + Data.Object.Id);

	            Debug.WriteLine("Ключ объекта: " + Data.Object.Key.ToString);

	        End If;

	        Debug.WriteLine("Объект будет пропущен");

	        Ignore := True;

	    End Sub OnError;

	End Class MyUpdateProgress;


После выполнения примера будет осуществлена синхронизация объектов,
 содержащихся в обновлении, с соответствующими им объектами репозитория.
 Статус выполнения синхронизации будет выведен в консоль среды разработки.
 Если во время синхронизации каких-либо объектов возникнет ошибка, то информация
 об ошибке также будет выведена в консоль среды разработки. Объекты с ошибками
 будут пропущены.


См. также:


[IMetabaseUpdateProgress](IMetabaseUpdateProgress.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
