# MetabaseTreeList.OnIsFolderElem

MetabaseTreeList.OnIsFolderElem
-


# MetabaseTreeList.OnIsFolderElem


## Синтаксис


OnIsFolderElem(Sender: Object; Args: [IMetabaseTreeNodeSpecialEventArgs](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnIsFolderElem предназначено
 для установки признака папки у элементов, отображаемых в дереве компонента.


## Комментарии


Событие наступает во время построения дерева для каждого элемента, отображаемого
 в дереве.


В свойстве [Node](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Node.htm)
 аргумента события можно получить текущий элемент, для которого сгенерировано
 событие. Если в свойстве [Special](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Special.htm)
 аргумента события установить значение True,
 то для текущего элемента [Node](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Node.htm)
 будет установлен признак папки и будет отстроено дерево дочерних элементов.
 При этом для каждого дочернего элемента также будет сгенерировано событие
 OnIsFolderElem.


Событие актуально использовать для настройки возможности просмотра содержимого
 различных объектов-контейнеров.


Примечание.
 Необходимо учитывать значение свойства [ShowInternalObjects](../../Interface/IMetabaseTreeList/IMetabaseTreeList.ShowInternalObjects.htm),
 так как некоторые дочерние объекты, содержащиеся в объектах контейнерах,
 являются внутренними объектами и по умолчанию не отображаются.


## Пример


Для выполнения примера предполагается наличие формы и расположенного
 на ней компонента MetabaseTreeList. Компонент настроен на отображение
 данных какой-либо папки репозитория. Для компонента в качестве обработчика
 события OnIsFolderElem установлена
 данная процедура.


	Sub MetabaseTreeList1OnIsFolderElem(Sender: Object; Args: IMetabaseTreeNodeSpecialEventArgs);

	Begin

	    If Args.Node.ObjectDescriptor.ClassId = MetabaseObjectClass.KE_CLASS_MODELSPACE Then

	        Args.Special := True;

	    End If;

	End Sub MetabaseTreeList1OnIsFolderElem;


После запуска формы в дереве элементов компонента контейнеры моделирования
 будут представлены в виде папок с возможностью просмотра дочерних объектов.


См. также:


[MetabaseTreeList](MetabaseTreeList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
