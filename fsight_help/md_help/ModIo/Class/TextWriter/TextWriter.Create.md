# TextWriter.Create

TextWriter.Create
-


# TextWriter.Create


## Синтаксис


Create(Stream: [IIOStream](../../Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток в который будет
 осуществляться запись текстовых данных.


## Описание


Конструктор Create создает объект,
 позволяющий записывать данные в текстовом формате.


## Комментарии


В качестве значения параметра Stream
 необходимо указать поток, связанный с тем местом, в которое будут записываться
 текстовые данные. Инициализируйте объект одного из следующих классов и
 укажите его в качестве значения параметра Stream:


	- [FileStream](../FileStream/FileStream.htm). Поток,
	 связанный с файлом на диске;


	- [MemoryStream](../MemoryStream/MemoryStream.htm).
	 Поток в памяти компьютера.


## Пример


	Sub UserProc;

	Var

	    f: IFileStream;

	    TxtWriter: ITextWriter;

	Begin

	    f := New FileStream.Create("c:\File.txt", FileOpenMode.Create, FileShare.Exclusive);

	    TxtWriter := New TextWriter.Create(f);

	    TxtWriter.Encoding := CodePage.UTF8;

	    TxtWriter.WriteLnString("***File Info***");

	    TxtWriter.WriteString("Created:"); TxtWriter.WriteLnDateTime(DateTime.Now);

	    TxtWriter.WriteString("Company:"); TxtWriter.WriteChar(#169); TxtWriter.WriteLnString("New Line");

	    //...

	    TxtWriter.Flush;

	    Dispose f;

	End Sub UserProc;


При выполнении примера будет создан новый текстовый файл «File.txt».
 В данный файл будет записана указанная символьная строка. При работе с
 файлом будет использоваться кодировка UTF-8.


См. также:


[TextWriter](TextWriter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
