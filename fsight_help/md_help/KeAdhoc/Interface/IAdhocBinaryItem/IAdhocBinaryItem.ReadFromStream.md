# IAdhocBinaryItem.ReadFromStream

IAdhocBinaryItem.ReadFromStream
-


# IAdhocBinaryItem.ReadFromStream


## Синтаксис


ReadFromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток - источник для
 чтения данных.


## Описание


Метод ReadFromStream выполняет
 чтение элемента коллекции бинарных данных из потока.


## Комментарии


Для записи данных в поток используйте метод [IAdhocBinaryItem.WriteToStream](IAdhocBinaryItem.WriteToStream.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1». В репозитории должна быть создана
 аналитическая панель с наименованием «AN_PAN». Добавьте ссылки на системные
 сборки «Metabase», «Adhoc», «Fore», «Io».


			Sub UserProc;

Var

    MB: IMetabase;

    File1, File2: IFileInfo;

    BR: IBinaryReader;

    BW: IBinaryWriter;

    AP: IAdhocReport;

    BI: IAdhocBinaryItem;

    BD: IAdhocBinaryData;

Begin

    MB := MetabaseClass.Active;

    AP := MB.ItemById("AN_PAN").Edit As IAdhocReport;

    // Коллекция бинарных данных

    BD := AP.BinaryData;

    // Файлы для чтения и записи

    File1 := New FileInfo.Attach("c:\Image.jpg");

    File2 := New FileInfo.Attach("c:\New_Image.jpg");

    // Открытие файла на чтение

    BR := File1.OpenBinaryReader;

    // Открытие файла на запись

    BW := File2.OpenBinaryWriter(True);

    // Очистка коллекции бинарных данных

    BD.Clear;

    // Новый элемент коллекции бинарных данных

    BD.Add;

    BI := BD.Item(0);

    // Чтение из потока

    BI.ReadFromStream(BR.Stream);

    // Тип элемента

    BI.Type := AdhocBinaryType.Png;

    // Запись в поток

    BI.WriteToStream(BW.Stream);

    (AP As IMetabaseObject).Save;

    AP := Null;

End Sub UserProc;


После выполнения примера будет создан и привязан к аналитической
 панели документ бинарного типа, содержащий данные из файла «Image.jpg».
 В файл «New_Image.jpg» будут записаны данные из созданного документа.


См. также:


[IAdhocBinaryItem](IAdhocBinaryItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
