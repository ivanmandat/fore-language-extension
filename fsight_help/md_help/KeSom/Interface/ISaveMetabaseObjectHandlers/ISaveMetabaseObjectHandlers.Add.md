# ISaveMetabaseObjectHandlers.Add

ISaveMetabaseObjectHandlers.Add
-


# ISaveMetabaseObjectHandlers.Add


## Синтаксис


Add(ClassId: [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm)):
 [ISaveMetabaseObjectHandler](../ISaveMetabaseObjectHandler/ISaveMetabaseObjectHandler.htm);


## Параметры


ClassId. Класс объектов, для
 которых добавляется обработчик события.


## Описание


Метод Add для указанного класса
 объектов создаёт обработчик событий, наступающих при изменении метаданных
 объекта.


## Комментарии


В качестве значения параметра ClassId
 указывается один из элементов перечисления [MetabaseObjectClass](../../Enums/MetabaseObjectClass.htm).
 Если обработчик событий задаётся для [расширений
 продукта «Форсайт. Аналитическая платформа»](Setup.chm::/Extensions/install_or_update_extensions.htm),
 то необходимый класс объекта можно получить в коллекции [IMetabaseCustomExtender.Classes](../IMetabaseCustomExtender/IMetabaseCustomExtender.Classes.htm)
 в свойстве [IMetabaseCustomClass.ClassId](../IMetabaseCustomClass/IMetabaseCustomClass.ClassId.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие модуля с
 идентификатором M_HANDLERS. В модуле реализован класс CSaveTableLog, который
 содержит обработчики событий.


[![](../../opened.gif)![](../../closed.gif)Код модуля
 M_HANDLERS](javascript:TextPopup(this))


		Class CSaveTableLog: Object

		    Sub OnBeforeSave(AfterEdit: IMetabaseObject; BeforeSave: IMetabaseObject);

		    Begin

		        Debug.WriteLine("OnBeforeSave: " + AfterEdit.Name + '(' + AfterEdit.Id + ") " + AfterEdit.ClassId.ToString);

		    End Sub OnBeforeSave;


		    Sub OnAfterSave(AfterSave: IMetabaseObject; Error: IException);

		    Begin

		        Debug.WriteLine("OnAfterSave: " + AfterSave.Name + '(' + AfterSave.Id + ")");

		        If Not IsNull(Error) Then

		            Debug.WriteLine(Error.Message);

		        End If;

		    End Sub OnAfterSave;

		End Class CSaveTableLog;


Добавьте ссылку на системную сборку Metabase.


	Sub AddHandler;

	Var

	    Mb: IMetabase;

	    SpecObj: ISpecialObjects;

	    ObjectHandlers: ISaveMetabaseObjectHandlers;

	    ObjectHandler: ISaveMetabaseObjectHandler;

	Begin

	    Mb := MetabaseClass.Active;

	    SpecObj := Mb.SpecialObjects(True);

	    ObjectHandlers := SpecObj.SaveMetabaseObjectHandlers;

	    ObjectHandler := ObjectHandlers.Add(MetabaseObjectClass.KE_CLASS_TABLE);

	    ObjectHandler.Assembly := Mb.ItemById("M_HANDLERS");

	    ObjectHandler.Class_ := "CSaveTableLog";

	    (SpecObj As IMetabaseObject).Save;

	End Sub AddHandler;


При выполнении примера для таблиц в репозитории будет создан обработчик
 событий.


См. также:


[ISaveMetabaseObjectHandlers](ISaveMetabaseObjectHandlers.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
