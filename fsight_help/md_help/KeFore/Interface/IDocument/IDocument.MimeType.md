# IDocument.MimeType

IDocument.MimeType
-


# IDocument.MimeType


## Синтаксис


MimeType: String;


## Описание


Свойство MimeType определяет
 тип содержимого, хранящегося в документе.


## Комментарии


В данном свойстве хранится тип MIME, сопоставленный с расширением загруженного
 файла. Типы MIME определяют способы, с помощью которых приложение будет
 обрабатывать двоичные данные. Свойство MimeType
 должно задаваться в формате «приложение/тип»,
 где приложение представляет приложение
 или класс приложений (таких, как видео), а тип
 представляет уникальный тип MIME. Косая черта обязательна.


MIME типы, сопоставленные какому-либо расширению, можно посмотреть в
 реестре в ветке «HKEY_CLASSES_ROOT\.***»
 в параметре «Content Type». Информация
 о MIME типах, зарегистрированных на компьютере, хранится в ветке реестра
 «HKEY_CLASSES_ROOT\MIME\Database\Content
 Type».


Примечание.
 Более подробное описание о типах MIME и их использование представлено
 в MSDN.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента ImageBox
 с наименованием «ImageBox1» и объекта репозитория Документ с идентификатором
 "Document_1".


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    MB: IMetabase;

	    Doc: IDocument;

	Begin

	    MB := MetabaseClass.Active;

	    Doc := MB.ItemById("Document_1").Bind As IDocument;

	    If Doc.MimeType.IndexOf("image") <> -1 Then

	        ImageBox1.LoadImageFromStream(Doc.GetAsStream);

	    End If;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку, если в документе содержится
 какое-либо графическое изображение, то оно будет загружено в компонент
 "ImageBox1".


См. также:


[IDocument](IDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
