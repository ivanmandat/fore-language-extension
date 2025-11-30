# IPrxPartialPersist.LoadFromStream

IPrxPartialPersist.LoadFromStream
-


# IPrxPartialPersist.LoadFromStream


## Синтаксис


LoadFromStream(Options: Integer; Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Options. Параметр
 зарезервирован на будущее. Следует
 передавать «0».


Stream. Поток, из которого
 будет загружен отчет.


## Описание


Метод LoadFromStream восстанавливает
 отчет из потока.


## Комментарии


Метод используется совместно с [IPrxPartialPersist.SaveToStream](IPrxPartialPersist.SaveToStream.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчета, для которого определен обработчик событий, содержащий приведенный
 ниже код. Для обработчика события должны быть подключены следующие системные
 сборки: Io, Report, Ui.


			Class EventsClass: ReportEvents


    Public Sub OnBeforeExecuteReport(Report: IPrxReport; Var Cancel: Boolean);

    Var

        stSaved: IIOStream;

    Begin

        If Not WinApplication.ConfirmationBox("Загрузить сохраненный?") Then

            Return;

        End If;

        stSaved := New FileStream.Create("c:\MyReport.rep", FileOpenMode.Read, FileShare.Exclusive);

        Try

            (Report As IPrxPartialPersist).LoadFromStream(0, stSaved);

        Finally

            Dispose stSaved;

        End Try;

        Cancel := True;

    End Sub OnBeforeExecuteReport;


    Public Sub OnAfterExecuteReport(Report: IPrxReport);

    Var

        stFile: IIOStream;

    Begin

        If Not WinApplication.ConfirmationBox("Сохранить вычисленный?") Then

            Return;

        End If;

        stFile := New FileStream.Create("c:\MyReport.rep", FileOpenMode.Create, FileShare.Exclusive);

        Try

            (Report As IPrxPartialPersist).SaveToStream(0, stFile);

        Finally

            Dispose stFile;

        End Try;

    End Sub OnAfterExecuteReport;


End Class EventsClass;


После вычисления отчета будет выдано сообщение «Сохранить вычисленный?».
 При положительном ответе отчет будет сохранен в указанный файл и листы
 отчета будут очищены. Перед вычислением отчета будет выдано сообщение
 «Загрузить сохраненный?». При положительном ответе отчет будет загружен
 из указанного файла, вычисление отчета не производится.


См. также:


[IPrxPartialPersist](IPrxPartialPersist.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
