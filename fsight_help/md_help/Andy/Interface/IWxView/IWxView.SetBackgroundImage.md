# IWxView.SetBackgroundImage

IWxView.SetBackgroundImage
-


# IWxView.SetBackgroundImage


## Синтаксис


		SetBackgroundImage(Rect: [IGxRect](ModDrawing.chm::/Interface/IGxRect/IGxRect.htm);
		 BackgroundBitmap: [IGxBitmap](ModDrawing.chm::/Interface/IGxBitmap/IGxBitmap.htm));


## Параметры


Rect.
 Прямоугольник, определяющий часть изображения, которая будет установлена
 в качестве фона;


BackgroundBitmap. Изображение,
 которое будет установлено в качестве фона.


## Описание


Метод SetBackgroundImage устанавливает
 указанную часть изображения в качестве фона для рабочего пространства.


## Комментарии


Для централизации изображения на рабочем пространстве без изменения
 масштаба отображения используйте метод [IWxView.AutoScroll](IWxView.AutoScroll.htm).


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1», компонента WorkspaceBox
 с идентификатором «WorkspaceBox1» и компонент UiWorkspaceOblect
 с идентификатором «UiWorkspaceOblect1». Укажите «UiWorkspaceOblect1» в
 качестве источника данных для компонента «WorkspaceBox1». Пример является
 обработчиком события OnClick для компонента «Button1». Также необходимо
 наличие изображения «ConnectedCPs.gif».


Добавьте ссылки на системные сборки: Andy, Drawing.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    ws: IWxWorkspace;

		    view: IWxView;

		    Rect: IGxRect;

		    Bmp: IGxBitmap;

		Begin

		    // Получаем рабочее пространство для редактирования

		    ws := UiWorkspace1.WxWorkspace;

		    view := ws.CreateView;

		    view := ws.Views.Item(0);

		    Rect := New GxRect.Create(0, 0, WorkspaceBox1.ClientWidth, WorkspaceBox1.ClientHeight);

		    Bmp := GxBitmap.FromFile("C:\ConnectedCPs.gif") As IGxBitmap;

		    view.BeginUpdate;

		    view.SetBackgroundImage(Rect, Bmp);

		    view.EndUpdate;

		End Sub Button1OnClick;


При нажатии на кнопку в качестве фона рабочего пространства будет установлено
 указанное изображение. Размеры части изображения, которое будет установлено
 в качестве фона, будут соответствовать клиентским размерам компонента
 «WorkspaceBox1».


См. также:


[IWxView](IWxView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
