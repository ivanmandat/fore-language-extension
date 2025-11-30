# MetabaseListView.OnGetItemPopup

MetabaseListView.OnGetItemPopup
-


# MetabaseListView.OnGetItemPopup


## Синтаксис


OnGetItemPopup(Sender: Object; Args: [IMetabaseListViewItemPopupEventArgs](../../Interface/IMetabaseListViewItemPopupEventArgs/IMetabaseListViewItemPopupEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnGetItemPopup наступает
 в момент вызова контекстного меню для элемента компонента.


## Комментарии


Элемент, для которого вызывается контекстное меню, доступен в свойстве
 [IMetabaseListViewItemPopupEventArgs.Item](../../Interface/IMetabaseListViewItemPopupEventArgs/IMetabaseListViewItemPopupEventArgs.Item.htm).
 Используя свойство [IMetabaseListViewItemPopupEventArgs.PopupMenu](../../Interface/IMetabaseListViewItemPopupEventArgs/IMetabaseListViewItemPopupEventArgs.PopupMenu.htm),
 можно определить собственное контекстное меню, которое будет отображено
 для элемента.


Если для компонента свойству [IMetabaseListView.EnableSystemPopupMenu](../../Interface/IMetabaseListView/IMetabaseListView.EnableSystemPopupMenu.htm)
 установлено значение True, то
 для элементов вызывается системное контекстное меню. В этом случае, используя
 свойство [IMetabaseListViewItemPopupEventArgs.PopupMenu](../../Interface/IMetabaseListViewItemPopupEventArgs/IMetabaseListViewItemPopupEventArgs.PopupMenu.htm),
 можно заменить вызываемое системное контекстное меню.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента MetabaseListView с наименованием
 «MetabaseListView1» и двух компонентов PopupMenu с наименованиями «PopupMenu1»
 и «PopupMenu2».


Добавьте ссылку на системную сборку Metabase.


	Sub MetabaseListView1OnGetItemPopup(Sender: Object; Args: IMetabaseListViewItemPopupEventArgs);

	Var

	    MDesc: IMetabaseObjectDescriptor;

	Begin

	    MDesc := Args.Item.ObjectDescriptor;

	    If MDesc.ClassId = MetabaseObjectClass.KE_CLASS_STDDIM Then

	        Args.PopupMenu := PopupMenu1;

	    Elseif MDesc.ClassId = MetabaseObjectClass.KE_CLASS_CLNDIM Then

	        Args.PopupMenu := PopupMenu2;

	    End If;

	End Sub MetabaseListView1OnGetItemPopup;


Во время работы формы, если для табличных или календарных справочников
 вызывается контекстное меню, то будут отображены те меню, которые сформированы
 в компонентах «PopupMenu1» и «PopupMenu2» соответственно.


См. также:


[MetabaseListView](MetabaseListView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
