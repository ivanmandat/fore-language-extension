# IBinaryReader.ReadVariant

IBinaryReader.ReadVariant
-


# IBinaryReader.ReadVariant


## Синтаксис


ReadVariant: Variant;


## Описание


Метод ReadVariant осуществляет считывание значение типа Variant из двоичного файла.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 "С" двоичного файл с наименованием "1.dat".


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    BinR: IBinaryReader;

	Begin

	    File1 := New FileInfo.Attach("c:\1.dat");

	    If File1.Exists Then

	        BinR := File1.OpenBinaryReader;

	        Debug.WriteLine(BinR.ReadVariant);

	        Debug.WriteLine(BinR.ReadVariant);

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера из двоичного файла «1.dat» будут считаны и
 выведены в консоль два значения.


См.также:


[IBinaryReader](IBinaryReader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
