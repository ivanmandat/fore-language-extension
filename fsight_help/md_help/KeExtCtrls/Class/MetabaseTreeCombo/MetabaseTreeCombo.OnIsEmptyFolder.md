# MetabaseTreeCombo.OnIsEmptyFolder

MetabaseTreeCombo.OnIsEmptyFolder
-


# MetabaseTreeCombo.OnIsEmptyFolder


## Синтаксис


OnIsEmptyFolder(Sender: Object; Args: [IMetabaseTreeNodeSpecialEventArgs](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnIsEmptyFolder предназначено
 для установки признака пустой папки.


## Комментарии


При изменении для компонента значения свойства [IMetabaseTreeCombo.ShowEmptyFolders](../../Interface/IMetabaseTreeCombo/IMetabaseTreeCombo.ShowEmptyFolders.htm)
 происходит скрытие/отображение пустых папок. При этом для каждой папки,
 а также для элементов, которым в событии [MetabaseTreeCombo.OnIsFolderElem](MetabaseTreeCombo.OnIsFolderElem.htm)
 был выставлен признак папки, будет сгенерировано событие OnIsEmptyFolder.
 В свойстве [IMetabaseTreeNodeSpecialEventArgs.Node](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Node.htm)
 аргумента события можно получить папку, для которой сгенерировано текущее
 событие.


Если осуществляется скрытие пустых папок (свойству [IMetabaseTreeCombo.ShowEmptyFolders](../../Interface/IMetabaseTreeCombo/IMetabaseTreeCombo.ShowEmptyFolders.htm)
 было установлено значения False),
 то с помощью свойства [IMetabaseTreeNodeSpecialEventArgs.Special](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Special.htm)
 аргумента события можно указать, является ли папка [IMetabaseTreeNodeSpecialEventArgs.Node](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Node.htm)
 пустой (папка будет скрыта из дерева) или непустой (не будет скрыта из
 дерева). При установке свойству [IMetabaseTreeNodeSpecialEventArgs.Special](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Special.htm)
 значения True папка будет отмечена
 как пустая, при установке значения False
 - папка будет помечена как не пустая.


См. также:


[MetabaseTreeCombo](MetabaseTreeCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
