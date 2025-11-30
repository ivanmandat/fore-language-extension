# ITreeControl.OnGetNodeStateImage

ITreeControl.OnGetNodeStateImage
-


# ITreeControl.OnGetNodeStateImage


## Синтаксис


OnGetNodeStateImage(Sender: Object; Args: [ITreeNodeGetImageEventArgs](../ITreeNodeGetImageEventArgs/ITreeNodeGetImageEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие.


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnGetNodeStateImage
 используется при определении изображения состояния возле элемента дерева.


## Комментарии


Событие актуально, только если для компонента определено свойство [StateImages](ITreeControl.StateImages.htm).


Событие наступает для каждого элемента дерева в следующих случаях:


	- Изменяются параметры формы: размеры, состояние;


	- Осуществляется обновление содержимого формы;


	- Изменяются параметры компонента: меняется список элементов,
	 сворачивается/разворачивается иерархия, изменяется выделение или фокус
	 у элементов;


	- Осуществляется прокрутка дерева элементов;


	- Осуществляется обновление содержимого компонента.


Используя событие OnGetNodeStateImage,
 можно отслеживать происходящие изменения и при наступлении определенных
 условий получать или изменять изображение состояния элемента дерева. Элемент,
 для которого сгенерировано текущее событие, будет доступен в свойстве
 [Node](../ITreeNodeGetImageEventArgs/ITreeNodeGetImageEventArgs.Node.htm)
 аргумента события Args. В свойстве
 [Result](../ITreeNodeGetImageEventArgs/ITreeNodeGetImageEventArgs.Result.htm)
 аргумента события можно получить индекс изображения состояния, которое
 установлено для элемента. Указав новое значение для свойства [Result](../ITreeNodeGetImageEventArgs/ITreeNodeGetImageEventArgs.Result.htm),
 можно изменить изображение состояния для элемента.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента TreeList с наименованием TreeList1 и какого-либо компонента
 ImageList, который является источником изображений состояний для TreeList1.
 В ImageList загружены минимум два изображения.


	Sub TreeList1OnGetNodeStateImage(Sender: Object; Args: ITreeNodeGetImageEventArgs);

	Begin

	    If Args.Node.Selected Then

	        Args.Result := 0;

	    Else

	        Args.Result := 1;

	    End If;

	End Sub TreeList1OnGetNodeStateImage;


При наступлении события осуществляется проверка наличия отметки у элемента.
 Если элемент отмечен, то в качестве его изображения состояния будет использоваться
 первое изображения из коллекции изображений. Если элемент не отмечен,
 то для него устанавливается второе изображение состояния.


См. также:


[ITreeControl](ITreeControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
