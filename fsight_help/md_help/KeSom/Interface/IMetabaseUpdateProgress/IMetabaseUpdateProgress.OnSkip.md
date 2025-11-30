# IMetabaseUpdateProgress.OnSkip

IMetabaseUpdateProgress.OnSkip
-


# IMetabaseUpdateProgress.OnSkip


## Синтаксис


OnSkip(Data: [IMetabaseUpdateProgressData](../IMetabaseUpdateProgressData/IMetabaseUpdateProgressData.htm));


## Параметры


Data. Информация о ходе синхронизации
 объектов.


## Описание


Метод
 OnSkip реализует событие пропуска элемента
 обновления при установке обновления.


## Пример


Для выполнения примера добавьте ссылку на системную сборку «Metabase».
 Предполагается наличие файла обновления «D:\Update.pefx».


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    Upd: IMetabaseUpdate;

	    Progress: MyUpdateProgress;

	Begin

	    MB := MetabaseClass.Active;

	    Upd := Mb.CreateUpdate;

	    Upd.LoadFromFileNF("D:\Update.pefx");

	    Progress := New MyUpdateProgress.Create(Upd);

	    Upd.Apply(Progress);

	    Upd.SaveToFileNF("D:\Update.pefx");

	End Sub UserProc;


	Public Class MyUpdateProgress: UpdateProgress

	    update: IMetabaseUpdate;


	    Public Constructor Create(update_: IMetabaseUpdate);

	    Begin

	        update := update_;

	    End Constructor Create;


	    Public Sub OnProgress(Data: IMetabaseUpdateProgressData);

	    Var ObjectNode: IMetabaseUpdateObjectNode;

	    Begin

	        Select Case Data.Stage

	            Case MetabaseUpdateProgressStage.Start:

	                Debug.WriteLine("Начало обновления объектов");

	                Debug.WriteLine("лог конфликтов обновления:");

	                Debug.WriteLine(update.SecurityConflictsLog);

	            Case MetabaseUpdateProgressStage.Prepare: Debug.WriteLine("Подготовка объекта");

	            Case MetabaseUpdateProgressStage.Apply: Debug.WriteLine("Обновление объекта");

	            Case MetabaseUpdateProgressStage.AfterApply:

	                If Data.Node Is IMetabaseUpdateObjectNode Then

	                    Debug.WriteLine("Объект сохранен");

	                    ObjectNode := Data.Node As IMetabaseUpdateObjectNode;

	                    Debug.WriteLine("лог изменения прав:");

	                    Debug.WriteLine(ObjectNode.SDApplyLog);

	                End If;

	            Case MetabaseUpdateProgressStage.Finish: Debug.WriteLine("Обновления объектов завершено");

	        End Select;

	        Debug.WriteLine("Текущее " + Data.Current.ToString + " из " + Data.Total.ToString + " Объект " + Data.Node.Label);

	    End Sub OnProgress;


	    Public Sub OnSkip(Data: IMetabaseUpdateProgressData);

	    Begin

	        Debug.WriteLine("OnSkip " + Data.Node.Label);

	    End Sub OnSkip;

	End Class MyUpdateProgress;


После выполнения примера в окне консоли будет выдано сообщение, содержащее
 информацию о процессе обновления, лог конфликтов обновления и лог изменения
 прав.


См. также:


[IMetabaseUpdateProgress](IMetabaseUpdateProgress.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
