# IDalCommandParam.DataDomain

IDalCommandParam.DataDomain
-


# IDalCommandParam.DataDomain


## Синтаксис


DataDomain: [DbDataDomain](../../Enums/DbDataDomain.htm);


## Описание


Свойство DataDomain определяет
 тип данных параметра, если он предназначен для передачи многобайтовой
 информации.


## Комментарии


В текущей реализации данное свойство актуально, если параметр используется
 для изменения значения текстового
 поля.


При установке в свойстве [Value](IDalCommandParam.Value.htm)
 символьного значения во время выполнения SQL-команды будет осуществлена
 проверка его длины для возможности вставки в качестве значения символьного
 поля. Ограничением для данных полей является 3999 символов. Если в таблице,
 для которой выполняется запрос, создано текстовое
 поле, то для вставки значения превышающего 3999 символов необходимо отключить
 проверку длины значения, указав в свойстве DataDomain
 значение [DbDataDomain.Memo](../../Enums/DbDataDomain.htm).
 Текстовые поля могут хранить до четырех гигабайт символьных данных.


## Пример


Для выполнения примера предполагается наличие на сервере БД таблицы
 с физическим именем TFILESTORE. Данная таблица имеет два поля: символьное
 - NAME, и текстовое - TEXT_FILE. В корневом каталоге диска С имеется файл
 1.txt. Файл представлен в кодировке UTF-8.


	Sub UserSub;

	Var

	    MB: IMetabase;

	    DB: IDatabaseInstance;

	    Com: IDalCommand;

	    Params: IDalCommandParams;

	    Param, Param1: IDalCommandParam;

	    FileStr: IFileStream;

	    TextRead: ITextReader;

	    TextFile: String;

	Begin

	    MB := MetabaseClass.Active;

	    DB := MB.ItemById("BD").Open(Null) As IDatabaseInstance;

	    Com := DB.Connection.CreateCommand("insert into TFILESTORE (NAME, TEXT_FILE) values(:A, :B)");

	    Com.Parse;

	    Params := Com.Params;

	    Param := Params.Item(0);

	    Param1 := Params.Item(1);

	    //Считываем содержимое файла в текстовом виде

	    FileStr := File.Open("c:\1.txt", FileOpenMode.Read, FileShare.DenyNone);

	    TextRead := New TextReader.Create(FileStr);

	    TextRead.Encoding := CodePage.UTF8;

	    TextFile := TextRead.ReadToEnd;

	    //Устанавливаем значения
	 параметров

	    Param.Value := FileStr.FileName;

	    //Запись текста файла без проверки длины передаваемых данных

	    Param1.DataDomain := DbDataDomain.Memo;

	    Param1.Value := TextFile;

	    //Выполнение команды

	    Com.Execute;

	    Com.Close;

	    Dispose TextRead;

	End Sub UserSub;


При выполнении примера будет выполнена SQL-команда, осуществляющая вставку
 в таблицу новой записи. В качестве значения полей передаются наименование
 файла и его содержимое в символьном виде. Содержимое файла вставляется
 в текстовое поле. Т.к. длина содержимого может иметь большое значение,
 то для отключения проверки длины указывается значение свойства DataDomain.


См. также:


[IDalCommandParam](IDalCommandParam.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
