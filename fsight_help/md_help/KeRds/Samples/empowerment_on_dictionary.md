# Расширение возможностей справочника НСИ

Расширение возможностей справочника НСИ
-


# Расширение возможностей справочника НСИ


При работе в навигаторе объектов со справочниками НСИ могут быть созданы
 атрибуты с типами данных Строковый, Целый, Вещественный, ДатаВремя, Дата,
 Логический и Длинный текст. Указанные типы покрывают основные потребности
 для хранения значений, которые пользователь сможет визуально увидеть и,
 при необходимости, отредактировать. Если с каждым элементом в справочнике
 должны храниться какие-либо более сложные структуры, например, файлы,
 изображения или что-либо ещё, то потребуется доработка структуры справочника
 на прикладном уровне.


В основе каждого справочника НСИ лежит таблица, атрибуты справочника
 связаны с полями таблицы. Таблицы поддерживают более широкий набор типов
 данных, которые могут иметь поля. Из прикладного кода в справочник НСИ
 может быть добавлен атрибут с типом [DbDataType.Blob](Dal.chm::/Enums/DbDataType.htm).
 При этом в таблице соответствующее поле будет создано с типом данных -
 Двоичный. Поля с типом данных Двоичный относятся к пользовательским типам
 данных, работа с ними осуществляется через потоки. Более подробно описание
 представлено в статье «[Работа
 с полями, имеющими пользовательский тип данных](KnowledgeBase.chm::/01_Fore/KnowledgeBase_KB000031.htm)».


Рассмотрим пример работы с двоичными данными через атрибуты справочника
 НСИ. Для выполнения всех следующих примеров добавьте ссылки на системные
 сборки: IO, Metabase, Rds. Процедура для создания атрибута с двоичным
 типом данных в структуре справочника НСИ:


	/// <summary>

	/// Добавление в справочник НСИ атрибута с двоичным типом данных

	/// </summary>

	/// <param name="RdsId">Идентификатор справочника НСИ в репозитории</param>

	/// <param name="AttrId">Идентификатор создаваемого атрибута для хранения двоичных данных</param>

	Sub AddBlobAttributeInRds(RdsId: String; AttrId: String);

	Var

	    Mb: IMetabase;

	    RdsDict: IRdsDictionary;

	    Attrs: IRdsAttributes;

	    Attr: IRdsAttribute;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открытие справочника на редактирование

	    RdsDict := Mb.ItemById(RdsId).Edit As IRdsDictionary;

	    Attrs := RdsDict.Attributes;

	    If Attrs.FindById(AttrId) <> Null Then

	        //Если атрибут уже имеется, то не добавляем новый

	        Debug.WriteLine("Атрибут с идентификатором " + AttrId + " уже имеется в справочнике НСИ");

	        Return;

	    End If;

	    // Добавление атрибута

	    Attr := Attrs.Add;

	    Attr.Id := AttrId;

	    Attr.Name := AttrId;

	    Attr.DataType := DbDataType.Blob;

	    // Сохранение изменений

	    (RdsDict As IMetabaseObject).Save;

	    Debug.WriteLine("В справочнике НСИ создан атрибут с идентификатором " + AttrId);

	End Sub AddBlobAttributeInRds;


В качестве входных параметров передаются идентификатор справочника НСИ
 в репозитории и идентификатор создаваемого атрибута. Если атрибут с указанным
 идентификатором уже имеется в справочнике, то процедура завершится без
 выполнения каких-либо действий.


В качестве значения атрибута с двоичным типом данных необходимо указать
 поток. Поток может быть связан с файлом или создан и наполнен данными
 в памяти компьютера. Базовым интерфейсом для работы с потоками является
 интерфейс [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm),
 который располагается в сборке IO.


Следующая функция создаёт в справочнике НСИ новый элемент, заполняет
 для него наименование и значение атрибута с двоичным типом данных. Идентификатор
 справочника, идентификатор двоичного атрибута и полный путь к файлу, который
 будет сохранён в двоичный атрибут, передаются в качестве входных параметров.
 Результатом функции является ключ созданного элемента:


	/// <summary>

	/// Добавление в справочник НСИ нового элемента и запись файла в качестве значения для

	/// атрибута с двоичным типом данных

	/// </summary>

	/// <param name="RdsId">Идентификатор справочника НСИ в репозитории</param>

	/// <param name="AttrId">Идентификатор атрибута, имеющего двоичный тип данных</param>

	/// <param name="FilePath">Полный путь и наименование файла, который будет загружен в качестве значения двоичного атрибута</param>

	/// <returns>Ключ нового элемента, созданного в справочнике НСИ</returns>

	Function SaveFileInBlobAttribute(RdsId: String; AttrId: String; FilePath: String): Integer;

	Var

	    Mb: IMetabase;

	    DictInst: IRdsDictionaryInstance;

	    Data: IRdsDictionaryElementData;

	    Attrs: IRdsAttributesInstance;

	    Stream: IFileStream;

	    NewElementKey: Integer;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открытие справочника НСИ

	    DictInst := Mb.ItemById(RdsId).Open(Null) As IRdsDictionaryInstance;

	    Attrs := DictInst.Attributes;

	    // Данные атрибутов для создания нового элемента

	    Data := DictInst.CreateElementData;

	    // В качестве наименования элемента укажим путь и наименование файла

	    Data.Attribute(Attrs.FindById("NAME").Key) := FilePath;

	    // Создание потока, связанного с файлом

	    Stream := New FileStream.Create(FilePath, FileOpenMode.Read, FileShare.DenyNone);

	    Stream.Position := 0

	    // Указание потока в качестве значения для двоичного атрибута

	    Data.Attribute(Attrs.FindById(AttrId).Key) := Stream;

	    // Добавление нового элемента в корень справочника НСИ

	    // Ключ нового элемента будет результатом работы функции

	    NewElementKey := DictInst.Insert(-2, data);

	    Dispose Stream;

	    Return NewElementKey;

	End Function SaveFileInBlobAttribute;


В визуальном интерфейсе платформы атрибуты, имеющие двоичный тип данных,
 не отображаются у элементов справочника. Значения таких атрибутов напрямую
 не доступны пользователю. Также как и запись двоичного атрибута, чтение
 осуществляется в поток. Для чтения значения предназначен статический метод
 [IIOStreamClass.FromVariant](ModIo.chm::/Interface/IIOStreamClass/IIOStreamClass.FromVariant.htm).


Следующая процедура осуществляет считывание файла из двоичного атрибута
 указанного элемента и последующее сохранение полученного файла в новый
 файл на диске. Идентификатор справочника, идентификатор двоичного атрибута,
 ключ элемента и полный путь и наименование нового файла передаются в качестве
 входных параметров.


	/// <summary>

	/// Чтение файла из двоичного атрибута элемента и сохранение в новый файл на диске

	/// </summary>

	/// <param name="RdsId">Идентификатор справочника НСИ в репозитории</param>

	/// <param name="AttrId">Идентификатор атрибута, имеющего двоичный тип данных</param>

	/// <param name="ElementKey">Ключ элемента, из атрибута которого осуществляется чтение файла</param>

	/// <param name="NewFilePath">Путь и наименование нового файла, в который будет сохранён файл из двоичного
	 атрибута</param>

	Sub LoadFileFromBlobAttribute(RdsId: String; AttrId: String; ElementKey: Integer; NewFilePath: String);

	Var

	    Mb: IMetabase;

	    DictInst: IRdsDictionaryInstance;

	    Data: IRdsDictionaryElementData;

	    NewFile: IFileStream;

	    Stream: IIOStream;

	Begin

	    Mb := MetabaseClass.Active;

	    // Открытие справочника НСИ

	    DictInst := Mb.ItemById(RdsId).Open(Null) As IRdsDictionaryInstance;

	    // Для загрузки значений пользовательских атрибутов нужно установить FetchAll=True

	    DictInst.FetchAll := True;

	    // Получение данных атрибутов элемента с указанным ключом

	    Data := DictInst.Elements.Data(ElementKey);

	    // Чтение файла из значения атрибута

	    Stream := IOStream.FromVariant(Data.Attribute(DictInst.Attributes.FindById(AttrId).Key));

	    Stream.Position := 0;

	    // Создание нового файла, в который будет сохранён файл из атрибута элемента

	    NewFile := New FileStream.Create(NewFilePath, FileOpenMode.Create, FileShare.DenyNone);

	    NewFile.Position := 0;

	    NewFile.CopyFrom(Stream, Stream.Size);

	    // Освобождение потоков. При этом будет сохранён новый файл и освобождён доступ к нему

	    Dispose Stream;

	    Dispose NewFile;

	End Sub LoadFileFromBlobAttribute;


Пример использования всех указанных выше процедур/функций. Для выполнения
 примера предполагается наличие в репозитории справочника НСИ с идентификатором
 RDS_DICT. В файловой системе должен содержаться файл d:\Work\1.dat.


	Sub UserProc;

	Const

	    RdsId = "RDS_DICT";

	    BlobAttrId = "DATA_ATTR";

	Var

	    NewElementKey: Integer;

	Begin

	    // Добавление атрибута в справочник НСИ

	    AddBlobAttributeInRds(RdsId, BlobAttrId);

	    // Создание элемента и загрузка файла в качестве значения двоичного атрибута

	    NewElementKey := SaveFileInBlobAttribute(RdsId, BlobAttrId, "d:\Work\1.dat");

	    // Чтение значения двоичного атрибута и сохранения содержимого в новый файл

	    LoadFileFromBlobAttribute(RdsId, BlobAttrId, NewElementKey, "d:\Work\new.dat");

	End Sub UserProc


См. также:


[Примеры](KeRds_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
