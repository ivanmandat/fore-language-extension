# IBinaryWriter.WriteVariant

IBinaryWriter.WriteVariant
-


# IBinaryWriter.WriteVariant


## Синтаксис


WriteVariant(Value: Variant);


## Параметры


Value — значение, которое необходимо записать.


## Описание


Метод WriteVariant осуществляет запись значения типа Variant в двоичный файл.


## Пример


Для выполнения примера предполагается наличие в корневом каталоге диска
 "С" двоичного файл с наименованием "1.dat".


	Sub UserProc;

	Var

	    File1: IFileInfo;

	    BinW: IBinaryWriter;

	    v: Variant;

	Begin

	    File1 := New FileInfo.Attach("c:\1.dat");

	    If File1.Exists Then

	        BinW := File1.OpenBinaryWriter(True);

	        v := "Время записи в файл:";

	        BinW.WriteVariant(v);

	        v := DateTime.Now;

	        BinW.WriteVariant(v);

	    End If;

	    Dispose File1;

	End Sub UserProc;


После выполнения примера в двоичный файл «1.dat» будет записана строка
 "Время записи в файл:" и текущее время.


См.также:


[IBinaryWriter](IBinaryWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
