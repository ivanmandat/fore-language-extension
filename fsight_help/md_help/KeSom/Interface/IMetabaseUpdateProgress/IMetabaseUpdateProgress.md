# IMetabaseUpdateProgress

IMetabaseUpdateProgress
-


# IMetabaseUpdateProgress


Сборка: Metabase;


## Описание


Интерфейс IMetabaseUpdateProgress
 содержит методы, реализующие события, возникающие во время обновления
 объектов в репозитории.


## Иерархия наследования


           IMetabaseUpdateProgress


## Комментарии


Интерфейс должен быть переопределён в пользовательском классе.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnAfterApplyCustomObject](IMetabaseUpdateProgress.OnAfterApplyCustomObject.htm)
		 Метод OnAfterApplyCustomObject
		 реализует событие, возникающее после применения обновления пользовательского
		 объекта, но до его сохранения в репозиторий.


		 ![](../../Sub_Image.gif)
		 [OnAskConstraintsHandling](IMetabaseUpdateProgress.OnAskConstraintsHandling.htm)
		 Метод OnAskConstraintsHandling
		 реализует событие, возникающее при необходимости обработать ограничение
		 целостности данных обновляемого объекта.


		 ![](../../Sub_Image.gif)
		 [OnAskReflectRights](IMetabaseUpdateProgress.OnAskReflectRights.htm)
		 Метод OnAskReflectRights
		 реализует событие, возникающее перед обновлением прав на объекты.


		 ![](../../Sub_Image.gif)
		 [OnBeforeCustomObjectSaveToPef](IMetabaseUpdateProgress.OnBeforeCustomObjectSaveToPef.htm)
		 Метод OnBeforeCustomObjectSaveToPef
		 реализует событие, возникающее перед сохранением пользовательского
		 объекта в pef-файл.


		 ![](../../Sub_Image.gif)
		 [OnContext](IMetabaseUpdateProgress.OnContext.htm)
		 Метод OnContext
		 реализует событие, возникающее при обновлении с использованием
		 дополнительных настроек.


		 ![](../../Sub_Image.gif)
		 [OnError](IMetabaseUpdateProgress.OnError.htm)
		 Метод OnError реализует
		 событие, происходящее при возникновении ошибки во время синхронизации
		 объекта репозитория с объектом в обновлении.


		 ![](../../Sub_Image.gif)
		 [OnNullLinks](IMetabaseUpdateProgress.OnNullLinks.htm)
		 Метод OnNullLinksResolve
		 реализует событие, возникающее при наличии ссылок, которые отсутствуют
		 в репозитории назначения.


		 ![](../../Sub_Image.gif)
		 [OnProgress](IMetabaseUpdateProgress.OnProgress.htm)
		 Метод OnProgress реализует
		 событие общего статуса процесса обновления/синхронизации.


		 ![](../../Sub_Image.gif)
		 [OnResolve](IMetabaseUpdateProgress.OnResolve.htm)
		 Метод OnResolve реализует
		 событие, возникающее при наличии зависимостей обновления от объектов
		 репозитория-источника, которые отсутствуют в репозитории назначения.


		 ![](../../Sub_Image.gif)
		 [OnSkip](IMetabaseUpdateProgress.OnSkip.htm)
		 Метод OnSkip
		 реализует событие пропуска элемента обновления при установке обновления.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
