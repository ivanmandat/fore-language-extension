# MetabaseTreeCombo.OnIsDynamicElem

MetabaseTreeCombo.OnIsDynamicElem
-


# MetabaseTreeCombo.OnIsDynamicElem


## Синтаксис


OnIsDynamicElem(Sender: Object; Args: [IMetabaseTreeNodeSpecialEventArgs](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnIsDynamicElem предназначено
 для установки признака динамического построения дерева дочерних элементов
 папок.


## Комментарии


Событие наступает во время построения дерева для каждой папки, а также
 для элементов, которым в событии [MetabaseTreeCombo.OnIsFolderElem](MetabaseTreeCombo.OnIsFolderElem.htm)
 был выставлен признак папки.


В свойстве [IMetabaseTreeNodeSpecialEventArgs.Node](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Node.htm)
 аргумента события можно получить папку, для которой сгенерировано событие.
 По умолчанию в свойстве [IMetabaseTreeNodeSpecialEventArgs.Special](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Special.htm)
 аргумента события передаётся значение False,
 при этом дочерние элементы для [IMetabaseTreeNodeSpecialEventArgs.Node](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Node.htm)
 будут отстроены немедленно. Если в свойстве [IMetabaseTreeNodeSpecialEventArgs.Special](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Special.htm)
 установить значение True, то дерево
 дочерних элементов для [IMetabaseTreeNodeSpecialEventArgs.Node](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Node.htm)
 отстроено не будет. Дочерние элементы будут отстраиваться динамически,
 непосредственно при разворачивании иерархии элементов.


Примечание.
 Событие актуально, если свойству [IMetabaseTreeCombo.DelayedFill](../../Interface/IMetabaseTreeCombo/IMetabaseTreeCombo.DelayedFill.htm)
 установлено значение False.


См. также:


[MetabaseTreeCombo](MetabaseTreeCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
