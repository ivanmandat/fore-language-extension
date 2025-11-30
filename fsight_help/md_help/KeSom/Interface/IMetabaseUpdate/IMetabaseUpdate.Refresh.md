# IMetabaseUpdate.Refresh

IMetabaseUpdate.Refresh
-


# IMetabaseUpdate.Refresh


## Синтаксис


		Refresh([Progress:
		 [IMetabaseUpdateProgress](../IMetabaseUpdateProgress/IMetabaseUpdateProgress.htm)
		 = Null]);


## Параметры


Progress. Объект, реализующий
 события, возникающие при синхронизации.


## Описание


Метод Refresh осуществляет синхронизацию
 обновления с репозиторием.


## Комментарии


Параметр Progress является
 необязательным для Fore и принимает значение по умолчанию Null.


## Пример


Для выполнения примера предполагается наличие файла обновления C:\Update.pef.


Добавьте ссылку на системную сборку Metabase.


					Sub Main;

		Var

		    MB: IMetabase;

		    Update: IMetabaseUpdate;

		    Progress: MyUpdateProgress;

		Begin

		    MB := MetabaseClass.Active;

		    Update := Mb.CreateUpdate;

		    Update.LoadFromFile("C:\Update.pef");

		    Progress := New MyUpdateProgress.Create;

		    Update.Refresh(Progress);

		    Update.SaveToFileNF("C:\Update.pefx");

		End Sub Main;


		Class MyUpdateProgress:UpdateProgress

		    Sub OnProgress(Data: IMetabaseUpdateProgressData);

		    Begin

		        Select Case Data.Stage

		            Case MetabaseUpdateProgressStage.LoadPrepare: Debug.WriteLine("Подготовка к синхронизации");

		            Case MetabaseUpdateProgressStage.LoadApply: Debug.WriteLine("Синхронизация объектов...");

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


В результате выполнения примера будет осуществлена синхронизация объектов,
 содержащихся в обновлении, с соответствующими им объектами репозитория.
 Статус выполнения синхронизации будет выведен в консоль среды разработки.
 Если во время синхронизации каких-либо объектов возникнет ошибка, то информация
 об ошибке также будет выведена в консоль среды разработки. Объекты с ошибками
 будут пропущены.


См. также:


[IMetabaseUpdate](IMetabaseUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
