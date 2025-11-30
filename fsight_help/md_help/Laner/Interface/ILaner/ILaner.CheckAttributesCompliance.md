# ILaner.CheckAttributesCompliance

ILaner.CheckAttributesCompliance
-


# ILaner.CheckAttributesCompliance


## Синтаксис


CheckAttributesCompliance: Boolean;


## Описание


Метод CheckAttributesCompliance
 проверяет соответствие состава атрибутов рабочей книги и родительской
 базы данных временных рядов.


## Комментарии


Допустимые значения:


	- True.
	 Состав атрибутов рабочей книги соответствует родительской базе данных
	 временных рядов;


	- False.
	 Состав атрибутов рабочей книги не соответствует родительской базе
	 данных временных рядов.


Соответствие атрибутов базы данных временных рядов составу атрибутов
 рядов рабочей книги проверяется по количеству, типу, ключам и идентификаторам
 атрибутов.


Для синхронизации состава атрибутов используйте метод [ILaner.RefreshAttributesStructure](ILaner.RefreshAttributesStructure.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов с идентификатором «OBJ_RUBRICATOR».


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Cubes, Laner, Metabase.


	    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	    Var

	        ErAn: IEaxAnalyzer;

	        Laner: ILaner;

	        Mb: IMetabase;

	        RubDescr: IMetabaseObjectDescriptor;

	    Begin

	        ErAn := UiErAnalyzer1.ErAnalyzer;

	        Laner := ErAn.Laner;

	        text := Laner.CheckAttributesCompliance.ToString;

	        If Not Laner.CheckAttributesCompliance Then

	            Mb := MetabaseClass.Active;

	            RubDescr := Mb.ItemById("OBJ_RUBRICATOR");

	            Laner.RubricatorInstance := RubDescr.Open(Null) As IRubricatorInstance;

	        Laner.RefreshAttributesStructure;

	        End If;

	    End Sub Button1OnClick;


Если состав атрибутов рядов рабочей книги и родительской базы данных
 временных рядов отличается, то он будет синхронизирован после выполнения
 примера.


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
