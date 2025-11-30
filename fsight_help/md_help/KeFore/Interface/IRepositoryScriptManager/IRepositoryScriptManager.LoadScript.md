# IRepositoryScriptManager.LoadScript

IRepositoryScriptManager.LoadScript
-


# IRepositoryScriptManager.LoadScript


## Синтаксис


		LoadScript(Stream: [IIOStream](ModIo.chm::/Interface/IIOStream/IIOStream.htm));


## Параметры


Stream. Поток, содержащий скрипт
 для создания и обновления репозитория. Для работы с репозиторием необходимо
 в данный поток загрузить содержимое файла current.rm4, либо current_rds.rm4.


## Описание


Метод LoadScript загружает скрипт,
 используемый для осуществления [указанной
 операции](IRepositoryScriptManager.Operation.htm) над репозиторием.


## Комментарии


В зависимости от типа репозитория, указанного в свойстве [Repository](IRepositoryScriptManager.Repository.htm),
 в поток необходимо загружать содержимое различных файлов:


	- для репозитория - содержимое файла «current.rm4».


	- для репозитория НСИ - содержимое файла «current_rds.rm4».


## Пример


Пример использования приведён в описании свойства [IRepositoryScriptManager.Connection](IRepositoryScriptManager.Connection.htm).


См. также:


[IRepositoryScriptManager](IRepositoryScriptManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
