# IMetabaseObjectCopyInfo

IMetabaseObjectCopyInfo
-


# IMetabaseObjectCopyInfo


Сборка: Metabase;


## Описание


Интерфейс IMetabaseObjectCopyInfo
 содержит свойства, определяющие параметры копирования/перемещения объектов
 репозитория.


## Иерархия наследования


           IMetabaseObjectCopyInfo


## Комментарии


Копирование и перемещение объектов репозитория осуществляется с помощью
 методов [IMetabase.CopyObject](../IMetabase/IMetabase.CopyObject.htm)
 и [IMetabase.MoveObject](../IMetabase/IMetabase.MoveObject.htm)
 соответственно.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Assign](IMetabaseObjectCopyInfo.Assign.htm)


		 Свойство Assign определяет
		 признак создания копии объекта вместе с его источником данных.


		 ![](../../Property_Image.gif)
		 [Destination](IMetabaseObjectCopyInfo.Destination.htm)


		 Свойство Destination
		 определяет объект-контейнер, в который осуществляется копирование/перемещение.


		 ![](../../Property_Image.gif)
		 [Id](IMetabaseObjectCopyInfo.Id.htm)


		 Свойство Id определяет
		 идентификатор создаваемой копии объекта.


		 ![](../../Property_Image.gif)
		 [Name](IMetabaseObjectCopyInfo.Name.htm)


		 Свойство Name определяет
		 наименование создаваемой копии объекта.


		 ![](../../Property_Image.gif)
		 [NoSave](IMetabaseObjectCopyInfo.NoSave.htm)


		 Свойство NoSave определяет
		 признак сохранения копии объекта после копирования.


		 ![](../../Property_Image.gif)
		 [NoSaveEvent](IMetabaseObjectCopyInfo.NoSaveEvent.htm)


		 Свойство NoSaveEvent
		 определяет возможность отмены события [EventOnBeforeSaveReport](KeReport.chm::/Interface/IPrxReportUserEvents/IPrxReportUserEvents.EventOnBeforeSaveReport.htm)
		 при копировании регламентного отчета.


		 ![](../../Property_Image.gif)
		 [Source](IMetabaseObjectCopyInfo.Source.htm)


		 Свойство Source определяет
		 объект репозитория, который необходимо скопировать/переместить.


		 ![](../../Property_Image.gif)
		 [WithData](IMetabaseObjectCopyInfo.WithData.htm)


		 Свойство WithData определяет
		 признак копирования объекта вместе с данными.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
