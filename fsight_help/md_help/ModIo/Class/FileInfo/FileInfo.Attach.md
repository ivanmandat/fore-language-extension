# FileInfo.Attach

FileInfo.Attach
-


# FileInfo.Attach


## Синтаксис


Attach(Path: String);


## Параметры


Path. Путь и наименование файла,
 с которым будет связан объект данного класса.


## Описание


Конструктор Attach создает объект
 для работы с файлами и связывает его с файлом, путь к которому передается
 посредством параметра Path.


## Комментарии


Файл, указанный в параметре Path,
 может отсутствовать. Для проверки наличия файла используйте метод [Exists](../../Interface/IFileSystemInfo/IFileSystemInfo.Exists.htm).


## Пример


			Sub UserProc;

Var

    File1: IFileInfo;

    BynW: IBinaryWriter;

Begin

    File1 := New FileInfo.Attach("c:\Work\1.txt");

    If File1.Exists Then

        BynW := File1.AppendBinary;

        BynW.WriteDateTime(DateTime.Now);

    End If;

    Dispose File1;

End Sub UserProc;


После выполнения примера в конец файла «1.txt» будут записаны текущие
 дата и время, преобразованные к двоичному виду.


См. также:


[FileInfo](FileInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
