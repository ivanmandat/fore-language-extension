# MetabaseTreeCombo.OnCheckToAddElem

MetabaseTreeCombo.OnCheckToAddElem
-


# MetabaseTreeCombo.OnCheckToAddElem


## Синтаксис


OnCheckToAddElem(Sender: Object; Args: [IMetabaseTreeNodeSpecialEventArgs](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnCheckToAddElem наступает
 при добавлении элементов в дерево.


## Комментарии


Событие наступает во время построения дерева для каждого элемента, отображаемого
 в дереве. В отличии от события [MetabaseTreeCombo.OnIsBrowseableElem](MetabaseTreeCombo.OnIsBrowseableElem.htm),
 событие OnCheckToAddElem также
 наступает для любых папок и объектов-контейнеров.


В свойстве [IMetabaseTreeNodeSpecialEventArgs.Node](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Node.htm)
 аргумента события можно получить текущий элемент, для которого сгенерировано
 событие. Если свойству [IMetabaseTreeNodeSpecialEventArgs.Special](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Special.htm)
 аргумента события установить значение True,
 то текущий элемент [IMetabaseTreeNodeSpecialEventArgs.Node](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Node.htm)
 будет отображаться в дереве компонента. При установке свойству [IMetabaseTreeNodeSpecialEventArgs.Special](../../Interface/IMetabaseTreeNodeSpecialEventArgs/IMetabaseTreeNodeSpecialEventArgs.Special.htm)
 значения False элемент будет скрыт.


## Пример


Для выполнения примера предполагается наличие формы и расположенного
 на ней компонента MetabaseTreeCombo. Указанная ниже процедура является
 обработчиком события OnCheckToAddElem.


	Sub MetabaseTreeCombo1OnCheckToAddElem(Sender: Object; Args: IMetabaseTreeNodeSpecialEventArgs);

	Var

	    s: String;

	Begin

	    s := Args.Node.ObjectDescriptor.Id;

	    If s.IndexOf("SYSTEM") <> -1 Then

	        Args.Special := False;

	    End If;

	End Sub MetabaseTreeCombo1OnCheckToAddElem;


После запуска формы в дереве элементов компонента не будут отображаться
 объекты, содержащие в своём идентификаторе SYSTEM. Скрыты будут как объекты
 репозитория, так и папки и объекты-контейнеры.


См. также:


[MetabaseTreeCombo](MetabaseTreeCombo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
