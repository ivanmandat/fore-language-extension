# ITabView.EnableInteractiveSelection

ITabView.EnableInteractiveSelection
-


# ITabView.EnableInteractiveSelection


## Синтаксис


EnableInteractiveSelection:
 Boolean;


## Описание


Свойство EnableInteractiveSelection
 определяет возможность перемещения данных выделенного диапазона и автоматического
 заполнения ячеек на основе выделенного диапазона.


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 В таблице разрешено перемещение данных выделенного диапазона, а также
	 автозаполнение выделенных ячеек данными;


	- False. В таблице запрещено
	 автозаполнение выделенных ячеек данными.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 Button с идентификатором «Button1», компонент UiTabSheet с идентификатором
 «UiTabSheet1» и компонент TabSheetBox с идентификатором «TabSheetBox1».
 Укажите «UiTabSheet1» в качестве источника для компонента «TabSheetBox1».


Пример является обработчиком события OnClick для компонента «Button1».


Добавьте ссылку на системную сборку Tab.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    View: ITabView;

Begin

    View := UiTabSheet1.TabSheet.View;

    View.EnableInteractiveSelection := False;

End Sub Button1OnClick;


После выполнения примера автозаполнение ячеек не будет доступно.


См. также:


[ITabView](ITabView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
