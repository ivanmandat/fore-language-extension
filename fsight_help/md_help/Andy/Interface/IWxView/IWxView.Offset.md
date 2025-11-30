# IWxView.Offset

IWxView.Offset
-


# IWxView.Offset


## Синтаксис


Offset: [IGxPointF](ModDrawing.chm::/Interface/IGxPointF/IGxPointF.htm);


## Описание


Свойство Offset определяет смещение
 отображения относительно центра рабочего пространства.


## Комментарии


По умолчанию центры рабочего пространства и отображения совпадают.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента WorkspaceBox с наименованием
 WorkspaceBox1 и какого-либо источника данных для WorkspaceBox1.


Добавьте ссылки на системные сборки: Andy, Drawing, Workspace.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ws: IWxWorkspace;

	    view: IWxView;

	    ellipse: IWxEllipse;

	Begin

	    // Получаем рабочее пространство для редактирования

	    ws := UiWorkspace1.WxWorkspace;

	    view := ws.Views.Item(0);

	    ellipse := ws.CreateEllipse;

	    view.Offset := New GxPointF.Create(10, 10);

	End Sub Button1OnClick;


После выполнения примера будет создано отображение рабочего пространства
 и заданы его идентификатор, масштаб, размер и смещение центра.


См. также:


[IWxView](IWxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
