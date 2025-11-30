# TextReader.Create

TextReader.Create
-


# TextReader.Create


## Синтаксис


Create(Stream: [IIOStream](../../Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток
 из которого будет осуществляться чтение текстовых данных.


## Описание


Конструктор Create создает объект,
 позволяющий считывать данные в текстовом формате.


## Комментарии


В качестве значения параметра Stream
 необходимо указать поток, связанный с тем местом, в котором хранятся текстовые
 данные. Инициализируйте объект одного из следующих классов и укажите его
 в качестве значения параметра Stream:


	- [FileStream](../FileStream/FileStream.htm). Поток,
	 связанный с файлом на диске;


	- [MemoryStream](../MemoryStream/MemoryStream.htm).
	 Поток в памяти компьютера.


## Пример


	Sub UserProc;

	Var

	    f: IFileStream;

	    TxtRead: ITextReader;

	    s: String;

	Begin

	    If File.Exists("c:\File.txt") Then

	        f := New FileStream.Create("c:\File.txt", FileOpenMode.Read, FileShare.DenyNone);

	        TxtRead := New TextReader.Create(f);

	        TxtRead.Encoding := CodePage.UTF8;

	        s := TxtRead.ReadLine;

	        Debug.WriteLine(s);

	        Dispose f;

	    End If;

	End Sub UserProc;


При выполнении примера будет осуществлена проверка наличия файла «File.txt».
 Если файл существует, то из него будет осуществлено чтение символьной
 строки. Считанное значение будет выведено в консоль среды разработки.


См. также:


[TextReader](TextReader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
