# IMetabaseUpdateUserEvents

IMetabaseUpdateUserEvents
-


# IMetabaseUpdateUserEvents


## Описание


Интерфейс IMetabaseUpdateUserEvents содержит методы, реализующие события, возникающие во время обновления объектов в репозитории и используемые в модуле обновления.


## Комментарии


Интерфейс должен быть переопределен в пользовательском классе «CUpdateEvents». Применяется при создании [модуля обновления](UpdManager.chm::/CreateUpdate/Features/Admin_CreateUpdate_Features_Module.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnAskConstraintsHandling](IMetabaseUpdateUserEvents.OnAskConstraintsHandling.htm)
		 Метод OnAskConstraintsHandling
		 реализует событие, возникающее при необходимости обработать ограничение
		 целостности данных обновляемого объекта.


		 ![](../../Sub_Image.gif)
		 [OnAskReflectRights](IMetabaseUpdateUserEvents.OnAskReflectRights.htm)
		 Метод OnAskReflectRights
		 реализует событие, возникающее перед обновлением прав на объекты.


		 ![](../../Sub_Image.gif)
		 [OnBeforeApplyUpdate](IMetabaseUpdateUserEvents.OnBeforeApplyUpdate.htm)
		 Метод OnBeforeApplyUpdate
		 реализует событие, возникающее после подготовки объектов к обновлению.


		 ![](../../Sub_Image.gif)
		 [OnBeginUpdate](IMetabaseUpdateUserEvents.OnBeginUpdate.htm)
		 Метод OnBeginUpdate
		 реализует событие, возникающее перед применением обновления.


		 ![](../../Sub_Image.gif)
		 [OnEndUpdate](IMetabaseUpdateUserEvents.OnEndUpdate.htm)
		 Метод OnEndUpdate реализует
		 событие, возникающее после применения обновления.


		 ![](../../Sub_Image.gif)
		 [OnUpdateObject](IMetabaseUpdateUserEvents.OnUpdateObject.htm)
		 Метод OnUpdateObject
		 реализует событие, возникающее непосредственно перед обновлением
		 объекта репозитория.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm) |[Модуль обновления](UpdManager.chm::/CreateUpdate/Features/Admin_CreateUpdate_Features_Module.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
