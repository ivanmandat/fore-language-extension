# FileUpload.send

FileUpload.send
-


# FileUpload.send


## Синтаксис


send (params)


## Параметры


params. Параметры отправки позволяющие задать данные для передачи методом GET. Задать параметры можно так: fileUpload.send('899','../build/').Если в [PostUrl](FileUpload.PostUrl.htm) указана ссылка http://localhost/samples/index.html, то метод send допишет к ней параметры, и итоговая ссылка будет выглядеть так: http://localhost/samples/ index.html?id=899&path=../build/.


## Описание


Метод send используется для отправки файла на сервер.


## Комментарии


После вызова метода наступает событие [FileUpload.FileUploaded](FileUpload.FileUploaded.htm).


## Пример


Пример использования метода приведен в описании конструктора [FileUpload](Constructor_FileUpload.htm).


См. также:


[FileUpload](FileUpload.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
