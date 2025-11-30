# ITreeListNode.Accessibility

ITreeListNode.Accessibility
-


# ITreeListNode.Accessibility


## Синтаксис


Accessibility: Boolean;


## Описание


Свойство Accessibility определяет,
 будут ли активными элементы дерева.


## Комментарии


Допустимые значения:


	- True. Элементы активны;


	- False. Элементы не активны.


## Пример


Для выполнения примера в репозитории предполагается наличие формы и
 расположенных на ней компонента TreeList с идентификатором TreeList1 и
 кнопки Button с идентификатором Button1. В компоненте TreeList добавлена
 одна колонка, для которой добавлен один элемент с подэлементом.


Пример является обработчиком события кнопки Button1.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Begin

		    treelist1.Nodes.BeginUpdate;

		    treelist1.nodes.FirstNode.Accessibility := False;

		    treelist1.nodes.FirstNode.NextNode.Accessibility := False;

		    treelist1.Nodes.EndUpdate;

		End Sub Button1OnClick;


В результате выполнения примера в компоненте TreeList элемент и подэлемент
 станут не автивными.


См. также:


[ITreeListNode](ITreeListNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
