# IMetabaseTreeList.ShowInternalObjects

IMetabaseTreeList.ShowInternalObjects
-


# IMetabaseTreeList.ShowInternalObjects


## Синтаксис


ShowInternalObjects: Boolean;


## Описание


Свойство ShowInternalObjects
 определяет признак отображения внутренних объектов в дереве объектов репозитория.


## Комментарии


По умолчанию свойству установлено значение False,
 при этом внутренние объекты не отображаются. Если свойству установить
 значение True, то внутренние объекты
 будут отображаться в дереве объектов компонента.


Примечание.
 Многие внутренние объекты хранятся в объектах-контейнерах. Для настройки
 просмотра содержимого объектов-контейнеров используйте событие [OnIsFolderElem](../../Class/MetabaseTreeList/MetabaseTreeList.OnIsFolderElem.htm).


См. также:


[IMetabaseTreeList](IMetabaseTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
