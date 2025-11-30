# IAuditLog

IAuditLog
-


# IAuditLog


Сборка: Metabase;


## Описание


Интерфейс IAuditLog содержит
 свойства и методы протокола доступа (журнала событий) менеджера безопасности.


## Иерархия наследования


           IAuditLog


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Archival](IAuditLog.Archival.htm)
		 Свойство Archival возвращает
		 True, если текущий протокол
		 безопасности загружен из файла.


		 ![](../../Property_Image.gif)
		 [Filter](IAuditLog.Filter.htm)
		 Свойство Filter возвращает
		 фильтр протокола доступа.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Archive](IAuditLog.Archive.htm)
		 Метод Archive производит
		 архивирование протокола доступа в файл.


		 ![](../../Sub_Image.gif)
		 [ArchiveToDate](IAuditLog.ArchiveToDate.htm)
		 Метод ArchiveToDate
		 производит архивирование части протокола доступа в файл.


		 ![](../../Sub_Image.gif)
		 [CountLogons](IAuditLog.CountLogons.htm)
		 Метод CountLogons возвращает
		 количество записей в протоколе доступа о соединении с репозиторием.


		 ![](../../Sub_Image.gif)
		 [CountOperations](IAuditLog.CountOperations.htm)
		 Метод CountOperations
		 возвращает количество записей в протоколе доступа об операциях
		 в репозитории.


		 ![](../../Sub_Image.gif)
		 [OpenLogons](IAuditLog.OpenLogons.htm)
		 Метод OpenLogons возвращает
		 информацию о соединениях с репозиторием.


		 ![](../../Sub_Image.gif)
		 [OpenOperations](IAuditLog.OpenOperations.htm)
		 Метод OpenOperations
		 возвращает список операций, произведенных в репозитории, в линейном
		 виде.


		 ![](../../Sub_Image.gif)
		 [OpenOperationTree](IAuditLog.OpenOperationTree.htm)
		 Метод OpenOperationTree
		 возвращает список операций, произведенных в репозитории, представленный
		 в древовидном виде.


		 ![](../../Sub_Image.gif)
		 [OpenPlainLog](IAuditLog.OpenPlainLog.htm)
		 Метод OpenPlainLog
		 возвращает упрощённый вариант представления записей протокола
		 доступа в линейном виде.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
