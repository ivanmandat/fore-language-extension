# FileUpload.FileInputChanged

FileUpload.FileInputChanged
-


# FileUpload.FileInputChanged


## Синтаксис


FileInputChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии


## Описание


Событие FileInputChanged наступает при выборе файла, который будет загружен.


## Пример


Для выполнения примера создайте компонент [FileUpload](../../Components/FileUpload/FileUpload.htm) с наименованием «fileUpload» (см.«[Конструктор FileUpload](Constructor_FileUpload.htm)»).


fileUpload.FileInputChanged.add(function (sender, args)


{


    alert(fileUpload.getFileName());


});


После выполнения примера при выборе файла, который будет загружен, на экран будет выводиться сообщение с именем последнего загруженного файла.


См. также:


[FileUpload](FileUpload.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
