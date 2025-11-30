# ITextReader.Encoding

ITextReader.Encoding
-


# ITextReader.Encoding


## Синтаксис


Encoding: [CodePage](ForeSys.chm::/Enums/CodePage.htm);


## Описание


Свойство Encoding определяет
 кодировку текста для чтения из файла.


## Комментарии


Для корректного чтения текста кодировка, определенная свойством Encoding, должна совпадать с кодировкой
 файла. По умолчанию в свойстве Encoding
 используется кодировка, которая была использована при установке
 операционной системы.


## Пример


Для выполнения примера предполагается наличие текстового файла C:\file.txt.
 Файл имеет кодировку UTF-8.


Добавьте ссылку на системную сборку IO.


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    TextR: ITextReader;

	    s: String;

	Begin

	    File1 := New FileInfo.Attach("C:\file.txt");

	    If File1.Exists Then

	        TextR := File1.OpenTextReader;

	        TextR.Encoding := CodePage.UTF8;

	        s := TextR.ReadString(10);

	    End If;

	    Debug.WriteLine(s);

	    Dispose File1;

	End Sub UserProc;


После выполнения примера из файла будут считаны первые десять символов.
 Полученное значение будет выведено в консоль среды разработки.


См. также:


[ITextReader](ITextReader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
