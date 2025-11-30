# IZipArchive.AddFromStream

IZipArchive.AddFromStream
-


# IZipArchive.AddFromStream


## Синтаксис


AddFromStream(Stream: [IIOStream](../IIOStream/IIOStream.htm);
 ArchPath: String): [IZipArchiveEntry](../IZipArchiveEntry/IZipArchiveEntry.htm);


## Параметры


Stream. Поток, связанный с
 файлом, который необходимо добавить в архив.


ArchPath. Путь к папке внутри
 архива и имя файла, с которым в архив будет добавлен файл из потока.


## Описание


Метод AddFromStream добавляет
 в архив файл, передаваемый в указанном потоке.


## Пример


Для выполнения примера предполагается наличие на диске папки «D:\Work»,
 внутри этой папки имеется подкаталог «Archives» для хранения архивных
 файлов.


Добавьте ссылку на системную сборку IO.


			Sub UserProc;

Var

    ZIP: IZipArchive;

    MStream: IMemoryStream;

    TxtWriter: ITextWriter;

Begin

    ZIP := New ZipArchive.Create("d:\Work\Archives\Data_Stream.zip", ZipMode.Create);

    MStream := New MemoryStream.Create;

    TxtWriter := New TextWriter.Create(MStream);

    TxtWriter.Encoding := CodePage.UTF8;

    TxtWriter.WriteLnString("***File Info***");

    TxtWriter.WriteString("Created: "); TxtWriter.WriteDateTime(DateTime.Now);

    TxtWriter.Flush;

    MStream.Position := 0;

    ZIP.AddFromStream(MStream, "Info.txt");

    Dispose ZIP;

End Sub UserProc;


В результате выполнения примера будет создан архив «Data_Stream.zip».
 В архив будет добавлен файл, который будет создан в памяти во время выполнения
 примера.


См. также:


[IZipArchive](IZipArchive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
