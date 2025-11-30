# ICachedDatasetLookup.Fields

ICachedDatasetLookup.Fields
-


# ICachedDatasetLookup.Fields


## Синтаксис


Fields: [IDatasetInstanceFields](../IDatasetInstanceFields/IDatasetInstanceFields.htm);


## Описание


Свойство Fields возвращает коллекцию
 полей, по которым будет осуществляться поиск.


## Пример


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


После выполнения примера при нажатии на кнопку будет осуществлен поиск
 по кешу таблицы, установленной в качестве источника данных для компонента
 "UiTable1". Поиск осуществляется по двум полям таблицы - "Field"
 и "Field1". Искомые данные содержатся в компонентах "EditBox1"
 и "EditBox2". В случае удачного поиска в переменной "s"
 будет содержаться текущее значений поля "Num1" таблицы, иначе
 "Not found".


См.также:


[ICachedDatasetLookup](ICachedDatasetLookup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
