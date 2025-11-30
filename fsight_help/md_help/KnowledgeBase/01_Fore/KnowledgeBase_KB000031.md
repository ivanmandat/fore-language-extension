# Работа с полями, имеющими пользовательский тип данных

Работа с полями, имеющими пользовательский тип данных
-


# Работа с полями, имеющими пользовательский тип данных


	Номер статьи: KB000031


## Общие сведения


	Во время работы с таблицей репозитория, при создании новых полей
	 указывается тип данных, которые будут храниться в поле. Кроме базовых
	 типов (Строка, Целый, Вещественный, Дата) может быть указан один из
	 пользовательских типов данных: Пользовательский,
	 Текстовый или Двоичный.
	 При этом в физической таблице на сервере, которой соответствует данная
	 таблица репозитория, будет создано поле с определенным типом. Ниже
	 приведены те типы, которые будут иметь поля физической таблицы, в
	 зависимости от используемой СУБД:


			 Тип поля в таблице репозитория
			 PostgreSQL
			 Oracle
			 Microsoft SQL Server


			 Пользовательский
			 LO
			 LONG RAW
			 VARBINARY(MAX)


			 Текстовый
			 Text
			 CLOB (NCLOB при работе с юникод)
			 VARCHAR(MAX) (NVARCHAR(MAX) при работе с юникод)


			 Двоичный
			 LO
			 BLOB
			 VARBINARY(MAX)


	Для получения поддерживаемых версий СУБД обратитесь к разделу «[Поддерживаемые СУБД](Setup.chm::/01_SysReq/database_Support.htm)».


	Текстовые поля используются
	 для хранения символьной информации. В качестве значения таких полей
	 указываются любые символьные данные, длина которых не превышает предел,
	 установленный для соответствующего типа данных.


	Пользовательские и двоичные поля используются для хранения
	 двоичных данных. Работа с ними производится через потоки и описана
	 ниже.


## Запись и чтение полей пользовательского и двоичного типа


	Поля пользовательского и
	 двоичного типа принимают в
	 качестве значения ссылку на поток, содержащий какие-либо данные. Поток
	 может быть связан с каким-либо файлом, либо создан динамически в оперативной
	 памяти. Объекты репозитория, поддерживающие сохранение в поток, также
	 могут быть сохранены в полях пользовательского типа. После выполнения
	 транзакции данные потока будут записаны в базу репозитория. Извлечение
	 значений полей пользовательского и двоичного типа также производится
	 в поток. Для этого используется статический метод [FromVariant](modio.chm::/interface/iiostreamclass/iiostreamclass.fromvariant.htm)
	 класса [IOStream](modio.chm::/class/iostream/iostream.htm).
	 Данные, загруженные в поток, в дальнейшем могут быть отредактированы
	 и пересохранены.


### Установка значения поля


		Var

		    //...

		    Fields: IDatasetInstanceFields;

		    StreamData: IIOStream;

		    //...

		Begin

		    //...

		    Fields.FindById("<ID поля>").Value := StreamData;

		    //...


### Чтение значения поля


		Var

		    //...

		    Fields: IDatasetInstanceFields;

		    StreamData: IIOStream;

		    //...

		Begin

		    //...

		    StreamData := IOStream.FromVariant(Fields.FindById("<ID поля>").Value);

		    //...


## Пример


	Рассмотрим пример записи и чтения данных в поле двоичного типа.
	 Для выполнения примера создадим таблицу с идентификатором «TImages»
	 со следующими полями:


			 Идентификатор поля
			 Тип поля
			 Краткое описание


			 IMG_NAME
			 Текстовый
			 Наименование файла.


			 IMG
			 Двоичный
			 Файл с изображением.


	Также для примера создадим форму. На форме расположены следующие
	 компоненты:


		- Button с наименованием
		 «BPrior». Используется для перемещения в кеше данных на одну запись
		 назад.


		- Button с наименованием
		 «BNext». Используется для перемещения в кеше данных на одну запись
		 вперед.


		- Button с наименованием
		 «BAdd». Используется для создания новой записи.


		- Label с наименованием
		 «ImgName». Используется для отображения пути и наименования загруженного
		 файла.


		- ImageBox с наименованием
		 «ImgBox». Используется для отображения изображения.


		- FileOpenDialog с
		 наименованием «OpenImageDlg». Используется для выбора файлов с
		 изображением.


	При загрузке формы будет открыта таблица и получен кеш с записями.
	 Нажатие кнопок «BPrior» и «BNext» позволяет перемещаться по записям
	 в кеше. После любого перемещения в кеше будет вызвана процедура LoadRecord. В данной процедуре извлекаются
	 значения полей текущей записи. Изображение из поля «IMG» загружается
	 в поток, содержимое которого затем загружается в компонент «ImgBox».
	 При нажатии на кнопку «BAdd» будет выведен диалог выбора файла. После
	 выбора файла с изображением будет добавлена новая запись. Наименование
	 файла и сам файл будут записаны в таблицу.


	[![](../Opened.gif)![](../Closed.gif)Пример](javascript:TextPopup(this))


			Class TESTForm: Form

			    OpenImageDlg: FileOpenDialog;

			    ImageName: Label;

			    ImgBox: ImageBox;

			    BPrior: Button;

			    BNext: Button;

			    BAdd: Button;

			    //Переменные для работы с репозиторием

			    MB: IMetabase;

			    TableInst: IDatasetInstance;

			    Cache: ICachedDataset;

			    Fields: IDatasetInstanceFields;


			    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

			    Begin


			        //Открытие таблицы и получение доступа к кешу с записями

			        MB := MetabaseClass.Active;

			        TableInst := MB.ItemById("TIMAGES").Open(Null) As IDatasetInstance;

			        Cache := TableInst.OpenCached;

			        Fields := Cache.Fields;

			    End Sub TESTFormOnCreate;


			    Sub TESTFormOnClose(Sender: Object; Args: IEventArgs);

			    Begin

			        Cache.Close;

			        TableInst.Close;

			    End Sub TESTFormOnClose;


			    Sub BPriorOnClick(Sender: Object; Args: IMouseEventArgs);

			    Begin

			        If Not Cache.Bof Then

			            Cache.Prior;

			            LoadRecord;

			        End If;

			    End Sub BPriorOnClick;


			    Sub BNextOnClick(Sender: Object; Args: IMouseEventArgs);

			    Begin

			        If Not Cache.Eof Then

			            Cache.Next;

			            LoadRecord;

			        End If;

			    End Sub BNextOnClick;


			    Sub BAddOnClick(Sender: Object; Args: IMouseEventArgs);

			    Var

			        ImgStream: IFileStream;

			    Begin

			        If OpenImageDlg.Execute Then


			            //Создание новой записи

			            Cache.Append;

			            ImgStream := New FileStream.Create(OpenImageDlg.FileName, FileOpenMode.Read, FileShare.DenyNone);

			            //Установка значений полей

			            Fields.FindById("IMG_NAME").Value := OpenImageDlg.FileName;

			            Fields.FindById("IMG").Value := ImgStream;

			            //Сохранение изменений

			            Cache.Post;

			            Dispose ImgStream;

			            //Загрузка значений полей в компоненты

			             LoadRecord;

			        End If;

			    End Sub BAddOnClick;


			    Sub LoadRecord;

			    Var

			        ImgStream: IIOStream;

			    Begin

			        ImageName.Text := Fields.FindById("IMG_NAME").Value;

			        ImgStream := IOStream.FromVariant(Fields.FindById("IMG").Value);

			        ImgBox.LoadImageFromStream(ImgStream);


			        //Уничтожение потока

			        Dispose ImgStream;

			    End Sub LoadRecord;

			End Class TESTForm;


	Для хранения в поле «IMG» объекта репозитория, например регламентного
	 отчета, преобразуем выше указанный код и добавим на форму следующие
	 компоненты:


		- UiReport с наименованием
		 «UiReport1». Источник данных для визуального компонента ReportBox.


		- ReportBox с наименованием
		 «ReportBox1». Визуальный компонент, для отображения регламентного
		 отчета, загруженного из таблицы репозитория.


		- MetabaseOpenDialog
		 с наименованием «OpenReportDlg». Используется для выбора регламентного
		 отчета из репозитория.


	[![](../Opened.gif)![](../Closed.gif)Пример](javascript:TextPopup(this))


			Class TESTForm: Form

			    ImageName: Label;

			    BPrior: Button;

			    BNext: Button;

			    BAdd: Button;

			    OpenReportDlg: MetabaseOpenDialog;

			    UiReport1: UiReport;

			    ReportBox1: ReportBox;

			    //Переменные для работы с репозиторием

			    MB: IMetabase;

			    TableInst: IDatasetInstance;

			    Cache: ICachedDataset;

			    Fields: IDatasetInstanceFields;


			    Sub TESTFormOnCreate(Sender: Object; Args: IEventArgs);

			    Begin


			        //Открытие таблицы и получение доступа к кешу с записями

			        MB := MetabaseClass.Active;

			        TableInst := MB.ItemById("TIMAGES").Open(Null) As IDatasetInstance;

			        Cache := TableInst.OpenCached;

			        Fields := Cache.Fields;

			    End Sub TESTFormOnCreate;


			    Sub TESTFormOnClose(Sender: Object; Args: IEventArgs);

			    Begin

			        Cache.Close;

			        TableInst.Close;

			    End Sub TESTFormOnClose;


			    Sub BPriorOnClick(Sender: Object; Args: IMouseEventArgs);

			    Begin

			        If Not Cache.Bof Then

			            Cache.Prior;

			            LoadRecord;

			        End If;

			        Debug.WriteLine(Cache.RecNo);

			    End Sub BPriorOnClick;


			    Sub BNextOnClick(Sender: Object; Args: IMouseEventArgs);

			    Begin

			        If Not Cache.Eof Then

			            Cache.Next;

			            LoadRecord;

			        End If;

			        Debug.WriteLine(Cache.RecNo);

			    End Sub BNextOnClick;


			    Sub BAddOnClick(Sender: Object; Args: IMouseEventArgs);

			    Var

			        Rep: IPrxReport;

			        RepStream: IMemoryStream;

			    Begin

			        If OpenReportDlg.Execute(Self) Then


			            //Создание новой записи

			            Cache.Append;

			            RepStream := New MemoryStream.Create;

			            Rep := OpenReportDlg.Object.Bind As IPrxReport;

			            Rep.SaveToStream(RepStream, PrxReportSaveMode.Full);

			            //Установка значений полей

			            Fields.FindById("IMG_NAME").Value := OpenReportDlg.Object.Id;

			            Fields.FindById("IMG").Value := RepStream;

			            //Сохранение изменений

			            Cache.Post;

			            //Загрузка значений полей в компоненты

			            LoadRecord;

			            Dispose RepStream;

			        End If;

			    End Sub BAddOnClick;


			    Sub LoadRecord;

			    Var

			        RepStream: IIOStream;

			        CrInfo: IMetabaseObjectCreateInfo;

			        Rep: IPrxReport;

			    Begin

			        ImageName.Text := Fields.FindById("IMG_NAME").Value;

			        RepStream := IOStream.FromVariant(Fields.FindById("IMG").Value);

			        //Создание временного рег.отчета, в который будет загружен отчет из таблицы

			        CrInfo := MB.CreateCreateInfo;

			        CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_PROCEDURALREPORT;

			        Rep := MB.CreateObject(CrInfo).Edit As IPrxReport;

			        RepStream.Position := 0;

			        Rep.LoadFromStream(RepStream);

			        //Вывод рег.отчета в компонент на форму

			        UiReport1.Active := True;

			        UiReport1.Instance := Rep As IPrxReport;

			        Dispose RepStream;

			    End Sub LoadRecord;

			End Class TESTForm;


См. также:


[База
 знаний разработчиков](../KnowledgeBase_Intro.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
