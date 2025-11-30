# IToolbarControls.Insert

IToolbarControls.Insert
-


# IToolbarControls.Insert


## Синтаксис


Insert(Index: Integer; Value: [IComponent](../IComponent/IComponent.htm));


## Параметры


Index. Индекс позиции, в которую
 необходимо вставить компонент.


Value. Компонент, который необходимо
 вставить на панель инструментов.


## Описание


Метод Insert осуществляет вставку
 компонента в указанную позицию на панели инструментов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1 и компонента Toolbar с наименованием
 Toolbar1.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Controls: IToolbarControls;

Begin

    Controls := Toolbar1.Controls;

    Controls.Insert(Controls.Count, Controls.Item(0));

End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку элемент управления, расположенный
 на первой позиции панели инструментов, будет перемещен на последнюю позицию.


См. также:


[IToolbarControls](IToolbarControls.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
