# BinaryReader.Create

BinaryReader.Create
-


# BinaryReader.Create


## Синтаксис


Create(Stream: [IIOStream](../../Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток из которого будет
 осуществляться чтение двоичных данных.


## Описание


Конструктор Create создает объект,
 позволяющий считывать данные из двоичного формата.


## Комментарии


В качестве значения параметра Stream
 необходимо указать поток, связанный с тем местом, в котором хранятся данные
 в двоичном формате. Инициализируйте объект одного из следующих классов
 и укажите его в качестве значения параметра Stream:


	- [FileStream](../FileStream/FileStream.htm). Поток,
	 связанный с файлом на диске;


	- [MemoryStream](../MemoryStream/MemoryStream.htm).
	 Поток в памяти компьютера.


## Пример


			Sub UserProc;

Var

    f: IFileStream;

    BinRead: IBinaryReader;

    s: String;

Begin

    If File.Exists("c:\BinFile.dat") Then

        f := New FileStream.Create("c:\BinFile.dat", FileOpenMode.Read, FileShare.DenyNone);

        BinRead := New BinaryReader.Create(f);

        s := BinRead.ReadString;

        Debug.WriteLine(s);

        Dispose f;

    End If;

End Sub UserProc;


При выполнении примера будет осуществлена проверка наличия файла «BinFile.dat».
 Если файл существует, то из него будет осуществлено чтение символьной
 строки. Считанное значение будет выведено в консоль среды разработки.


См. также:


[BinaryReader](BinaryReader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
