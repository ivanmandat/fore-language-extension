# ICachedDatasetLookup.Locate

ICachedDatasetLookup.Locate
-


# ICachedDatasetLookup.Locate


## Синтаксис


Locate: Boolean;


## Описание


Метод Locate осуществляет поиск
 и возвращает признак удачного поиска в кеше источника данных.


## Комментарии


В случае удачного поиска курсор в кеше устанавливается на найденную
 запись и метод вернет значение True.
 Для получения значений полей используется метод [Lookup](ICachedDatasetLookup.Lookup.htm).
 В кеше возможен поиск только первой записи, содержащей искомые значения
 полей. Если в источнике более чем одной записи с искомыми значениями,
 то рекомендуется настроить [фильтрацию
 кеша](../ICachedDataset/ICachedDataset.Filter.htm).


## Пример


Для выполнения примера предполагается наличие формы и расположенных
 на ней следующих компонентов:


	- Кнопки с наименованием «Button1»;


	- Двух редакторов текста с наименованиями «EditBox1» и «EditBox2»;


	- UiTable с наименованием «UiTable1». К «UiTable1» подключена
	 таблица, имеющая в своей структуре поля с идентификаторами «Field»,
	 «Field1» и «Num1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Cache: ICachedDataSet;

	    CacheField: IDatasetInstanceFields;

	    LookCache: ICachedDatasetLookup;

	    s: String;

	Begin

	    Cache := UiTable1.CachedDataset;

	    LookCache := Cache.CreateLookup("Field;Field1");

	    CacheField := LookCache.Fields;

	    CacheField.Item(0).Value := EditBox1.Text;

	    CacheField.Item(1).Value := EditBox2.Text;

	    If LookCache.Locate Then

	        s := LookCache.Lookup("Num1").Item(0).Value As String;

	    Else

	        s := "Not found";

	    End If;

	End Sub Button1OnClick;


При нажатии на кнопку будет осуществлен поиск по кешу таблицы, установленной
 в качестве источника данных для компонента «UiTable1». Поиск осуществляется
 по двум полям таблицы - «Field» и «Field1». Искомые данные содержатся
 в компонентах «EditBox1» и «EditBox2». В случае удачного поиска в переменной
 «s» будет содержаться текущее значений поля «Num1» таблицы, иначе - «Not
 found».


См.также:


[ICachedDatasetLookup](ICachedDatasetLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
