# ICachedDataset.CreateLookup

ICachedDataset.CreateLookup
-


# ICachedDataset.CreateLookup


## Синтаксис


CreateLookup(LookupFields: String): [ICachedDatasetLookup](../ICachedDatasetLookup/ICachedDatasetLookup.htm);


## Параметры


LookupFields - список
 полей, по значениям которых будет осуществляться поиск.


## Описание


Метод CreateLookup создает объект,
 осуществляющий поиск значений в кеше источника данных. Список полей передается
 посредством параметра LookupFields.
 Поля в списке разделяются знаком «;».


## Пример


	Sub UserProc;

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

	End Sub UserProc;


После выполнения примера при нажатии на кнопку будет осуществлен поиск
 по кешу таблицы, установленной в качестве источника данных для компонента
 «UiTable1». Поиск осуществляется по двум полям таблицы - «Field» и «Field1».
 Искомые данные содержатся в компонентах «EditBox1» и «EditBox2». В случае
 удачного поиска в переменной «s» будет содержаться текущее значений поля
 «Num1» таблицы, иначе «Not found».


См. также:


[ICachedDataset](ICachedDataset.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
