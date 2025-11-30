# ZipArchive.Create

ZipArchive.Create
-


# ZipArchive.Create


## Синтаксис


Create(Path: String; Mode: [ZipMode](../../Enums/ZipMode.htm);
 [CompressionLevel: [ZipCompressionLevel](../../Enums/ZipCompressionLevel.htm)
 = -1]);


## Параметры


Path. Путь и наименование ZIP-архива
 на диске.


Mode. Режим создания объекта
 для работы с ZIP-архивом.


CompressionLevel. Степень сжатия
 архива.


## Описание


Конструктор Create инициализирует
 новый объект для работы с ZIP-архивом.


## Комментарии


В зависимости от выбранного режима Mode,
 в параметре Path указывается
 путь к существующему архиву или наименование архива, который был создан
 ранее. Если создаётся новый архив, то папка, указываемая в параметре Path уже должна существовать на
 диске.


## Пример


Для выполнения примера предполагается наличие на диске папки «D:\Work»,
 внутри этой папки имеются подкаталоги «Archives» для хранения архивных
 файлов и «Other» для хранения каких-либо промежуточных файлов. Также в
 «D:\Work» должен быть создан файл «WDI.xls» с данными. Подключите системную
 сборку IO.


			Sub UserProc;

Var

    ZIP: IZipArchive;

Begin

    ZIP := New ZipArchive.Create("D:\Work\Archives\Data.zip", ZipMode.Create);

    //Степень сжатия

    ZIP.CompressionLevel := ZipCompressionLevel.BestCompression;

    //Наполнение архива файлами

    ZIP.AddFile("D:\Work\WDI.xls", "WDI.xls");

    ZIP.AddDirectory("D:\Work\Other");

    //Освобождение переменной с сохранением архива

    Dispose ZIP;

End Sub UserProc;


В результате выполнения примера будет создан архив «Data.zip», в него
 будут включены указанный файл и подкаталог «Other» со всем содержимым.
 Для архива будет задана максимальная степень сжатия.


См. также:


[ZipArchive](ZipArchive.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
