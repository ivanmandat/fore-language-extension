# IAdhocReport.BinaryData

IAdhocReport.BinaryData
-


# IAdhocReport.BinaryData


## Синтаксис


BinaryData: [IAdhocBinaryData](../IAdhocBinaryData/IAdhocBinaryData.htm);


## Описание


Свойство BinaryData возвращает
 бинарные данные аналитической панели.


## Комментарии


Бинарные данные используются для хранения изображений, содержащихся
 в аналитической панели. Это позволяет работать с аналитической панелью
 с помощью веб-сервисов.


В навигаторе объектов бинарные данные аналитической панели отображаются
 в виде [дочерних
 объектов](UiNav.chm::/03_Objects/UiNav_Obj_BasicPropConsist.htm) аналитической панели типа «Документ».


## Пример


Для выполнения примера в репозитории предполагается наличие аналитической
 панели с идентификатором «ADHOC_REPORT»,
 содержащей изображения.


Добавьте ссылки на системные сборки: Adhoc, Io, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    report: IAdhocReport;

    i: Integer;

    bindat: IAdhocBinaryData;

    File1: IFileInfo;

    BinW: IBinaryWriter;

    AdhocBinItem: IAdhocBinaryItem;

Begin

    mb := MetabaseClass.Active;

    // Получаем аналитическую панель

    report := mb.ItemById("ADHOC_REPORT").Open(Null) As IAdhocReport;

    // Получаем бинарные данные аналитической панели

    bindat := report.BinaryData;

    // Сохраняем бинарные данные в файл

    For i := 0 To bindat.Count - 1 Do

        AdhocBinItem := bindat.Item(i);

        File1 := New FileInfo.Attach("c:\Image_" + i.ToString + ".jpeg");

        BinW := File1.OpenBinaryWriter(True);

        AdhocBinItem.Type := AdhocBinaryType.Jpeg;

        AdhocBinItem.WriteToStream(BinW.Stream);

    End For;

End Sub UserProc;


После выполнения примера все изображения, содержащиеся в аналитической
 панели, будут сохранены на локальный диск «C» в виде файлов. Формат наименования
 файлов: «Image_N.jpeg», где N - порядковый номер изображения.


См. также:


[IAdhocReport](IAdhocReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
