# IMouseEventArgs.Cancel

IMouseEventArgs.Cancel
-


# IMouseEventArgs.Cancel


## Синтаксис


Cancel: Boolean;


## Описание


Свойство Cancel определяет признак
 отмены дальнейшего действия, связанного с мышью.


## Комментарии


Свойство используется в событиях, связанных с щелчком или двойным щелчком
 ([OnClick](../IControl/IControl.OnClick.htm) и [OnDblClick](../IControl/IControl.OnDblClick.htm)),
 и не влияет на действия, связанные с перемещением курсора. Используя свойство
 Cancel, можно, например, отменить
 щелчок или двойной щелчок по какому-либо компоненту в зависимости от определённых
 условий выполнения формы или текущего состояния других компонентов.


Допустимые значения:


	- True. Действие будет
	 отменено;


	- False. Значение по умолчанию.
	 Действие будет произведено.


## Пример


Для выполнения примера предполагается наличие формы и расположенных
 на ней компонентов MetabaseTreeList с наименованием «MetabaseTreeList1»
 и MetabaseListView с наименованием «MetabaseListView1». «MetabaseTreeList1»
 установлен в качестве значения свойства Tree компонента «MetabaseListView1».


Указанная процедура является обработчиком события OnDblClick компонента
 «MetabaseListView1».


					Sub MetabaseListView1OnDblClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    MDesc: IMetabaseObjectDescriptor;

		Begin

		    MDesc := (MetabaseListView1.SelectedItem As IMetabaseListViewItem).ObjectDescriptor;

		    If (MDesc.ClassId=MetabaseObjectClass.KE_CLASS_MODULE) Or (MDesc.ClassId=MetabaseObjectClass.KE_CLASS_ASSEMBLY) Then

		        Args.Cancel := True;

		    End If;

		End Sub MetabaseListView1OnDblClick;


При выполнении примера, если во время навигации по дереву объектов в
 компоненте «MetabaseListView1» будет произведён двойной щелчок по модулю
 или сборке, то их открытие в среде разработке будет запрещено.


См. также:


[IMouseEventArgs](IMouseEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
