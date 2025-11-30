# IIOStreamClass.ReadString

IIOStreamClass.ReadString
-


# IIOStreamClass.ReadString


## Синтаксис


ReadString(Value: [IIOStream](../IIOStream/IIOStream.htm)):
 String;


## Параметры


Value. Поток, из которого производится
 чтение строки.


## Описание


Метод ReadString осуществляет
 чтение из потока строки, представленной в кодировке юникод.


## Пример


В примере поток будет представлен файлом «C:\Stream.txt».


	Sub UserProc;

	Var

	    f: IFile;

	    BinR: IBinaryReader;

	Begin

	    f := New File.Create As IFIle;

	    BinR := f.OpenBinaryReader("C:\Stream.txt");

	    Debug.WriteLine(IOStream.ReadString(BinR.Stream));

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена строка, считанная
 из потока.


См. также:


[IIOStreamClass](IIOStreamClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
