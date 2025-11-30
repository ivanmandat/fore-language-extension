# IIOStreamClass.WriteString

IIOStreamClass.WriteString
-


# IIOStreamClass.WriteString


## Синтаксис


WriteString(Stream: [IIOStream](../IIOStream/IIOStream.htm);
 Value: String);


## Параметры


Stream. Поток, в который пишутся
 данные.


Value. Строка, которая должна
 быть записана в поток.


## Описание


Метод WriteString осуществляет
 запись в поток строки, представленной в кодировке юникод.


## Пример


В примере поток будет представлен файлом «C:\Stream.txt».


	Sub UserProc;

	Var

	    f: IFile;

	    BinW: IBinaryWriter;

	Begin

	    f := New File.Create As IFIle;

	    BinW := f.OpenBinaryWriter("C:\Stream.txt", True);

	    IOStream.WriteString(Binw.Stream, "Пишем строку в файл через поток");

	End Sub UserProc;


После выполнения примера в поток будет записана указанная строка.


См. также:


[IIOStreamClass](IIOStreamClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
