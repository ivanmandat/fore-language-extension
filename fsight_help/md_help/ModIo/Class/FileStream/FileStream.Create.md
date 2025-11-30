# FileStream.Create

FileStream.Create
-


# FileStream.Create


## Синтаксис


Create(FileName: String; OpenMode: [FileOpenMode](../../Enums/FileOpenMode.htm);
 ShareMode: [FileShare](../../Enums/FileShare.htm));


## Параметры


FileName. Путь и наименование
 файла, с которым осуществляется связь.


OpenMode. Параметр, определяющий
 вид запроса на открытие файла.


ShareMode. Параметр, определяющий
 возможность совместного доступа к файлу.


## Описание


Конструктор Create создает новый
 поток, связанный с указанным файлом.


## Пример


			Sub UserProc;

Var

    f: IFileStream;

    BinWriter: IBinaryWriter;

Begin

    f := New FileStream.Create("c:\BinFile.dat", FileOpenMode.Create, FileShare.Exclusive);

    BinWriter := New BinaryWriter.Create(f);

    BinWriter.WriteString("Sample
 Text");

    BinWriter.Flush;

    Dispose f;

End Sub UserProc;


При выполнении примера будет создан новый файл «BinFile.dat». В данный
 файл в двоичном виде будет записана указанная символьная строка.


См. также:


[FileStream](FileStream.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
