# IFileInfo.CopyTo

IFileInfo.CopyTo
-


# IFileInfo.CopyTo


## Синтаксис


CopyTo(Destination: String; Overwrite: Boolean);


## Параметры


Destination — путь, соответствующий
 директории, в которую необходимо скопировать файл.


Overwrite — параметр, определяющий
 будет ли перезаписываться файл, в случае, если в директории Destination
 существует файл с таким же наименованием. Если передавать значение True, то файл будет перезаписан.
 Если передавать значение False,
 и файл уже существует, то будет сгенерирована исключительная ситуация.


## Описание


Метод CopyTo осуществляет копирование
 файла в директорию, передаваемую посредством параметра Destination.


## Пример


	Sub UserProc;

	Var

	    FileInf: IFileInfo;

	Begin

	    FileInf:=New FileInfo.Attach("c:\Work\1.txt");

	    If FileInf.Exists And Directory.Exists("c:\Temp") Then

	        FileInf.CopyTo("c:\Temp", True);

	    End If;

	    Dispose FileInf;

	End Sub UserProc;


После выполнения примера файл «1.txt» будет скопирован в папку «c:\Temp».


См. также:


[IFileInfo](IFileInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
