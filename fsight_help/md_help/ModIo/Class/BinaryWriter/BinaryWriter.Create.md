# BinaryWriter.Create

BinaryWriter.Create
-


# BinaryWriter.Create


## Синтаксис


Create(Stream: [IIOStream](../../Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток в который будет
 осуществляться запись данных в двоичном формате.


## Описание


Конструктор Create создает объект,
 позволяющий записывать данные в двоичном формате.


## Комментарии


В качестве значения параметра Stream
 необходимо указать поток, связанный с тем местом, в который будут записываться
 двоичные данные. Инициализируйте объект одного из следующих классов и
 укажите его в качестве значения параметра Stream:


	- [FileStream](../FileStream/FileStream.htm). Поток,
	 связанный с файлом на диске;


	- [MemoryStream](../MemoryStream/MemoryStream.htm).
	 Поток в памяти компьютера.


## Пример


			Sub UserProc;

Var

    f: IFileStream;

    BinWriter: IBinaryWriter;

Begin

    f := New FileStream.Create("c:\BinFile.dat", FileOpenMode.Create, FileShare.Exclusive);

    BinWriter := New BinaryWriter.Create(f);

    BinWriter.WriteString("New
 Line");

    BinWriter.Flush;

    Dispose f;

End Sub UserProc;


При выполнении примера будет создан новый файл «BinFile.dat». В данный
 файл в двоичном виде будет записана указанная символьная строка.


См. также:


[BinaryWriter](BinaryWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
