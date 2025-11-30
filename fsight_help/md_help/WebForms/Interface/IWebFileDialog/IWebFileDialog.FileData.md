# IWebFileDialog.FileData

IWebFileDialog.FileData
-


# IWebFileDialog.FileData


## Синтаксис


FileData: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm);


## Описание


Свойство FileData определяет
 поток, связанный с открываемым/сохраняемым файлом.


## Комментарии


При работе с компонентом [FileOpenDialog](UiDevEnv.chm::/Web_components/FileOpenDialog.htm)
 в свойстве FileData будет доступен
 поток, связанный с файлом, который был выбран после инициализации диалога
 и нажатия кнопки Открыть.


При работе с компонентом [FileSaveDialog](UiDevEnv.chm::/Web_components/FileSaveDialog.htm)
 в свойстве FileData необходимо
 задать поток, связанный с файлом, до инициализации диалога. После инициализации
 диалога и нажатия кнопки Сохранить файл будет сохранён средствами браузера.


Открываемый/сохраняемый файла не должен превышать размер в 1 гигабайт.


## Пример


Использование свойства приведено в примере для [IWebFileDialog.Execute](IWebFileDialog.Execute.htm).


См. также:


[IWebFileDialog](IWebFileDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
