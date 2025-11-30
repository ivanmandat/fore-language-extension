# IWxShape.AllowedInteractions

IWxShape.AllowedInteractions
-


# IWxShape.AllowedInteractions


## Синтаксис


		AllowedInteractions: Integer;


## Описание


Свойство AllowedInteractions
 определяет действия, которые будут доступны для фигуры рабочего пространства.


## Комментарии


В качестве значения данного свойства необходимо указать одно из значений
 (либо комбинацию значений) из элементов перечисления [WxAllowedInteractions](../../Enums/WxAllowedInteractions.htm).
 При указании комбинации элементы разделяются ключевым словом OR.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента WorkspaceBox
 с наименованием «WorkspaceBox1» и какого-либо источника данных для него.
 На рабочем пространстве, отображаемом в компоненте, имеется минимум одна
 фигура.


Добавьте ссылки на системные сборки: Andy, Forms.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    View: IWxView;

		    Shape: IWxShape;

		Begin

		    View := WorkspaceBox1.View;

		    View.ActiveTool := WxTool.Pointer;

		    Shape := View.Workspace.Shapes.Item(0);

		    Shape.AllowedInteractions := WxAllowedInteractions.AllowSelection Or WxAllowedInteractions.VerticalSizing;

		End Sub Button1OnClick;


При нажатии на кнопку для рабочего пространства в качестве рабочего
 инструмента будет включен указатель. В этом режиме доступно выделение
 и активация фигур, изменение их размеров и т.д. Для первой фигуры будет
 установлено ограничение на доступные действия: фигуру можно будет выделить
 и изменить ее высоту.


См. также:


[IWxShape](IWxShape.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
