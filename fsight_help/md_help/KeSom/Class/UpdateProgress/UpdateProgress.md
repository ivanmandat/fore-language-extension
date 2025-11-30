# UpdateProgress

UpdateProgress
-


# UpdateProgress


## Описание


Класс UpdateProgress реализует
 объект, используемый для отслеживания событий, возникающих при обновлении
 объектов репозитория из файлов.


## Методы, унаследованные от [IMetabaseUpdateProgress](../../Interface/IMetabaseUpdateProgress/IMetabaseUpdateProgress.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnAfterApplyCustomObject](../../Interface/IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnAfterApplyCustomObject.htm)
		 Метод OnAfterApplyCustomObject
		 реализует событие, возникающее после применения обновления пользовательского
		 объекта, но до его сохранения в репозиторий.


		 ![](../../Sub_Image.gif)
		 [OnAskConstraintsHandling](../../Interface/IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnAskConstraintsHandling.htm)
		 Метод OnAskConstraintsHandling
		 реализует событие, возникающее при необходимости обработать ограничение
		 целостности данных обновляемого объекта.


		 ![](../../Sub_Image.gif)
		 [OnAskReflectRights](../../Interface/IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnAskReflectRights.htm)
		 Метод OnAskReflectRights
		 реализует событие, возникающее перед обновлением прав на объекты.


		 ![](../../Sub_Image.gif)
		 [OnBeforeCustomObjectSaveToPef](../../Interface/IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnBeforeCustomObjectSaveToPef.htm)
		 Метод OnBeforeCustomObjectSaveToPef
		 реализует событие, возникающее перед сохранением пользовательского
		 объекта в pef-файл.


		 ![](../../Sub_Image.gif)
		 [OnContext](../../Interface/IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnContext.htm)
		 Метод OnContext
		 реализует событие, возникающее при обновлении с использованием
		 дополнительных настроек.


		 ![](../../Sub_Image.gif)
		 [OnError](../../Interface/IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnError.htm)
		 Метод OnError реализует
		 событие, происходящее при возникновении ошибки во время синхронизации
		 объекта репозитория с объектом в обновлении.


		 ![](../../Sub_Image.gif)
		 [OnNullLinks](../../Interface/IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnNullLinks.htm)
		 Метод OnNullLinksResolve
		 реализует событие, возникающее при наличии ссылок, которые отсутствуют
		 в репозитории назначения.


		 ![](../../Sub_Image.gif)
		 [OnProgress](../../Interface/IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnProgress.htm)
		 Метод OnProgress реализует
		 событие общего статуса процесса обновления/синхронизации.


		 ![](../../Sub_Image.gif)
		 [OnResolve](../../Interface/IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnResolve.htm)
		 Метод OnResolve реализует
		 событие, возникающее при наличии зависимостей обновления от объектов
		 репозитория-источника, которые отсутствуют в репозитории назначения.


		 ![](../../Sub_Image.gif)
		 [OnSkip](../../Interface/IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnSkip.htm)
		 Метод OnSkip
		 реализует событие пропуска элемента обновления при установке обновления.


См. также:


[Классы сборки Metabase](../KeSom_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
