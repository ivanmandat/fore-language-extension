# ILanerContext.LoadFromStream

ILanerContext.LoadFromStream
-


# ILanerContext.LoadFromStream


## Синтаксис


LoadFromStream(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток.


## Описание


Метод LoadFromStream загружает
 контекст из указанного потока.


## Комментарии


Для выгрузки контекста в поток используйте метод [ILanerContext.SaveToStream](ILanerContext.SaveToStream.htm).


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


В репозитории должен присутствовать документ с идентификатором «OBJ_CONTEXT»,
 содержащий сохраненный контекст.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Fore, Forms,
 Io, Laner, Metabase, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Mb: IMetabase;

	    pContext: ILanerContext;

	    ContextObject, LanerObject: IMetabaseObjectDescriptor;

	    Stream: IIOStream;

	    Laner: ILaner;

	    Doc: IDocument;

	    MemStream: IMemoryStream;

	Begin

	    Mb := MetabaseClass.Active;

	    // Создание контекста

	    pContext := New LanerContext.Create;

	    // Загрузка контекста из потока

	    ContextObject := Mb.ItemById("OBJ_CONTEXT");

	    Doc := ContextObject.Edit As IDocument;

	    Stream := Doc.GetAsStream;

	    pContext.LoadFromStream(Stream);

	    // Начало загрузки рабочих книг в контекст

	    pContext.BeginLoad;

	    // Загрузка 1-й рабочей книги

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    If Not Laner.IsInContext Then

	        pContext.Register(Laner);

	    End If;

	    // Загрузка рабочих книг, от которых зависит 1-я книга

	    For Each LanerObject In Laner.Dependencies Do

	        Laner := LanerObject.Bind As ILaner;

	        If Not Laner.IsInContext Then

	            pContext.Register(Laner);

	        End If;

	    End For;

	    // Загрузка рабочих книг, которые зависят от 1-й книги

	    For Each LanerObject In Laner.Dependents Do

	        Laner := LanerObject.Bind As ILaner;

	        If Not Laner.IsInContext Then

	            pContext.Register(Laner);

	        End If;

	    End For;

	    // Завершение загрузки рабочих книг в контекст

	    pContext.EndLoad;

	    // Сохранение контекста в поток

	    MemStream := New MemoryStream.Create;

	    pContext.SaveToStream(MemStream);

	    Doc.LoadFromStream(MemStream);

	    (Doc As IMetabaseObject).Save;

	End Sub Button1OnClick;


После выполнения примера контекст будет загружен из документа «OBJ_CONTEXT».
 Затем в контекст будет добавлена рабочая книга, а также все зависимые
 книги и книги, от которых она зависит. Полученный контекст будет сохранен
 в документ «OBJ_CONTEXT».


См. также:


[ILanerContext](ILanerContext.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
