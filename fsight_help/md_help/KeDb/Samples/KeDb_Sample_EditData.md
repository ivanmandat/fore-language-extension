# Работа с кешем источника данных

Работа с кешем источника данных
-


# Работа с кешем источника данных


Для работы с данными реляционных источников данных предназначен интерфейс
 [IDatasetInstance](../Interface/IDatasetInstance/IDatasetInstance.htm).
 Свойства и методы данного интерфейса позволяют получить информацию о структуре
 источника, а также данные всех записей источника. Если возникает необходимость
 изменить какие-либо записи или добавить новые, то в этом случае используется
 кеш реляционного источника данных. Кеш источника представляет собой буфер
 в памяти компьютера, в котором содержатся записи, с которыми осуществляется
 работа в текущий момент. Для работы с кешем реляционного источника данных
 предназначен интерфейс [ICachedDataset](../Interface/ICachedDataset/ICachedDataset.htm).
 Для открытия кеша предназначен метод [OpenCached](../Interface/IDatasetInstance/IDatasetInstance.OpenCached.htm).
 В кеше доступна фильтрация и поиск записей, изменение существующих и создание
 новых записей.


После завершения работы с данными или кешем данных выполните метод [IDatasetInstance.Close](../Interface/IDatasetInstance/IDatasetInstance.Close.htm).


## Фильтрация данных


Для настройки фильтрации предназначены свойства [Filter](../Interface/ICachedDataset/ICachedDataset.Filter.htm)
 и [Filtered](../Interface/ICachedDataset/ICachedDataset.Filtered.htm)
 кеша источника данных.


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором Table_1. Данная таблица содержит поле ID, в котором
 хранятся числовые идентификаторы записей, а также какие-либо другие поля.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    Cache: ICachedDataset;

	    FieldsInst: IDatasetInstanceFields;

	    FieldInst: IDatasetInstanceField;

	Begin

	    MB := MetabaseClass.Active;

	    DSInst := MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    Cache := DSInst.OpenCached;

	    Cache.Filter.AsString := "(ID>=100)AND(ID<=1000)";

	    Cache.Filtered := True;

	    Cache.First;

	    While Not Cache.Eof Do

	        FieldsInst := Cache.Fields;

	        For Each FieldInst In FieldsInst Do

	            Debug.Write(FieldInst.Value + " ");

	        End For;

	        Debug.WriteLine("");

	        Cache.Next;

	    End While;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


При выполнении примера осуществляется открытие указанной таблицы репозитория.
 Для данных создается кеш, в котором настраивается фильтрация. Данные всех
 записей, удовлетворяющих установленному условию фильтрации, будут выведены
 в консоль среды разработки.


## Поиск данных


Для поиска записей в кеше используются свойства и методы интерфейса
 [ICachedDatasetLookup](../Interface/ICachedDatasetLookup/ICachedDatasetLookup.htm).
 Создание объекта поиска осуществляется при вызове метода [CreateLookup](../Interface/ICachedDataset/ICachedDataset.CreateLookup.htm).
 В кеше возможен поиск только первой записи, содержащей искомые значения
 полей. Если в источнике более чем одной записи с искомыми значениями,
 то рекомендуется настроить фильтрацию кеша.


Для выполнения примера предполагается наличие в репозитории таблицы
 с идентификатором Table_1. Данная таблица содержит поля ID и NAME, а также
 какие-либо другие поля.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    Cache: ICachedDataset;

	    CacheLookup: ICachedDatasetLookup;

	    SoughtFlds, FoundFlds: IDatasetInstanceFields;

	Begin

	    MB := MetabaseClass.Active;

	    DSInst := MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    Cache := DSInst.OpenCached;

	    //Создание объекта для поиска по значениям поля ID

	    CacheLookup := Cache.CreateLookup("ID");

	    SoughtFlds := CacheLookup.Fields;

	    //Указываем искомое значение

	    SoughtFlds.Item(0).Value := 100;

	    //Поиск записи

	    If CacheLookup.Locate Then

	        FoundFlds := CacheLookup.Lookup("NAME");

	        Debug.WriteLine(FoundFlds.Item(0).Value);

	    End If;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


При выполнении примера осуществляется открытие указанной таблицы репозитория.
 По данным таблицы будет осуществлен поиск записи, в которой значение поля
 «ID» равно указанному значению. В случае удачного поиска в консоль среды
 разработки будет выведено значение поля «NAME» найденной записи.


## Изменение данных


Для редактирования существующих, а также для удаления и создания новых
 записей в кеше предусмотрен ряд методов интерфейса [ICachedDataset](../Interface/ICachedDataset/ICachedDataset.htm):


	- [Append](../Interface/ICachedDataset/ICachedDataset.Append.htm)
	 - добавление новой записи в конец и переход к ее редактированию;


	- [Insert](../Interface/ICachedDataset/ICachedDataset.Insert.htm)
	 - добавление новой записи в текущей позиции и переход к ее редактированию;


	- [Delete](../Interface/ICachedDataset/ICachedDataset.Delete.htm)
	 - удаление текущей записи;


	- [Edit](../Interface/ICachedDataset/ICachedDataset.Edit.htm)
	 - открытие на редактирование текущей записи;


	- [Post](../Interface/ICachedDataset/ICachedDataset.Post.htm)
	 - сохранение внесенных изменений;


	- [Cancel](../Interface/ICachedDataset/ICachedDataset.Cancel.htm)
	 - отмена внесенных изменений и выход из режима редактирования;


	- [Truncate](../Interface/ICachedDataset/ICachedDataset.Truncate.htm)
	 - удаление всех записей.


Примечание.
 Данные методы доступны для использования, только если реляционный источник
 допускает редактирование записей.


Для выполнения примеров предполагается наличие в репозитории таблицы
 с идентификатором Table_1. Данная таблица содержит поля ID и NAME, а также
 какие-либо другие поля.


Пример 1:


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    Cache: ICachedDataset;

	    fID: IDatasetInstanceField;

	Begin

	    MB := MetabaseClass.Active;

	    DSInst := MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    Cache := DSInst.OpenCached;

	    While Not Cache.Eof Do

	        Cache.Edit;

	        fID := Cache.Fields.FindById("ID");

	        fID.Value := (fID.Value As Integer) + 1;

	        Cache.Post;

	        Cache.Next;

	    End While;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


При выполнении примера значения поля ID во всех записях будут увеличены
 на единицу.


Пример 2:


	Sub UserProc;

	Var

	    MB: IMetabase;

	    DSInst: IDatasetInstance;

	    Cache: ICachedDataset;

	    fID: IDatasetInstanceField;

	Begin

	    MB := MetabaseClass.Active;

	    DSInst := MB.ItemById("Table_1").Open(Null) As IDatasetInstance;

	    Cache := DSInst.OpenCached;

	    While Not Cache.Eof Do

	        fID := Cache.Fields.FindById("ID");

	        If ((fID.Value As Integer) Mod 2) = 0 Then

	            Cache.Delete

	        End If;

	        Cache.Next;

	    End While;

	    Cache.Close;

	    DSInst.Close;

	End Sub UserProc;


При выполнении примера из источника данных будут удалены все записи,
 в которых значение поля ID кратно двум.


См. также:


[Примеры](KeDb_Sample.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
