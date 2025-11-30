# ITreeControl.ReadOnly

ITreeControl.ReadOnly
-


# ITreeControl.ReadOnly


## Синтаксис


ReadOnly: Boolean;


## Описание


Свойство ReadOnly определяет
 возможность редактирования текста элементов компонента [TreeList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/TreeList.htm).


## Комментарии


Допустимые значения:


	- True. По умолчанию.
	 Редактирование текста элементов в дереве элементов по щелчку мыши
	 запрещено;


Примечание.
 Запрет на редактирование текста элементов не распространяется на редактирование
 других элементов интерфейса. Данное свойство блокирует возможность редактирования
 текста элементов в компоненте только с помощью мыши. Возможность изменить
 текст элементов с помощью соответствующих свойств [ITreeListNode.Text](../ITreeListNode/ITreeListNode.Text.htm)
 и [ITreeListNode.ColumnText](../ITreeListNode/ITreeListNode.ColumnText.htm)
 доступна при любых значениях свойства ReadOnly.


	- False. Редактирование
	 текста элементов в дереве элементов разрешено. Для перехода в режим
	 редактирования текста элемента необходимо выделить элемент одним щелчком
	 мыши, затем повторно щелкнуть мышью по выделенному элементу.


## Пример


Для выполнения примера предполагается наличие на форме кнопки с наименованием
 Button1 и компонента TreeList с наименованием «TreeList1».


Добавьте ссылку на системную сборку Forms.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Begin

	    TreeList1.ReadOnly := False;

	End Sub Button1OnClick;


В результате выполнения примера после нажатия кнопки для компонента
 TreeList будет разрешено редактирование текста элементов.


См. также:


[ITreeControl](ITreeControl.htm)
 | [ITreeControl.Locked](ITreeControl.Locked.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
