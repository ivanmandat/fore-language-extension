# IMetabaseUpdateProgress.OnProgress

IMetabaseUpdateProgress.OnProgress
-


# IMetabaseUpdateProgress.OnProgress


## Синтаксис


OnProgress(Data: [IMetabaseUpdateProgressData](../IMetabaseUpdateProgressData/IMetabaseUpdateProgressData.htm));


## Параметры


Data. Информация о ходе обновления.


## Описание


Метод OnProgress реализует событие
 общего статуса процесса обновления/синхронизации.


## Комментарии


Данное событие генерируется во время применения обновления, либо при
 синхронизации объектов репозитория с объектами в обновлении.


## Пример


Для выполнения примера в файловой системе предполагается наличие файла
 обновления с наименованием «TSDB.pefx». Данный файл содержит информацию
 для обновления базы данных временных рядов. Если какие-либо объекты обновляются
 вместе с правами доступа, то метод переноса прав объектов осуществляется
 в запросе после обновления самих объектов.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MUpdate: IMetabaseUpdate;

    Progress: MyUpdateProgress;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Созданим объект обновление

    MUpdate := MB.CreateUpdate;

    // Загрузим обновление из файла с расширением *.pefx

    MUpdate.LoadFromFileNF("c:\TSDB.pefx");

    // Создадим события, возникающие при выполнении обновления

    Progress := New MyUpdateProgress.Create;

    MUpdate.Apply(Progress);

End Sub UserProc;


Class MyUpdateProgress: UpdateProgress

    Sub OnProgress(Data: IMetabaseUpdateProgressData);

    Begin

        // Выведем в консоль
 статус выполнения обновления

        Select Case Data.Stage

            Case MetabaseUpdateProgressStage.Start: Debug.WriteLine("Начало обновления объектов");

            Case MetabaseUpdateProgressStage.Prepare: Debug.WriteLine("Подготовка объекта");

            Case MetabaseUpdateProgressStage.Apply: Debug.WriteLine("Обновление объекта");

            Case MetabaseUpdateProgressStage.Finish: Debug.WriteLine("Обновления объектов завершено");

        End Select;

        Debug.WriteLine("Текущее " + Data.Current.ToString + " из " + Data.Total.ToString + " Объект " + Data.Node.Label);

        // Выведем в консоль старый ключ объекта

        If Data.Node.NodeType = MetabaseUpdateNodeType.Object Then

            Debug.WriteLine("Старый ключ объекта: " + (Data.Node As IMetabaseUpdateObjectNode).ObjectOldKey.ToString);

        End If;

    End Sub OnProgress;


    Sub OnAskReflectRights(Var Cancel: Boolean);

    Begin

        Cancel := True;

    End Sub OnAskReflectRights;


End Class MyUpdateProgress;


После выполнения примера будет выполнено обновление из файла «TSDB.pefx».
 Для обработки событий, возникающих во время обновления, используется пользовательский
 класс «MyUpdateProgress». Статус выполнения обновления будет выведен в
 окно консоли. Также в окно консоли будут выведены ключ и версия объекта.
 Если в обновление включены таблицы, для которых необходимо обновить права
 доступа, то обновление прав будет осуществлено только на уровне платформы.


См. также:


[IMetabaseUpdateProgress](IMetabaseUpdateProgress.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
