# FileUpload.FileUploaded

FileUpload.FileUploaded
-


# FileUpload.FileUploaded


## Синтаксис


FileUploaded: function (sender,args)


## Параметры


sender. Источник события;


args. Информация о событии


## Описание


Событие FileUploaded наступает после загрузки файла.


## Комментарии


Событие наступает после вызова метода [FileUpload.send](FileUpload.send.htm).


При загрузке файлов на сервера, отличные от домена страницы, на которой расположен компонент, невозможна проверка результата выполнения метода [send](FileUpload.send.htm), и, как следствие, событие FileUploaded не генерируется.


## Пример


Пример использования события приведен в описании конструктора [FileUpload](Constructor_FileUpload.htm).


См. также:


[FileUpload](FileUpload.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
