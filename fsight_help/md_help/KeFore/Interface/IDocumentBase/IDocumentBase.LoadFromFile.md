# IDocumentBase.LoadFromFile

IDocumentBase.LoadFromFile
-


# IDocumentBase.LoadFromFile


## Синтаксис


LoadFromFile(FileName: String);


## Параметры


FileName. Путь и наименование
 файла, который необходимо загрузить в документ.


## Описание


Метод LoadFromFile осуществляет
 загрузку файла, передаваемого посредством параметра FileName,
 в документ.


## Комментарии


Данный метод автоматически сохраняет загруженный файл в базе данных
 до вызова метода [IMetabaseObject.Save](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.Save.htm).


## Пример


Для выполнения примера предполагается наличие формы с кнопкой с наименованием
 «Button1», файла «Image_1.jpg», расположенного в корневом каталоге диска
 С, и объекта репозитория с идентификатором «IMAGE».


			    Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

    Var

        MB: IMetabase;

        Doc: IDocument;

    Begin

        MB := MetabaseClass.Active;

        Doc := MB.ItemById("IMAGE").Edit As IDocument;

        Doc.LoadFromFile("C:\Image_1.jpg");

    End Sub Button1OnClick;


После выполнения примера и после нажатия кнопки в объект репозитория
 «IMAGE» будет загружен файл «Image_1.jpg».


См. также:


[IDocumentBase](IDocumentBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
