# IAdhocReport.SaveToStream

IAdhocReport.SaveToStream
-


# IAdhocReport.SaveToStream


## Синтаксис


SaveToStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток, в который будет
 сохраненена аналитическая панель.


## Описание


Метод SaveToStream осуществляет
 сохранение аналитической панели в поток.


## Комментарии


Для загрузки аналитической панели из потока используйте метод [IAdhocReport.LoadFromStream](IAdhocReport.LoadFromStream.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории аналитической
 панели с идентификатором «ADHOC».


Добавьте ссылки на системные сборки: Adhoc, IO и Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    CrInfo: IMetabaseObjectCreateInfo;

    AdhocReport: IAdhocReport;

    Stream: IMemoryStream;

Begin

    MB := MetabaseClass.Active;

    AdhocReport := MB.ItemById("ADHOC").Bind As IAdhocReport;

    // Сохраним отчет в поток

    Stream := New MemoryStream.Create;

    AdhocReport.SaveToStream(Stream);

    // Создадим аналичическую панель

    CrInfo := MB.CreateCreateInfo;

    CrInfo.ClassID := MetabaseObjectClass.KE_ADHOC_REPORT;

    CrInfo.Id := "NEW_ADHOC";

    CrInfo.Name := "Новая аналитическая панель";

    CrInfo.Parent := MB.Root;

    AdhocReport := MB.CreateObject(CrInfo).Edit As IAdhocReport;

    // Загрузим отчет из потока в аналитическую панель

    AdhocReport.LoadFromStream(Stream);

    (AdhocReport As IMetabaseObject).Save;

    Dispose Stream;

End Sub UserProc;


В результате выполнения примера отчет с идентификатором «ADHOC» был
 сохранен в поток. Была создана новая аналитическая панель с идентификатором
 «NEW_ADHOC», в которую из потока был загружен отчет.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
