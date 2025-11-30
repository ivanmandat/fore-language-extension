# IBinaryReader.EndOfList

IBinaryReader.EndOfList
-


# IBinaryReader.EndOfList


## Синтаксис


EndOfList: Boolean;


## Описание


Метод EndOfList возвращает признак достижения окончания страницы двоичного файла.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 "С" двоичного файл с наименованием "1.dat".


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    BinR: IBinaryReader;

	    IntList: IArrayList;

	Begin

	    File1:=New FileInfo.Attach("c:\1.dat");

	    IntList:=New ArrayList.Create;

	    If File1.Exists Then

	        BinR:=File1.OpenBinaryReader;

	        BinR.ReadListBegin;

	        While Not BinR.EndOfList Do

	            IntList.Add(BinR.ReadInteger);

	        End While;

	        BinR.ReadListEnd;

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в массив «IntList» будут считаны целочисленные
 значения из файла «1.dat».


См.также:


[IBinaryReader](IBinaryReader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
