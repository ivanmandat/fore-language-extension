# MetabaseTreeCombo.OnIsBrowseableElem

MetabaseTreeCombo.OnIsBrowseableElem
-


# MetabaseTreeCombo.OnIsBrowseableElem


## Синтаксис


OnIsBrowseableElem(Sender: Object; Args: [IMetabaseTreeNodeSpecialEventArgs](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnIsBrowseableElem предназначено
 для установки признака отображения элемента в дереве.


## Комментарии


Событие наступает во время построения дерева для каждого элемента, отображаемого
 в дереве, кроме папок и всех элементов, которым в событии [MetabaseTreeCombo.OnIsFolderElem](MetabaseTreeCombo.OnIsFolderElem.htm)
 был выставлен признак папки.


В свойстве [IMetabaseTreeNodeSpecialEventArgs.Node](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Node.htm)
 аргумента события можно получить текущий элемент, для которого сгенерировано
 событие. Если свойству [IMetabaseTreeNodeSpecialEventArgs.Special](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Special.htm)
 аргумента события установить значение True,
 то текущий элемент [IMetabaseTreeNodeSpecialEventArgs.Node](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Node.htm)
 будет отображаться в дереве компонента. При установке свойству [IMetabaseTreeNodeSpecialEventArgs.Special](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Special.htm)
 значения False элемент будет скрыт.


## Пример


Для выполнения примера предполагается наличие формы и расположенного
 на ней компонента MetabaseTreeCombo. Компонент настроен на отображение
 данных какой-либо папки репозитория. Для компонента в качестве обработчика
 события OnIsBrowseableElem установлена данная процедура.


	Sub MetabaseTreeCombo1OnIsBrowseableElem(Sender: Object; Args: IMetabaseTreeNodeSpecialEventArgs);

	Var

	    s: String;

	Begin

	    s := Args.Node.ObjectDescriptor.Name;

	    If s.IndexOf("temp") <> -1 Then

	        Args.Special := False;

	    End If;

	End Sub MetabaseTreeCombo1OnIsBrowseableElem;


После запуска формы в дереве элементов компонента не будут отображаться
 объекты, содержащие в своем наименовании сочетание «temp».


См. также:


[MetabaseTreeCombo](MetabaseTreeCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
