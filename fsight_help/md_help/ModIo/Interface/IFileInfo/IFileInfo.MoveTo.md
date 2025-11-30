# IFileInfo.MoveTo

IFileInfo.MoveTo
-


# IFileInfo.MoveTo


## Синтаксис


MoveTo(Destination: String);


## Параметры


Destination - путь,
 соответствующий директории, в которую необходимо переместить файл.


## Описание


Метод MoveTo осуществляет перемещение
 файла в директорию, передаваемую посредством параметра Destination.


## Комментарии


Если в указанной директории уже существует файл с таким же наименованием,
 то текущий файл после перемещения будет переименован. Новое имя файла
 формируется как наименование копии существующего файла, в соответствии
 с алгоритмом, предусмотренным в операционной системе.


## Пример


	Sub UserProc;

	Var

	    FileInf: IFileInfo;

	Begin

	    FileInf:=New FileInfo.Attach("c:\Work\1.txt");

	    If FileInf.Exists And Directory.Exists("c:\Temp") Then

	        FileInf.MoveTo("c:\Temp");

	    End If;

	    Dispose FileInf;

	End Sub UserProc;


После выполнения примера файл «1.txt» будет перемещен в папку «c:\Temp».


См. также:


[IFileInfo](IFileInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
